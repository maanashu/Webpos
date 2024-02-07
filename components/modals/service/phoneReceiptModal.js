import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { toast } from "react-toastify";
import { phoneRegex } from "../../../utilities/validators";

const PhoneReceiptModal = ({ onCancel = () => {}, onSend = () => {} }) => {
  const [phoneCode, SetPhoneCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const onChangePhoneNumber = (value, data) => {
    let phoneCode = data.dialCode;
    let phoneNumber = value.slice(data.dialCode.length);
    setPhoneNo(phoneNumber);
    SetPhoneCode(phoneCode);
  };

  return (
    <>
      <div className="phoneReceiptSection">
        <form className="createCustomForm">
          <div className=" verifySelect">
            <div id="result" className="phoneIcon">
              <PhoneInput
                country="us"
                enableSearch={true}
                placeholder="Phone no."
                autoComplete="off"
                onChange={(value, data, event, formattedValue) =>
                  onChangePhoneNumber(value, data, event, formattedValue)
                }
              />
              <Image
                src={Images.AlertCircle}
                alt="alertImage"
                className="img-fluid alertImg"
              />
            </div>
          </div>
          <div className="addCustomerBtn mt-4 phoneReceiptBtn">
            <button className="serviceCancel " type="submit" onClick={onCancel}>
              Cancel
            </button>
            <button
              className="nextverifyBtn "
              type="button"
              onClick={() => {
                if (!phoneNo) {
                  toast.error("Please Enter Phone Number");
                } else if (phoneNo && phoneRegex.test(phoneNo) === false) {
                  toast.error("Please Enter Valid Phone Number");
                } else {
                  const completePhoneNumber = {
                    phoneCode: `+${phoneCode}`,
                    phoneNumber: phoneNo,
                  };
                  onSend(completePhoneNumber);
                }
              }}
            >
              Send E-receipt
            </button>
            {/* <button className='eReciptBtn d-none' type='submit'>
                            E-receipt sent
                            <Image src={Images.btnTick} alt="btnTick image" className="img-fluid ms-2" />
                        </button> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default PhoneReceiptModal;
