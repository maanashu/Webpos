import React, { useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { useRouter } from "next/router";
import { selectLoginAuth } from "../../redux/slices/auth";
import { useSelector } from "react-redux";
import { selectReturnData } from "../../redux/slices/productReturn";
import moment from "moment-timezone";
import EmailReceiptModal from "../../components/modals/service/emailReceiptModal";
import CustomModal from "../../components/customModal/CustomModal";
import PhoneReceiptModal from "../../components/modals/service/phoneReceiptModal";

const RefundsConfirmation = () => {
  const router = useRouter();
  const invoiceData = useSelector(selectReturnData);
  const selectedData = invoiceData?.invoiceData;
  console.log(selectedData,'selectedData');
  const itemsList = JSON.parse(selectedData?.selectedItems || "[]");
  const refundamounts = JSON.parse(selectedData?.inputValues || "[]");
  const authData = useSelector(selectLoginAuth);
  const posData = authData?.posUserLoginDetails?.payload;
  const merchentDetails = authData?.usersInfo?.payload?.user?.user_profiles;
  const invoiceNumber = invoiceData?.invoiceByInvoiceId?.invoice_number;
  const SearchInvoiceRespones = invoiceData?.invoiceByInvoiceId;
  const orderDetails = SearchInvoiceRespones?.order;
  const [activeSms, setActiveSms] = useState(false);
  const [activeEmail, setActiveEmail] = useState(false);
  const [activeMsz, setActiveMsz] = useState(false);
  const [key, setKey] = useState(Math.random());
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });
  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };
  const lineTotals = [];

  for (let i = 0; i < itemsList.length; i++) {
    const qty = itemsList[i].qty;
    const refundAmount = refundamounts[i]?.value;
  
    if (refundAmount !== undefined) {
      lineTotals.push(Number(qty) * Number(refundAmount));
    } else {
      const price = itemsList[i].price;
      lineTotals.push(Number(qty) * Number(price));
    }
  }
  
  const handleConfirmReturnButton = () => {
    router.push({
      pathname: "/Product/Confirmation(Success)",
    });
  };
  const handleActiveButton = (flag) => {
    if (flag == "sms") {
      setActiveSms(true);
      setActiveEmail(false);
      setActiveMsz(false);
      setModalDetail({ show: true, flag: "sms" });
      setKey(Math.random());
    } else if (flag == "email") {
      setActiveEmail(true);
      setActiveMsz(false);
      setActiveSms(false);
      setModalDetail({ show: true, flag: "email" });
      setKey(Math.random());
    } else if (flag == "noThnks") {
      setActiveMsz(true);
      setActiveSms(false);
      setActiveEmail(false);
    }
  };


  return (
    <>
      <div className="refundConfirmation me-3">
        <div className="row">
          <div className="col-lg-7">
            <div className="commanOuter commonSubOuter me-0">
              <button
                type="button"
                className="backButton"
                onClick={() => {
                  router.back();
                }}
              >
                <Image
                  src={Images.ArrowLeft}
                  alt=""
                  className="img-fluid backBtnIcon"
                />
                Back
              </button>
              <div className="refundMethod">
                <h4 className="totalRefund">Total Return Amount</h4>
                <h5 className="totalrefundAmount">
                  <p className="priceRefunded">
                    -$
                    {Number(selectedData?.totalSum)
                      ? Number(selectedData?.totalSum)
                      : selectedData?.existingTotal?.toFixed(2)}
                  </p>
                </h5>
                <p className="userPosition">
                  Select a method of payment to refund.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className={
                      orderDetails?.mode_of_payment === "card"
                        ? "debitCreditBox active"
                        : "debitCreditBox"
                    }
                  >
                    <article className="flexBox justify-content-between">
                      <Image
                        src={Images.Mastercard}
                        alt="Mastercard"
                        className="img-fluid Mastercard"
                      />
                      <p>debit/credit</p>
                    </article>
                    <p className="cardNumber pt-5">●●●● ●●●● ●●●● 7224</p>
                    <p className="priceRefunded">
                      $
                      {Number(selectedData?.totalSum)
                        ? Number(selectedData?.totalSum)
                        : selectedData?.existingTotal?.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div
                    className={
                      orderDetails?.mode_of_payment === "cash"
                        ? "refundCashBox active"
                        : "refundCashBox"
                    }
                  >
                    <article className="flexBox justify-content-between">
                      <Image
                        src={Images.MoneyOutline}
                        alt="MoneyOutline"
                        className="img-fluid MoneyOutline"
                      />
                      <Image
                        src={Images.ActiveMoneyOutline}
                        alt="ActiveMoneyOutline"
                        className="img-fluid MoneyOutline showImg d-none"
                      />
                      <p>cash</p>
                    </article>
                    <p className="priceRefunded">
                      $
                      {Number(selectedData?.totalSum)
                        ? Number(selectedData?.totalSum)
                        : selectedData?.existingTotal?.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div
                    className={
                      orderDetails?.mode_of_payment === "jbr"
                        ? "jobrCoinBox active"
                        : "jobrCoinBox"
                    }
                  >
                    <article className="flexBox justify-content-between">
                      <Image
                        src={Images.JOBRCoinOutline}
                        alt="JOBRCoinOutline"
                        className="img-fluid JOBRCoinOutline"
                      />
                      <p>jobr coin</p>
                    </article>
                    <p className="priceRefunded">
                      $
                      {Number(selectedData?.totalSum)
                        ? Number(selectedData?.totalSum)
                        : selectedData?.existingTotal?.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="receiptDetails">
                <Image
                  src={Images.ReceiptOutline}
                  alt="ReceiptOutline"
                  className="img-fluid ReceiptOutline"
                />
                <p className="selectedproductDetails">Send your e-receipt?</p>
                <div className="row justify-content-center">
                  <div
                    className="col-lg-3"
                    onClick={() => handleActiveButton("sms")}
                  >
                    <div
                      className={
                        activeSms === true
                          ? "receiptCard active h-100"
                          : "receiptCard"
                      }
                    >
                      <Image
                        src={Images.Sms}
                        alt="Sms"
                        className="img-fluid Sms"
                      />
                      <p>SMS</p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3"
                    onClick={() => handleActiveButton("email")}
                  >
                    <div
                      className={
                        activeEmail === true
                          ? "receiptCard active h-100"
                          : "receiptCard"
                      }
                    >
                      <Image
                        src={Images.Email}
                        alt="Email"
                        className="img-fluid Email"
                      />
                      <p>E-mail</p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3"
                    onClick={() => handleActiveButton("noThnks")}
                  >
                    <div
                      className={
                        activeMsz === true
                          ? "receiptCard active h-100"
                          : "receiptCard"
                      }
                    >
                      <Image
                        src={Images.Like}
                        alt="Like"
                        className="img-fluid Like"
                      />
                      <Image
                        src={Images.Like_Solid}
                        alt="Like"
                        className="img-fluid Like d-none showImg"
                      />
                      <p>No, thanks</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="text-center"
                onClick={(e) => handleConfirmReturnButton(e)}
              >
                <button type="button" className="ConfirmReturn active">
                  Confirm Return
                  <Image
                    src={Images.ShoppingReturnLite}
                    alt="ShoppingReturnLite"
                    className="img-fluid ShoppingReturnLite"
                  />
                  <Image
                    src={Images.ShoppingReturn}
                    alt="ShoppingReturnLite"
                    className="img-fluid ShoppingReturnLite d-none showImg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="commanOuter commonSubOuter me-3 ms-0">
              <div className="MapleBox">
                <article className="mapleHeader">
                  <h6 className="mapleHeading">
                    {" "}
                    {merchentDetails?.organization_name}.
                  </h6>
                  <p className="mapleAddress">
                    {merchentDetails?.current_address?.street_address},
                    {merchentDetails?.current_address?.city},
                    {merchentDetails?.current_address?.state},
                    {merchentDetails?.current_address?.country},
                    {merchentDetails?.current_address?.zipcode}
                  </p>
                  <p className="mapleAddress">
                    {" "}
                    {merchentDetails?.full_phone_number}
                  </p>
                </article>
                <div className="mapleProductDetails mapleFlex">
                  <div className="mapleSubFlex">
                    {itemsList?.map((data, idx) => {
                      return (
                        <div key={idx} className="flexBox">
                          <div className="flexbase">
                            <p className="mapleProductcount">× {data?.qty}</p>
                            <article className="ms-3">
                              <p className="cancelOrderText">
                                {data?.product_name}
                              </p>
                              {/* <span className="mapleProductcount">
                              Yellow / M
                            </span> */}
                            </article>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <article className="mapleSubFlex">
                      {lineTotals?.map((total) => {
                        return <p className="mapleProductPrice">-${total.toFixed(2)}</p>;
                      })}
                    </article>
                  </div>
                </div>
                <div className="flexBox mapleInvoiceBox">
                  <article>
                    <p className="mapleProductPrice">Payment Option</p>
                    <p className="mapleProductHeading">
                      {orderDetails?.mode_of_payment.toUpperCase()}
                    </p>
                    <p className="mapleProductPrice">Invoice</p>
                    <p className="mapleProductHeading"># {invoiceNumber}</p>
                  </article>
                  <article>
                    <p className="mapleProductPrice">Date</p>
                    <p className="mapleProductHeading">
                      {moment.utc(orderDetails?.date).format("ddd, DD/MM/YYYY")}
                    </p>
                    <p className="mapleProductPrice">POS No.</p>
                    <p className="mapleProductHeading">
                      #{posData?.pos_number}
                    </p>
                  </article>
                  <article>
                    <p className="mapleProductPrice">Mode</p>
                    <p className="mapleProductHeading">Walk-In</p>
                    <p className="mapleProductPrice">User UD</p>
                    <p className="mapleProductHeading">
                      {orderDetails?.user_details?.id}
                    </p>
                  </article>
                </div>
                <div className="flexBox maplePriceBox">
                  <article>
                    <p className="productName">Subtotal</p>
                    <p className="productName">Discount</p>
                    <p className="productName">Taxes</p>
                    <p className="userName">Total</p>
                  </article>
                  <article>
                    <p className="productName">
                      -$
                      {Number(selectedData?.subtotal)
                        ? Number(selectedData?.subtotal)
                        : selectedData?.existingSubtotal}
                    </p>
                    <p className="productName">$0.00</p>
                    <p className="productName">
                      +$
                      {Number(selectedData?.totalTax)
                        ? Number(selectedData?.totalTax)
                        : selectedData?.existingTax?.toFixed(2)}
                    </p>
                    <p className="userName refundTotalBtn">
                      -$
                      {Number(selectedData?.totalSum)
                        ? Number(selectedData?.totalSum)
                        : selectedData?.existingTotal?.toFixed(2)}
                    </p>
                  </article>
                </div>
                <div className="text-center">
                  <Image
                    src={Images.Logo}
                    alt="logo"
                    className="img-fluid logo"
                  />
                  <Image
                    src={Images.barCodeScanImg}
                    alt="barCodeScanImg"
                    className="img-fluid barCodeScanImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={false}
        mediumWidth={false}
        ids={modalDetail.flag === "email" ? "email" : ""}
        child={
          modalDetail.flag === "email" ? (
            <EmailReceiptModal closeManulModal={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "sms" ? (
            <PhoneReceiptModal closeManulModal={() => handleOnCloseModal()} />
          ) : (
            ""
          )
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};

export default RefundsConfirmation;
