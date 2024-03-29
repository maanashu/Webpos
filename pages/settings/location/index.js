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

const Location = (props) => {

  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const settingData = useSelector(settingInfo);
  const UniqueId = authData?.usersInfo?.payload?.uniqe_id;
  const [getLocationInfo, setGetLocationInfo] = useState("");

  // API for get get Bussiness LocationInfo...............................
  const getBussinessLocationInfo = () => {
    let params = {
      seller_id: UniqueId,
    };
    dispatch(
      getLocationDetails({
        ...params,
        cb(res) {
          if (res.status) {
            setGetLocationInfo(res?.data?.payload);
          }
        },
      })
    );
  };

  const updateBussinessLocation = (id, status) => {
    let params = {
      id: id,
      is_active: status === true ? false : true,
    };
    dispatch(
      updateLocationSetting({
        ...params,
        cb(res) {
          if (res) {
            getBussinessLocationInfo();
          }
        },
      })
    );
  };

  useEffect(() => {
    if (UniqueId) {
      getBussinessLocationInfo();
    }
  }, [UniqueId]);

  useEffect(() => {
    props?.setShowSideBar(false)
  },[])

  return (
    <>
      <div className="settingOuter bussinessRight">
        <div className="topsettingContent_">
          <Image
            src={Images.darkDevices}
            alt="darkDevices image"
            className="img-fluid me-3"
          />
          <div className="rightboxContent_ w-100">
            <h4 className="appointMain">Business Locations</h4>
            <p className="lightOfferText mt-2">
              An extra layer to boost your team members account security. A
              verification code will be required in addition to password each time
              you sign in.
            </p>
          </div>
        </div>
        <div className="bussinessMain bottonContent_">
          {settingData?.loading ? (
            <>
              <div className="loaderOuter">
                <div className="spinner-grow loaderSpinner text-center my-5"></div>
              </div>
            </>
          ) : getLocationInfo?.length > 0 ? (
            <>
              {getLocationInfo?.map((data, index) => {
                return (
                  <div className="bussinessSub">
                    <div className="locationHead">
                      <Image
                        src={Images.outlineLocation}
                        alt="staffLocate image"
                        className="img-fluid"
                      />
                      <div className="bussinessHeading">
                        <h4 className="cancelOrderText">
                          {data?.address_type}
                        </h4>
                        <p className="settingText">{data?.format_address}</p>
                      </div>
                    </div>
                    <div className="roundCheck mb-0">
                      <input
                        type="checkbox"
                        checked={data?.is_active}
                        onClick={() =>
                          updateBussinessLocation(data?.id, data?.is_active)
                        }
                      />
                      <label className="amountText d-none"></label>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <h2 className="text-center my-5">No Location Found</h2>
          )}
          {/* <div className='bussinessSub'>
                            <div className='locationHead'>
                                <Image src={Images.outlineLocation} alt="staffLocate image" className="img-fluid" />
                                <div className='bussinessHeading'>
                                    <h4 className='cancelOrderText'>Wear House</h4>
                                    <p className='settingText'>2598 West Street, Holland, MI 49424</p>
                                </div>
                            </div>
                            <div className="roundCheck mb-0">
                                <input type="checkbox" />
                                <label className='amountText '></label>
                            </div>
                        </div> */}
        </div>
      </div>
    </>
  );
};

export default Location;
