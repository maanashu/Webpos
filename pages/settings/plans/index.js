import { useEffect, useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { getActivePlan } from "../../../redux/slices/setting";
import { settingInfo } from "../../../redux/slices/setting";
import { useSelector } from "react-redux";

function Plan({ handleTouch }) {
  const dispatch = useDispatch();
  const settingData = useSelector(settingInfo);
  const [activePlan, setActivePlan] = useState([]);

  // get all plans
  useEffect(() => {
    dispatch(
      getActivePlan({
        cb(res) {
          if (res?.status) {
            setActivePlan(res?.data?.payload[0]);
          }
        },
      })
    );
  }, []);

  return (
    <>
      <div className="planRight settingOuter">
        <Image
          src={Images.checkCircle}
          alt="darkDevices image"
          className="img-fluid"
        />
        <div className="planSubSection">
          <h4 className="appointMain">Current Plan</h4>
          {settingData?.loading ? (
            <div className="loaderOuter">
              <div className="spinner-grow loaderSpinner text-center my-5"></div>
            </div>
          ) : (
            <div>
              <div className="planApps">
                <div className="planFlex">
                  <div className="enterLeft">
                    <h2 className="entreText">{activePlan?.plan_id?.name}</h2>
                    <p className="orderPara">
                      {activePlan?.plan_id?.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleTouch("allPlans")}
                    className="createTaxBtn m-0"
                    type="button"
                  >
                    Upgrade Plan?
                    <Image
                      src={Images.Fast}
                      alt="Fast image"
                      className="ms-1 img-fluid"
                    />
                  </button>
                </div>
                <div className="planAppSub">
                  <div className="planAppLeft">
                    <h4 className="settingText">Apps included:</h4>
                    {activePlan?.plan_id?.included_apps?.map((item, index) => (
                      <div className="planTickBox">
                        <Image
                          src={Images.cyanCircleTick}
                          alt="cyanCircleTick image"
                          className="img-fluid"
                        />
                        <Image
                          src={Images.blueCircleTick}
                          alt="blueCircleTick image"
                          className="img-fluid"
                        />
                        <h4 className="planCyan text-uppercase">JOBR {item}</h4>
                      </div>
                    ))}
                    <div className="planTickBox">
                      <Image
                        src={Images.lightCircleTick}
                        alt="lightCircleTick image"
                        className="img-fluid"
                      />
                      <h4 className="planPara">JOBR POS</h4>
                    </div>
                    <div className="planTickBox">
                      <Image
                        src={Images.lightCircleTick}
                        alt="lightCircleTick image"
                        className="img-fluid"
                      />
                      <h4 className="planPara">JOBR Driver</h4>
                    </div>
                  </div>
                  <div className="planAppRight">
                    {activePlan?.plan_id?.tags?.map((tag, index) => (
                      <div key={index} className="planTickBox m-0">
                        <Image
                          src={Images.simpleCheck}
                          alt="simpleCheck image"
                          className="img-fluid"
                        />
                        <h4 className="planCyan">{tag}</h4>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="subscribeBox">
                  <button className="subscribeBtn">Subscribed</button>
                  <div className="subscribeRight">
                    <span className="subscribeText">
                      ${activePlan?.plan_id?.amount}.00
                    </span>
                    <span className="SubscribePara"> /mo</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-lg-6">
                  <div className="planMethod">
                    <h4 className="amountText m-0">Next Billing Date</h4>
                    <div className="scannerBx mt-2">
                      <Image
                        src={Images.calendarBlue}
                        alt="calendarBlue image"
                        className="img-fluid"
                      />
                      <h4 className="orderPara m-0">
                        10 October 2024 for $190.00 USD
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="planMethod">
                    <h4 className="amountText m-0">Payment Method</h4>
                    <div className="scannerBx mt-2">
                      <Image
                        src={Images.mastercardImg}
                        alt="mastercard image"
                        className="img-fluid masterImg"
                      />
                      <h4 className="orderPara m-0">●●●● ●●●● ●●●● 7224</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Plan;