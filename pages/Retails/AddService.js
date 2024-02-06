import React, { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  addTocart,
  getTimeSlots,
  productCart,
  selectRetailData,
} from "../../redux/slices/retails";
import { selectLoginAuth } from "../../redux/slices/auth";
import { amountFormat, getDaysAndDates } from "../../utilities/globalMethods";
import MonthYearPicker, { DATE_TYPE } from "../../components/MonthYearPicker";
import moment from "moment-timezone";
import ReactSelect from "react-select";
import { toast } from "react-toastify";

const AddService = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const retailData = useSelector(selectRetailData);
  const cartData = retailData?.productCart || {};
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const itemData = retailData?.oneServiceData?.product_detail;
  const posStaffArray = itemData?.pos_staff;
  const [posUserId, setposUserId] = useState(
    posStaffArray?.[0]?.user?.unique_uuid
  );
  const [providerDetail, setProviderDetail] = useState(
    posStaffArray?.[0]?.user
  );

  const onlyServiceCartArray = cartData?.poscart_products?.filter(
    (item) => item?.product_type == "service"
  );

  // function modifiedPosArray(arr, size) {
  //   const posStaffedArray = [];
  //   for (let i = 0; i < arr.length; i += size) {
  //     posStaffedArray.push(arr.slice(i, i + size));
  //   }
  //   return posStaffedArray;
  // }
  // const finalPosStaffArray = modifiedPosArray(posStaffArray, 2);
  const onClickServiceProvider = (item) => {
    setposUserId(item?.user?.unique_uuid);
    setProviderDetail(item?.user);
  };

  const resetSelectedDateAndTimeSlot = () => {};

  // for testing
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [monthDays, setmonthDays] = useState([]);

  const [selectedDate, setselectedDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
  const [timeSlotsData, setTimeSlotsData] = useState([]);
  const [selectedTimeSlotIndex, setselectedTimeSlotIndex] = useState(null);
  const [selectedTimeSlotData, setSelectedTimeSlotData] = useState("");

  useEffect(() => {
    const daysArray = getDaysAndDates(
      selectedYear?.value,
      selectedMonth?.value
    );
    setmonthDays(daysArray);
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    if (retailData?.timeSlots) {
      const timeSlots = retailData?.timeSlots?.filter(
        (timeSlot) => timeSlot?.is_available
      );
      setTimeSlotsData([...timeSlots]);
    }
  }, [retailData?.timeSlots]);

  //  get time slots
  useEffect(() => {
    const params = {
      seller_id: sellerId,
      product_id: itemData?.id,
      date: selectedDate,
      pos_user_id: posUserId,
    };
    if (itemData?.supplies[0]?.seller_address_id) {
      params["seller_address_id"] = itemData?.supplies[0].seller_address_id;
    }

    selectedDate !== null && dispatch(getTimeSlots(params));
  }, [posUserId, selectedDate]);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const futureYears = Array.from(
    { length: 10 },
    (_, index) => currentYear + index
  );

  const yearOptions = futureYears.map((year) => ({ value: year, label: year }));

  const monthOptions = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];

  useEffect(() => {
    setSelectedYear({ value: currentYear, label: currentYear });
    setSelectedMonth({
      value: currentMonth,
      label: monthOptions[currentMonth - 1].label,
    });
  }, []);

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);

    // date and slot clear select
    setselectedDate(null);
    setselectedTimeSlotIndex(null);
    setSelectedTimeSlotData("");
  };

  const handleMonthChange = (selectedOption) => {
    setSelectedMonth(selectedOption);

    // date and slot clear select
    setselectedDate(null);
    setselectedTimeSlotIndex(null);
    setSelectedTimeSlotData("");
  };

  const addToServiceCartHandler = () => {
    if (!selectedTimeSlotData) {
      toast.error("Please select a time slot for the service");
      return;
    }
    let params = {
      product_type: "service",
      seller_id: sellerId,
      supply_id: itemData?.supplies?.[0]?.id?.toString(),
      supply_price_id: itemData?.supplies?.[0]?.supply_prices[0]?.id.toString(),
      product_id: itemData?.id?.toString(),
      // app_name: data?.appName,
      date: selectedDate,
      start_time: selectedTimeSlotData?.start_time,
      end_time: selectedTimeSlotData?.end_time,
      pos_user_id: posUserId,
      qty: 1,
    };

    const exists = onlyServiceCartArray?.some((item) => {
      return (
        item.start_time === params.start_time &&
        item.end_time === params.end_time &&
        item?.pos_user_details?.user?.unique_uuid === params?.pos_user_id
      );
    });

    if (!exists) {
      dispatch(
        addTocart({
          ...params,
          cb(res) {
            dispatch(productCart());
            // router.push("/Retails?parameter=services");
            router.back();
          },
        })
      );
    } else {
      toast.error("This pos staff not available this time");
    }
  };

  return (
    <>
      <div className="addServiceSection">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="commanOuter newServiceSection commonSubOuter">
              <div className="newServiceDetail">
                <div
                  onClick={() => {
                    router.back();
                  }}
                >
                  <Image
                    src={Images.boldLeftArrow}
                    alt="leftarrow image"
                    className="img-fluid"
                  />
                </div>
                <div className="addserviceInfo ms-3">
                  <h4 className="loginMain m-0 text-start">
                    Add a new service
                  </h4>
                  <p className="addServicePara">
                    Configure the service to add it to the cart
                  </p>
                </div>
              </div>
              <div className="consultInfo">
                <div className="serviceProfile">
                  <Image
                    src={itemData?.image}
                    alt="service profile image"
                    className="addSeviceImg"
                    height={100}
                    width={100}
                  />
                  <figure className="rotateImage">
                    <Image
                      src={Images.rotateArrow}
                      alt="rotateImage"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <h4 className="loginMain">{itemData?.name}.</h4>
                <p className="userIdText">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: itemData?.description,
                    }}
                  />
                </p>
                <div className="flexDiv">
                  <figure className="Timezone">
                    <Image
                      src={Images.Appointmenttime}
                      alt="timeimage"
                      className="img-fluid AppointmenttimeIcon"
                    />
                    {itemData?.supplies?.[0]?.approx_service_time == null ? (
                      <span className="AppointmentEstTime ms-2">
                        Estimated Time Not found
                      </span>
                    ) : (
                      <span className="AppointmentEstTime ms-2">
                        Est: {itemData?.supplies?.[0]?.approx_service_time} min
                      </span>
                    )}
                    {/* <span className="AppointmentEstTime ms-2">
                      Est. 45-60min
                    </span> */}
                  </figure>

                  {itemData?.supplies?.[0]?.supply_prices?.[0]?.offer_price &&
                  itemData?.supplies?.[0]?.supply_prices?.[0]?.actual_price ? (
                    <h4 className="loginMain m-0">
                      {amountFormat(
                        itemData?.supplies?.[0]?.supply_prices?.[0]?.offer_price
                      )}
                    </h4>
                  ) : (
                    <h4 className="loginMain m-0">
                      {amountFormat(
                        itemData?.supplies?.[0]?.supply_prices?.[0]
                          ?.selling_price
                      )}
                    </h4>
                  )}
                </div>
              </div>
              <div className="providerSection">
                <h4 className="amountText m-0">Provider</h4>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    {posStaffArray?.map((item, index) => {
                      return (
                        <div
                          className="addServiceProfile "
                          key={index}
                          onClick={() => onClickServiceProvider(item)}
                          style={{
                            borderColor:
                              posUserId == item?.user?.unique_uuid
                                ? "#263682"
                                : "#D7DEFF",
                            backgroundColor:
                              posUserId == item?.user?.unique_uuid
                                ? "#E4E6F2"
                                : "transparent",
                          }}
                        >
                          <Image
                            src={item?.user?.user_profiles?.profile_photo}
                            alt="providerProfileImage"
                            className="providerImage"
                            height={100}
                            width={100}
                          />
                          <h4 className="amountText ">
                            {item?.user?.user_profiles?.firstname +
                              " " +
                              item?.user?.user_profiles?.lastname}
                          </h4>
                          <h6 className="providerSubText">
                            {item.user?.user_roles?.length > 0
                              ? item.user?.user_roles?.map(
                                  (item) => item.role?.name
                                )
                              : "admin"}
                          </h6>
                        </div>
                      );
                    })}
                  </div>

                  {/* {finalPosStaffArray?.map((item, index) => {
                    return item?.map((data, index) => {
                      <div
                        key={index}
                        className="col-lg-4 col-md-4"
                        style={{ backgroundColor: "red" }}
                      >
                        <div className="addServiceProfile active">
                          <Image
                            src={data?.user?.user_profiles?.profile_photo}
                            alt="providerProfileImage"
                            className="providerImage"
                            height={100}
                            width={100}
                          />
                          <h4 className="amountText ">
                            {data?.user?.user_profiles?.firstname +
                              " " +
                              data?.user?.user_profiles?.lastname}
                          </h4>
                          <h6 className="providerSubText">
                            {data.user?.user_roles?.length > 0
                              ? data.user?.user_roles?.map(
                                  (item) => item.role?.name
                                )
                              : "admin"}
                          </h6>
                        </div>
                      </div>;
                    });
                  })} */}
                </div>
              </div>
              {/* <div className="paginationImg text-center">
                <Image
                  src={Images.paginationImg}
                  alt="Paginationimage"
                  className="img-fluid "
                />
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="commanOuter  appointmentSection commonSubOuter">
              <div className="appointmentSub">
                <div className="appointmentHeading">
                  <h4 className="appointMain">Appointments</h4>
                  <p className="appointSub">
                    Select the hour that works the best.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <ReactSelect
                      options={yearOptions}
                      value={selectedYear}
                      onChange={handleYearChange}
                      placeholder="Select a year"
                      isSearchable={false}
                    />
                  </div>
                  <div className="mt-3">
                    <ReactSelect
                      options={monthOptions}
                      value={selectedMonth}
                      onChange={handleMonthChange}
                      placeholder="Select a month"
                      isSearchable={false}
                    />
                  </div>

                  {/* <MonthYearPicker
                    dateType={DATE_TYPE.YEAR}
                    placeholder={"Select Year"}
                    // containerStyle={{ marginRight: 10 }}
                    defaultValue={moment().year()}
                    defaultYear={selectedYearData?.value ?? moment().year()}
                    onSelect={(yearData) => {
                      setselectedYearData(yearData);
                      resetSelectedDateAndTimeSlot();
                    }}
                  />

                  <MonthYearPicker
                    dateType={DATE_TYPE.MONTH}
                    placeholder={"Select Month"}
                    // containerStyle={{ marginRight: 10 }}
                    defaultValue={moment().month() + 1}
                    onSelect={(monthData) => {
                      setselectedMonthData(monthData);
                      resetSelectedDateAndTimeSlot();
                    }}
                  /> */}
                </div>
              </div>
              <div className="scheduleSection">
                <Image
                  src={Images.calendarDark}
                  alt="calendarimage"
                  className="img-fluid"
                />
                <h4 className="trackingHeading mt-2">
                  Schedule of{" "}
                  {itemData?.pos_staff?.length > 0 ? (
                    <strong className="fw-bold">
                      {providerDetail?.user_profiles?.firstname +
                        " " +
                        providerDetail?.user_profiles?.lastname}
                    </strong>
                  ) : (
                    <strong className="fw-bold">
                      {"Not service provider"}
                    </strong>
                  )}
                </h4>
              </div>
              <div className="daycalendar">
                <div
                  style={{
                    display: "flex",
                    overflowX: "scroll",
                    whiteSpace: "wrap",
                  }}
                >
                  {monthDays?.map((item, index) => (
                    <div
                      className={
                        item?.completeDate === selectedDate
                          ? "serviceDate mx-3 active"
                          : "serviceDate mx-3"
                      }
                      // style={{
                      //   backgroundColor:
                      //     item?.completeDate === selectedDate
                      //       ? "#12B76A"
                      //       : "transparent",
                      // }}
                      onClick={() => {
                        setselectedDate(item?.completeDate);
                        //Clear previous day selected time slot values
                        setselectedTimeSlotIndex(null);
                        setSelectedTimeSlotData("");
                      }}
                    >
                      <h4 className="productName"> {item?.day}</h4>
                      <h4 className="dateText">
                        {" "}
                        {item?.completeDate ===
                        moment(new Date()).format("YYYY-MM-DD")
                          ? "Today"
                          : item?.date}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="serviceDayTime">
                {retailData?.getTimeSlotsLoad ? (
                  <div className="mx-1 text-center mt-5">
                    <span className="spinner-border spinner-border-sm "></span>
                  </div>
                ) : timeSlotsData?.length == 0 ? (
                  <div className="mx-1 text-center mt-5">
                    <p>There are no slots available for this day</p>
                  </div>
                ) : (
                  <>
                    {selectedDate !== null ? (
                      <div className="row" style={{ borderColor: "#027547" }}>
                        {timeSlotsData?.map((item, index) => (
                          <div
                            className=" col-lg-3 col-md-6 mt-2"
                            key={index}
                            onClick={() => {
                              setselectedTimeSlotIndex(index);
                              setSelectedTimeSlotData(item);
                            }}
                          >
                            <div
                              className={
                                selectedTimeSlotIndex == index
                                  ? "scheduleTime active"
                                  : "scheduleTime"
                              }
                            >
                              <h4 className="addServicePara m-0">
                                {item?.start_time + " - " + item?.end_time}
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mx-1 text-center mt-5">
                        <p>Please select any day to load time slots</p>
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="serviceFooter">
                <button
                  className="nextverifyBtn w-100"
                  type="submit"
                  onClick={() => addToServiceCartHandler()}
                  disabled={retailData?.addTocartLoad ? true : false}
                >
                  Confirm and Add to Cart
                  {retailData?.addTocartLoad ? (
                    <span className="spinner-border spinner-border-sm mx-1"></span>
                  ) : (
                    <Image
                      src={Images.serviceCart}
                      alt="rightArrow"
                      className="img-fluid rightImg ms-2"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddService;
