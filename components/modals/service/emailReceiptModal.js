import React from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const EmailReceiptModal = () => {
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const attachWithEmailHandler = () => {
    if (!email) {
      toast.error("Please Enter email");
    } else if (email && emailReg.test(email) === false) {
      toast.error("Please Enter Valid email");
    } else {
      let params = {
        email: email,
      };
    //   dispatch(
    //     attachCustomer({
    //       ...params,
    //       cb() {
    //         setEmail("");
    //       },
    //     })
    //   );
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
            <button className="serviceCancel " type="submit">
              Cancel
            </button>
            <button
              className="nextverifyBtn "
              type="button"
              onClick={() => attachWithEmailHandler()}
            >
              Send E-receipt
            </button>
            <button className="eReciptBtn d-none" type="submit">
              E-receipt sent
              <Image
                src={Images.btnTick}
                alt="btnTick image"
                className="img-fluid ms-2"
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmailReceiptModal;
