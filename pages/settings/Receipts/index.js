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
      <div className="settingOuter taxRight receiptRight">
        <div style={{ display: "flex" }}>
          <Image
            src={Images.setreceipt}
            className="settings-sidebar-icons"
            style={{ marginRight: "7px" }}
          />
          <div style={{ flex: 1 }}>


            <h4 className="appointMain">My receipts</h4>
            <p className="lightOfferText mt-2">
              Add a curbside, drive-through, or in-store pickup. Specify your
              business hours, the pickup location, and add a brief instruction
              on how the pickup works for customers.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 30 }} />

        {/* Sms container */}
        <div className="bussinessMain">
          <div className="bussinessSub">
            <div class="locationHead">
              <Image
                src={Images.settingsPhoneMessage}
                className="settings-sidebar-icons"
                style={{ marginRight: "5px" }}
              />

              <div className="bussinessHeading">
                <h4 className="cancelOrderText">
                  SMS to phone number
                </h4>
                <p className="settingText">
                  It might apply a charge.
                </p>
              </div>
            </div>

            <div class="roundCheck">
              <input
                class="checkbox"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked={smsStatus}
                onChange={() => {
                  handleSettings(1);
                }}
              />
              <label
                class="amountText d-none"
                for="flexSwitchCheckChecked"
              ></label>
            </div>
          </div>
        </div>
        {/*  */}

        {/* email container */}
        <div className="bussinessMain">
          <div className="bussinessSub">
            <div class="locationHead">
              <Image
                src={Images.settingsEmail}
                className="settings-sidebar-icons"
                style={{ marginRight: "5px" }}
              />

              <div className="bussinessHeading">
                <h4 className="cancelOrderText">
                  Email
                </h4>
                <p className="settingText">
                  An e-mail will be sent to the purchaser's e-mail address
                </p>
              </div>
            </div>

            <div class="roundCheck">
              <input
                class="checkbox"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked={emailStatus}
                onChange={() => {
                  handleSettings(2);
                }}
              />
              <label
                class="amountText d-none"
                for="flexSwitchCheckChecked"
              ></label>
            </div>
          </div>
        </div>
        {/*  */}

        {/* print invoice container */}
        <div className="bussinessMain">
          <div className="bussinessSub">
            <div class="locationHead">
              <Image
                src={Images.settingsPrinter}
                className="settings-sidebar-icons"
                style={{ marginRight: "5px" }}
              />

              <div className="bussinessHeading">
                <h4 className="cancelOrderText">
                Print Invoice
                </h4>
                <p className="settingText">
                Needs to connect printer for print invoice
                </p>
              </div>
            </div>

            <div class="roundCheck">
              <input
                class="checkbox"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked={invoiceStatus}
                onChange={() => {
                  handleSettings(3);
                }}
              />
              <label
                class="amountText d-none"
                for="flexSwitchCheckChecked"
              ></label>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};
export default Receipts;
