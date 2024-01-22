import React, { useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectRetailData } from "../../redux/slices/retails";
import { selectLoginAuth } from "../../redux/slices/auth";
import {
  amountFormat,
  formattedReturnPrice,
} from "../../utilities/globalMethods";
import moment from "moment-timezone";
import AddedCartItemsCard from "../../components/AddedCartItemsCard";

const ShowPaidAmountCart = () => {
  const router = useRouter();
  const { cart, paymentData } = router.query;
  const cartData = JSON.parse(cart);
  const payableData = JSON.parse(paymentData);
  const retailData = useSelector(selectRetailData);
  const authData = useSelector(selectLoginAuth);
  const posUserData = authData?.posUserLoginDetails;
  console.log("posUserData", JSON.stringify(posUserData));
  const merchentDetails = authData?.usersInfo?.payload?.user?.user_profiles;

  // change due function
  const payAmount = cartData?.amount?.total_amount?.toFixed(2);
  const ActualPayAmount = payableData?.tips;
  const changeDue = parseFloat(ActualPayAmount) - parseFloat(payAmount);
  const invoiceData = [
    {
      title: "Payment Option",
      data: payableData?.mode_of_payment,
      id: 1,
    },
    {
      title: "Date",
      // data: moment().format('ddd') + ' ' + moment().subtract(10, 'days').calendar();
      data: moment().format("ddd") + " " + moment().format("MM/DD/YY"),
      id: 2,
    },
    {
      title: "Mode",
      data: "Walk-In",
      id: 3,
    },
    {
      title: "POS No.",
      data: posUserData?.payload?.pos_number,
      id: 4,
    },
    {
      title: "User ID",
      data: posUserData?.payload?.id,
      id: 5,
    },
  ];
  // Function to  array into groups of 3
  const threeGroupArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };
  const rows = threeGroupArray(invoiceData, 2);

  return (
    <>
      <div className="confirmSelectSection confirmationSection">
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <div className="commanOuter me-0 commonSubOuter p-0  confirmSelectLeft">
              <div className="fullCartInfo">
                <div
                  className="appointmentHeading"
                  onClick={() => router.push("/home/overview")}
                >
                  <Image
                    src={Images.boldLeftArrow}
                    alt="leftarrow image"
                    className="img-fluid"
                  />
                  <h4 className="confirmBack ms-2">Back</h4>
                </div>
              </div>
              <div className="paidAmountMain">
                <p className="PaidamountText">Paid Amount:</p>
                <p className="amount">
                  {payableData?.mode_of_payment == "card" ||
                  payableData?.mode_of_payment === "cash"
                    ? "$"
                    : "JBR"}
                  {amountFormat(payableData?.tips, "notSign")}
                </p>
              </div>
              <div>
                <p className="amount">Change Due: {amountFormat(changeDue)}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="commanOuter me-0 ms-0 commonSubOuter confirmRight p-0">
              <div className="confirmRightSub confirmAddress">
                <h2 className="mapleHeading text-center">
                  {merchentDetails?.organization_name}.
                </h2>
                <h4 className="mapleAddress text-center">
                  {merchentDetails?.current_address?.street_address},
                  {merchentDetails?.current_address?.city},
                  {merchentDetails?.current_address?.state},
                  {merchentDetails?.current_address?.country},
                  {merchentDetails?.current_address?.zipcode}
                </h4>
                <h4 className="mapleAddress text-center p-0">
                  {merchentDetails?.full_phone_number}
                </h4>
                <p className="mapleProductHeading text-center p-2">
                  Invoice No. #{"787"}
                </p>
              </div>
              <div className="mapleProductDetails confirmRightSub">
                {cartData?.poscart_products?.map((item, index) => (
                  <AddedCartItemsCard data={item} key={index} />
                ))}
              </div>
              <div className="flexBox mapleInvoiceBox confirmRightSub">
                {rows?.map((row, index) => (
                  <div key={index}>
                    {row?.map((item, ind) => (
                      <div key={ind}>
                        <p className="mapleProductPrice">{item?.title}</p>
                        <p className="mapleProductHeading">{item?.data}</p>
                      </div>
                    ))}
                  </div>
                ))}
                {/* <div>
                  <p className="mapleProductPrice">Payment Option</p>
                  <p className="mapleProductHeading">Cash</p>
                </div> */}
                {/* <article>
                  <p className="mapleProductPrice">Date</p>
                  <p className="mapleProductHeading">Wed 10/10/23</p>
                  <p className="mapleProductPrice">POS No.</p>
                  <p className="mapleProductHeading">#Front-CC03</p>
                </article> */}
                {/* <article>
                  <p className="mapleProductPrice">Mode</p>
                  <p className="mapleProductHeading">Walk-In</p>
                  <p className="mapleProductPrice">User UD</p>
                  <p className="mapleProductHeading">****331</p>
                </article> */}
              </div>
              <div className="flexBox maplePriceBox">
                <article>
                  <p className="productName">Subtotal</p>
                  <p className="productName">Discount</p>
                  <p className="productName">Tips</p>
                  <p className="productName">Total Taxes</p>
                  <p className="productName fw-bold">Total</p>
                </article>
                <article>
                  <p className="productName">
                    {amountFormat(cartData?.amount?.products_price)}
                  </p>
                  <p className="productName">
                    {formattedReturnPrice(cartData?.amount?.discount)}
                  </p>
                  <p className="productName">
                    {amountFormat(cartData?.amount?.tip)}
                  </p>
                  <p className="productName">
                    {amountFormat(cartData?.amount?.tax)}
                  </p>
                  <p className="totalBtn">
                    {amountFormat(cartData?.amount?.total_amount)}
                  </p>
                </article>
              </div>
              <div className="confirmFooter">
                <Image
                  src={Images.Logo}
                  alt="logo"
                  className="img-fluid logo"
                />
                <Image
                  // src={Images.barCodeScanImg}
                  src={cartData?.barcode}
                  alt="barCodeScanImg"
                  className="img-fluid barCodeScanImg"
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPaidAmountCart;
