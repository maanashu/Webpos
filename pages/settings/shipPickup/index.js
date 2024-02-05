import React, { useEffect, useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../../redux/slices/auth";
import {
  getLocationDetails,
  settingInfo,
  updateLocationSetting,
} from "../../../redux/slices/setting";

const ShippingPickup = (props) => {
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const settingData = useSelector(settingInfo);
  const UniqueId = authData?.usersInfo?.payload?.uniqe_id;
  const [pickupLocation, setPickupLocation] = useState([]);
  const [locationType, setLocationType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // get shipping information
  const handleGetLocation = () => {
    let params = {
      seller_id: UniqueId,
    };
    dispatch(
      getLocationDetails({
        ...params,
        cb(res) {
          if (res?.status) {
            setPickupLocation(res?.data?.payload);
          }
        },
      })
    );
  };

  // get shipping information
  useEffect(() => {
    handleGetLocation();
  }, []);

  // update shipping information
  const updatePickupLocation = (id, type, value) => {
    setIsLoading(true);
    setLocationType(type)
    let params;
    if (type === "allow_local_pickup") {
      params = {
        id: id,
        allow_local_pickup: value,
      };
    } else if (type === "allow_jobr_delivery") {
      params = {
        id: id,
        allow_jobr_delivery: value,
      };
    } else if (type === "allow_local_drop_off") {
      params = {
        id: id,
        allow_local_drop_off: value,
      };
    } else if (type === "allow_shipping") {
      params = {
        id: id,
        allow_shipping: value,
      };
    }
    dispatch(
      updateLocationSetting({
        ...params,
        cb(res) {
          if (res) {
            handleGetLocation();
          }
        },
      })
    );
  };

  useEffect(() => {
    props?.setShowSideBar(false)
  },[])

  return (
    <>
      <div className="settingOuter shippingRight">
        {settingData?.loading && !isLoading ? (
          <div className="loaderOuter">
            <div className="spinner-grow loaderSpinner text-center my-5"></div>
          </div>
        ) : (
          <>
            <div className="localPickupBx">
              <div className="topsettingContent_">
                <Image
                  src={Images.pickupImg}
                  alt="pickupImg image"
                  className="img-fluid me-3"
                />
                <div className="localSubPickup w-100">
                  <h4 className="appointMain">Local Pickup</h4>
                  <p className="lightOfferText mt-1">
                    You need to provide some additional information to start
                    receiving payouts from Shopify Payments.
                  </p>
                </div>
              </div>
              {pickupLocation?.map((item, index) => (
                <>
                  <div key={index} className="georgiaBox">
                    {settingData?.loading && locationType === "allow_local_pickup" ? (
                      <div className="w-100 text-center">
                        <div className="spinner-grow loaderSpinner text-center my-1"></div>
                      </div>
                    ) : (
                      <>
                        <div className="operatingCountry">
                          <Image
                            src={Images.locateOuline}
                            alt="pickupImg image"
                            className="img-fluid"
                          />
                          <div className="georgiaSubBox">
                            <h4 className="cancelOrderText">{item?.city}</h4>
                            <p className="orderPara">
                              {item?.format_address}
                            </p>
                          </div>
                        </div>
                        <div className="roundCheck mb-0 darkCheck">
                          <input
                            onClick={() =>
                              updatePickupLocation(
                                item?.id,
                                "allow_local_pickup",
                                item?.allow_local_pickup ? "0" : "1",
                                index
                              )
                            }
                            checked={item?.allow_local_pickup}
                            type="checkbox"
                          />
                          <label className="amountText d-none "></label>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ))}
            </div>
            <div className="localPickupBx">
              <div className="topsettingContent_">
                <Image
                  src={Images.postMotor}
                  alt="pickupImg image"
                  className="img-fluid me-3"
                />
                <div className="localSubPickup w-100">
                  <h4 className="appointMain">JOBR Delivery</h4>
                  <p className="lightOfferText mt-1">
                    You need to provide some additional information to start
                    receiving payouts from Shopify Payments.
                  </p>
                </div>
              </div>
              {pickupLocation?.map((item, index) => (
                <>
                  <div key={index} className="georgiaBox">
                    {settingData?.loading && locationType === "allow_jobr_delivery" ? (
                      <div className="w-100 text-center">
                        <div className="spinner-grow loaderSpinner text-center my-1"></div>
                      </div>
                    ) : (
                      <>
                        <div className="operatingCountry">
                          <Image
                            src={Images.locateOuline}
                            alt="pickupImg image"
                            className="img-fluid"
                          />
                          <div className="georgiaSubBox">
                            <h4 className="cancelOrderText">{item?.city}</h4>
                            <p className="orderPara">
                              {item?.format_address}
                            </p>
                          </div>
                        </div>
                        <div className="roundCheck mb-0 darkCheck">
                          <input
                            onClick={() =>
                              updatePickupLocation(
                                item?.id,
                                "allow_jobr_delivery",
                                item?.allow_jobr_delivery ? "0" : "1",
                                index
                              )
                            }
                            checked={item?.allow_jobr_delivery}
                            type="checkbox"
                          />
                          <label className="amountText d-none "></label>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ))}
            </div>
            <div className="localPickupBx">
              <div className="topsettingContent_">

                <Image
                  src={Images.deliverHandDark}
                  alt="pickupImg image"
                  className="img-fluid me-3"
                />
                <div className="localSubPickup w-100">
                  <h4 className="appointMain">Local Drop-off</h4>
                  <p className="lightOfferText mt-1">
                    You need to provide some additional information to start
                    receiving payouts from Shopify Payments.
                  </p>
                </div>
              </div>
              {pickupLocation?.map((item, index) => (
                <>
                  <div key={index} className="georgiaBox">
                    {settingData?.loading && locationType === "allow_local_drop_off" ? (
                      <div className="w-100 text-center">
                        <div className="spinner-grow loaderSpinner text-center my-1"></div>
                      </div>
                    ) : (
                      <>
                        <div className="operatingCountry">
                          <Image
                            src={Images.locateOuline}
                            alt="pickupImg image"
                            className="img-fluid"
                          />
                          <div className="georgiaSubBox">
                            <h4 className="cancelOrderText">{item?.city}</h4>
                            <p className="orderPara">
                              {item?.format_address}
                            </p>
                          </div>
                        </div>
                        <div className="roundCheck mb-0 darkCheck">
                          <input
                            onClick={() =>
                              updatePickupLocation(
                                item?.id,
                                "allow_local_drop_off",
                                item?.allow_local_drop_off ? "0" : "1",
                                index
                              )
                            }
                            checked={item?.allow_local_drop_off}
                            type="checkbox"
                          />
                          <label className="amountText d-none "></label>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ))}
            </div>
            <div className="localPickupBx">
              <div className="topsettingContent_">

                <Image
                  src={Images.PlaneDark}
                  alt="pickupImg image"
                  className="imgSize me-3"
                />
                <div className="localSubPickup w-100">
                  <h4 className="appointMain">Shipping</h4>
                  <p className="lightOfferText mt-1">
                    You need to provide some additional information to start
                    receiving payouts from Shopify Payments.
                  </p>
                </div>
              </div>
              {pickupLocation?.map((item, index) => (
                <>
                  <div key={index} className="georgiaBox">
                    {settingData?.loading && locationType === "allow_shipping" ? (
                      <div className="w-100 text-center">
                        <div className="spinner-grow loaderSpinner text-center my-1"></div>
                      </div>
                    ) : (
                      <>
                        <div className="operatingCountry">
                          <Image
                            src={Images.locateOuline}
                            alt="pickupImg image"
                            className="img-fluid"
                          />
                          <div className="georgiaSubBox">
                            <h4 className="cancelOrderText">{item?.city}</h4>
                            <p className="orderPara">
                              {item?.format_address}
                            </p>
                          </div>
                        </div>
                        <div className="roundCheck mb-0 darkCheck">
                          <input
                            onClick={() =>
                              updatePickupLocation(
                                item?.id,
                                "allow_shipping",
                                item?.allow_shipping ? "0" : "1",
                                index
                              )
                            }
                            checked={item?.allow_shipping}
                            type="checkbox"
                          />
                          <label className="amountText d-none "></label>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ))}
            </div>


          </>
        )}
      </div>
    </>
  );
};

export default ShippingPickup;
