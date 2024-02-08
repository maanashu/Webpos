import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotes,
  customProuductAdd,
  getTimeSlots,
  productCart,
  selectRetailData,
} from "../../redux/slices/retails";
import { toast } from "react-toastify";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { digitWithDot, digits } from "../../utilities/validators";
import { selectLoginAuth } from "../../redux/slices/auth";
import ReactSelect from "react-select";
import moment from "moment-timezone";
import { getDaysAndDates } from "../../utilities/globalMethods";

const CustomServiceAdd = ({ crosshandler }) => {
  const dispatch = useDispatch();
  const retailData = useSelector(selectRetailData);
  const authData = useSelector(selectLoginAuth);
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const cartId = retailData?.cartDetails?.id;
  const [addNote, setAddNotes] = useState("");
  const [count, setCount] = useState(1);
  const [productName, setProductName] = useState("");
  const [upcCode, setUpcCode] = useState("");
  const [notes, setNotes] = useState("");
  const [amount, setAmount] = useState("");
  // const [posUserId, setposUserId] = useState(
  //   posStaffArray?.[0]?.user?.unique_uuid
  // );
  // const [providerDetail, setProviderDetail] = useState(
  //   posStaffArray?.[0]?.user
  // );

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
      // product_id: itemData?.id,
      date: selectedDate,
      // pos_user_id: posUserId,
    };
    // if (itemData?.supplies[0]?.seller_address_id) {
    //   params["seller_address_id"] = itemData?.supplies[0].seller_address_id;
    // }

    selectedDate !== null && dispatch(getTimeSlots(params));
  }, [selectedDate]);

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

  const customProductHandler = () => {
    if (!productName) {
      toast.error("Please enter service name");
    } else if (!amount) {
      toast.error("Please enter product amount");
    } else if (amount && digitWithDot.test(amount) === false) {
      toast.error("Please enter valid amount");
    } else if (!selectedTimeSlotData) {
      toast.error("Please select a time slot for the service");
      return;
    } else {
      let params = {
        seller_id: sellerId,
        price: amount,
        name: productName,
        ...(notes && { description: notes }),
        type: "digital",
        qty: 1,
        date: selectedDate,
        start_time: selectedTimeSlotData?.start_time,
        end_time: selectedTimeSlotData?.end_time,
      };
      console.log(params);
      dispatch(
        customProuductAdd({
          ...params,
          cb() {
            crosshandler();
            dispatch(productCart());
          },
        })
      );
    }
  };

  return (
    <div className="ServiceAddSection">
      <form>
        <div className="serviceModalScroll">
          <div className="form-group mb-3">
            <input
              className="form-control customInput mb-3"
              type="text"
              placeholder="Service Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              className="form-control customInput mb-3"
              type="text"
              placeholder="$0.00USD"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <Image src={Images.commentText} alt="img" className="InputIcon" />
            <textarea
              className="customTextarea"
              placeholder="Add Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="serviceYear ms-2">
              <ReactSelect
                options={yearOptions}
                value={selectedYear}
                onChange={handleYearChange}
                placeholder="Select a year"
                isSearchable={false}
              />
            </div>
            <div className="serviceYear mx-3">
              <ReactSelect
                options={monthOptions}
                value={selectedMonth}
                onChange={handleMonthChange}
                placeholder="Select a month"
                isSearchable={false}
              />
            </div>
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
                  className="serviceDate mx-3"
                  style={{
                    backgroundColor:
                      item?.completeDate === selectedDate
                        ? "#12B76A"
                        : "transparent",
                  }}
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
                    {item?.completeDate === moment(new Date()).format("YYYY-MM-DD")
                      ? "Today"
                      : item?.date}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div className="">
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
                        className=" col-lg-4 col-md-6 mt-2"
                        key={index}
                        onClick={() => {
                          setselectedTimeSlotIndex(index);
                          setSelectedTimeSlotData(item);
                        }}
                      // style={{
                      //   backgroundColor:
                      //     selectedTimeSlotIndex == index
                      //       ? " #D1FADF"
                      //       : "transparent",
                      //   borderColor:
                      //     selectedTimeSlotIndex == index ? "#027547" : "#D7DEFF",
                      //   borderWidth: "1px",
                      // }}
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
        </div>
        <div className="modal-footer">
          <button className="cancelBtn" onClick={() => crosshandler()}>
            Cancel
          </button>
          <button
            className="ModalBlue"
            onClick={() => customProductHandler()}
            disabled={retailData?.customProuductAddLoad ? true : false}
          >
            Add to the cart
            {retailData?.customProuductAddLoad ? (
              <span className="spinner-border spinner-border-sm mx-1"></span>
            ) : (
              <Image
                src={Images.plusRound}
                alt="image"
                className="img-fluid BtnIcon"
              />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
export default CustomServiceAdd;
