import styles from "./styles.module.css";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { settingInfo, updateSettings } from "../../../redux/slices/setting";

const Wallet = () => {
  const dispatch = useDispatch();
  const receiptSettings = useSelector(settingInfo);
  const userSettings = receiptSettings?.getSettings;

  const isCoin = userSettings?.accept_jbr_coin_payment;
  const isCash = userSettings?.accept_cash_payment;
  const isCard = userSettings?.accept_card_payment;

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

  return (
    <>
      <div className="settingOuter taxRight">
        <div style={{ display: "flex" }}>
          <Image
            src={Images.settingsDevices}
            className="settings-sidebar-icons"
            style={{ marginRight: "5px", marginTop: "5px" }}
          />
          <div style={{ flex: 1 }}>
            <div className={"appointMain"}>Wallet Config</div>

            <div style={{ marginTop: 30 }} />

            {/* pay with coin container */}
            <div className={styles.shadowBox}>
              <div className={styles.rowStartJustified}>
                <div class={styles.rowStart}>
                  <Image
                    src={Images.settingsPhoneMessage}
                    className={styles.iconsStyle}
                    style={{ marginRight: "5px" }}
                  />

                  <div>
                    <div className={styles.boxTopTitleTextStyle}>
                      Pay with JOBR Coin
                    </div>
                    <div className={styles.boxbottomTextStyle}>
                      Online Shop / POS
                    </div>
                    <h4 className={styles.boxbottomTextStyle}>
                      You need to provide some additional information about your
                      business to start receiving payouts from Shopify Payments.
                    </h4>
                  </div>
                </div>

                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked={isCoin}
                    onChange={() => {
                      handleSettings(1);
                    }}
                  />
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckChecked"
                  ></label>
                </div>
              </div>
            </div>
            {/*  */}

            {/* pay with cash container */}
            <div className={styles.shadowBox}>
              <div className={styles.rowStartJustified}>
                <div class={styles.rowStart}>
                  <Image
                    src={Images.settingsEmail}
                    className="settings-sidebar-icons"
                    style={{ marginRight: "5px" }}
                  />

                  <div>
                    <div className={styles.boxTopTitleTextStyle}>
                      Pay with Cash
                    </div>
                    <div className={styles.boxbottomTextStyle}>POS</div>
                    <h4 className={styles.boxbottomTextStyle}>
                      You need to provide some additional information about your
                      business to start receiving payouts from Shopify Payments.
                    </h4>
                  </div>
                </div>

                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked={isCash}
                    onChange={() => {
                      handleSettings(2);
                    }}
                  />
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckChecked"
                  ></label>
                </div>
              </div>
            </div>
            {/*  */}

            {/* pay by card container */}
            <div className={styles.shadowBox}>
              <div className={styles.rowStartJustified}>
                <div class={styles.rowStart}>
                  <Image
                    src={Images.settingsPrinter}
                    className="settings-sidebar-icons"
                    style={{ marginRight: "5px" }}
                  />

                  <div>
                    <div className={styles.boxTopTitleTextStyle}>
                      Pay by Card Contactless
                    </div>
                    <div className={styles.boxbottomTextStyle}>POS</div>
                    <h4 className={styles.boxbottomTextStyle}>
                      You need to provide some additional information about your
                      business to start receiving payouts from Shopify Payments.
                    </h4>
                  </div>
                </div>

                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked={isCard}
                    onChange={() => {
                      handleSettings(3);
                    }}
                  />
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckChecked"
                  ></label>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Wallet;
