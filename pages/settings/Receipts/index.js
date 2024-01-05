import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import CustomModal from "../../../components/customModal/CustomModal";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../../redux/slices/auth";
import SecurityVerification from "../../../components/settingModal/SecurityVerify";
import ActivateSecurityModal from "../../../components/settingModal/activateSecurityModal";
import ForgetSecurityPin from "../../../components/settingModal/ForgetSecurityPin";
import GetSecurityScanerCode from "../../../components/settingModal/GetSecurityScaner";
import { getProfile } from "../../../redux/slices/dashboard";
import { settingInfo, updateSettings } from "../../../redux/slices/setting";

const Receipts = () => {
  const authData = useSelector(selectLoginAuth);
  const receiptSettings = useSelector(settingInfo);
  const userId = receiptSettings?.getSettings;
  const dispatch = useDispatch();
  const [isSms, setSms] = useState(false);
  const [isEmail, setEMail] = useState(false);
  const [isPrintInvoice, setPrintInvoice] = useState(false);

  // console.log("settings", userId);
  // apply API for get user profile information
  const getProfileInfo = (userId) => {
    let params = {
      print_invoice_status: true,
    };
    dispatch(
      updateSettings({
        ...params,
        cb(res) {
          console.log("check resp", res);
          if (res.status) {
            setSms(res?.data?.payload?.user_profiles?.is_two_fa_enabled);
          }
        },
      })
    );
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <>
      <div style={{ padding: "30px", flex: 1 }}>
        <div style={{ display: "flex" }}>
          <Image
            src={Images.settingsReceipt}
            className="settings-sidebar-icons"
            style={{ marginRight: "5px" }}
          />
          <div>
            <div className={styles.headingTextStyle}>My receipts</div>
            <div className={styles.textInformationStyle}>
              Add a curbside, drive-through, or in-store pickup. Specify your
              business hours, the pickup location, and add a brief instruction
              on how the pickup works for customers.
            </div>

            <div style={{ marginTop: 30 }} />

            {/* Sms container */}
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
                      SMS to phone number
                    </div>
                    <div className={styles.boxbottomTextStyle}>
                      It might apply a charge.
                    </div>
                  </div>
                </div>

                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked={isSms}
                    onChange={() => {
                      setSms(!isSms);
                      console.log("settings", userId);
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

            {/* email container */}
            <div className={styles.shadowBox}>
              <div className={styles.rowStartJustified}>
                <div class={styles.rowStart}>
                  <Image
                    src={Images.settingsEmail}
                    className="settings-sidebar-icons"
                    style={{ marginRight: "5px" }}
                  />

                  <div>
                    <div className={styles.boxTopTitleTextStyle}>Email</div>
                    <div className={styles.boxbottomTextStyle}>
                      Team members must enable their own verification methods.
                    </div>
                  </div>
                </div>

                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked={isEmail}
                    onChange={() => {
                      setEMail((prev) => !prev);
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

            {/* print invoice container */}
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
                      SMS to phone number
                    </div>
                    <div className={styles.boxbottomTextStyle}>
                      Team members must enable their own verification methods.
                    </div>
                  </div>
                </div>

                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked={isPrintInvoice}
                    onChange={() => {
                      setPrintInvoice((prev) => !prev);
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
export default Receipts;
