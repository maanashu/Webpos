import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { Fonts, calendarSettingsIcon, crossButton } from '@/assets';
import * as Images from "./../../utilities/images";
// import * as Images from "./../../utilities/images";
// import { COLORS, SF } from '@/theme';
// import { ms } from 'react-native-size-matters';
// import Modal from 'react-native-modal';
import {
  APPOINTMENT_REQUEST_MODE,
  CALENDAR_MODES,
  CALENDAR_TIME_FORMAT,
  EMPLOYEES_COLOR_SET_MODE,
} from "../../constants/enums";
import { Spacer } from "../Spacer";

const CalendarSettingModal = ({
  isVisible,
  setIsVisible,
  currentCalendarMode,
  currentTimeFormat,
  defaultSettingsForCalendar,
  onPressSave = () => {},
}) => {
  // const getSettingData = useSelector(getSetting);
  // const defaultSettingsForCalendar = getSettingData?.getSetting;
  const [defaultCalendarMode, setDefaultCalendarMode] =
    useState(currentCalendarMode);
  const [defaultTimeFormat, setDefaultTimeFormat] = useState(currentTimeFormat);
  const [defaultAppointmentRequestMode, setDefaultAppointmentRequestMode] =
    useState(
      defaultSettingsForCalendar?.accept_appointment_request ??
        APPOINTMENT_REQUEST_MODE.MANUAL
    );
  const [defaultEmployeesColorSet, setDefaultEmployeesColorSet] = useState(
    defaultSettingsForCalendar?.employee_color_set ??
      EMPLOYEES_COLOR_SET_MODE.DEFAULT
  );
  return (
    // <Modal
    //   isVisible={isVisible}
    //   backdropOpacity={0.11}
    //   style={{ position: 'absolute', right: width * 0.04, top: height * 0.05 }}
    // >
    <View style={styles.calendarSettingModalContainer}>
      <View style={styles.preferanceHeader}>
        <Image
          source={"../images/Settings.svg"}
          resizeMode="contain"
          style={styles.settingIcon}
        />
        <Text style={styles.title}>Preferences</Text>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(false);
          }}
        >
          <Image
            source={"../images/Cross.svg"}
            resizeMode="contain"
            style={styles.settingIcon}
          />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.mainOptionTitleContainer} /> */}

      <View style={{ marginTop: 32 }}>
        <Text style={styles.substitle}>Default Calendar View</Text>
        <Spacer space={6} />

        <View style={styles.subContainerCheckBox}>
          <TouchableOpacity
            onPress={() => setDefaultCalendarMode(CALENDAR_MODES.DAY)}
            style={styles.checkboxContainer}
          >
            <Image
              source={
                defaultCalendarMode === CALENDAR_MODES.DAY
                  ? "../images/radioFilled.png"
                  : "../images/radioBlank.png"
              }
              style={styles.checkboxIcon}
              resizeMode="contain"
            />

            <Text style={styles.checkboxTitle}>Day View</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDefaultCalendarMode(CALENDAR_MODES.WEEK)}
            style={styles.checkboxContainer}
          >
            <Image
              source={
                defaultCalendarMode === CALENDAR_MODES.WEEK
                  ? "../images/radioFilled.png"
                  : "../images/radioBlank.png"
              }
              style={styles.checkboxIcon}
              resizeMode="contain"
            />
            <Text style={styles.checkboxTitle}>Week View</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDefaultCalendarMode(CALENDAR_MODES.MONTH)}
            style={styles.checkboxContainer}
          >
            <Image
              source={
                defaultCalendarMode === CALENDAR_MODES.MONTH
                  ? "../images/radioFilled.png"
                  : "../images/radioBlank.png"
              }
              style={styles.checkboxIcon}
              resizeMode="contain"
            />
            <Text style={styles.checkboxTitle}>Month View</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainOptionTitleContainer} />
      <Spacer space={16} />
      <View>
        <Text style={styles.substitle}>Time Format</Text>

        <Spacer space={3} />
        <View style={styles.subContainerCheckBox}>
          <TouchableOpacity
            onPress={() =>
              setDefaultTimeFormat(CALENDAR_TIME_FORMAT.TWELVE_HOUR)
            }
            style={styles.checkboxContainer}
          >
            <Image
              source={
                defaultTimeFormat === CALENDAR_TIME_FORMAT.TWELVE_HOUR
                  ? "../images/radioFilled.png"
                  : "../images/radioBlank.png"
              }
              style={styles.checkboxIcon}
              resizeMode="contain"
            />
            <Text style={styles.checkboxTitle}>12 Hours(AM/PM)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setDefaultTimeFormat(CALENDAR_TIME_FORMAT.TWENTY_FOUR_HOURS)
            }
            style={styles.checkboxContainer}
          >
            <Image
              source={
                defaultTimeFormat === CALENDAR_TIME_FORMAT.TWENTY_FOUR_HOURS
                  ? "../images/radioFilled.png"
                  : "../images/radioBlank.png"
              }
              style={styles.checkboxIcon}
              resizeMode="contain"
            />
            <Text style={styles.checkboxTitle}>24 Hours</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainOptionTitleContainer} />
      <Spacer space={16} />

      <View>
        <Text style={styles.substitle}>Appointment Request</Text>

        <Spacer space={3} />

        <View style={styles.subContainerCheckBox}>
          <TouchableOpacity
            onPress={() =>
              setDefaultAppointmentRequestMode(APPOINTMENT_REQUEST_MODE.MANUAL)
            }
            style={styles.checkboxContainer}
          >
            <Image
              source={
                defaultAppointmentRequestMode ===
                APPOINTMENT_REQUEST_MODE.MANUAL
                  ? "../images/radioFilled.png"
                  : "../images/radioBlank.png"
              }
              style={styles.checkboxIcon}
              resizeMode="contain"
            />
            <Text style={styles.checkboxTitle}>Accept Manually</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setDefaultAppointmentRequestMode(
                APPOINTMENT_REQUEST_MODE.AUTOMATIC
              )
            }
            style={styles.checkboxContainer}
          >
            <Image
              source={
                defaultAppointmentRequestMode ===
                APPOINTMENT_REQUEST_MODE.AUTOMATIC
                  ? "../images/radioFilled.png"
                  : "../images/radioBlank.png"
              }
              style={styles.checkboxIcon}
              resizeMode="contain"
            />
            <Text style={styles.checkboxTitle}>Accept Automatically</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainOptionTitleContainer} />
      <Spacer space={16} />

      <View>
        <Text style={styles.substitle}>Employee's Color Set</Text>

        <Spacer space={3} />
        <View style={styles.subContainerCheckBox}>
          <TouchableOpacity
            onPress={() =>
              setDefaultEmployeesColorSet(EMPLOYEES_COLOR_SET_MODE.DEFAULT)
            }
            style={styles.checkboxContainer}
          >
            <Image
              source={
                defaultEmployeesColorSet === EMPLOYEES_COLOR_SET_MODE.DEFAULT
                  ? "../images/radioFilled.png"
                  : "../images/radioBlank.png"
              }
              style={styles.checkboxIcon}
              resizeMode="contain"
            />
            <Text style={styles.checkboxTitle}>Default</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setDefaultEmployeesColorSet(EMPLOYEES_COLOR_SET_MODE.MANUAL)
            }
            style={styles.checkboxContainer}
          >
            <Image
              source={
                defaultEmployeesColorSet === EMPLOYEES_COLOR_SET_MODE.MANUAL
                  ? "../images/radioFilled.png"
                  : "../images/radioBlank.png"
              }
              style={styles.checkboxIcon}
              resizeMode="contain"
            />
            <Text style={styles.checkboxTitle}>Manual</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Spacer space={32} />
      <View style={styles._btnContainer}>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(false);
          }}
          style={styles.declineBtnContainer}
        >
          <Text style={styles.declineText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            const calendarSettings = {
              defaultCalendarMode: defaultCalendarMode,
              defaultTimeFormat: defaultTimeFormat,
              defaultAppointmentRequestMode: defaultAppointmentRequestMode,
              defaultEmployeesColorSet: defaultEmployeesColorSet,
            };
            onPressSave(calendarSettings);
            setIsVisible(false);
          }}
          style={[styles.acceptbtnContainer]}
        >
          <Text style={styles.approveText}>Save Changes</Text>
          <Image
            source={"../images/arrowtopright.svg"}
            resizeMode="contain"
            style={styles.arrowImage}
          />
        </TouchableOpacity>
      </View>
    </View>
    // </Modal>
  );
};

export default CalendarSettingModal;

const styles = StyleSheet.create({
  checkboxTitle: {
    fontWeight: "600",
    color: "#263682",
    fontSize: 12,
    marginLeft: 5,
  },
  checkboxIcon: { height: 18, width: 18 },
  checkboxContainer: { flexDirection: "row", flex: 1 },
  subContainerCheckBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  substitle: {
    fontWeight: "600",
    color: "#263682",
    fontSize: 14,
  },
  mainOptionTitleContainer: {
    height: 1,
    width: "100%",
    backgroundColor: "#D7DEFF",
    marginVertical: 10,
  },
  title: { fontWeight: "600", fontSize: 16, color: "#263682" },
  calendarSettingModalContainer: {
    padding: 10,
    paddingVertical: 15,
    alignSelf: "center",
    borderRadius: 10,
  },
  _btnContainer: {
    flexDirection: "row",
    // position: "absolute",
    // bottom: 10,
    alignSelf: "center",
  },
  declineBtnContainer: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E4E6F2",
    borderRadius: 30,
    paddingHorizontal: 24,
  },
  acceptbtnContainer: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#263682",
    borderRadius: 30,
    marginLeft: 8,
    flexDirection: "row",
    paddingHorizontal: 24,
  },
  approveText: {
    color: "#fff",
    fontSize: 12,
  },
  declineText: {
    fontWeight: "600",
    fontSize: 12,
    color: "#263682",
  },
  preferanceHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingIcon: {
    height: 24,
    width: 24,
    tintColor: "#263682",
  },
  arrowImage: {
    height: 20,
    width: 20,
    tintColor: "#58C2E8",
    top: 1,
    left: 3,
  },
});
