import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  attachCustomer,
  productCart,
  selectRetailData,
} from "../../redux/slices/retails";

import { toast } from "react-toastify";
import * as Images from "../../utilities/images";
import PhoneInput from "react-phone-input-2";
import Image from "next/image";
import { emailReg, phoneRegex } from "../../utilities/validators";
import { useRouter } from "next/router";

const AttachWithEmail = ({ close, tipUpdate }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const retailData = useSelector(selectRetailData);
  const cartData = retailData?.productCart;
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (cartData?.user_details) {
      setEmail(cartData?.user_details?.email || " ");
    }
  }, [cartData?.user_details]);

  const attachWithEmailHandler = () => {
    console.log("email", email);
    if (!email) {
      toast.error("Please Enter email");
    } else if (email && emailReg.test(email) === false) {
      toast.error("Please Enter Valid email");
    } else {
      let params = {
        email: email,
        cartId: cartData?.id,
      };
      dispatch(
        attachCustomer({
          ...params,
          cb() {
            setEmail("");
            router.push({
              pathname: "/Retails/CartPayByCash",
            });
            dispatch(productCart());
            // emailModalClose();
            tipUpdate();
          },
        })
      );
    }
  };

  return (
    <>
      <div className="emailReceiptSection">
        <form className="createCustomForm">
          <div className="emailField">
            <label className="form-label amountText m-0">E-mail Address</label>
            <div className="phoneIcon">
              <input
                className="form-control verifyControl"
                type="email"
                placeholder="hello@email.com"
                value={email?.trim()}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Image
                src={Images.mailBox}
                alt="mailbox image"
                className="img-fluid lockImg"
              />
            </div>
          </div>
          <div className="addCustomerBtn mt-4 phoneReceiptBtn">
            <button
              className="serviceCancel "
              onClick={() => close()}
              type="button"
            >
              Cancel
            </button>
            <button
              className="nextverifyBtn"
              type="button"
              disabled={retailData?.attachCustomerLoad ? true : false}
              onClick={() => attachWithEmailHandler()}
            >
              Send E-receipt
              {retailData?.attachCustomerLoad && (
                <span className="spinner-border spinner-border-sm mx-1"></span>
              )}
            </button>
            {/* <button className='eReciptBtn d-none' type='submit'>
                    E-receipt sent
                    <Image src={Images.btnTick} alt="btnTick image" className="img-fluid ms-2" />
                </button> */}
          </div>
        </form>
      </div>
    </>
    // <div className="trackingSub headerModal p-5">
    //   <figure className="profileImage ">
    //     <Image
    //       src={Images.emailSms}
    //       alt="emailSms Image"
    //       className="img-fluid "
    //     />
    //   </figure>
    //   <h4 className="loginheading mt-2">
    //     What e-mail address do we send the e-receipt to?
    //   </h4>
    //   <div onClick={() => emailModalClose()} className="crossModal">
    //     <Image src={Images.modalCross} alt="modalCross" className="img-fluid" />
    //   </div>
    //   <div className="emailField">
    //     <label className="form-label amountText m-0">E-mail Address</label>
    //     <div className="phoneIcon">
    //       <input
    //         className="form-control verifyControl"
    //         type="email"
    //         placeholder="hello@email.com"
    //         value={email?.trim()}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <Image
    //         src={Images.mailBox}
    //         alt="mailbox image"
    //         className="img-fluid lockImg"
    //       />
    //     </div>
    //   </div>
    //   <div className="addCustomerBtn mt-4 phoneReceiptBtn">
    //     <button
    //       className="serviceCancel "
    //       type="submit"
    //       onClick={() => emailModalClose()}
    //     >
    //       Cancel
    //     </button>
    //     {retailData?.attachCustomerLoad ? (
    //       <button className="nextverifyBtn " type="submit">
    //         Send E-receipt
    //         <span className="spinner-border spinner-border-sm mx-1"></span>
    //       </button>
    //     ) : (
    //       <button
    //         className="nextverifyBtn "
    //         type="submit"
    //         onClick={() => attachWithEmailHandler()}
    //       >
    //         Send E-receipt
    //       </button>
    //     )}

    //     {/* <button className="eReciptBtn d-none" type="submit">
    //       E-receipt sent
    //       <Image
    //         src={Images.btnTick}
    //         alt="btnTick image"
    //         className="img-fluid ms-2"
    //       />
    //     </button> */}
    //   </div>
    // </div>
  );
};
export default AttachWithEmail;
