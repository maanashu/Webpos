import React, { useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const CartPayByCash = () => {
  const router = useRouter();
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
    </>
  );
};

export default CartPayByCash;