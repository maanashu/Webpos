import React from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { selectRetailData } from "../../redux/slices/retails";
import { selectLoginAuth } from "../../redux/slices/auth";
import Link from "next/link";

const AddService = () => {
  const router = useRouter();
  const retailData = useSelector(selectRetailData);
  const SingleServiceData = retailData?.oneServiceData;
  const serviceDetail = SingleServiceData?.product_detail;
  const authData = useSelector(selectLoginAuth);
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
                    src={serviceDetail?.image}
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
                <h4 className="loginMain">{serviceDetail?.name}.</h4>
                <p className="userIdText">
                  {" "}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: serviceDetail?.description,
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
                    <span className="AppointmentEstTime ms-2">
                      Est. 45-60min
                    </span>
                  </figure>
                  <h4 className="loginMain m-0">${serviceDetail?.price}</h4>
                </div>
              </div>
              <div className="providerSection">
                <h4 className="amountText m-0">Provider</h4>
                <div className="row">
                  {serviceDetail?.pos_staff?.map((data, idx) => {
                    const firstName =
                      data?.user?.user_profiles?.firstname ?? "";
                    const lastName = data?.user?.user_profiles?.lastname ?? "";
                    const fullName = `${firstName} ${lastName}`;
                    return (
                      <div key={idx} className="col-lg-4 col-md-4">
                        <div className="addServiceProfile active">
                          <Image
                            src={data?.user?.user_profiles?.profile_photo}
                            alt="providerProfileImage"
                            className="providerImage"
                            height={100}
                            width={100}
                          />
                          <h4 className="amountText ">{fullName}</h4>
                          <h6 className="providerSubText">
                            {data?.user?.user_profiles?.business_details}
                          </h6>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="paginationImg text-center">
                <Image
                  src={Images.paginationImg}
                  alt="Paginationimage"
                  className="img-fluid "
                />
              </div>
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
                <div className="appointmenMonth">
                  <Image
                    src={Images.calendarLight}
                    alt="calendarimage"
                    className="img-fluid"
                  />
                  <span className="monthText ms-2">October</span>
                  <Image
                    src={Images.arrowDown}
                    alt="calendarimage"
                    className="img-fluid ms-5"
                  />
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
                  <strong className="fw-bold"> Dr. Africa Zwarawi</strong>
                </h4>
              </div>
              <div className="daycalendar">
                <div className="serviceArrow">
                  <Image
                    src={Images.serviceLeft}
                    alt="calendarimage"
                    className="img-fluid"
                  />
                </div>
                <div className="daysubCalendar">
                  <div className="serviceDate">
                    <h4 className="productName">Tomorrow</h4>
                    <h4 className="dateText">28</h4>
                  </div>
                  <div className="serviceDate">
                    <h4 className="productName">Tomorrow</h4>
                    <h4 className="dateText">28</h4>
                  </div>
                  <div className="serviceDate">
                    <h4 className="productName">Tomorrow</h4>
                    <h4 className="dateText">28</h4>
                  </div>
                  <div className="serviceDate active">
                    <h4 className="productName">Tomorrow</h4>
                    <h4 className="dateText">28</h4>
                  </div>
                </div>
                <div className="serviceArrow">
                  <Image
                    src={Images.serviceRight}
                    alt="calendarimage"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="serviceDayTime">
                <div className="scheduleDay">
                  <div className="scheduleTimeImg"></div>
                  <div className="scheduleTime active">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                </div>
                <div className="scheduleDay">
                  <div className="scheduleTimeImg"></div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                </div>
                <div className="scheduleDay">
                  <div className="scheduleTimeImg"></div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                </div>
                <div className="scheduleDay">
                  <div className="scheduleTimeImg"></div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                </div>
                <div className="scheduleDay">
                  <div className="scheduleTimeImg"></div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                </div>
                <div className="scheduleDay">
                  <div className="scheduleTimeImg"></div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                </div>
                <div className="scheduleDay">
                  <div className="scheduleTimeImg"></div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                </div>
                <div className="scheduleDay">
                  <div className="scheduleTimeImg"></div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                </div>
                <div className="scheduleDay">
                  <div className="scheduleTimeImg"></div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                </div>
                <div className="scheduleDay">
                  <div className="scheduleTimeImg"></div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                  <div className="scheduleTime">
                    <h4 className="addServicePara m-0">11:00 — 11:30</h4>
                  </div>
                </div>
              </div>
              <div className="serviceFooter">
                <button className="nextverifyBtn w-100" type="submit">
                  Confirm and Add to Cart
                  <Image
                    src={Images.serviceCart}
                    alt="rightArrow"
                    className="img-fluid rightImg ms-2"
                  />
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
