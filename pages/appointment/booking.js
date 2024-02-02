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
// import { Calendar } from 'react-native-big-calendar'
import CalendarHeaderWithOptions from "../../components/CalendarHeaderWithOptions";
import { Calendar } from "../../components/CustomCalendar";
// import CustomModal from '../../../customModal/CustomModal';
import CustomModal from "../../components/customModal/CustomModal";
import CustomHoursCell from "../../components/CustomHoursCell";
import CustomEventCell from "../../components/CustomEventCell";
import ReScheduleDetailModal from "../../components/ReScheduleDetailModal";
import CalendarSettingModal from "../../Components/modals/CalendarSettingModal";
import ReScheduleDetailModal from "../../Components/ReScheduleDetailModal";

import {
  CALENDAR_MODES,
  CALENDAR_VIEW_MODES,
  APPOINTMENT_STATUS,
} from "../../constants/enums";
import moment from "moment-timezone";
import { Spacer } from "../../components/Spacer";
import CheckinModal from "../../components/modals/appointmentModal/checkinModal";
import {
  getAppointments,
  bookingsDetails,
  updateAppointmentStatus,
  getStaffUsers,
} from "../../redux/slices/bookings";
import {
  getSecuritySettingInfo,
  settingInfo,
  updateSettings,
} from "../../redux/slices/setting";
import { selectLoginAuth } from "../../redux/slices/auth";
import {
  calculateTimeDuration,
  getCalendarActionButtonTitle,
} from "../../utilities/globalMethods";

const Booking = () => {
  const [key, setKey] = useState(Math.random());
  const [key1, setKey1] = useState(Math.random());
  const [bookingsView, setBookingsView] = useState("listview");
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });
  const dispatch = useDispatch();
  const settingData = useSelector(settingInfo);
  const defaultSettingsForCalendar = settingData?.getSettings;
  const [searchedAppointments, setSearchedAppointments] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [week, setWeek] = useState(true);
  const [month, setMonth] = useState(false);
  const [day, setDay] = useState(false);
  const [monthDays, setMonthDays] = useState([]);
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const [isAMPM, setisAMPM] = useState(
    defaultSettingsForCalendar?.time_format === "12" ?? true
  );
  const [showMiniCalendar, setshowMiniCalendar] = useState(false);
  const [calendarViewMode, setCalendarViewMode] = useState(
    CALENDAR_VIEW_MODES.CALENDAR_VIEW
  );
  const [isCalendarSettingModalVisible, setisCalendarSettingModalVisible] =
    useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const appointmentsDetails = useSelector(bookingsDetails);
  const getAppointmentByStaffIdList = appointmentsDetails?.geAppointmentById;
  const staffUsersList = appointmentsDetails?.staffUsers;
  const getAppointmentList = appointmentsDetails?.getAppointment;
  const getAppointmentList2 = getAppointmentList?.filter(
    (item) => item.status !== 3
  );
  const [formattedTime, setFormattedTime] = useState(false);
  // Only show appointments on calendar which are approved/Check-In/Completed/CancelledByCustomer
  const getApprovedAppointments = getAppointmentList?.filter(
    (item) => item.status === 1 || item.status === 2 || item.status === 3
  );
  // Will be used to show list of all unaccepted appointments
  const appointmentListArr = getAppointmentList2?.filter(
    (item) => item.status === 0
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
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showRequestsView, setshowRequestsView] = useState(false);
  const [selectedStaffData, setSelectedStaffData] = useState(null);
  const [employeeHeaderLayouts, setEmployeeHeaderLayouts] = useState([]);
  const [selectedStaffEmployeeId, setSelectedStaffEmployeeId] = useState(null);
  const [showEmployeeHeader, setshowEmployeeHeader] = useState(false);
  const [shouldShowCalendarModeOptions, setshouldShowCalendarModeOptions] =
    useState(true);
  const [calendarDate, setCalendarDate] = useState(moment());
  const [calendarMode, setCalendarMode] = useState(
    defaultSettingsForCalendar?.calender_view ?? CALENDAR_MODES.WEEK
  );
  const nextMonth = () =>
    setCalendarDate(calendarDate.clone().add(1, calendarMode));
  const prevMonth = () =>
    setCalendarDate(calendarDate.clone().subtract(1, calendarMode));
  const [extractedAppointment, setExtractedAppointment] = useState([]);
  const [showRescheduleTimeModal, setshowRescheduleTimeModal] = useState(false);
  const [showEventDetailModal, setshowEventDetailModal] = useState(false);

  const authData = useSelector(selectLoginAuth);

  const UniqueId = authData?.usersInfo?.payload?.uniqe_id
    ? authData?.usersInfo?.payload?.uniqe_id
    : "";

  useEffect(() => {
    let params = {
      seller_id: UniqueId,
      need_staff_member: true,
      page: pageNumber,
      limit: 10,
    };
    dispatch(
      getStaffUsers({
        params,
        cb(res) {
          if (res.status) {
          }
        },
      })
    );

    getUserSettings();
    onPressListViewMode();
  }, []);

  useEffect(() => {
    if (calendarMode === CALENDAR_VIEW_MODES.CALENDAR_VIEW) {
      if (defaultSettingsForCalendar?.calender_view === CALENDAR_MODES.DAY) {
        dayHandler();
      } else if (
        defaultSettingsForCalendar?.calender_view === CALENDAR_MODES.WEEK
      ) {
        weekHandler();
      } else if (
        defaultSettingsForCalendar?.calender_view === CALENDAR_MODES.MONTH
      ) {
        monthHandler();
      }
    }
  }, [defaultSettingsForCalendar]);

  const getUserSettings = () => {
    let params = {
      app_name: "pos",
      seller_id: UniqueId,
    };
    dispatch(
      getSecuritySettingInfo({
        ...params,
        cb(res) {
          if (res.status) {
            // setGetSelectedLanguages(res?.data?.payload?.languages)
          }
        },
      })
    );
  };

  const updateUserSettings = (data) => {
    dispatch(
      updateSettings({
        ...data,
        cb(res) {
          if (res.status) {
            getUserSettings();
          }
        },
      })
    );
  };

  useEffect(() => {
    getAllBookings();
    getCurrentMonthDays();
  }, [pageNumber, calendarDate]);

  const getAllBookings = () => {
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
  };

  const updateBookingStatus = (appointmentId, status) => {
    let params = {
      appointmentId,
      status,
    };
    dispatch(
      updateAppointmentStatus({
        ...params,
        cb(res) {
          if (res.status) {
            getAllBookings();
            // dispatch(getStaffUsersList());
          }
        },
      })
    );
  };

  const onSearchAppoinment = (searchText) => {
    if (searchText != "") {
      setSearchedAppointments([]);
    }
    const callback = (searchData) => {
      if (searchData === null) {
        setSearchedAppointments([]);
      } else {
        setSearchedAppointments(searchData?.data);
      }
      setIsLoadingSearchAppoinment(false);
    };
    // dispatch(searchAppointments(pageNumber, searchText, callback));
  };

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

  const closeRescheduleModal = () => {
    setshowRescheduleTimeModal(false);
    setKey1(Math.random());
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
    const staffUsers = selectedStaffEmployeeId
      ? [selectedStaffData]
      : staffUsersList;

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

  const onPressSaveCalendarSettings = (calendarPreferences) => {
    if (calendarPreferences?.defaultCalendarMode === CALENDAR_MODES.DAY) {
      dayHandler();
    } else if (
      calendarPreferences?.defaultCalendarMode === CALENDAR_MODES.WEEK
    ) {
      weekHandler();
    } else if (
      calendarPreferences?.defaultCalendarMode === CALENDAR_MODES.MONTH
    ) {
      monthHandler();
    }
    setisAMPM(calendarPreferences?.defaultTimeFormat);

    const data = {
      calender_view: calendarPreferences?.defaultCalendarMode,
      time_format: calendarPreferences?.defaultTimeFormat ? "12" : "24",
      accept_appointment_request:
        calendarPreferences?.defaultAppointmentRequestMode,
      employee_color_set: calendarPreferences?.defaultEmployeesColorSet,
    };
    updateUserSettings(data);
  };

  const handleBookingsView = (bookingsView) => {
    setBookingsView(bookingsView);
  };

  const renderButtons = (item) => {
    const appointmentID = item?.id;
    return {
      [APPOINTMENT_STATUS.REVIEWING]: (
        <div className="checkinBg">
          <button
            className="rejectBtn mr-6"
            type="submit"
            onClick={async () => {
              updateBookingStatus(
                appointmentID,
                APPOINTMENT_STATUS.REJECTED_BY_SELLER
              );
              onSearchAppoinment(searchedText);
            }}
          >
            Decline
          </button>

          <button
            className="acceptBtn"
            type="submit"
            onClick={async () => {
              updateBookingStatus(
                appointmentID,
                APPOINTMENT_STATUS.ACCEPTED_BY_SELLER
              );
              onSearchAppoinment(searchedText);
            }}
          >
            Accept
          </button>
        </div>
      ),
      [APPOINTMENT_STATUS.ACCEPTED_BY_SELLER]: (
        <div className="checkinBg">
          <button
            className="greyBtn w-100 mr-6"
            // type="submit"
            onClick={() => {
              calculateTimeDuration(item);
              setSelectedBooking(item);
              handleUserProfile("checkIn");
            }}
          >
            {"Check-in"}
            <Image
              src={Images.checkImg}
              alt="money"
              className="moneyImg ml-6"
            />
          </button>

          <button
            className="editBtn"
            onClick={() => {
              setSelectedBooking(item);
              setKey1(Math.random());
              setshowRescheduleTimeModal(true);
            }}
          >
            <Image src={Images.editImg} alt="editImg" className="editImg" />
          </button>
        </div>
      ),
      [APPOINTMENT_STATUS.CHECKED_IN]: (
        <button
          className="greyBtn w-100"
          type="submit"
          onClick={() => {
            updateBookingStatus(appointmentID, APPOINTMENT_STATUS.COMPLETED);
          }}
        >
          {getCalendarActionButtonTitle(item?.status)}
        </button>
      ),
      [APPOINTMENT_STATUS.COMPLETED]: (
        <button className="greenBtn" type="submit">
          Completed
          <Image
            src={Images.complete}
            alt="complete"
            className="completeimg ml-6"
          />
        </button>
      ),
      [APPOINTMENT_STATUS.CANCELLED_BY_CUSTOMER]: (
        <button className="greyBtn w-100" type="submit">
          {getCalendarActionButtonTitle(item?.status)}
        </button>
      ),
      [APPOINTMENT_STATUS.REJECTED_BY_SELLER]: (
        <button className="greyBtn w-100" type="submit">
          {getCalendarActionButtonTitle(item?.status)}
        </button>
      ),
    };
  };

  const CommonSideBar = () => {
    // const [key, setKey] = useState(Math.random());
    // const [modalDetail, setModalDetail] = useState({
    //     show: false,
    //     title: "",
    //     flag: "",
    // });
    // const handleOnCloseModal = () => {
    //     setModalDetail({
    //         show: false,
    //         title: "",
    //         flag: "",
    //     });
    //     setKey(Math.random());
    // };
    return (
      <>
        <div className="sidebarRightBooking">
          <ListGroup>
            <ListGroupItem className="SidebarRightItems">
              <Link className="sideBarUser" href="#">
                {" "}
                <Image
                  src={Images.backArrow}
                  alt="image"
                  className="img-fluid arrowBack sidebarIcons  "
                />
              </Link>
            </ListGroupItem>
            <ListGroupItem
              className="SidebarRightItems active "
              onClick={() => setshowRequestsView((prev) => !prev)}
            >
              <div className="sidebarBack">
                <Image
                  src={Images.calendarSmall}
                  alt="image"
                  className="img-fluid  sideBarImg"
                />
                <span className="bottomDots">
                  {appointmentListArr?.length ?? 0}
                </span>
              </div>
            </ListGroupItem>
            {staffUsersList?.map((item, index) => {
              const userProfile = item?.user?.user_profiles;
              const posUserId = item?.user?.unique_uuid;
              const imageUrl = item?.user?.user_profiles?.profile_photo;
              return (
                <ListGroupItem
                  onClick={() => {
                    setCalendarViewMode(CALENDAR_VIEW_MODES.CALENDAR_VIEW);
                    setSelectedStaffEmployeeId((prev) => {
                      if (prev === posUserId) {
                        setSelectedStaffEmployeeId(null);
                        setshowEmployeeHeader(false);
                      } else {
                        setshowEmployeeHeader(true);
                        setSelectedStaffEmployeeId(posUserId);
                      }
                    });
                    setSelectedStaffData(item);
                  }}
                  className="SidebarRightItems mt-2"
                >
                  <Image
                    src={imageUrl ?? Images.userImages}
                    alt="image"
                    height={50}
                    width={50}
                    className="img-fluid  staffUserImage"
                  />
                  <span className="bottomdot">{item?.appointment_counts}</span>
                </ListGroupItem>
              );
            })}

            {/* <ListGroupItem className="SidebarRightItems mt-2">
              <Image
                src={Images.userAvtar}
                alt="image"
                className="img-fluid   sidebarIcons"
              />
              <span className="bottomdot">3</span>
            </ListGroupItem>
            <ListGroupItem className="SidebarRightItems mt-2">
              <Image
                src={Images.userImages}
                alt="image"
                className="img-fluid   sidebarIcons "
              />
              <span className="bottomdot">3</span>
            </ListGroupItem>
            <ListGroupItem className="SidebarRightItems mt-2">
              <Image
                src={Images.userImages}
                alt="image"
                className="img-fluid   sidebarIcons "
              />
              <span className="bottomdot">3</span>
            </ListGroupItem>
            <ListGroupItem className="SidebarRightItems mt-2">
              <Image
                src={Images.userImages}
                alt="image"
                className="img-fluid   sidebarIcons "
              />
              <span className="bottomdot">3</span>
            </ListGroupItem>
            <ListGroupItem className="SidebarRightItems mt-2">
              <Image
                src={Images.userImages}
                alt="image"
                className="img-fluid   sidebarIcons "
              />
              <span className="bottomdot">3</span>
            </ListGroupItem>

            <ListGroupItem className="SidebarRightItems mt-2">
              <Image
                src={Images.userImages}
                alt="image"
                className="img-fluid   sidebarIcons "
              />
              <span className="bottomdot">3</span>
            </ListGroupItem>

            <ListGroupItem className="SidebarRightItems mt-2">
              <Image
                src={Images.userImages}
                alt="image"
                className="img-fluid   sidebarIcons "
              />
              <span className="bottomdot">3</span>
            </ListGroupItem> */}

            <ListGroupItem className="SidebarRightItems">
              <div
                className="userSideBar"
                onClick={() => {
                  setCalendarViewMode(CALENDAR_VIEW_MODES.CALENDAR_VIEW);
                  setshouldShowCalendarModeOptions(true);
                  setSelectedStaffEmployeeId(null);
                  if (selectedStaffEmployeeId) {
                    setshowEmployeeHeader(true);
                  } else {
                    setshowEmployeeHeader(!showEmployeeHeader);
                  }
                }}
              >
                <Link className="userBook" href="#">
                  <Image
                    src={Images.usersImages}
                    alt="image"
                    className="img-fluid userImage  sidebarIcons  "
                  />
                  <span className="bottomdot">
                    {staffUsersList?.length || "0"}
                  </span>
                </Link>
              </div>
              <Image
                onClick={() => setisCalendarSettingModalVisible(true)}
                src={Images.settingBlue}
                alt="image"
                className="img-fluid  sidebarIcons  settingImgs"
              />
            </ListGroupItem>
          </ListGroup>
        </div>
        {showRequestsView ? (
          <div className="addBucket AddtoCart">
            <div className="bucket_">
              <div className="addBucketInfo">
                <Image
                  src={Images.calendarDark}
                  alt="calendar"
                  className="img-fluid"
                />
                <span className="countNumber">
                  {" "}
                  {selectedStaffEmployeeId
                    ? getAppointmentByStaffIdList?.length ?? 0
                    : appointmentListArr?.length ?? 0}
                </span>
                <span className="fontEighteen ms-2"> Requests</span>
              </div>
              <Image
                onClick={() => setshowRequestsView((prev) => !prev)}
                src={Images.crossBlue}
                alt="crossBlue"
                className="img-fluid  text-end"
              />
            </div>

            {selectedStaffEmployeeId
              ? getAppointmentByStaffIdList
              : appointmentListArr?.map((item, index) => {
                  const userDetails = item?.user_details;
                  const userAddress = userDetails?.current_address;
                  const posUserDetails =
                    item?.pos_user_details?.user?.user_profiles;
                  const appointmentID = item?.id;
                  return (
                    <div
                      className={
                        item?.mode_of_payment == "cash"
                          ? "bg-skygrey border-lightpurple"
                          : "bg-green-50 border-green" + " bookingRequest"
                      }
                    >
                      <div className="checkUser">
                        <div className="userCheckin unpaidDetails">
                          <h6 className="userText">Customer:</h6>

                          <div className="checkinBg">
                            <div className="paymentMode">
                              <span
                                className={
                                  "textPaymentMode " + item?.mode_of_payment ==
                                  "cash"
                                    ? "textNeavyBlue"
                                    : "textWhite" + " mr-6"
                                }
                              >
                                {item?.mode_of_payment == "cash"
                                  ? "Unpaid"
                                  : "Paid"}
                              </span>
                              <Image
                                src={Images.complete}
                                alt="complete"
                                className="completeimg"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="customerCheck d-flex mt-2">
                          <figure className="">
                            <Image
                              src={
                                userDetails?.profile_photo ?? Images.userImages
                              }
                              alt="customerImg"
                              className="img-fluid me-2"
                            />
                          </figure>
                          <div className="">
                            <span className="innerHeading">
                              {userDetails?.firstname +
                                " " +
                                userDetails?.lastname}
                            </span>
                            <div className="">
                              <Image
                                src={Images.locatePurple}
                                alt="locate"
                                className="locate me-2"
                              />
                              <span className="purpleText">
                                {userAddress?.street_address}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="userCheckin  mt-4">
                          <h6 className="textSmall fw-600">
                            Services requested:
                          </h6>
                          <div className="userService">
                            <span className="subHeadText me-2">
                              {item?.product_name}
                            </span>
                            {/* <span className="subHeadText">Pet Bathing</span> */}
                          </div>
                        </div>
                        <div className="ServiceText mt-4 mb-4">
                          <h6 className="textSmall">Service Time</h6>
                          <div className="d-flex mt-3">
                            <div className="serviceDate">
                              <Image
                                src={Images.calendarDark}
                                alt="calendarImg"
                                className="calendaerImg me-2"
                              />
                              <span className="purpleText fw-600">
                                {moment
                                  .utc(item?.start_date_time)
                                  .format("dddd, DD/MM/YYYY")}
                              </span>
                            </div>
                            <div className="serviceDate">
                              <Image
                                src={Images.timeImg}
                                alt="timeIcon"
                                className="timeImage me-2"
                              />
                              <span className="purpleText fw-600">
                                {calculateTimeDuration(item)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="borderDashed"></div>
                        <div className="bookingsAmountView mt-4 mb-2">
                          <h6 className="textBookingAmount fw-700 mr-6">
                            Total
                          </h6>
                          <h6 className="textBookingAmount fw-700">
                            {item?.mode_of_payment?.toUpperCase() === "JBR"
                              ? item?.mode_of_payment?.toUpperCase() + " "
                              : "$"}

                            {`${parseFloat(item?.price).toFixed(2)}`}
                          </h6>

                          <div className="checkinBg ml-16">
                            <button
                              className="rejectBtn mr-6"
                              type="submit"
                              onClick={async () => {
                                setshowRequestsView((prev) => !prev);
                                updateBookingStatus(
                                  appointmentID,
                                  APPOINTMENT_STATUS.REJECTED_BY_SELLER
                                );
                              }}
                            >
                              Decline
                            </button>
                            <button
                              className="acceptBtn"
                              type="submit"
                              onClick={async () => {
                                setshowRequestsView((prev) => !prev);
                                updateBookingStatus(
                                  appointmentID,
                                  APPOINTMENT_STATUS.ACCEPTED_BY_SELLER
                                );
                              }}
                            >
                              Confirm
                            </button>
                            {/* <div className="confirmbtn">
                              Confirm
                              <Image
                                src={Images.ArrowRight}
                                alt="greenRight"
                                className="img-fluid "
                              />
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        ) : (
          <></>
        )}
      </>
    );
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
                                              width={44}
                                              height={44}
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
                                                {userId !== null
                                                  ? customerDetails?.phone_number
                                                  : customerDetails?.phone_code +
                                                    customerDetails?.phone_no}
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
                                          {renderButtons(item)[item?.status]}
                                          {/* <figure
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
                                          </button> */}
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
        key={key1}
        show={showRescheduleTimeModal}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        className={"checkIn"}
        ids={"reschedule"}
        child={
          <ReScheduleDetailModal
            showRecheduleModal={showRescheduleTimeModal}
            appointmentData={selectedBooking}
            onAppointmentUpdate={() => {
              getAllBookings();
            }}
            setshowEventDetailModal={setshowEventDetailModal}
            onCloseModal={closeRescheduleModal}
          />
        }
        onCloseModal={closeRescheduleModal}
      />

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
            <CheckinModal
              bookingDetails={selectedBooking}
              close={() => handleOnCloseModal()}
              formattedTime={formattedTime}
              onConfirmPress={() => {
                handleOnCloseModal();
                updateBookingStatus(
                  selectedBooking?.id,
                  APPOINTMENT_STATUS.CHECKED_IN
                );
                onSearchAppoinment(searchedText);
              }}
            />
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

      {isCalendarSettingModalVisible && (
        <div className="addBucket AddtoCart">
          <CalendarSettingModal
            isVisible={isCalendarSettingModalVisible}
            setIsVisible={setisCalendarSettingModalVisible}
            currentCalendarMode={calendarMode}
            currentTimeFormat={isAMPM}
            defaultSettingsForCalendar={defaultSettingsForCalendar}
            onPressSave={(calendarPreferences) => {
              onPressSaveCalendarSettings(calendarPreferences);
            }}
          />
        </div>
      )}
    </>
  );
};

export default Booking;
