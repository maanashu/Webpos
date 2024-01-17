import React, { useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { selectLoginAuth } from "../../redux/slices/auth";
import { selectRetailData } from "../../redux/slices/retails";
import { useSelector } from "react-redux";

const CartPayByCash = () => {
  const router = useRouter();
  const authData = useSelector(selectLoginAuth);
  const merchentDetails = authData?.usersInfo?.payload?.user?.user_profiles;
  const retailData = useSelector(selectRetailData);
  const cartData = retailData?.productCart;
  const cartAmount = cartData?.amount;
  const [selectedCart, setSelectedCart] = useState(null);

  const handleContineAmount = () => {
    if (!selectedCart) {
      toast.error("Please choose cart!");
    } else {
      router.push({ pathname: "/Retails/ShowPaidAmountCart" });
    }
  };
  const handleSelectCart = (cart) => {
    setSelectedCart(cart);
  };
  return (
    <>
      <div className="confirmSelectSection confirmationSection">
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <div className="commanOuter me-0 commonSubOuter p-0  confirmSelectLeft">
              <div className="fullCartInfo">
                <div
                  onClick={() => {
                    router.back();
                  }}
                >
                  <div className="appointmentHeading">
                    <Image
                      src={Images.boldLeftArrow}
                      alt="leftarrow image"
                      className="img-fluid"
                    />
                  </div>
                  <h4 className="confirmBack ms-2">Back</h4>
                </div>
              </div>
              <div className="receiveAmountMain">
                <h5 className="recieveHeading">Received Amount</h5>
                <div className="row mt-4">
                  <div className="col-lg-4">
                    <div
                      className={
                        selectedCart == "cartOne"
                          ? "receiveAmountSelected"
                          : "receiveAmount"
                      }
                      onClick={() => handleSelectCart("cartOne")}
                    >
                      <p className="amount">$1.61</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className={
                        selectedCart == "cartTwo"
                          ? "receiveAmountSelected"
                          : "receiveAmount"
                      }
                      onClick={() => handleSelectCart("cartTwo")}
                    >
                      <p className="amount">$2.00</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className={
                        selectedCart == "cartThree"
                          ? "receiveAmountSelected"
                          : "receiveAmount"
                      }
                      onClick={() => handleSelectCart("cartThree")}
                    >
                      <p className="amount">$5.00</p>
                    </div>
                  </div>
                </div>
                <button className="otherAmountbtn w-100 mt-3" type="submit">
                  Other Amount
                </button>
                <button
                  className="continueAmountBtn w-100 mt-3"
                  type="button"
                  onClick={(e) => handleContineAmount(e)}
                >
                  Continue
                </button>
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
              </div>
              <div className="mapleProductDetails confirmRightSub">
                {cartData?.poscart_products?.map((data, index) => {
                  return (
                    <div key={index} className="flexBox mapleProductDetailsBox">
                      <div className="flexbase">
                        <p className="mapleProductcount">× {index + 1}</p>
                        <article className="ms-3">
                          <p className="mapleProductHeading">
                            {data?.product_details?.name}
                          </p>
                          <span className="mapleProductcount">Yellow / M</span>
                        </article>
                      </div>
                      <article>
                        <p className="mapleProductPrice">
                          ${data?.product_details?.price}
                        </p>
                      </article>
                    </div>
                  );
                })}
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
                  <p className="productName">
                    ${cartAmount?.products_price || "0.00"}
                  </p>
                  <p className="productName">
                    -${cartAmount?.discount || "0.00"}
                  </p>
                  {/* 15% ($13.50) */}
                  <p className="productName"> ${cartAmount?.tax || "0.00"}</p>
                  <p className="totalBtn">
                    {" "}
                    ${cartAmount?.total_amount || "0.00"}
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
                  src={Images.barCodeScanImg}
                  alt="barCodeScanImg"
                  className="img-fluid barCodeScanImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPayByCash;
