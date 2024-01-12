import React, { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import ProductSearch from "../../components/commanComonets/Product/productSearch";
import Link from "next/link";
import { useRouter } from "next/router";
import { availableOffers, productCart } from "../../redux/slices/retails";
import { useDispatch } from "react-redux";

const ProductCart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [availableOffersData, setAvailableOffersData] = useState(null);
  const [productCarts, setProductCarts] = useState(null);
  console.log(productCarts, "productCarts");
  const [posCartProducts, setPosCartProducts] = useState([]);
  console.log(posCartProducts, "posCartProducts");
  console.log(availableOffersData, "availableOffersData");

  const offers = () => {
    dispatch(
      availableOffers({
        cb(res) {
          if (res.data) {
            setAvailableOffersData(res?.data?.payload?.data);
          } else {
            toast.error("something went wrong");
          }
        },
      })
    );
  };
  const fullcarts = () => {
    dispatch(
      productCart({
        cb(res) {
          console.log(res, "responseCart=>");
          if (res.data) {
            setProductCarts(res?.data?.payload);
            setPosCartProducts(res?.data?.payload?.poscart_products);
          } else {
            toast.error("something went wrong");
          }
        },
      })
    );
  };
  useEffect(() => {
    offers();
    fullcarts();
  }, []);

  return (
    <div className="fullCartSection">
      <div className="row">
        <div className="col-lg-7 col-md-7">
          <div className="commanOuter me-0 commonSubOuter fullCartLeft">
            <div className="fullCartInfo">
              <div className="appointmentHeading">
                <Link href="/Retails">
                  <Image
                    src={Images.boldLeftArrow}
                    alt="leftarrow image"
                    className="img-fluid"
                  />
                  <h4 className="appointMain ms-2">Full Cart</h4>
                </Link>
              </div>
              <div className="ProductSearch w-50">
                <ProductSearch />
              </div>
            </div>
            <hr className="cartDivide" />
            <div className="cartDetails">
              <div className="flexTable w-50">
                <h4 className="providerSubText ">#</h4>
                <h4 className="providerSubText ms-2">Item</h4>
              </div>
              <div className="fullCartInfo w-50">
                <h4 className="providerSubText ">Unit Price</h4>
                <h4 className="providerSubText ">Quantity</h4>
                <h4 className="providerSubText ">Line Total</h4>
              </div>
            </div>

            {posCartProducts?.map((data, index) => {
              return (
                <div className="cartSubInfo active ">
                  <div className="cartItemDetail w-50">
                    <h4 className="invoice_subhead p-0 ">{index + 1}</h4>
                    <div className="orderTime ms-2">
                      <Image
                        src={data?.product_details?.image}
                        alt="cartFoodImg"
                        className="img-fluid cartFoodImg"
                        width="100"
                        height="100"
                      />
                      <div className="cartorderHeading ms-2 ">
                        <h4 className="cartInfoText">
                          {data?.product_details?.name}
                        </h4>
                        <div className="flexTable mt-1">
                          <div className="productGreyDot"></div>
                          <h6 className="loginPara ms-1">
                            {data?.product_details?.sku}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fullCartInfo w-50">
                    {/* <input
        className="form-control unitPriceControl"
        type="number"
        placeholder="$20.00"
      /> */}
                    ${data?.product_details?.price}
                    <div className="incrementBtn ">
                      <i className="fa-solid fa-minus plusMinus"></i>
                      {/* <input
          className="form-control addBtnControl"
          type="number"
          placeholder=""
          disabled
        /> */}
                      {data?.qty}
                      <i className="fa-solid fa-plus plusMinus"></i>
                    </div>
                    <div className="fullCartInfo">
                      <h4 className="invoice_subhead p-0">$100</h4>
                      <Image
                        src={Images.redCross}
                        alt="crossImage"
                        className="img-fluid ms-2"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-lg-5 col-md-5">
          <div className="commanOuter me-0 ms-0 commonSubOuter fullCartRight">
            <div className="insertProductSection">
              <div className="addproductCart d-none">
                <Image
                  src={Images.addProductImg}
                  alt="addProductimage"
                  className="img-fluid"
                />
                <h4 className="monthText">Add Product</h4>
              </div>
              <div className="addproductCart d-none">
                <Image
                  src={Images.pauseImg}
                  alt="pauseproductImage"
                  className="img-fluid"
                />
                <h4 className="monthText">Pause Product</h4>
              </div>
              <div className="deleteProductCart ">
                <Image
                  src={Images.deleteProduct}
                  alt="deleteProductImage"
                  className="img-fluid"
                />
                <h4 className="monthText">Delete Product</h4>
              </div>
              <Image
                src={Images.addProductImg}
                alt="addproductImage"
                className="img-fluid d-none"
              />
              <Image
                src={Images.crossProduct}
                alt="crossProductImage"
                className="img-fluid "
              />
              <Image
                src={Images.pauseImg}
                alt="pauseProductImage"
                className="img-fluid "
              />
              <Image
                src={Images.addUser}
                alt="adduser Image"
                className="img-fluid "
              />
            </div>
            <div className="cartOfferSection">
              <div className="availablePercent">
                <figure className="offerImg ">
                  <Image
                    src={Images.discount}
                    alt="Discount image"
                    className="img-fluid "
                  />
                </figure>
                <h4 className="offerHeading">Available Offer</h4>
              </div>

              <div className="offerdata">
                {availableOffersData?.length > 0 ? (
                  availableOffersData?.map((offers, index) => {
                    return (
                      <div key={index} className="availableoffer">
                        <div className="cartOfferInfo">
                          <Image
                            src={offers?.image}
                            alt="cartFoodImg"
                            className="img-fluid cartFoodImg"
                            width="100"
                            height="100"
                          />
                          <div className="offerCartHeading">
                            <h4 className="availablemain">{offers?.name}</h4>
                            <h4 className="availableTime">
                              Today at 10hrs / Dr. Africa ...
                            </h4>

                            {offers?.supplies?.map((sup) => {
                              return (
                                <>
                                  {sup?.supply_prices?.map((price) => {
                                    return (
                                      <h4 className="availablePrice">
                                        <del>
                                          $
                                          {price?.actual_price
                                            ? price?.actual_price
                                            : selling_price}
                                        </del>
                                        <span className="actualPrice">
                                          $
                                          {price?.offer_price
                                            ? price?.offer_price
                                            : selling_price}
                                        </span>
                                      </h4>
                                    );
                                  })}
                                </>
                              );
                            })}
                          </div>
                        </div>
                        <figure className="offerCartImg">
                          <Image
                            src={Images.lightOfferCart}
                            alt="lightOfferCart Image"
                            className="img-fluid "
                          />
                        </figure>
                      </div>
                    );
                  })
                ) : (
                  <>
                    {availableOffersData?.length == 0 ? (
                      <h3 className="mt-3 mb-3">No avail Found!</h3>
                    ) : (
                      <div className="loaderOuter">
                        <div className="spinner-grow loaderSpinner text-center my-5"></div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="discountOfferMain">
              <button className="discountBtn">
                <Image
                  src={Images.ticketImg}
                  alt="ticket Image"
                  className="img-fluid me-2"
                />
                Add Discount
              </button>
              <button className="notesBtn">
                <Image
                  src={Images.noteImg}
                  alt="ticket Image"
                  className="img-fluid me-2"
                />
                Add Discount
              </button>
            </div>
            <div className="totalCheckout">
              <div className="offerCartTotal">
                <div className="flexDiv mt-2">
                  <h4 className="lightOfferText">Sub Total</h4>
                  <h4 className="appointSub m-0">$2,396.50</h4>
                </div>
                <div className="flexDiv mt-2">
                  <h4 className="lightOfferText fw-bold">Discount</h4>
                  <h4 className="appointSub m-0 fw-bold">-$19.00</h4>
                </div>
                <div className="flexDiv mt-2">
                  <h4 className="lightOfferText">Other Fees</h4>
                  <h4 className="appointSub m-0">$14,000</h4>
                </div>
                <div className="flexDiv mt-2">
                  <h4 className="lightOfferText">Fax</h4>
                  <h4 className="appointSub m-0">$236</h4>
                </div>
              </div>
              <div className="flexDiv mt-2">
                <h4 className="totalText">Total</h4>
                <h4 className="totalSubText">$236</h4>
              </div>
              <button
                className="nextverifyBtn w-100 mt-3"
                type="submit"
                onClick={() =>
                  router.push({ pathname: "/Retails/CartAmountByPay" })
                }
              >
                Proceed to checkout
                <Image
                  src={Images.ArrowRight}
                  alt="rightArrow"
                  className="img-fluid rightImg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
