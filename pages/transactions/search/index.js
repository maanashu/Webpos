import React from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();

  return (
    <div className="transectionCommon searchSection">
      <div className="row">
        <div className="col-lg-7">
          <div className="SearchLeft">
            <div
              className="flexTable"
              onClick={() => {
                router.back();
              }}
            >
              <Image
                src={Images.boldLeftArrow}
                alt="leftarrow image"
                className="img-fluid"
              />
              <h4 className="appointMain ms-2">Order Detail</h4>
            </div>
            <div className="tableOuter">
              <div className="table-responsive mt-4">
                <table id="invoiceProduct" className="product_table">
                  <thead className="invoiceHeadingBox">
                    <tr>
                      <th className="invoiceHeading"># Invoice</th>
                      <th className="invoiceHeading">Customer</th>
                      <th className="invoiceHeading">Sale</th>
                      <th className="invoiceHeading">Items</th>
                      <th className="invoiceHeading">Price</th>
                      <th className="invoiceHeading"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="product_invoice active">
                      <td className="invoice_subhead">gfhh</td>
                      <td className="invoice_subhead">
                        <figure className="">
                          <Image
                            src={Images.jokerImg}
                            alt="tableImg"
                            className="costumerImg"
                          />
                          <span>dfgjk</span>
                        </figure>
                      </td>
                      <td className="invoice_subhead">
                        <figure className="inStoreBtn">
                          <Image
                            src={Images.storeImg}
                            alt="store"
                            className="storeimg"
                          />
                          <span>Delivery</span>
                        </figure>
                      </td>
                      <td className="invoice_subhead">dfghjj</td>

                      <td className="invoice_subhead">
                        <figure className="priceBtn">
                          <Image
                            src={Images.moneyImg}
                            alt="money"
                            className="moneyImg"
                          />
                          <span>pos</span>
                        </figure>
                      </td>

                      <td className="invoice_subhead">
                        <Image
                          src={Images.arrowIcon}
                          alt="arrows"
                          className="arrowRight_"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* <Pagination /> */}
          </div>
        </div>
        <div className="col-lg-5">
          <div className="deliveryOuter me-0 mapleLeft">
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
              <Image src={Images.Logo} alt="logo" className="img-fluid logo" />
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
  );
};

export default Search;
