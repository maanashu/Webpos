import React from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { useRouter } from "next/router";
import { selectLoginAuth } from "../../redux/slices/auth";
import { useSelector } from "react-redux";

const RefundsConfirmation = () => {
  const router = useRouter();
  const itemsList = JSON.parse(router.query.selectedItems || "[]");
  const authData = useSelector(selectLoginAuth);
  const merchentDetails = authData?.usersInfo?.payload?.user?.user_profiles;

  const handleConfirmReturnButton = () => {
    router.push({
      pathname: "/Product/Confirmation(Success)",
    });
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
                <h5 className="totalrefundAmount">$304.75</h5>
                <p className="userPosition">
                  Select a method of payment to refund.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="debitCreditBox">
                    <article className="flexBox justify-content-between">
                      <Image
                        src={Images.Mastercard}
                        alt="Mastercard"
                        className="img-fluid Mastercard"
                      />
                      <p>debit/credit</p>
                    </article>
                    <p className="cardNumber pt-5">●●●● ●●●● ●●●● 7224</p>
                    <p className="priceRefunded">$304.75</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="refundCashBox active">
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
                    <p className="priceRefunded">$304.75</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="jobrCoinBox">
                    <article className="flexBox justify-content-between">
                      <Image
                        src={Images.JOBRCoinOutline}
                        alt="JOBRCoinOutline"
                        className="img-fluid JOBRCoinOutline"
                      />
                      <p>jobr coin</p>
                    </article>
                    <p className="priceRefunded">$304.75</p>
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
                  <div className="col-lg-3">
                    <div className="receiptCard h-100">
                      <Image
                        src={Images.Sms}
                        alt="Sms"
                        className="img-fluid Sms"
                      />
                      <p>SMS</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="receiptCard h-100">
                      <Image
                        src={Images.Email}
                        alt="Email"
                        className="img-fluid Email"
                      />
                      <p>E-mail</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="receiptCard active h-100">
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
                <div className="mapleProductDetails">
                  {itemsList?.map((data, idx) => {
                    return (
                      <div key={idx} className="flexBox mapleProductDetailsBox">
                        <div className="flexbase">
                          <p className="mapleProductcount">× {data?.qty}</p>
                          <article className="ms-3">
                            <p className="mapleProductHeading">
                              {data?.product_name}
                            </p>
                            <span className="mapleProductcount">
                              Yellow / M
                            </span>
                          </article>
                        </div>
                        <article>
                          <p className="mapleProductPrice">${data?.price}</p>
                        </article>
                      </div>
                    );
                  })}
                </div>
                <div className="flexBox mapleInvoiceBox">
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
                    <p className="userName">Total</p>
                  </article>
                  <article>
                    <p className="productName">$933.50</p>
                    <p className="productName">15% ($13.50)</p>
                    <p className="productName">$29.00</p>
                    <p className="userName refundTotalBtn">$304.75</p>
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
    </>
  );
};

export default RefundsConfirmation;
