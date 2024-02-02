import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Platform,
  ScrollView,
  StyleSheet,
  Modal,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import { ms } from "react-native-size-matters";

// import { COLORS, SF, SH, SW, ShadowStyles } from "@/theme";
import { Spacer } from "./Spacer";
import { ArrowButton } from "./ArrowButton";
import { Button } from "./Button";
import CustomAlert from "./CustomAlert";
// import { crossButton, Fonts, pin, userImage } from "@/assets";
// import { getRetail } from "@/selectors/RetailSelectors";

// import { getTimeSlots } from "@/actions/RetailAction";
import { useEffect } from "react";
import moment from "moment-timezone";
import {
  calculateDuration,
  calculateTimeDuration,
  calculateTimeSlotSelection,
  getDaysAndDates,
} from "./../utilities/globalMethods";
// import { strings } from "@/localization";
// import {
//   changeAppointmentStatus,
//   rescheduleAppointment,
// } from "@/actions/AppointmentAction";
import {
  CALENDAR_MODES,
  CALENDAR_VIEW_MODES,
  APPOINTMENT_STATUS,
} from "./../constants/enums";
// import ProfileImage from "@/components/ProfileImage";
import { memo } from "react";
// import { TYPES } from "@/Types/Types";
// import { isLoadingSelector } from "@/selectors/StatusSelectors";

import * as Images from "./../utilities/images";
import { selectLoginAuth } from "./../redux/slices/auth";
import {
  bookingsDetails,
  getServiceTimeSlots,
  updateAppointmentStatus,
  reScheduleAppointment,
} from "./../redux/slices/bookings";
const { height, width } = Dimensions.get("window");
const windowWidth = Dimensions.get("window").width;

const ReScheduleDetailModal = ({
  showRecheduleModal,
  onCloseModal,
  appointmentData,
  setshowEventDetailModal,
  onAppointmentUpdate,
}) => {
  const dispatch = useDispatch();

  const authData = useSelector(selectLoginAuth);

  const sellerID = authData?.usersInfo?.payload?.uniqe_id
    ? authData?.usersInfo?.payload?.uniqe_id
    : "";

  const appointmentDetail = appointmentData;
  const posUserDetails = appointmentData?.pos_user_details;
  const [selectedTimeSlotIndex, setselectedTimeSlotIndex] = useState(null);
  const appointmentsDetails = useSelector(bookingsDetails);
  const getStaffUsers = appointmentsDetails?.staffUsers;
  const [posUserId, setposUserId] = useState(null);
  const [providerDetail, setProviderDetail] = useState(null);
  const [selectedTimeSlotData, setSelectedTimeSlotData] = useState("");
  const [selectedDate, setselectedDate] = useState(
    moment(appointmentData?.date).format("YYYY-MM-DD")
  );

  const [preSelectedStartTime, setpreSelectedStartTime] = useState(
    appointmentData?.start_time
  );
  const [preSelectedEndTime, setpreSelectedEndTime] = useState(
    appointmentData?.end_time
  );
  const [timeSlotsData, setTimeSlotsData] = useState([]);

  const [selectedMonthData, setselectedMonthData] = useState(null);
  const [selectedYearData, setselectedYearData] = useState(null);

  const [monthDays, setmonthDays] = useState([]);

  const userDetails = appointmentData?.user_details;
  const userAddress = userDetails?.current_address;

  useEffect(() => {
    if (appointmentsDetails?.timeSlots) {
      const timeSlots = appointmentsDetails?.timeSlots?.filter(
        (timeSlot) => timeSlot?.is_available
      );
      setTimeSlotsData([...timeSlots]);
    }
  }, [appointmentsDetails?.timeSlots]);

  useEffect(() => {
    setProviderDetail(posUserDetails?.user);
    setposUserId(posUserDetails?.user?.unique_uuid);
  }, [posUserDetails]);

  useEffect(() => {
    const params = {
      seller_id: sellerID,
      product_id: appointmentDetail?.product_id,
      date: selectedDate,
      pos_user_id: posUserId,
    };

    dispatch(
      getServiceTimeSlots({
        params,
        cb(res) {
          if (res.status) {
          }
        },
      })
    );
  }, [posUserId, selectedDate]);

  useEffect(() => {
    const daysArray = getDaysAndDates(
      selectedYearData?.value,
      selectedMonthData?.value
    );
    setmonthDays(daysArray);
  }, [selectedMonthData, selectedYearData]);

  const isLoadingTimeSlot = appointmentsDetails?.serviceTimeSlotsLoading;

  const renderWeekItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 60,
          paddingHorizontal: 12,
          backgroundColor:
            item?.completeDate === selectedDate ? "#12B76A" : "#fff",
          marginHorizontal: 3,
          borderRadius: 13,
          marginVertical: 1,
        }}
        onPress={() => {
          setselectedDate(item?.completeDate);
          //Clear previous day selected time slot values
          setselectedTimeSlotIndex(null);
          setSelectedTimeSlotData("");
          setpreSelectedStartTime("");
          setpreSelectedEndTime("");
        }}
      >
        <Text
          style={{
            fontSize: 13,
            color: item?.completeDate === selectedDate ? "#fff" : "#263682",
          }}
        >
          {item?.completeDate === moment(new Date()).format("YYYY-MM-DD")
            ? "Today"
            : item?.day}
        </Text>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 14,
            color: item?.completeDate === selectedDate ? "#fff" : "#263682",
          }}
        >
          {item?.date}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderSlotItem = ({ item, index }) => (
    <>
      {!item?.is_available ? (
        <Image
          source={"../images/calendarCell.svg"}
          resizeMode="contain"
          style={{ width: "24.1%", height: 23.5, marginVertical: 1.5 }}
        />
      ) : (
        <TouchableOpacity
          disabled={!item?.is_available}
          style={{
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "23.5%",
            height: 32,
            borderColor:
              selectedTimeSlotIndex === index ? "#027547" : "#D7DEFF",
            backgroundColor:
              selectedTimeSlotIndex === index ? "#D1FADF" : "#fff",
            borderRadius: 8,
            margin: 1.5,
            overflow: "hidden",
          }}
          onPress={() => {
            setselectedTimeSlotIndex(index);
            setSelectedTimeSlotData(item);
          }}
        >
          {item?.is_available && (
            <Text
              style={{
                fontSize: 10,
                color: !item?.is_available
                  ? COLORS.row_grey
                  : selectedTimeSlotIndex === index
                  ? "#027547"
                  : "#636E9F",
              }}
            >
              {item?.start_time + " - " + item?.end_time}
            </Text>
          )}
        </TouchableOpacity>
      )}
    </>
  );

  const onReschuleAppointment = () => {
    if (!selectedTimeSlotData) {
      alert("Please select a time slot to rechedule the appointment");
      return;
    }

    const params = {
      appointmentId: appointmentData?.id,
    };

    params.requestData = {
      date: selectedDate,
      start_time: selectedTimeSlotData?.start_time,
      end_time: selectedTimeSlotData?.end_time,
      pos_user_id: posUserId,
    };

    dispatch(
      reScheduleAppointment({
        ...params,
        cb(res) {
          if (res.status) {
            onAppointmentUpdate();
          }
        },
      })
    );
    onCloseModal();
    setshowEventDetailModal(false);
  };

  const onCancelAppoinment = () => {
    if (confirm("Do you want to cancel this appointment")) {
      handleCancelAppointment();
    } else {
    }
    // CustomAlert({
    //   title: "Do you want to cancel this appointment",
    //   onYesPress: handleCancelAppointment,
    // });
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
            // getAllBookings();
            onAppointmentUpdate();
          }
        },
      })
    );
  };

  const onClickServiceProvider = (item) => {
    setposUserId(item?.user?.unique_uuid);
    setProviderDetail(item?.user);
  };

  const handleCancelAppointment = () => {
    const appointmentID = appointmentDetail?.id ?? "";

    updateBookingStatus(appointmentID, APPOINTMENT_STATUS.REJECTED_BY_SELLER);
    onCloseModal();
    // setshowEventDetailModal(false);
  };

  const renderServiceProviderItem = ({ item }) => {
    const borderColor =
      item?.user?.unique_uuid === posUserId ? "transparent" : "#D7DEFF";
    const imageUrl = item?.user?.user_profiles?.profile_photo;
    const isPng = imageUrl?.toLowerCase().endsWith(".png");
    return (
      <TouchableOpacity
        onPress={() => onClickServiceProvider(item)}
        style={[
          styles.staffInfoContainer,
          {
            borderColor: borderColor,
            ...(item?.user?.unique_uuid === posUserId && {
              elevation: 5,
              shadowColor: "#ababab",
              shadowRadius: 1.41,
              shadowOpacity: 0.1,
              shadowOffset: {
                width: 0,
                height: 2,
              },
            }),
          },
        ]}
      >
        <Image
          source={
            imageUrl && isPng ? { uri: imageUrl } : "../images/userImages.png"
          }
          style={
            imageUrl && isPng
              ? styles.staffProfilePic
              : styles.staticEmployeeImages
          }
        />

        <Spacer horizontal space={5} />

        <View>
          <Text
            numberOfLines={1}
            style={styles.staffNameText}
          >{`${item?.user?.user_profiles?.firstname} ${item?.user?.user_profiles?.lastname}`}</Text>
          <Text numberOfLines={1} style={styles.occupationText}>
            {""}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    // <Modal
    //   visible={showRecheduleModal}
    //   style={{
    //     right: width * 0.3,
    //     top: height * 0.3,
    //   }}
    //   transparent
    //   animationType="slide"
    // >
    <View style={styles.addCartCon}>
      <View style={styles.addCartConHeader}>
        <View style={styles.rowAligned}>
          <Image
            source={"../images/appointmentCalender.svg"}
            style={styles.calendarIcon}
          />
          <Spacer horizontal space={5} />

          <Text style={styles.modalHeading}>
            Edit Appointment #{appointmentData?.id ?? "ABC"}
          </Text>
        </View>
        <TouchableOpacity onPress={onCloseModal}>
          <Image source={"../images/Cross.svg"} style={styles.closeIconSmall} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {userDetails && (
            <View
              style={[
                styles.customerDetailContainer,
                { marginTop: 15, marginHorizontal: 22 },
              ]}
            >
              <View style={styles.rowAlignedJustified}>
                <Text style={styles._eventTitle}>Customer:</Text>
                <View style={styles.appointmentDateContainer}>
                  <Image
                    source={"../images/TodayCalender.svg"}
                    style={styles.bookedCalendarIcon}
                  />
                  <Spacer horizontal space={3} />
                  <Text style={styles.bookedDate}>
                    {moment
                      .utc(appointmentData?.start_date_time)
                      .format("DD/MM/YYYY. ")}
                  </Text>
                  <Text style={styles.bookedDate}>{`${moment
                    .utc(appointmentData?.start_date_time)
                    .format("h:mm A")}-${moment
                    .utc(appointmentData?.end_date_time)
                    .format("h:mm A")}`}</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 5,
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={
                    userDetails?.profile_photo ?? "../images/userImages.png"
                  }
                  style={styles.customerUserProfile}
                />
                <View style={{ marginLeft: 6, flex: 1 }}>
                  <Text style={styles.customerName}>
                    {userDetails?.firstname + " " + userDetails?.lastname}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={"../images/locatePurple.svg"}
                      style={styles.eventAddressIcon}
                    />
                    <Text style={styles.eventAddress}>
                      {userAddress?.street_address}
                    </Text>
                  </View>
                </View>
              </View>

              <Spacer space={24} />
              <FlatList
                data={getStaffUsers}
                renderItem={renderServiceProviderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )}

          <View
            style={{
              width: windowWidth * 0.42,
              alignSelf: "center",
              marginTop: userDetails ? 0 : 10,
            }}
          >
            {/* <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <View>
                    <Text style={[styles.selected, { fontSize: ms(12) }]}>
                      {appointmentDetail?.product_name}
                    </Text>
                    <Text style={{ fontFamily: Fonts.Regular, fontSize: ms(9), marginTop: ms(5) }}>
                      Est {estimatedServiceTime} mins
                    </Text>
                  </View>
                  <Text style={[styles.selected, { fontSize: ms(12) }]}>
                    {`$${appointmentData?.price}`}
                  </Text>
                </View>

                <Spacer space={ms(10)} />

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <MonthYearPicker
                    dateType={DATE_TYPE.MONTH}
                    placeholder={'Select Month'}
                    containerStyle={{ marginRight: 10 }}
                    defaultValue={moment().month() + 1}
                    defaultYear={selectedYearData?.value ?? moment().year()}
                    onSelect={(monthData) => {
                      setselectedMonthData(monthData);
                    }}
                  />
                  <MonthYearPicker
                    dateType={DATE_TYPE.YEAR}
                    placeholder={'Select Year'}
                    defaultValue={moment().year()}
                    onSelect={(yearData) => {
                      setselectedYearData(yearData);
                    }}
                  />
                </View>
              </View> */}

            <View
              style={{
                marginTop: 16,
                // borderWidth: 1,
                // borderColor: COLORS.solidGrey,
                width: "100%",
              }}
            >
              <FlatList
                horizontal
                data={monthDays}
                renderItem={renderWeekItem}
                showsHorizontalScrollIndicator={true}
              />

              <Spacer space={16} />
              {isLoadingTimeSlot ? (
                <View style={{ paddingVertical: 40 }}>
                  <ActivityIndicator size={"large"} />
                </View>
              ) : (
                <FlatList
                  scrollEnabled={false}
                  data={timeSlotsData || []}
                  numColumns={4}
                  renderItem={renderSlotItem}
                  ListEmptyComponent={() => (
                    <View
                      style={{
                        height: 50,
                        paddingHorizontal: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "600",
                          fontSize: 10,
                        }}
                      >
                        There are no slots available for this day
                      </Text>
                    </View>
                  )}
                />
              )}
            </View>
          </View>
          <Spacer space={32} />
          <View style={styles.cancelSavebtnReschedule}>
            <Button
              title="Cancel Appointment"
              textStyle={[styles.detailBtnCon]}
              style={[styles.continueBtnCon, {}]}
              onPress={onCancelAppoinment}
            />
            <Spacer space={10} horizontal />
            <ArrowButton
              title="Accept Changes"
              textStyle={styles.addTocartText}
              style={[styles.addToCartCon, {}]}
              onPress={onReschuleAppointment}
            />
          </View>
        </View>
      </ScrollView>
    </View>
    // </Modal>
  );
};

export default memo(ReScheduleDetailModal);

const styles = StyleSheet.create({
  staticEmployeeImages: {
    height: 21,
    width: 21,
    borderRadius: 21,
    resizeMode: "cover",
  },
  _eventTitle: {
    fontWeight: "600",
    fontSize: 12,
    color: "#263682",
  },
  eventAddress: {
    fontWeight: "600",
    fontSize: 10,
    color: "#7233C2",
    marginTop: 2,
  },
  eventAddressIcon: {
    height: 16,
    width: 16,
    resizeMode: "contain",
    tintColor: "#7233C2",
  },
  customerName: {
    fontWeight: "600",
    fontSize: 12,
    color: "#263682",
  },
  customerUserProfile: {
    height: 32,
    width: 32,
    resizeMode: "cover",
    borderRadius: 12,
  },
  customerDetailContainer: {
    paddingHorizontal: 10,
    // borderColor: COLORS.light_purple,
    // borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 16,
  },
  //New Reschedule Modal
  addCartCon: {
    backgroundColor: "white",
    borderRadius: 10,
    width: windowWidth * 0.45,
    // paddingBottom: ms(15),
    paddingTop: 5,
    alignSelf: "flex-end",
    height: height * 0.8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  addCartConHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    paddingHorizontal: 10,
    // borderBottomWidth: 1,
    // borderColor: COLORS.solidGrey,
    justifyContent: "space-between",
  },
  continueBtnCon: {
    height: 40,
    padding: 10,
    // width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderColor: "#ff0000",
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  addToCartCon: {
    // width: "45%",
    height: 40,
  },
  detailBtnCon: {
    color: "#ff0000",
    fontSize: 14,
    fontWeight: "600",
  },
  addTocartText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  selected: {
    fontSize: 8,
    fontWeight: "600",
    color: "#14171A",
  },
  calendarIcon: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    tintColor: "#263682",
  },
  bookedCalendarIcon: {
    height: 10,
    width: 10,
    resizeMode: "contain",
    tintColor: "#58C2E8",
  },
  staffNameText: {
    fontWeight: "600",
    fontSize: 10,
    color: "#263682",
  },
  occupationText: {
    fontWeight: "600",
    fontSize: 10,
    color: "#7E8AC1",
  },
  cancelSavebtnReschedule: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 26,
    alignSelf: "center",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
  },
  rowAligned: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowAlignedJustified: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  closeIconSmall: {
    height: 24,
    width: 24,
    tintColor: "#263682",
  },
  modalHeading: {
    fontWeight: "600",
    fontSize: 14,
    color: "#263682",
  },
  appointmentDateContainer: {
    height: 30,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#EFFBFF",
    borderColor: "#58C2E8",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bookedDate: {
    fontSize: 10,
    color: "#58C2E8",
  },
  staffInfoContainer: {
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 20,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 3,
    backgroundColor: "#fff",
    marginBottom: 3,
  },
  staffProfilePic: {
    width: 25,
    height: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#E4E6F2",
  },
});
