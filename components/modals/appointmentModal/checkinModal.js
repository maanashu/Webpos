import React, { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import CustomModal from "../../customModal/CustomModal";
import CheckedInModal from "../../../components/modals/appointmentModal/checkedInModal";
import moment from "moment-timezone";

const CheckinModal = ({
  bookingDetails,
  formattedTime,
  close,
  onConfirmPress,
  onDeclinePress,
}) => {
  const [key, setKey] = useState(Math.random());
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });

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
  const userDetails = bookingDetails?.user_details;
  const invitedUserDetails = bookingDetails?.invitation_details;
  const userId = bookingDetails?.user_id;
  const customerDetails = userId != null ? userDetails : invitedUserDetails;

  return (
    <>
      <div className="checkService_">
        <div className="checkinDetails">
          <div className="checkUser">
            <div className="userCheckin">
              <h6 className="textSmall">Customer</h6>
              <span className="textSmall mt-4">
                {bookingDetails?.mode_of_payment == "cash" ? "Unpaid" : "Paid"}
              </span>
            </div>

            <div className="customerCheck d-flex mt-2">
              <figure className="">
                <Image
                  src={customerDetails?.profile_photo ?? Images.userImages}
                  width={50}
                  height={50}
                  className="img-fluid userImg40"
                  alt="customerImg"
                />
              </figure>
              <div className="">
                <span className="innerHeading">
                  {`${customerDetails?.firstname} ${customerDetails?.lastname}`}{" "}
                </span>
                <div className="">
                  <Image
                    src={Images.locatePurple}
                    alt="locate"
                    className="locate me-2"
                  />
                  <span className="purpleText">
                    {`${
                      bookingDetails?.user_details?.current_address?.city ?? "-"
                    }, ${
                      bookingDetails?.user_details?.current_address?.state ??
                      " "
                    }`}
                  </span>
                </div>
              </div>
            </div>
            <div className="userCheckin mt-4">
              <h6 className="textSmall fw-600">Service Time:</h6>
              <div className="userService">
                <span className="subHeadText me-2">
                  {" "}
                  {bookingDetails?.product_name}
                </span>
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
                      .utc(bookingDetails?.start_date_time)
                      .format("dddd, DD/MM/YYYY")}
                  </span>
                </div>
                <div className="serviceDate">
                  <Image
                    src={Images.timeImg}
                    alt="timeIcon"
                    className="timeImage me-2"
                  />
                  <span className="purpleText fw-600">{formattedTime}</span>
                </div>
              </div>
            </div>
            <div className="borderDashed"></div>
            <div className="serviceAmount mt-4 mb-2">
              <h6 className="textSmall fw-700">Total</h6>
              <h6 className="textSmall fw-700">{`$ ${bookingDetails?.actual_price}`}</h6>
            </div>
          </div>
        </div>
        <div className="CustomerBtn mt-4">
          <button
            className="declineBtn"
            type="submit"
            onClick={() => onDeclinePress()}
          >
            Decline
          </button>
          <button
            className="confirmbtn"
            type="submit"
            onClick={() => {
              onConfirmPress();
              //   handleUserProfile("checkedIn");
            }}
          >
            Confirm
            <Image
              src={Images.ArrowRight}
              alt="greenRight"
              className="img-fluid "
            />
          </button>
        </div>
      </div>
      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        className={
          modalDetail.flag === "checkedIn" ? "commonWidth customContent" : ""
        }
        ids={modalDetail.flag === "checkedIn" ? "checkedIn" : ""}
        child={
          modalDetail.flag === "checkedIn" ? (
            <CheckedInModal close={() => handleOnCloseModal()} />
          ) : (
            ""
          )
        }
        header={
          modalDetail.flag === "checkedIn" ? (
            <>
              {/* <div className='trackingSub headerModal '>
                           
                        </div> */}
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

export default CheckinModal;
