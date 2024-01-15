import styles from "./styles.module.css";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { settingInfo, updateSettings } from "../../../redux/slices/setting";

const Receipts = () => {
  const dispatch = useDispatch();
  const receiptSettings = useSelector(settingInfo);
  const userSettings = receiptSettings?.getSettings;

  const smsStatus = userSettings?.invoice_sms_send_status;
  const emailStatus = userSettings?.invoice_email_send_status;
  const invoiceStatus = userSettings?.print_invoice_status;

  const handleSettings = (id) => {
    let data = {};
    switch (id) {
      case 1:
        data.invoice_sms_send_status = !smsStatus;
        break;
      case 2:
        data.invoice_email_send_status = !emailStatus;
        break;
      case 3:
        data.print_invoice_status = !invoiceStatus;
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
            src={Images.settingsReceipt}
            className="settings-sidebar-icons"
            style={{ marginRight: "5px" }}
          />
          <div style={{ flex: 1 }}>
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
                    checked={smsStatus}
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
                    checked={emailStatus}
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
                    checked={invoiceStatus}
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
export default Receipts;
