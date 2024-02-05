import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Platform,
  Dimensions,
  StyleSheet,
} from "react-native";
import * as Images from "./../../utilities/images";
import moment from "moment-timezone";
import {
  calculateDuration,
  calculateTimeDuration,
  getCalendarActionButtonTitle,
} from "./../../utilities/globalMethods";
import { useState } from "react";
import { Spacer } from "../Spacer";
import { Button } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { APPOINTMENT_STATUS } from "../../constants/enums";
const { height, width } = Dimensions.get("window");

const EventDetailModal = ({
  showEventDetailModal,
  setshowEventDetailModal,
  eventData,
  onAppointmentStatusUpdate,
  onModifyAppointmentPress,
}) => {
  // const dispatch = useDispatch();
  const { completeData, allEvents } = eventData;
  const [showRescheduleTimeModal, setshowRescheduleTimeModal] = useState(false);
  // const [showVerifyOTPModal, setshowVerifyOTPModal] = useState(false);
  const [selectedStaffUserId, setSelectedStaffUserId] = useState(
    completeData?.pos_user_details.user?.unique_uuid
  );
  const [selectedPosStaffCompleteData, setSelectedPosStaffCompleteData] =
    useState(completeData);

  const userDetails = selectedPosStaffCompleteData?.user_details ?? {};
  const invitedUserDetails =
    selectedPosStaffCompleteData?.invitation_details ?? {};
  const userId = selectedPosStaffCompleteData?.user_id;
  const customerDetails = userId != null ? userDetails : invitedUserDetails;
  const userAddress = userDetails?.current_address;
  const appointmentDetail = selectedPosStaffCompleteData;
  const posUserDetails =
    selectedPosStaffCompleteData?.pos_user_details?.user?.user_profiles;
  const posUserRole =
    selectedPosStaffCompleteData?.pos_user_details?.user?.user_roles[0]?.role
      ?.name || " ";
  const colorCode = selectedPosStaffCompleteData?.pos_user_details?.color_code;
  const appointmentId = selectedPosStaffCompleteData?.id;
  //Update the state with initial values if it doesn't get updated while initialization of the states
  useEffect(() => {
    setSelectedPosStaffCompleteData(completeData);
    setSelectedStaffUserId(completeData?.pos_user_details.user?.unique_uuid);
  }, [eventData, completeData]);

  const hideAllModal = () => {
    setshowRescheduleTimeModal(false);
    setshowEventDetailModal(false);
  };
  return (
    <View style={styles.eventDetailModalContainer}>
      <View style={styles.rowAlignedJustified}>
        <View style={styles.rowAligned}>
          <Image
            source={"../images/calendarBlue.svg"}
            style={styles.requestCalendarIconSmall}
            resizeMode="contain"
          />
          <Spacer horizontal space={5} />
          <Text style={styles.modalHeading}>{"Appointnment Details"}</Text>
        </View>
        <TouchableOpacity onPress={() => setshowEventDetailModal(false)}>
          <Image
            source={"../images/Cross.svg"}
            style={[styles.closeIcon, { marginRight: 10 }]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Spacer space={24} />
      {customerDetails && (
        <View style={[styles.customerDetailContainerBorder, { marginTop: 5 }]}>
          <View style={styles.rowAlignedJustified}>
            <Text style={styles._eventTitle}>Customer:</Text>
            <View
              style={[
                styles.paidContainer,
                {
                  backgroundColor:
                    completeData?.mode_of_payment == "cash"
                      ? "#fff"
                      : "#12B76A",
                },
              ]}
            >
              <Text
                style={[
                  styles.paidText,
                  {
                    color:
                      completeData?.mode_of_payment == "cash"
                        ? "#263682"
                        : "#fff",
                  },
                ]}
              >
                {completeData?.mode_of_payment == "cash" ? "Unpaid" : "Paid"}
              </Text>
              {completeData?.mode_of_payment != "cash" && (
                <>
                  <Spacer horizontal space={8} />
                  <Image
                    source={"../images/complete.svg"}
                    resizeMode="contain"
                    style={styles.checkStyle}
                  />
                </>
              )}
            </View>
          </View>
          <View style={styles.rowJustified}>
            <Image
              source={
                customerDetails?.profile_photo ?? "../images/defaultUser.svg"
              }
              style={styles.customerUserProfile}
            />

            <View style={{ marginLeft: 6, flex: 1, justifyContent: "center" }}>
              <Text style={styles.customerName}>
                {customerDetails?.firstname + " " + customerDetails?.lastname}
              </Text>
              {userId !== null && (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={"../images/locatePurple.svg"}
                    style={styles.eventAddressIcon}
                  />
                  <Text style={styles.eventAddress}>
                    {userAddress?.street_address}
                  </Text>
                </View>
              )}
            </View>
          </View>
          <Spacer space={3} />

          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 8 }}>
              <Text style={styles.customerName}>
                {posUserDetails?.firstname + " " + posUserDetails?.lastname}
              </Text>
              <Text style={styles.eventAddress}>{posUserRole}</Text>
            </View>
            <Image
              source={
                posUserDetails?.profile_photo ?? "../images/defaultUser.png"
              }
              style={styles.customerUserProfile}
            />
          </View>
        </View>
      )}

      <View style={[styles.requestedServicesView, { marginTop: 3 }]}>
        <Text style={styles.servicesRequested}>Services requested:</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginLeft: 5 }}
        >
          <View style={styles.rowAligned}>
            <View style={styles.scrollableServicesView}>
              <Text style={styles.servicesName}>
                {completeData?.product_name}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      {/*  */}
      <Spacer space={16} />
      <View style={styles.serviceTimeView}>
        <Text style={styles.servicesRequested}>Service Time</Text>

        <Spacer space={8} />
        <View style={styles.rowAligned}>
          <View style={styles.rowAligned}>
            <Image
              style={styles.serviceTimeIcons}
              resizeMode="contain"
              source={"../images/calendarBlue.svg"}
            />
            <Text style={styles.serviceTimeTextSmall}>
              {moment
                .utc(completeData?.start_date_time)
                .format("dddd, DD/MM/YYYY")}
            </Text>
          </View>
          <Spacer horizontal space={10} />
          <View style={styles.rowAligned}>
            <Image
              source={"../images/clockImg.svg"}
              style={styles.serviceTimeIcons}
              resizeMode="contain"
            />
            <Text style={styles.serviceTimeTextSmall}>
              {calculateTimeDuration(completeData)}
            </Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View style={[styles.dashedLine, { marginVertical: 10 }]} />

      <View style={styles.amountSliptContainer}>
        <Spacer space={8} />
        <View style={styles.subtotalContainers}>
          <Text style={styles._eventHeading}>Sub Total</Text>
          <Text style={styles._eventTitle}>
            ${selectedPosStaffCompleteData?.actual_price}
          </Text>
        </View>
        <View style={styles.subtotalContainers}>
          <Text style={styles._eventHeading}>Discount</Text>
          <Text style={styles._eventTitle}>
            ${selectedPosStaffCompleteData?.discount || "0"}
          </Text>
        </View>
        <View style={styles.subtotalContainers}>
          <Text style={styles._eventHeading}>Taxes</Text>
          <Text style={styles._eventTitle}>
            ${selectedPosStaffCompleteData?.tax || "0"}
          </Text>
        </View>
        <View style={styles.subtotalContainers}>
          <Text style={styles._eventHeading}>Tips</Text>
          <Text style={styles._eventTitle}>
            ${selectedPosStaffCompleteData?.tips || "0"}
          </Text>
        </View>
        <View style={styles.subtotalContainers}>
          <Text style={styles._eventTitleBold}>Total</Text>
          <Text
            style={styles._eventTitleBold}
          >{`$${selectedPosStaffCompleteData?.price}`}</Text>
        </View>

        <Spacer space={4} />
        <View style={styles.subtotalContainers}>
          <Text style={styles.invoiceText}>Invoice</Text>
          <Text style={styles.invoiceText}>{`#${
            completeData?.invoices?.invoice_number ?? ""
          }`}</Text>
        </View>
      </View>

      <View style={[styles.dashedLine, { marginVertical: 10 }]} />

      <Spacer space={10} />
      <View style={styles.bottomBtnContainer}>
        {selectedPosStaffCompleteData?.status === 1 && (
          <>
            <TouchableOpacity
              style={styles.modifyButtonStyle}
              onPress={() =>
                onModifyAppointmentPress(selectedPosStaffCompleteData)
              }
            >
              <Text style={styles.editTextBtn}>Modify</Text>
              <Image
                source={"../images/bookImg.svg"}
                style={styles.editOptionIcon}
              />
            </TouchableOpacity>
            <Spacer space={10} horizontal />
          </>
        )}
        <Button
          title={getCalendarActionButtonTitle(
            selectedPosStaffCompleteData?.status
          )}
          disable={selectedPosStaffCompleteData?.status === 3}
          textStyle={styles.checkintitle}
          style={[
            styles.acceptButtonStyle,
            {
              backgroundColor:
                selectedPosStaffCompleteData?.status === 3
                  ? "#626262"
                  : "#263682",
            },
          ]}
          onPress={() => {
            if (selectedPosStaffCompleteData?.status === 1) {
              onAppointmentStatusUpdate(
                appointmentId,
                APPOINTMENT_STATUS.CHECKED_IN
              );

              hideAllModal();
            } else if (selectedPosStaffCompleteData?.status === 2) {
              onAppointmentStatusUpdate(
                appointmentId,
                APPOINTMENT_STATUS.COMPLETED
              );

              hideAllModal();
            }
          }}
        />
      </View>
    </View>
  );
};

export default EventDetailModal;

const styles = StyleSheet.create({
  eventDetailModalContainer: {
    padding: 10,
    paddingVertical: 15,
    alignSelf: "center",
    borderRadius: 10,
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
  requestCalendarIconSmall: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    tintColor: "#263682",
  },
  modalHeading: {
    fontWeight: "600",
    fontSize: 16,
    color: "#263682",
  },
  closeIcon: {
    height: 24,
    width: 24,
    tintColor: "#263682",
  },
  customerDetailContainerBorder: {
    paddingHorizontal: 10,
    borderColor: "#D7DEFF",
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 16,
  },
  _eventTitle: {
    fontWeight: "500",
    fontSize: 14,
    color: "#263682",
  },
  paidContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 30,
    marginTop: 3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 30,
  },
  paidText: {
    color: "#263682",
    fontSize: 12,
  },
  checkStyle: {
    height: 16,
    width: 16,
  },
  customerUserProfile: {
    height: 40,
    width: 40,
    resizeMode: "cover",
    borderRadius: 20,
  },
  customerNameText: {
    fontSize: 11,
    color: "#263682",
    fontWeight: "500",
  },
  eventAddressIcon: {
    height: 16,
    width: 16,
    resizeMode: "contain",
    tintColor: "#7233C2",
  },
  eventAddress: {
    fontWeight: "600",
    fontSize: 10,
    color: "#7233C2",
    marginTop: 2,
  },
  customerName: {
    fontWeight: "600",
    fontSize: 12,
    color: "#263682",
  },
  requestedServicesView: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  servicesRequested: {
    fontSize: 14,
    color: "#263682",
    fontWeight: "500",
  },
  scrollableServicesView: {
    backgroundColor: "#58C2E8",
    margin: 5,
    padding: 8,
    borderRadius: 15,
  },
  servicesName: {
    fontWeight: "500",
    color: "#fff",
    fontSize: 10,
  },
  serviceTimeIcons: {
    height: 20,
    width: 20,
    tintColor: "#263682",
  },
  serviceTimeTextSmall: {
    color: "#263682",
    fontWeight: "500",
    fontSize: 12,
    left: 3,
  },
  dashedLine: {
    width: "100%",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#7E8AC1",
    marginVertical: 13,
  },
  amountSliptContainer: {
    marginHorizontal: 5,
  },
  _eventHeading: {
    fontWeight: "500",
    fontSize: 12,
    color: "#636E9F",
  },
  subtotalContainers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 3,
  },
  bottomBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 14,
    marginTop: 10,
    alignSelf: "center",
  },
  modifyButtonStyle: {
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderColor: "#263682",
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  editTextBtn: { fontWeight: "600", fontSize: 14, color: "#263682" },
  editOptionIcon: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    tintColor: "#263682",
    left: 5,
  },
  checkintitle: { color: "#fff" },
  acceptButtonStyle: {
    // width: "42%",
    height: 40,
    backgroundColor: "#263682",
    flex: 1,
    borderRadius: 30,
    paddingVertical: 16,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rowJustified: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _eventTitleBold: {
    fontWeight: "800",
    fontSize: 12,
    color: "#263682",
  },
  invoiceText: {
    fontWeight: "600",
    fontSize: 12,
    color: "#308CAD",
  },
});
