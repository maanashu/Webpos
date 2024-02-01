import React, { useMemo } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as Images from "../utilities/images";
import { CALENDAR_VIEW_MODES } from "../constants/enums";
import { Spacer } from "./Spacer";

const CalendarHeaderWithOptions = ({
  prevMonth,
  getFormattedHeaderDate,
  nextMonth,
  day,
  dayHandler,
  week,
  weekHandler,
  month,
  monthHandler,
  onPressCalendarIcon = () => {},
  shouldShowCalendarModeOptions = true,
  calendarViewMode,
  onPressCalendarViewMode = () => {},
  onPressListViewMode = () => {},
  onPressNotification = () => {},
  onPressSearch = () => {},
}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        calenderHeader: {
          height: 60,
          backgroundColor: "#fff",
          justifyContent: "center",
          paddingHorizontal: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        displayFlex: {
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
        monthlySchduelNew: {
          backgroundColor: "#fff",
          borderRadius: 3,
          paddingHorizontal: 5,
          justifyContent: "center",
          alignItems: "center",
        },
        leftLight: {
          width: 40,
          height: 40,
          resizeMode: "contain",
        },
        row: {
          flexDirection: "row",
        },
        rowHorizonCenter: {
          alignItems: "center",
        },
        buttonCalender: {
          borderWidth: 0.8,
          borderColor: "#D7DEFF",
          borderRadius: 50,
          paddingVertical: 2,
          paddingHorizontal: 6,
        },
        monthlySchduleDate: {
          // fontFamily: "Montserrat-Medium",
          color: "#263682",
          fontSize: 16,
          paddingHorizontal: 5,
        },
        arrowButtonStl: {
          borderRadius: 2,
          paddingHorizontal: 3,
          paddingVertical: 2,
        },
        flexAlign: {
          flexDirection: "row",
          alignItems: "center",
        },
        calenderModeView: {
          backgroundColor: "#F5F6F7",
          height: 50,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        },
        clickedButtonCon: {
          backgroundColor: "#263682",
          height: 50,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 20,
        },
        unClickedButtonCon: {
          backgroundColor: "#F5F6F7",
          height: 50,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 20,
        },
        checkedText: {
          // fontFamily: Fonts.Regular,
          color: "#fff",
          fontSize: 16,
        },
        unCheckedText: {
          // fontFamily: Fonts.Regular,
          color: "#263682",
          fontSize: 16,
        },
        deliveryView: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        truckStyle: {
          width: 32,
          height: 32,
          resizeMode: "contain",
        },
        calenderModeIcons: {
          width: 24,
          height: 24,
          resizeMode: "contain",
        },
        title1: {
          // fontFamily: Fonts.SemiBold,
          color: "#263682",
          fontSize: 20,
          paddingHorizontal: 5,
        },
      }),
    []
  );

  return (
    <View style={styles.calenderHeader}>
      <View style={styles.displayFlex}>
        <View style={styles.monthlySchduelNew}>
          <View style={styles.displayFlex}>
            <Image source={"/images/bookImg.svg"} style={styles.leftLight} />
            <Text style={styles.title1}>{`Bookings`}</Text>
            <Spacer space={16} horizontal />

            <TouchableOpacity
              onPress={onPressCalendarIcon}
              style={[
                styles.row,
                styles.rowHorizonCenter,
                styles.buttonCalender,
              ]}
            >
              <TouchableOpacity
                style={styles.arrowButtonStl}
                onPress={prevMonth}
              >
                <Image
                  source={"/images/arrowLeftPos.svg"}
                  style={styles.leftLight}
                />
              </TouchableOpacity>
              <Text
                style={styles.monthlySchduleDate}
              >{`${getFormattedHeaderDate()}`}</Text>
              <TouchableOpacity
                style={styles.arrowButtonStl}
                onPress={nextMonth}
              >
                <Image
                  source={"/images/rightArrowPos.svg"}
                  style={styles.leftLight}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <Spacer space={16} horizontal />

            {shouldShowCalendarModeOptions && (
              <View style={[styles.flexAlign, styles.calenderModeView]}>
                <TouchableOpacity
                  style={
                    day ? styles.clickedButtonCon : styles.unClickedButtonCon
                  }
                  onPress={dayHandler}
                >
                  <Text style={day ? styles.checkedText : styles.unCheckedText}>
                    {"Day"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    week ? styles.clickedButtonCon : styles.unClickedButtonCon
                  }
                  onPress={weekHandler}
                >
                  <Text
                    style={week ? styles.checkedText : styles.unCheckedText}
                  >
                    {"Week"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    month ? styles.clickedButtonCon : styles.unClickedButtonCon
                  }
                  onPress={monthHandler}
                >
                  <Text
                    style={month ? styles.checkedText : styles.unCheckedText}
                  >
                    {"Month"}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={{ flex: 1 }} />

        <View style={styles.deliveryView}>
          <TouchableOpacity onPress={onPressNotification}>
            <Image
              source={"/images/notification.svg"}
              style={[styles.truckStyle]}
            />
          </TouchableOpacity>
          <Spacer space={16} horizontal />
          <TouchableOpacity onPress={onPressSearch}>
            <Image
              source={"/images/SearchIcon.svg"}
              style={[styles.truckStyle]}
            />
          </TouchableOpacity>
        </View>
        <Spacer space={8} horizontal />

        {/* Appointment View type */}
        <View style={styles.flexAlign}>
          <TouchableOpacity
            style={
              calendarViewMode === CALENDAR_VIEW_MODES.CALENDAR_VIEW
                ? styles.clickedButtonCon
                : styles.unClickedButtonCon
            }
            onPress={onPressCalendarViewMode}
          >
            <Image
              source={"/images/calendarDark.svg"}
              style={[
                styles.calenderModeIcons,
                {
                  tintColor: CALENDAR_VIEW_MODES.CALENDAR_VIEW
                    ? "#58C2E8"
                    : "#263682",
                },
              ]}
            />
            <Spacer space={8} horizontal />
            <Text
              style={
                calendarViewMode === CALENDAR_VIEW_MODES.CALENDAR_VIEW
                  ? styles.checkedText
                  : styles.unCheckedText
              }
            >
              {"Calendar View"}
            </Text>
          </TouchableOpacity>
          <Spacer space={8} horizontal />
          <TouchableOpacity
            style={
              calendarViewMode === CALENDAR_VIEW_MODES.LIST_VIEW
                ? styles.clickedButtonCon
                : styles.unClickedButtonCon
            }
            onPress={onPressListViewMode}
          >
            <Image
              source={"/images/listImg.svg"}
              style={styles.calenderModeIcons}
            />
            <Spacer space={8} horizontal />
            <Text
              style={
                calendarViewMode === CALENDAR_VIEW_MODES.LIST_VIEW
                  ? styles.checkedText
                  : styles.unCheckedText
              }
            >
              {"List View"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CalendarHeaderWithOptions;
