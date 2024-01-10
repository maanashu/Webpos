import React, { useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import CustomModal from "../../components/customModal/CustomModal";
import PhoneReceiptModal from "../../components/modals/homeModals/service/phoneReceiptModal";
import EmailReceiptModal from "../../components/modals/homeModals/service/emailReceiptModal";
import GiftCardModal from "../../components/modals/homeModals/service/giftCardModal";
import JobrWalletModal from "../../components/modals/homeModals/service/jobrWalletModal";
import Link from "next/link";

const CartAmountByPay = () => {
  const [key, setKey] = useState(Math.random());
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });

  //closeModal
  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };

  const handleUserProfile = (flag) => {
    setModalDetail({
      show: true,
      flag: flag,
      type: flag,
    });
    setKey(Math.random());
  };
  return (
    <>
      <div className="confirmSelectSection confirmationSection">
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <div className="commanOuter me-0 commonSubOuter p-0  confirmSelectLeft">
              <div className="fullCartInfo">
                <Link href="/Retails/ProductCart">
                  <div className="appointmentHeading">
                    <Image
                      src={Images.boldLeftArrow}
                      alt="leftarrow image"
                      className="img-fluid"
                    />
                    <h4 className="confirmBack ms-2">Back</h4>
                  </div>
                </Link>
              </div>
              <div className="confirmStep">
                <div className="confirmFirst">
                  <p className="customerLink">
                    1. Did we do it well?, Give us a{" "}
                    <span className="fw-bold">tip.</span>
                  </p>
                  <div className="coinAverageSelect">
                    <div className="coinPercentSelect active">
                      <h2 className="coinHeading">10%</h2>
                      <h6 className="coinSubText mt-1">$3.00</h6>
                    </div>
                    <div className="coinPercentSelect">
                      <h2 className="coinHeading">15%</h2>
                      <h6 className="coinSubText mt-1">$6.00</h6>
                    </div>
                    <div className="coinPercentSelect">
                      <h2 className="coinHeading">20%</h2>
                      <h6 className="coinSubText mt-1">$12.00</h6>
                    </div>
                    <div className="coinPercentSelect">
                      <h2 className="coinHeading">No, thanks</h2>
                      <h6 className="coinSubText mt-1">$0.00</h6>
                    </div>
                  </div>
                </div>
                <hr className="cartDivide m-0" />
                <div className="confirmSecond">
                  <div className="flexBox justify-content-center">
                    <p className="customerLink">
                      2. What is your
                      <span className="fw-bold">Payment Method?</span>
                    </p>
                    <div
                      className="giftCardBox active"
                      onClick={() => {
                        handleUserProfile("giftCard");
                      }}
                    >
                      <Image
                        src={Images.giftOffer}
                        alt="giftOffer Image"
                        className="img-fluid giftOffer"
                      />
                      <Image
                        src={Images.lightGiftOffer}
                        alt="giftOffer Image"
                        className="img-fluid giftLightOffer"
                      />
                      <h6 className="giftHeading">Got a Gift Card?</h6>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-4">
                      <div className="debitCreditBox pointHand">
                        <article className="flexBox justify-content-between">
                          <Image
                            src={Images.Mastercard}
                            alt="Mastercard"
                            className="img-fluid Mastercard"
                          />
                          <p className="debitText">debit/credit</p>
                        </article>
                        <p className="cardNumber pt-5">●●●● ●●●● ●●●● 7224</p>
                        <p className="priceRefunded">$304.75</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="refundCashBox active pointHand">
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
                          <p className="debitText">cash</p>
                        </article>
                        <p className="priceRefunded">$304.75</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="jobrCoinBox active pointHand"
                        onClick={() => {
                          handleUserProfile("jobrWallet");
                        }}
                      >
                        <article className="flexBox justify-content-between">
                          <Image
                            src={Images.JOBRCoinOutline}
                            alt="JOBRCoinOutline"
                            className="img-fluid JOBRCoinOutline"
                          />
                          <Image
                            src={Images.jobrCoin}
                            alt="JOBRCoinOutline"
                            className="img-fluid jobrCoinDark"
                          />
                          <p className="debitText">jobr coin</p>
                        </article>
                        <div className="jobrCoinFooter">
                          <p className="priceRefunded">$304.75</p>
                          <div className="savingText">Save 15%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="cartDivide m-0" />
                <div className="confirmThird">
                  <p className="customerLink">
                    3. Select how you want to receive your{" "}
                    <span className="fw-bold">e-receipt.</span>
                  </p>
                  <div className="receiptDetails mt-4 mb-0">
                    <div className="row justify-content-center">
                      <div className="col-lg-3">
                        <div
                          className="receiptCard pointHand"
                          onClick={() => {
                            handleUserProfile("PhoneReceipt");
                          }}
                        >
                          <Image
                            src={Images.Sms}
                            alt="Sms"
                            className="img-fluid Sms"
                          />
                          <p>SMS</p>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div
                          className="receiptCard pointHand"
                          onClick={() => {
                            handleUserProfile("emailReceipt");
                          }}
                        >
                          <Image
                            src={Images.Email}
                            alt="Email"
                            className="img-fluid Email"
                          />
                          <p>E-mail</p>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="receiptCard active pointHand">
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
                  <div className="flexBox justify-content-center my-5 d-none">
                    <span className="savingBox">You are saving $13.35 !</span>
                  </div>
                </div>
              </div>
              <div className="text-center mb-4 ">
                <button className="nextverifyBtn" type="submit">
                  Confirm
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="commanOuter me-0 ms-0 commonSubOuter confirmRight p-0">
              <div className="confirmRightSub confirmAddress">
                <h2 className="mapleHeading text-center">Maple Inc.</h2>
                <h4 className="mapleAddress text-center">
                  500 Rideau St. Ottawa, ON 5Z2 K1L
                </h4>
                <h4 className="mapleAddress text-center p-0">
                  +1 (438) 459-0226
                </h4>
              </div>
              <div className="mapleProductDetails confirmRightSub">
                <div className="flexBox mapleProductDetailsBox">
                  <div className="flexbase">
                    <p className="mapleProductcount">× 1</p>
                    <article className="ms-3">
                      <p className="mapleProductHeading">
                        Lightweight Stylish Casual Daypack
                      </p>
                      <span className="mapleProductcount">Yellow / M</span>
                    </article>
                  </div>
                  <article>
                    <p className="mapleProductPrice">$90.00</p>
                  </article>
                </div>
                <div className="flexBox mapleProductDetailsBox">
                  <div className="flexbase">
                    <p className="mapleProductcount">× 1</p>
                    <article className="ms-3">
                      <p className="mapleProductHeading">
                        Lightweight Stylish Casual Daypack
                      </p>
                      <span className="mapleProductcount">Yellow / M</span>
                    </article>
                  </div>
                  <article>
                    <p className="mapleProductPrice">$90.00</p>
                  </article>
                </div>
                <div className="flexBox mapleProductDetailsBox">
                  <div className="flexbase">
                    <p className="mapleProductcount">× 1</p>
                    <article className="ms-3">
                      <p className="mapleProductHeading">
                        Lightweight Stylish Casual Daypack
                      </p>
                      <span className="mapleProductcount">Yellow / M</span>
                    </article>
                  </div>
                  <article>
                    <p className="mapleProductPrice">$90.00</p>
                  </article>
                </div>
              </div>
              <div className="flexBox mapleInvoiceBox confirmRightSub">
                <article>
                  <p className="mapleProductPrice">Payment Option</p>
                  <p className="mapleProductHeading">Cash</p>
                  <p className="mapleProductPrice">Invoice</p>
                  <p className="mapleProductHeading"># 9836-1238</p>
                </article>
                <article>
                  <p className="mapleProductPrice">Date</p>
                  <p className="mapleProductHeading">Wed 10/10/23</p>
                  <p className="mapleProductPrice">POS No.</p>
                  <p className="mapleProductHeading">#Front-CC03</p>
                </article>
                <article>
                  <p className="mapleProductPrice">Mode</p>
                  <p className="mapleProductHeading">Walk-In</p>
                  <p className="mapleProductPrice">User UD</p>
                  <p className="mapleProductHeading">****331</p>
                </article>
              </div>
              <div className="flexBox maplePriceBox">
                <article>
                  <p className="productName">Subtotal</p>
                  <p className="productName">Discount</p>
                  <p className="productName">Shipping</p>
                  <p className="productName fw-bold">Total</p>
                </article>
                <article>
                  <p className="productName">$933.50</p>
                  <p className="productName">15% ($13.50)</p>
                  <p className="productName">$29.00</p>
                  <p className="totalBtn">$304.75</p>
                </article>
              </div>
              <div className="confirmFooter">
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
      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        className={
          modalDetail.flag === "PhoneReceipt" ? "commonWidth customContent" : ""
        }
        ids={
          modalDetail.flag === "PhoneReceipt"
            ? "PhoneReceiptModal"
            : modalDetail.flag === "emailReceipt"
            ? "emailReceiptModal"
            : modalDetail.flag === "giftCard"
            ? "giftCardModal"
            : modalDetail.flag === "jobrWallet"
            ? "jobrWalletModal"
            : ""
        }
        child={
          modalDetail.flag === "PhoneReceipt" ? (
            <PhoneReceiptModal close={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "emailReceipt" ? (
            <EmailReceiptModal close={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "giftCard" ? (
            <GiftCardModal close={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "jobrWallet" ? (
            <JobrWalletModal close={() => handleOnCloseModal()} />
          ) : (
            ""
          )
        }
        header={
          modalDetail.flag === "PhoneReceipt" ? (
            <>
              <div className="trackingSub headerModal">
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
                <p onClick={handleOnCloseModal} className="crossModal">
                  <Image
                    src={Images.modalCross}
                    alt="modalCross"
                    className="img-fluid"
                  />
                </p>
              </div>
            </>
          ) : modalDetail.flag === "emailReceipt" ? (
            <>
              <div className="trackingSub headerModal">
                <figure className="profileImage ">
                  <Image
                    src={Images.emailSms}
                    alt="emailSms Image"
                    className="img-fluid "
                  />
                </figure>
                <h4 className="loginheading mt-2">
                  What e-mail address do we send the e-receipt to?
                </h4>
                <p onClick={handleOnCloseModal} className="crossModal">
                  <Image
                    src={Images.modalCross}
                    alt="modalCross"
                    className="img-fluid"
                  />
                </p>
              </div>
            </>
          ) : modalDetail.flag === "giftCard" ? (
            <>
              <div className="trackingSub headerModal">
                <figure className="profileImage ">
                  <Image
                    src={Images.giftModal}
                    alt="giftImage"
                    className="img-fluid "
                  />
                </figure>
                <h4 className="loginheading mt-2">Add your Gift Card number</h4>
                <p onClick={handleOnCloseModal} className="crossModal">
                  <Image
                    src={Images.modalCross}
                    alt="modalCross"
                    className="img-fluid"
                  />
                </p>
              </div>
            </>
          ) : modalDetail.flag === "jobrWallet" ? (
            <>
              <p onClick={handleOnCloseModal} className="modal_cancel">
                <Image
                  src={Images.modalCross}
                  alt="modalCross"
                  className="img-fluid"
                />
              </p>
            </>
          ) : (
            ""
          )
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};

export default CartAmountByPay;
