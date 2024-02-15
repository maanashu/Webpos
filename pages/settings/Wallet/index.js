import styles from "./styles.module.css";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { settingInfo, updateSettings } from "../../../redux/slices/setting";
import { useEffect, useState } from "react";

const Wallet = (props) => {
  const dispatch = useDispatch();
  const receiptSettings = useSelector(settingInfo);
  const userSettings = receiptSettings?.getSettings;
  const isCoin = userSettings?.accept_jbr_coin_payment ? userSettings.accept_jbr_coin_payment : false;
  const isCash = userSettings?.accept_cash_payment ? userSettings.accept_cash_payment : false;
  const isCard = userSettings?.accept_card_payment ? userSettings.accept_card_payment : false;

  const handleSettings = (id) => {
    let data = {};
    switch (id) {
      case 1:
        data.accept_jbr_coin_payment = !isCoin;
        break;
      case 2:
        data.accept_cash_payment = !isCash;
        break;
      case 3:
        data.accept_card_payment = !isCard;
        break;
      default:
    }
    dispatch(updateSettings(data));
  };

  const getSettingData = () => {
    dispatch(
      updateSettings({
        cb(res) {
        },
      })
    );
  };

  useEffect(() => {
    props?.setShowSideBar(false);
    getSettingData();
  }, []);

  return (
    <>
      <div className="settingOuter taxRight walletConfig_">
        <div className="topsettingContent_">
          <Image
            src={Images.darkDevices}
            className="settings-sidebar-icons me-3"
            style={{ marginTop: "5px" }}
          />
          <div className={"appointMain"}>Wallet Config</div>
        </div>

        <div style={{ marginTop: 30 }} />

        {/* pay with coin container */}
        <div className="w-100 bottonContent_">
          <div className="bussinessMain">
            <div className="bussinessSub">
              <div className="locationHead">
                <Image
                  src={Images.walletOuter}
                  className={styles.iconsStyle}
                  style={{ marginRight: "5px" }}
                />

                <div className="bussinessHeading">
                  <h4 className="customerLink text-start">
                    Pay with JOBR Coin
                  </h4>
                  <h5 className="monthText mt-2">Online Shop / POS</h5>
                  <h5 className="walletPara mt-2">Default Payment</h5>
                  <p className="settingText mt-3">
                    You need to provide some additional information about your
                    business to start receiving payouts from Shopify Payments.
                  </p>
                </div>
              </div>

              {/* <div className="roundCheck  mb-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked={isCoin}
                  onChange={() => {
                    !isCoin && handleSettings(1);
                  }}
                />
                <label
                  className="form-check-label d-none"
                  for="flexSwitchCheckChecked"
                ></label>
              </div> */}
            </div>
          </div>
          {/*  */}

          {/* pay with cash container */}
          <div className="bussinessMain">
            <div className="bussinessSub">
              <div className="locationHead">
                <Image
                  src={Images.moneyOuter}
                  className="settings-sidebar-icons"
                  style={{ marginRight: "5px" }}
                />
                <div className="bussinessHeading">
                  <h4 className="customerLink text-start">Pay with Cash</h4>
                  <h5 className="monthText mt-2">POS</h5>
                  <p className="settingText mt-3">
                    You need to provide some additional information about your
                    business to start receiving payouts from Shopify Payments.
                  </p>
                </div>
              </div>

              <div className="roundCheck  mb-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked={isCash}
                  onChange={() => {
                    handleSettings(2);
                  }}
                />
                <label
                  className="form-check-label d-none"
                  for="flexSwitchCheckChecked"
                ></label>
              </div>
            </div>
          </div>
          {/*  */}

          {/* pay by card container */}
          <div className="bussinessMain">
            <div className="bussinessSub">
              <div className="locationHead">
                <Image
                  src={Images.cardOuter}
                  className="settings-sidebar-icons"
                  style={{ marginRight: "5px" }}
                />
                <div className="bussinessHeading">
                  <h4 className="customerLink text-start">
                    {" "}
                    Pay by Card Contactless
                  </h4>
                  <h5 className="monthText mt-2">POS</h5>
                  <p className="settingText mt-3">
                    You need to provide some additional information about your
                    business to start receiving payouts from Shopify Payments.
                  </p>
                </div>
              </div>

              <div className="roundCheck  mb-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked={isCard}
                  onChange={() => {
                    handleSettings(3);
                  }}
                />
                <label
                  className="form-check-label d-none"
                  for="flexSwitchCheckChecked"
                ></label>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};
export default Wallet;
