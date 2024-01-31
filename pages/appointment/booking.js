import React, { useState, useEffect, useMemo } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image as ReactNativeImage,
  FlatList,
} from "react-native";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import CommonSideBar from "../../components/commanComonets/appointmentSide/commonSideBar";
// import { Calendar } from 'react-native-big-calendar'
import CalendarHeaderWithOptions from "../../components/CalendarHeaderWithOptions";
import { Calendar } from "../../components/CustomCalendar";
// import CustomModal from '../../../customModal/CustomModal';
import CustomModal from "../../components/customModal/CustomModal";
import CustomHoursCell from "../../components/CustomHoursCell";
import CustomEventCell from "../../components/CustomEventCell";
import { CALENDAR_MODES, CALENDAR_VIEW_MODES } from "../../constants/enums";
import moment from "moment-timezone";
import { Spacer } from "../../components/Spacer";
import CheckinModal from "../../components/modals/appointmentModal/checkinModal";
import { getAppointments, bookingsDetails } from "../../redux/slices/bookings";
import { selectLoginAuth } from "../../redux/slices/auth";

const Booking = () => {
  const [key, setKey] = useState(Math.random());
  const [bookingsView, setBookingsView] = useState("listview");
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });
  const dispatch = useDispatch();
  const [week, setWeek] = useState(true);
  const [month, setMonth] = useState(false);
  const [day, setDay] = useState(false);
  const [monthDays, setMonthDays] = useState([]);
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const [isAMPM, setisAMPM] = useState(true);
  const [showMiniCalendar, setshowMiniCalendar] = useState(false);
  const [calendarViewMode, setCalendarViewMode] = useState(
    CALENDAR_VIEW_MODES.CALENDAR_VIEW
  );
  const [pageNumber, setPageNumber] = useState(1);
  const appointmentsDetails = useSelector(bookingsDetails);
  const getAppointmentList = appointmentsDetails?.getAppointment;
  const getAppointmentList2 = getAppointmentList?.filter(
    (item) => item.status !== 3
  );
  // Only show appointments on calendar which are approved/Check-In/Completed/CancelledByCustomer
  const getApprovedAppointments = getAppointmentList?.filter(
    (item) => item.status === 1 || item.status === 2 || item.status === 3
  );
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [showRequestsView, setshowRequestsView] = useState(false);
  const [selectedStaffData, setSelectedStaffData] = useState(null);
  const [employeeHeaderLayouts, setEmployeeHeaderLayouts] = useState([]);
  const [selectedStaffEmployeeId, setSelectedStaffEmployeeId] = useState(null);
  const [showEmployeeHeader, setshowEmployeeHeader] = useState(false);
  const [shouldShowCalendarModeOptions, setshouldShowCalendarModeOptions] =
    useState(true);
  const [calendarDate, setCalendarDate] = useState(moment());
  const [calendarMode, setCalendarMode] = useState(CALENDAR_MODES.WEEK);
  const nextMonth = () =>
    setCalendarDate(calendarDate.clone().add(1, calendarMode));
  const prevMonth = () =>
    setCalendarDate(calendarDate.clone().subtract(1, calendarMode));
  const [extractedAppointment, setExtractedAppointment] = useState([]);

  const authData = useSelector(selectLoginAuth);

  const UniqueId = authData?.usersInfo?.payload?.uniqe_id
    ? authData?.usersInfo?.payload?.uniqe_id
    : "";

  useEffect(() => {
    let params = {
      seller_id: UniqueId,
      need_upcoming: true,
      page: pageNumber,
      limit: 10,
    };
    dispatch(
      getAppointments({
        params,
        cb(res) {
          if (res.status) {
          }
        },
      })
    );

    getCurrentMonthDays();
  }, [pageNumber, showRequestsView, calendarDate]);

  const getAppointmentsForSelectedStaff = () => {
    const filteredAppointments = getApprovedAppointments?.filter(
      (appointments) => appointments?.pos_user_id === selectedStaffEmployeeId
    );

    return filteredAppointments;
  };

  useEffect(() => {
    if (getApprovedAppointments) {
      const approvedAppointmentsFor = selectedStaffEmployeeId
        ? getAppointmentsForSelectedStaff()
        : getApprovedAppointments;

      const extractedAppointmentEvents = approvedAppointmentsFor.map(
        (booking) => {
          const startDateTime = new Date(booking.start_date_time);
          const endDateTime = new Date(booking.end_date_time);

          return {
            title: booking?.product_name || "NULL",
            start: startDateTime,
            end: endDateTime,
            completeData: booking,
          };
        }
      );

      setExtractedAppointment(extractedAppointmentEvents);
    }
  }, [getAppointmentList, selectedStaffEmployeeId]);

  const weekHandler = () => {
    setCalendarMode(CALENDAR_MODES.WEEK);
    setWeek(true);
    setMonth(false);
    setDay(false);
  };
  const monthHandler = () => {
    setCalendarMode(CALENDAR_MODES.MONTH);
    setMonth(true);
    setWeek(false);
    setDay(false);
  };
  const dayHandler = () => {
    setCalendarMode(CALENDAR_MODES.DAY);
    setDay(true);
    setMonth(false);
    setWeek(false);
  };

  const getCurrentMonthDays = () => {
    const date = new Date(calendarDate);
    const year = date.getFullYear();
    const month = date.getMonth();

    // Get the total number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthDays = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const fullDateFortheDay = new Date(year, month, day);
      const dayName = weekDays[fullDateFortheDay.getDay()];
      const objDay = { fullDateFortheDay, day, dayName };

      monthDays.push(objDay);
    }
    setMonthDays(monthDays);
  };

  const onPressCalendarViewMode = () => {
    setCalendarViewMode(CALENDAR_VIEW_MODES.CALENDAR_VIEW);
    setshouldShowCalendarModeOptions(true);
    weekHandler();
  };
  const onPressListViewMode = () => {
    setCalendarViewMode(CALENDAR_VIEW_MODES.LIST_VIEW);
    setshouldShowCalendarModeOptions(false);
    dayHandler();
    setSelectedStaffEmployeeId(null);
    setshowEmployeeHeader(false);
  };

  const getFormattedHeaderDate = () => {
    return calendarDate.format("MMM YYYY");
  };

  //closeModal
  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };

  const handleUserProfile = (flag) => {
    setModalDetail({
      show: true,
      flag: flag,
      type: flag,
    });
    setKey(Math.random());
  };

  const getAppointmentsByDate = useMemo(() => {
    const filteredAppointmentsByDate = getAppointmentList?.filter(
      (appointment) =>
        moment.utc(appointment?.date).format("L") ===
        moment.utc(calendarDate).format("L")
    );
    return filteredAppointmentsByDate;
  }, [calendarDate, appointmentsDetails]);

  const renderMonthItem = ({ item, index }) => {
    const isSelected = calendarDate.date() == item.day;

    return (
      <TouchableOpacity
        style={{
          width: (windowWidth * 0.84 - monthDays.length * 3) / monthDays.length,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: "#F5F6FC",
          // paddingHorizontal: 1,
          paddingVertical: 8,
          marginRight: 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isSelected ? "#263682" : "transparent",
        }}
        onPress={() => {
          setCalendarDate(moment(item.fullDateFortheDay));
        }}
      >
        <Text
          style={{ color: isSelected ? "#F5F6FC" : "#8D99D2", fontSize: 12 }}
        >
          {item.day}
        </Text>
      </TouchableOpacity>
    );
  };

  const employeeHeader = () => {
    // const staffUsers = selectedStaffEmployeeId ? [selectedStaffData] : getStaffUsers;
    const staffUsers = [];

    return (
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: "#fff",
            flexGrow: 1,
            paddingLeft: 25,
            paddingLeft: calendarMode === CALENDAR_MODES.MONTH ? 0 : 25,
          }}
        >
          {staffUsers?.map((item, index) => {
            const userProfile = item?.user?.user_profiles;
            const userRoles = item?.user?.user_roles[0]?.role?.name;
            const posUserId = item?.user?.unique_uuid;
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedStaffEmployeeId((prev) => {
                    if (prev === posUserId) {
                      setSelectedStaffEmployeeId(null);
                    } else {
                      setSelectedStaffEmployeeId(posUserId);
                    }
                  });
                  setSelectedStaffData(item);
                }}
                style={{
                  padding: 5,
                  marginHorizontal: 1,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingHorizontal: 5,
                  borderColor:
                    selectedStaffEmployeeId === posUserId
                      ? item?.color_code
                      : "#F7F9FF",
                }}
                key={index}
                onLayout={(event) => {
                  const { x, y, width, height } = event.nativeEvent.layout;
                  if (!employeeHeaderLayouts[index]?.width) {
                    const array = [...employeeHeaderLayouts];
                    array[index] = {
                      ...event.nativeEvent.layout,
                      user_id: userProfile?.user_id,
                      firstname: userProfile?.firstname,
                    };
                    setEmployeeHeaderLayouts(array);
                  }
                }}
              >
                <ReactNativeImage
                  source={{
                    uri: userProfile?.profile_photo,
                  }}
                  style={{
                    height: 17,
                    width: 17,
                    borderRadius: 17,
                    borderWidth: 2,
                    borderColor: "teal",
                    borderColor: item?.color_code,
                  }}
                />
                <View style={{ marginLeft: 5 }}>
                  <Text
                    style={{
                      fontSize: 6,
                      color: "#000",
                    }}
                  >
                    {userProfile?.firstname + " " + userProfile?.lastname}
                  </Text>
                  <Text
                    style={{
                      fontSize: 5,
                      color: "#000",
                    }}
                  >
                    {userRoles}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const handleBookingsView = (bookingsView) => {
    setBookingsView(bookingsView);
  };

  return (
    <>
      <div className="commonFlex">
        <div className="commanOuter mainBooking">
          <CalendarHeaderWithOptions
            {...{
              prevMonth,
              getFormattedHeaderDate,
              nextMonth,
              day,
              dayHandler,
              week,
              weekHandler,
              month,
              monthHandler,
              calendarViewMode,
              shouldShowCalendarModeOptions,
            }}
            onPressCalendarIcon={() => {
              setshowMiniCalendar(!showMiniCalendar);
            }}
            onPressNotification={() => {
              // navigate(NAVIGATION.notificationsList, {
              //   screen: NAVIGATION.calender,
              // });
            }}
            onPressSearch={() => {
              // setShowSearchModal(true);
              // setSearchedAppointments([]);
              // setSearchedText('');
              // setTimeout(() => {
              //   searchAppoinmentInputRef.current.focus();
              // }, 300);
            }}
            onPressCalendarViewMode={onPressCalendarViewMode}
            onPressListViewMode={onPressListViewMode}
          />

          {/* Second Navbar */}
          <div className="row">
            {appointmentsDetails?.loading ? (
              <>
                <tbody>
                  <div className="loaderOuter">
                    <div className="spinner-grow loaderSpinner text-center my-5"></div>
                  </div>
                </tbody>
              </>
            ) : (
              <>
                {calendarViewMode === CALENDAR_VIEW_MODES.CALENDAR_VIEW ? (
                  <Calendar
                    ampm={true}
                    swipeEnabled={false}
                    date={calendarDate}
                    mode={calendarMode}
                    events={extractedAppointment}
                    hourRowHeight={windowHeight * 0.1}
                    height={windowHeight * 0.91}
                    {...(showEmployeeHeader
                      ? {
                          renderHeader: () => employeeHeader(),
                          renderHeaderForMonthView: () => employeeHeader(),
                        }
                      : {})}
                    isEventOrderingEnabled={false}
                    headerContainerStyle={{
                      height:
                        calendarMode === CALENDAR_MODES.MONTH ? "auto" : 70,
                      backgroundColor: "#fff",
                      paddingTop: 5,
                    }}
                    dayHeaderHighlightColor={"rgb(66, 133, 244)"}
                    hourComponent={CustomHoursCell}
                    renderEvent={(event, touchableOpacityProps, allEvents) =>
                      CustomEventCell(
                        event,
                        touchableOpacityProps,
                        allEvents,
                        calendarMode,
                        employeeHeaderLayouts,
                        showEmployeeHeader
                      )
                    }
                  />
                ) : (
                  <div className="col-lg-12">
                    <Spacer space={16} />

                    <View
                      style={{ backgroundColor: "#fff", paddingHorizontal: 10 }}
                    >
                      <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={monthDays}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={renderMonthItem}
                      />
                      <Spacer space={8} />

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "baseline",
                          marginVertical: 10,
                        }}
                      >
                        <Text style={{ fontSize: 24, color: "#263682" }}>
                          {moment(calendarDate).format("dddd")}
                        </Text>
                        <Spacer space={5} horizontal />
                        <Text style={{ fontSize: 14, color: "#8D99D2" }}>
                          {moment(calendarDate).format("Do") ??
                            moment().format("Do")}
                        </Text>
                      </View>
                    </View>
                    <div className="commanscrollBar InvoiceTableBox">
                      <div className="table-responsive">
                        <table id="bookingTable" className="product_table ">
                          <thead className="invoiceHeadingBox">
                            <tr>
                              <th className="invoiceHeading">Client</th>
                              <th className="invoiceHeading">Staff</th>
                              <th className="invoiceHeading">Service</th>
                              <th className="invoiceHeading">Time</th>
                              <th className="invoiceHeading"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {getAppointmentsByDate?.length > 0 ? (
                              <>
                                {getAppointmentsByDate?.map((item, index) => {
                                  const userDetails = item?.user_details;
                                  const invitedUserDetails =
                                    item?.invitation_details;
                                  const userId = item?.user_id;
                                  const customerDetails =
                                    userId != null
                                      ? userDetails
                                      : invitedUserDetails;
                                  const userAddress =
                                    userDetails?.current_address;
                                  const posUserDetails =
                                    item?.pos_user_details?.user?.user_profiles;
                                  const appointmentID = item?.id;

                                  return (
                                    <tr className="product_invoice bookCheck">
                                      <td className="invoice_subhead">
                                        <div className="d-flex">
                                          <figure className="">
                                            <Image
                                              src={
                                                customerDetails?.profile_photo ??
                                                Images.userAvtar
                                              }
                                              alt="avtar"
                                              className="avtarImg me-2"
                                            />
                                          </figure>
                                          <div className="">
                                            <span className="subHeadText">
                                              {customerDetails?.firstname +
                                                " " +
                                                customerDetails?.lastname}
                                            </span>
                                            <div>
                                              <Image
                                                src={Images.locatePurple}
                                                alt="locate"
                                                className="locate me-2"
                                              />
                                              <span className="purpleText">
                                                Kiev, Ukraine
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="invoice_subhead">
                                        <span className="subHeadText">
                                          {posUserDetails?.firstname +
                                            " " +
                                            posUserDetails?.lastname}
                                        </span>
                                      </td>

                                      <td className="invoice_subhead">
                                        <span className="subHeadText">
                                          {item?.product_name}
                                        </span>
                                      </td>
                                      <td className="invoice_subhead">
                                        <Image
                                          src={Images.clockImg}
                                          alt="clock"
                                          className="clockImg me-2"
                                        />
                                        <span className="subHeadText">
                                          {`${item?.start_time}-${item?.end_time}`}
                                        </span>
                                      </td>

                                      <td className="invoice_subhead">
                                        <div className="checkinBg">
                                          <figure
                                            className="checkinBox me-2 "
                                            onClick={() => {
                                              handleUserProfile("checkIn");
                                            }}
                                          >
                                            <span className="textSmall me-2">
                                              {item?.status}
                                            </span>
                                            <Image
                                              src={Images.checkImg}
                                              alt="money"
                                              className="moneyImg"
                                            />
                                          </figure>
                                          <button className="editBtn">
                                            <Image
                                              src={Images.editImg}
                                              alt="editImg"
                                              className="editImg"
                                            />
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </>
                            ) : (
                              <tr>
                                <td
                                  className="colorBlue text text-center py-3"
                                  colSpan={8}
                                >
                                  No Record Found
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <CommonSideBar />
      </div>

      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        className={
          modalDetail.flag === "checkIn" ? "commonWidth customContent" : ""
        }
        ids={modalDetail.flag === "checkIn" ? "checkIn" : ""}
        child={
          modalDetail.flag === "checkIn" ? (
            <CheckinModal close={() => handleOnCloseModal()} />
          ) : (
            ""
          )
        }
        header={
          modalDetail.flag === "checkIn" ? (
            <>
              <div className="trackingSub headerModal ">
                <figure className="profileImage ">
                  <Image
                    src={Images.checkinSky}
                    alt="check"
                    className="img-fluid "
                  />
                </figure>
                <h4 className="loginheading mt-2">Check In</h4>
                <h4 className="trackingHeading">
                  Confirm the details of your appointment.
                </h4>
                <p onClick={handleOnCloseModal} className="crossModal">
                  <Image
                    src={Images.modalCross}
                    alt="modalCross"
                    className="img-fluid"
                  />
                </p>
              </div>
            </>
          ) : (
            ""
          )
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};

export default Booking;