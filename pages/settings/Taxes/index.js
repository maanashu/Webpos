import styles from "./styles.module.css";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { settingInfo, updateSettings } from "../../../redux/slices/setting";

const Taxes = () => {
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
      <div style={{ padding: "30px", flex: 1 }}>
        <div>
          <div className={styles.headingTextStyle}>My receipts</div>
          <div className={styles.textInformationStyle}>
            If you haven’t already, create a shipping zone in the region(s)
            you’re liable in. Then, find the region in this list and select it
            to manage its tax settings. If you’re unsure about where you’re
            liable, check with a tax professional.
          </div>

          <div style={{ marginTop: 30 }} />

          <div className={styles.shadowBox}>
            <div className={styles.rowJustified}>
              <div className={styles.boxTopTitleTextStyle}>
                Active Tax Payer Information
              </div>
              <button style={{ border: 0, backgroundColor: "white" }}>
                <div className={styles.activateButtonStyle}>Activate</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Taxes;
