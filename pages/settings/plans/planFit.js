import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllPlans,
  subScribePlan,
  getActivePlan,
} from "../../../redux/slices/setting";
import { useSelector } from "react-redux";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { settingInfo } from "../../../redux/slices/setting";

const PlanFit = ({ handleTouch }) => {
  const dispatch = useDispatch();
  const settingData = useSelector(settingInfo);
  const [activeTab, setActiveTab] = useState("monthly");
  const [plansData, setPlansData] = useState([]);
  const [activePlan, setActivePlan] = useState([]);

  // get all plans
  useEffect(() => {
    let params = {
      tenure: activeTab,
    };
    dispatch(
      getAllPlans({
        ...params,
        cb(res) {
          if (res?.status) {
            setPlansData(res?.data?.payload);
          }
        },
      })
    );
    handleGetActivePlan();
  }, [activeTab]);

  // get active plan
  const handleGetActivePlan = () => {
    dispatch(
      getActivePlan({
        cb(res) {
          if (res?.status) {
            setActivePlan(res?.data?.payload[0]);
          }
        },
      })
    );
  };

  // subscribe plan
  const handleSubscribePlan = (id) => {
    let params = {
      plan_id: id,
    };
    dispatch(
      subScribePlan({
        ...params,
        cb(res) {
          if (res?.status) {
            handleTouch("Plans");
          }
        },
      })
    );
  };

  return (
    <>
      <div className="settingMain">
        <div className="row">
          <div>
            <div className="settingOuter planFitRight">
              <h4 className="appointMain text-center">
                <i
                  onClick={() => handleTouch("Plans")}
                  className="fa fa-arrow-left me-2 backarrow-plan"
                ></i>
                Plans that fit your scale
              </h4>
              <h6 className="lightOfferText text-center mt-2">
                Simple, Transparent pricing that grows with you
              </h6>
              <div className="PlansTabSection">
                <div className="planSubTab">
                  <div className="plansTabBtn">
                    <button
                      className={`billingActiveBtn ${
                        activeTab === "monthly" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("monthly")}
                      type="button"
                    >
                      Monthly Billing
                    </button>
                    <button
                      className={`billingActiveBtn ${
                        activeTab === "yearly" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("yearly")}
                      type="button"
                    >
                      Annually Billing
                    </button>
                  </div>
                </div>
                <div className="billingSubSection">
                  <div className="row">
                    {settingData?.loading ? (
                      <div className="loaderOuter">
                        <div className="spinner-grow loaderSpinner text-center my-5"></div>
                      </div>
                    ) : (
                      <>
                        {plansData && plansData?.length > 0 ? (
                          <>
                            {plansData?.map((item, index) => (
                              <div key={index} className="col-lg-4 mt-4">
                                <div
                                  className={
                                    item?._id === activePlan?.plan_id?._id
                                      ? "monthEnter"
                                      : "professionEnter"
                                  }
                                >
                                  <div className="professionEnterSub">
                                    <h3
                                      className={
                                        item?._id === activePlan?.plan_id?._id
                                          ? "entreText"
                                          : "returnConfirmedHeading p-0"
                                      }
                                    >
                                      {item?.name}
                                    </h3>
                                    <p className="orderPara">
                                      {item?.description}
                                    </p>
                                    <h4 className="settingText my-2">
                                      Apps included:
                                    </h4>
                                    {item?.included_apps?.map((tag, index) => (
                                      <>
                                        <div
                                          key={index}
                                          className="planTickBox"
                                        >
                                          {item?._id ===
                                          activePlan?.plan_id?._id ? (
                                            <Image
                                              src={Images.cyanCircleTick}
                                              alt="cyanCircleTick image"
                                              className="img-fluid"
                                            />
                                          ) : (
                                            <Image
                                              src={Images.fillCheck}
                                              alt="cyanCircleTick image"
                                              className="img-fluid"
                                            />
                                          )}

                                          <Image
                                            src={Images.blueCircleTick}
                                            alt="blueCircleTick image"
                                            className="img-fluid"
                                          />
                                          <h4
                                            className={
                                              item?._id ===
                                              activePlan?.plan_id?._id
                                                ? "planCyan text-uppercase"
                                                : "professionText text-uppercase"
                                            }
                                          >
                                            JOBR {tag}
                                          </h4>
                                        </div>
                                      </>
                                    ))}
                                    <hr className="dottedDivide" />
                                    {item?.tags?.map((value, index) => (
                                      <>
                                        {item?._id ===
                                        activePlan?.plan_id?._id ? (
                                          <div className="planTickBox">
                                            <Image
                                              src={Images.simpleCheck}
                                              alt="simpleCheck image"
                                              className="img-fluid"
                                            />
                                            <h4 className="planCyan">
                                              {value}
                                            </h4>
                                          </div>
                                        ) : (
                                          <h6
                                            key={index}
                                            className="professionText"
                                          >
                                            {value}
                                          </h6>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                  <div className="subscribeRightn my-3 text-center">
                                    <span className="subscribeText">
                                      ${item?.amount}.00
                                    </span>
                                    <span className="SubscribePara"> /mo</span>
                                  </div>
                                  {item?._id === activePlan?.plan_id?._id ? (
                                    <button className="monthBtn">
                                      Subscribed
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() =>
                                        handleSubscribePlan(item?._id)
                                      }
                                      className="changeBtn"
                                    >
                                      {!activePlan ? "Buy" : "Change"}

                                      <Image
                                        src={Images.ArrowRight}
                                        alt="lightCircleTick image"
                                        className="img-fluid ms-1"
                                      />
                                    </button>
                                  )}
                                </div>
                              </div>
                            ))}
                          </>
                        ) : (
                          <div className="loaderOuter">
                            <p>No data found</p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanFit;
