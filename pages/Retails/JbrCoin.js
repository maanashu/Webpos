import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  attachCustomer,
  productCart,
  selectRetailData,
  walletGetByPhone,
} from "../../redux/slices/retails";

import { toast } from "react-toastify";
import * as Images from "../../utilities/images";
import PhoneInput from "react-phone-input-2";
import Image from "next/image";
import {
  digits,
  emailReg,
  mobileReg,
  phoneRegex,
} from "../../utilities/validators";
import { useRouter } from "next/router";
import { amountFormat } from "../../utilities/globalMethods";

const JbrCoin = ({ crossHandler }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const retailData = useSelector(selectRetailData);
  const qrcode = retailData?.walletQrData;
  const cartData = retailData?.productCart;
  const [phoneCode, SetPhoneCode] = useState("+1");
  const [phoneNo, setPhoneNo] = useState("");
  const [walletIdInp, setWalletIdInp] = useState();
  const walletUser = retailData?.walletGetByPhoneData?.[0] || [];

  const [sendRequest, setsendRequest] = useState(false);

  const generateRandomName = () => {
    return Math.random().toString(36).substr(2, 10);
  };

  useEffect(() => {
    setWalletIdInp(phoneNo);
    if (phoneNo?.length > 9) {
      if (phoneNo && digits.test(phoneNo) === false) {
        toast.error("Please enter valid phone number ");
      } else {
        let params = {
          phoneNumber: "+" + phoneCode + phoneNo,
        };
        console.log(params);
        // return;
        dispatch(walletGetByPhone(params));
      }
    }
  }, [phoneNo?.length > 9]);

  // function for change the number and save number is state...............................
  const onChangePhoneNumber = (value, data) => {
    let phoneCode = data.dialCode;
    let phoneNumber = value.slice(data.dialCode.length);
    setPhoneNo(phoneNumber);
    SetPhoneCode(phoneCode);
  };

  return (
    <div className="jobrWalletSection">
      <div className="walletLeftModal">
        <Image
          src={Images.walletCoin}
          alt="walletCoin Image"
          className="img-fluid"
        />
        <h4 className="payHeading">Scan to Pay</h4>
        <div className="JbrAmount">
          JBR {amountFormat(cartData?.amount?.total_amount * 100, "notSign")}
        </div>
        <h4 className="payHeading mt-0">
          {amountFormat(cartData?.amount?.total_amount)} USD
        </h4>
        <Image
          src={qrcode?.qr_code}
          alt="scanner Image"
          className="img-fluid scannerImg"
          width="100"
          height="100"
        />
      </div>
      <div className="walletRightModal">
        <Image
          src={Images.customerWallet}
          alt="wallet image"
          className="walletImg_"
        />
        <p className="payHeading">
          Or send the payment request to your JOBR wallet:
        </p>
        <form className="walletForm text-start ">
          <div className="walletField">
            <label className="form-label amountText m-0 text-start">
              Wallet Number
            </label>
            {/* <div className="phoneIcon mt-1">
              <input
                className="form-control walletControl"
                type="number"
                placeholder="3 3 9    4  5  5    0 2 0 0"
              />
              <Image
                src={Images.Wallets}
                alt="mailbox image"
                className="img-fluid lockImg"
              />
            </div> */}
            <div className=" verifySelect">
              <div id="result" className="phoneIcon">
                <PhoneInput
                  country="us"
                  value={phoneCode?.toString() + phoneNo?.toString()}
                  enableSearch={true}
                  name={generateRandomName}
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
          </div>
          <div className="addCustomerBtn mt-4 walletModalBtn">
            <button
              className="serviceCancel"
              type="submit"
              onClick={() => crossHandler()}
            >
              Cancel
            </button>
            <button
              disabled={
                walletUser?.step >= 2 && walletIdInp?.length > 9 && !sendRequest
                  ? false
                  : true
              }
              className={sendRequest ? "eReciptBtn" : "nextverifyBtn "}
              type="submit"
              style={{
                opacity:
                  walletUser?.step >= 2 &&
                  walletIdInp?.length > 9 &&
                  !sendRequest
                    ? 1
                    : 0.7,
              }}
            >
              {sendRequest ? "Request Sent" : "Send Request"}
            </button>
            {/* <button className="eReciptBtn d-none" type="submit" > 
              Request Sent
              <Image
                src={Images.btnTick}
                alt="btnTick image"
                className="img-fluid ms-2"
              />
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};
export default JbrCoin;
