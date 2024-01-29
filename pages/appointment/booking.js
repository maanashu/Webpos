import React, { useState, useEffect } from "react";
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
import CommonSideBar from "../../components/commanComonets/appointmentSide/commonSideBar";
// import { Calendar } from 'react-native-big-calendar'
import CalendarHeaderWithOptions from "../../components/CalendarHeaderWithOptions";
import { Calendar } from "../../components/CustomCalendar";
// import CustomModal from '../../../customModal/CustomModal';
import CustomModal from "../../components/customModal/CustomModal";
import CustomHoursCell from "../../Components/CustomHoursCell";
import CustomEventCell from "../../Components/CustomEventCell";
import { CALENDAR_MODES, CALENDAR_VIEW_MODES } from "../../constants/enums";
import moment from "moment-timezone";
import { Spacer } from "../../components/Spacer";
import CheckinModal from "../../components/modals/appointmentModal/checkinModal";

const Booking = () => {
  const [key, setKey] = useState(Math.random());
  const [bookingsView, setBookingsView] = useState("listview");
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });
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
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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

  useEffect(() => {
    // if (isFocused || showRequestsView) {
    //   dispatch(getAppointment(pageNumber));
    // }
    getCurrentMonthDays();
  }, [calendarDate]);

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

          {/* <div className='row'>
                        <div className='col-lg-12'>
                            <div className='bookingNavBar'>
                                <div className='booking'>
                                    <div className='d-flex align-items-center'>
                                        <figure className='book'>
                                            <Image src={Images.bookImg} alt="" className="img-fluid bookiImg me-2 " />
                                        </figure>
                                        <h6 className='fontEighteen  me-4'>Bookings</h6>
                                    </div>

                                    <div className='appointmenMonth bookingCall'>
                                        <div className='monthCalendar'>
                                            <Image src={Images.calendarBlue} alt='calendarimage' className='img-fluid' />
                                            <span className='monthText ms-2'>October 2023</span>
                                            <Image src={Images.arrowDown} alt='calendarimage' className='img-fluid ms-5' />
                                        </div>
                                    </div>
                                </div>
                                <div className='bookingRight d-flex align-items-center'>
                                    <Image src={Images.notification} alt='noti' className='img-fluid  me-3' />
                                    <div className='seacrhBox me-3'>
                                        <Image src={Images.SearchIcon} alt='blueSearch' className='img-fluid  blueSearch me-2' />
                                        <div class="bookingsearchBar">
                                            <input type="text" class="form-control searchControlbook" placeholder="" />
                                        </div>
                                    </div>

                                    <div className='appointmenMonth bgBooking me-3'>
                                        <div className='monthCalendar bgCalendar'>
                                            <Image src={Images.calendarDark} alt='calendardark' className='img-fluid' />
                                            <span className='monthText ms-2'>Calendar View</span>
                                        </div>
                                    </div>
                                    <button className='listBtn'> <Image src={Images.listImg} alt='listIMAGES' className='img-fluid me-2 ' />List View</button>
                                </div>
                            </div>
                        </div>
                    </div> */}

          {/* Second Navbar */}
          <div className="row">
            {calendarViewMode === CALENDAR_VIEW_MODES.CALENDAR_VIEW ? (
              <Calendar
                ampm={true}
                swipeEnabled={false}
                date={calendarDate}
                mode={calendarMode}
                events={[]}
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
                  height: calendarMode === CALENDAR_MODES.MONTH ? "auto" : 70,
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

                {/* <div className="invoiceHeader">
                  <h5 className="totalrefundAmount">
                    Monday <span className="fontEighteen">12th </span>
                  </h5>
                </div> */}
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
                        <tr className="product_invoice bookCheck">
                          <td className="invoice_subhead">
                            <div className="d-flex">
                              <figure className="">
                                <Image
                                  src={Images.userAvtar}
                                  alt="avtar"
                                  className="avtarImg me-2"
                                />
                              </figure>
                              <div className="">
                                <span className="subHeadText">
                                  Elena Sergeyevna
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
                            <span className="subHeadText">Marianne Müller</span>
                          </td>

                          <td className="invoice_subhead">
                            <span className="subHeadText">Haircut</span>
                          </td>
                          <td className="invoice_subhead">
                            <Image
                              src={Images.clockImg}
                              alt="clock"
                              className="clockImg me-2"
                            />
                            <span className="subHeadText">
                              10:00 - 11:00 am
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
                                <span className="textSmall me-2">Check-in</span>
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
                        <tr className="product_invoice active">
                          <td className="invoice_subhead">
                            <div className="d-flex">
                              <figure className="">
                                <Image
                                  src={Images.userAvtar}
                                  alt="avtar"
                                  className="avtarImg me-2"
                                />
                              </figure>
                              <div className="">
                                <span className="subHeadText">
                                  Elena Sergeyevna
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
                            <span className="subHeadText">Marianne Müller</span>
                          </td>

                          <td className="invoice_subhead">
                            <span className="subHeadText">Haircut</span>
                          </td>
                          <td className="invoice_subhead">
                            <Image
                              src={Images.clockImg}
                              alt="clock"
                              className="clockImg me-2"
                            />
                            <span className="subHeadText">
                              10:00 - 11:00 am
                            </span>
                          </td>

                          <td className="invoice_subhead">
                            <div className="checkinBg">
                              <div className="completed">
                                <span className="textSmall me-2">
                                  Completed
                                </span>
                                <Image
                                  src={Images.complete}
                                  alt="complete"
                                  className="completeimg"
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="product_invoice bookCheck">
                          <td className="invoice_subhead">
                            <div className="d-flex">
                              <figure className="">
                                <Image
                                  src={Images.userAvtar}
                                  alt="avtar"
                                  className="avtarImg me-2"
                                />
                              </figure>
                              <div className="">
                                <span className="subHeadText">
                                  Elena Sergeyevna
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
                            <span className="subHeadText">Marianne Müller</span>
                          </td>

                          <td className="invoice_subhead">
                            <span className="subHeadText">Haircut</span>
                          </td>
                          <td className="invoice_subhead">
                            <Image
                              src={Images.clockImg}
                              alt="clock"
                              className="clockImg me-2"
                            />
                            <span className="subHeadText">
                              10:00 - 11:00 am
                            </span>
                          </td>

                          <td className="invoice_subhead">
                            <div className="checkinBg">
                              <figure className="checkinBox me-2">
                                <span className="textSmall me-2">Check-in</span>
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
                        <tr className="product_invoice bookCheck">
                          <td className="invoice_subhead">
                            <div className="d-flex">
                              <figure className="">
                                <Image
                                  src={Images.userAvtar}
                                  alt="avtar"
                                  className="avtarImg me-2"
                                />
                              </figure>
                              <div className="">
                                <span className="subHeadText">
                                  Elena Sergeyevna
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
                            <span className="subHeadText">Marianne Müller</span>
                          </td>

                          <td className="invoice_subhead">
                            <span className="subHeadText">Haircut</span>
                          </td>
                          <td className="invoice_subhead">
                            <Image
                              src={Images.clockImg}
                              alt="clock"
                              className="clockImg me-2"
                            />
                            <span className="subHeadText">
                              10:00 - 11:00 am
                            </span>
                          </td>

                          <td className="invoice_subhead">
                            <div className="checkinBg">
                              <figure className="checkinBox me-2">
                                <span className="textSmall me-2">Check-in</span>
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
                        <tr className="product_invoice bookCheck">
                          <td className="invoice_subhead">
                            <div className="d-flex">
                              <figure className="">
                                <Image
                                  src={Images.userAvtar}
                                  alt="avtar"
                                  className="avtarImg me-2"
                                />
                              </figure>
                              <div className="">
                                <span className="subHeadText">
                                  Elena Sergeyevna
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
                            <span className="subHeadText">Marianne Müller</span>
                          </td>

                          <td className="invoice_subhead">
                            <span className="subHeadText">Haircut</span>
                          </td>
                          <td className="invoice_subhead">
                            <Image
                              src={Images.clockImg}
                              alt="clock"
                              className="clockImg me-2"
                            />
                            <span className="subHeadText">
                              10:00 - 11:00 am
                            </span>
                          </td>

                          <td className="invoice_subhead">
                            <div className="checkinBg">
                              <figure className="checkinBox me-2">
                                <span className="textSmall me-2">Check-in</span>
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
                        <tr className="product_invoice bookCheck">
                          <td className="invoice_subhead">
                            <div className="d-flex">
                              <figure className="">
                                <Image
                                  src={Images.userAvtar}
                                  alt="avtar"
                                  className="avtarImg me-2"
                                />
                              </figure>
                              <div className="">
                                <span className="subHeadText">
                                  Elena Sergeyevna
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
                            <span className="subHeadText">Marianne Müller</span>
                          </td>

                          <td className="invoice_subhead">
                            <span className="subHeadText">Haircut</span>
                          </td>
                          <td className="invoice_subhead">
                            <Image
                              src={Images.clockImg}
                              alt="clock"
                              className="clockImg me-2"
                            />
                            <span className="subHeadText">
                              10:00 - 11:00 am
                            </span>
                          </td>

                          <td className="invoice_subhead">
                            <div className="checkinBg">
                              <figure className="checkinBox me-2">
                                <span className="textSmall me-2">Check-in</span>
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
                        <tr className="product_invoice bookCheck">
                          <td className="invoice_subhead">
                            <div className="d-flex">
                              <figure className="">
                                <Image
                                  src={Images.userAvtar}
                                  alt="avtar"
                                  className="avtarImg me-2"
                                />
                              </figure>
                              <div className="">
                                <span className="subHeadText">
                                  Elena Sergeyevna
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
                            <span className="subHeadText">Marianne Müller</span>
                          </td>

                          <td className="invoice_subhead">
                            <span className="subHeadText">Haircut</span>
                          </td>
                          <td className="invoice_subhead">
                            <Image
                              src={Images.clockImg}
                              alt="clock"
                              className="clockImg me-2"
                            />
                            <span className="subHeadText">
                              10:00 - 11:00 am
                            </span>
                          </td>

                          <td className="invoice_subhead">
                            <div className="checkinBg">
                              <figure className="checkinBox me-2">
                                <span className="textSmall me-2">Check-in</span>
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
                        <tr className="product_invoice bookCheck">
                          <td className="invoice_subhead">
                            <div className="d-flex">
                              <figure className="">
                                <Image
                                  src={Images.userAvtar}
                                  alt="avtar"
                                  className="avtarImg me-2"
                                />
                              </figure>
                              <div className="">
                                <span className="subHeadText">
                                  Elena Sergeyevna
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
                            <span className="subHeadText">Marianne Müller</span>
                          </td>

                          <td className="invoice_subhead">
                            <span className="subHeadText">Haircut</span>
                          </td>
                          <td className="invoice_subhead">
                            <Image
                              src={Images.clockImg}
                              alt="clock"
                              className="clockImg me-2"
                            />
                            <span className="subHeadText">
                              10:00 - 11:00 am
                            </span>
                          </td>

                          <td className="invoice_subhead">
                            <div className="checkinBg">
                              <figure className="checkinBox me-2">
                                <span className="textSmall me-2">Check-in</span>
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
                        <tr className="product_invoice bookCheck">
                          <td className="invoice_subhead">
                            <div className="d-flex">
                              <figure className="">
                                <Image
                                  src={Images.userAvtar}
                                  alt="avtar"
                                  className="avtarImg me-2"
                                />
                              </figure>
                              <div className="">
                                <span className="subHeadText">
                                  Elena Sergeyevna
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
                            <span className="subHeadText">Marianne Müller</span>
                          </td>

                          <td className="invoice_subhead">
                            <span className="subHeadText">Haircut</span>
                          </td>
                          <td className="invoice_subhead">
                            <Image
                              src={Images.clockImg}
                              alt="clock"
                              className="clockImg me-2"
                            />
                            <span className="subHeadText">
                              10:00 - 11:00 am
                            </span>
                          </td>

                          <td className="invoice_subhead">
                            <div className="checkinBg">
                              <figure className="checkinBox me-2">
                                <span className="textSmall me-2">Check-in</span>
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
                        <tr className="product_invoice bookCheck">
                          <td className="invoice_subhead">
                            <div className="d-flex">
                              <figure className="">
                                <Image
                                  src={Images.userAvtar}
                                  alt="avtar"
                                  className="avtarImg me-2"
                                />
                              </figure>
                              <div className="">
                                <span className="subHeadText">
                                  Elena Sergeyevna
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
                            <span className="subHeadText">Marianne Müller</span>
                          </td>

                          <td className="invoice_subhead">
                            <span className="subHeadText">Haircut</span>
                          </td>
                          <td className="invoice_subhead">
                            <Image
                              src={Images.clockImg}
                              alt="clock"
                              className="clockImg me-2"
                            />
                            <span className="subHeadText">
                              10:00 - 11:00 am
                            </span>
                          </td>

                          <td className="invoice_subhead">
                            <div className="checkinBg">
                              <figure className="checkinBox me-2">
                                <span className="textSmall me-2">Check-in</span>
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
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
