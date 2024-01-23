import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotes,
  attachCustomer,
  productCart,
  selectRetailData,
} from "../../redux/slices/retails";

import { toast } from "react-toastify";
import * as Images from "../../utilities/images";
import PhoneInput from "react-phone-input-2";
import Image from "next/image";
import { phoneRegex } from "../../utilities/validators";
import { useRouter } from "next/router";

const AttachWithPhone = ({ phoneModalClose, tipUpdate }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const retailData = useSelector(selectRetailData);
  const cartData = retailData?.productCart;
  const [phoneCode, SetPhoneCode] = useState("+1");
  const [phoneNo, setPhoneNo] = useState("");
  const generateRandomName = () => {
    return Math.random().toString(36).substr(2, 10);
  };

  useEffect(() => {
    if (cartData?.user_details) {
      setPhoneNo(cartData?.user_details?.phone_no || " ");
      SetPhoneCode(cartData?.user_details?.phone_code || "+1");
    }
  }, [cartData?.user_details]);

  // function for change the number and save number is state...............................
  const onChangePhoneNumber = (value, data) => {
    let phoneCode = data.dialCode;
    let phoneNumber = value.slice(data.dialCode.length);
    setPhoneNo(phoneNumber);
    SetPhoneCode(phoneCode);
  };

  const attachWithPhoneHandler = () => {
    if (!phoneNo) {
      toast.error("Please Enter Phone Number");
    } else if (phoneNo && phoneRegex.test(phoneNo) === false) {
      toast.error("Please Enter Valid Phone Number");
    } else {
      let params = {
        phone_code: phoneCode,
        phone_no: phoneNo,
        cartId: cartData?.id,
      };
      dispatch(
        attachCustomer({
          ...params,
          cb() {
            setPhoneNo("");
            router.push({
              pathname: "/Retails/CartPayByCash",
            });
            dispatch(productCart());
            // phoneModalClose();
            tipUpdate();
          },
        })
      );
    }
  };

  return (
    <div className="trackingSub headerModal p-5">
      <figure className="profileImage ">
        <Image
          src={Images.phoneMessage}
          alt="phoneMessage Image"
          className="img-fluid "
        />
      </figure>
      <h4 className="loginheading mt-2">
        What phone number do we send the e-receipt to?
      </h4>
      <div onClick={() => phoneModalClose()} className="crossModal">
        <Image src={Images.modalCross} alt="modalCross" className="img-fluid" />
      </div>
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
      <div className="addCustomerBtn mt-4 phoneReceiptBtn">
        <button
          className="serviceCancel "
          type="submit"
          onClick={() => phoneModalClose()}
        >
          Cancel
        </button>
        {retailData?.attachCustomerLoad ? (
          <button className="nextverifyBtn " type="submit">
            Send E-receipt
            <span className="spinner-border spinner-border-sm mx-1"></span>
          </button>
        ) : (
          <button
            className="nextverifyBtn "
            type="submit"
            onClick={() => attachWithPhoneHandler()}
          >
            Send E-receipt
          </button>
        )}

        {/* <button className="eReciptBtn d-none" type="submit">
          E-receipt sent
          <Image
            src={Images.btnTick}
            alt="btnTick image"
            className="img-fluid ms-2"
          />
        </button> */}
      </div>
    </div>
  );
};
export default AttachWithPhone;
