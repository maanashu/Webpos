import React, { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import ProductSearch from "../../components/commanComonets/Product/productSearch";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  availableOffers,
  clearCart,
  clearOneProduct,
  getDrawerSession,
  getOneProductById,
  productCart,
  selectRetailData,
  setProductCart,
} from "../../redux/slices/retails";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";
import AddDiscount from "./AddDiscount";
import AddNotes from "./AddNotes";
import CustomModal from "../../components/customModal/CustomModal";
import DeleteCarts from "./DeleteCarts";
import {
  amountFormat,
  formattedReturnPrice,
  getProductFinalPrice,
  getProductPrice,
  noCartFun,
} from "../../utilities/globalMethods";
import { Modal } from "react-bootstrap";
import CustomProductAdd from "./CustomProductAdd";
import { flightRouterStateSchema } from "next/dist/server/app-render/types";
import AttachCustomer from "./AttachCustomer";
import moment from "moment-timezone";

const ServiceCart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const retailData = useSelector(selectRetailData);
  const cartData = retailData?.productCart || {};
  const cartAmount = cartData?.amount;
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const availableOffersArray = retailData?.availableOffers?.data || [];
  const [key, setKey] = useState(Math.random());
  const [customProductAdd, setCustomProductAdd] = useState(false);
  const [attachCustomerModal, setAttachCustomerModal] = useState(false);
  const [productById, setProductById] = useState();

  const onlyServiceCartArray = cartData?.poscart_products?.filter(
    (item) => item?.product_type == "service"
  );
  
  const cartLength = onlyServiceCartArray?.length;

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

  const offers = () => {
    let params = {
      seller_id: sellerId,
      type : 'service'
    };
    dispatch(
      availableOffers({
        ...params,
        cb(res) {},
      })
    );
  };

  useEffect(() => {
    offers();
  }, [sellerId]);

  const handleAddDiscount = () => {
    setModalDetail({ show: true, flag: "AddDiscount" });
    setKey(Math.random());
  };
  const handleAddNotes = () => {
    setModalDetail({ show: true, flag: "AddNotes" });
    setKey(Math.random());
  };
  const handleDeleteCart = () => {
    setModalDetail({ show: true, flag: "DeleteCarts" });
    setKey(Math.random());
  };

  const productFun = (productId, index, item) => {
    let params = {
      seller_id: sellerId,
      app_name: "pos",
      need_pos_users: true,
    };
    dispatch(
      getOneProductById({
        params,
        productId,
        cb: (resp) => {
          router.push({ pathname: "/Retails/AddProduct" });
        },
      })
    );
  };
  function calculatePercentageValue(value, percentage) {
    if (percentage == "") {
      return "";
    }
    const percentageValue = (percentage / 100) * parseFloat(value);
    return percentageValue.toFixed(2) ?? 0.0;
  }
  const calculateOrderAmount = (cart) => {
    if (cart?.poscart_products) {
      var subTotalAmount = cartData?.poscart_products?.reduce((acc, curr) => {
        const productPrice = getProductFinalPrice(curr);

        return acc + productPrice;

        // return acc + productPrice * curr.qty;
      }, 0);
      // var subTotalAmount = cartData?.amout?.total_amount;

      var discountAmount = 0;
      var deliveryFee = 0;
      var taxesAndOtherCharges = 0;

      // if coupon applied
      // if (objCoupon) {
      //   const couponDetail = objCoupon;
      //   if (couponDetail.discount_percentage) {
      //     discountAmount =
      //       (subTotalAmount * couponDetail.discount_percentage) / 100;
      //     discountAmount = Number(discountAmount).toFixed(2);
      //   }

      //   if (
      //     couponDetail.max_discount &&
      //     discountAmount > couponDetail.max_discount
      //   ) {
      //     discountAmount = couponDetail.max_discount;
      //   }
      // }

      // var productsDiscountAmount = cartData?.cart_products?.reduce(
      //   (acc, curr) =>
      //     acc +
      //     (curr.product_details?.supply?.supply_prices?.offer_price
      //       ? curr.product_details?.supply?.supply_prices?.actual_price -
      //         curr.product_details?.supply?.supply_prices?.offer_price
      //       : 0) *
      //       curr.qty,
      //   0
      // );

      // if (productsDiscountAmount > 0) {
      //   discountAmount = discountAmount + productsDiscountAmount;
      // }

      // if (cartData?.amout?.tax_percentage) {
      //   taxesAndOtherCharges =
      //     ((subTotalAmount - discountAmount) *
      //       cartData?.amout?.tax_percentage) /
      //     100;
      // }

      taxesAndOtherCharges = parseFloat(
        calculatePercentageValue(
          subTotalAmount,
          parseInt(cart.amount.tax_percentage)
        )
      );

      var totalOrderAmount =
        subTotalAmount - discountAmount + deliveryFee + taxesAndOtherCharges;

      cart.amount.tax = parseFloat(taxesAndOtherCharges); // Update tax value
      cart.amount.total_amount = totalOrderAmount;
      cart.amount.products_price = subTotalAmount;

      var DATA = {
        payload: cart,
      };
      dispatch(setProductCart(DATA));
    }
  };

  const updateQuantity = (operation, index) => {
    // var arr = retailData?.productCart;
    // const product = arr?.poscart_products[index];
    // const restProductQty = product?.product_details?.supply?.rest_quantity;
    // if (operation == "+") {
    //   if (restProductQty > product?.qty) {
    //     product.qty += 1;
    //     calculateOrderAmount(arr);
    //   } else {
    //     alert("There are no more quantity left to add");
    //   }
    // } else if (operation == "-") {
    //   if (product.qty > 0) {
    //     if (product.qty === 1) {
    //       arr?.poscart_products.splice(index, 1);
    //       // dispatch(updateCartLength(CART_LENGTH - 1));
    //     }
    //     product.qty -= 1;
    //     calculateOrderAmount(arr);
    //   }
    // }
  };

  return (
    <>
      <div className="fullCartSection">
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <div className="commanOuter me-0 commonSubOuter fullCartLeft">
              <div className="fullCartInfo">
                <div className="appointmentHeading">
                  <Link href="/Retails?parameter=product">
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
              {/* 
              {retailData?.productCartLoad ? (
                <div className="loaderOuter">
                  <span className="spinner-border spinner-border-sm mx-1"></span>
                </div>
              ) :  */}
              {Object.keys(cartData)?.length == 0 ? (
                <div className="mt-5">
                  <h6 className="mt-2 mb-2 text-center">No Carts Found!</h6>
                </div>
              ) : (
                onlyServiceCartArray?.map((data, index) => {
                  return (
                    <div className="cartSubInfo active " key={index}>
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
                              {/* <div className="productGreyDot"></div> */}
                              <h6 className="loginPara ms-1">
                              {moment.utc(data?.date).format('LL')} @
                                  {data?.start_time + '-' + data?.end_time}
                              </h6>

                            </div>
                            <div className="flexTable mt-1">
                            <Image
                            src={data?.pos_user_details?.user?.user_profiles
                              ?.profile_photo}
                            alt="cartFoodImg"
                            className="img-fluid cartFoodImg"
                            width="100"
                            height="100"
                          />
                            <h6 className="loginPara ms-1">
                            {data?.pos_user_details?.user?.user_profiles?.firstname +
                                      ' ' +
                                      data?.pos_user_details?.user?.user_profiles?.lastname}
                              </h6>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="fullCartInfo w-50">
                        {amountFormat(
                          getProductPrice(
                            data.product_details?.supply?.supply_offers,
                            data.product_details?.supply?.supply_prices
                              ?.selling_price,
                            data.qty
                          )
                        )}
                      <p>{data?.qty}</p>
                        {/* <div className="incrementBtn ">
                          <i
                            className="fa-solid fa-minus plusMinus"
                            onClick={() => updateQuantity("-", index)}
                          ></i>

                          {data?.qty}
                          <i
                            className="fa-solid fa-plus plusMinus"
                            onClick={() => updateQuantity("+", index)}
                          ></i>
                        </div> */}
                        <div className="fullCartInfo">
                          <h4 className="invoice_subhead p-0">
                            {amountFormat(getProductFinalPrice(data))}
                          </h4>
                          {
                                retailData?.clearOneProductLoad ||
                               retailData?.productCartLoad
                                ?
                                <span className="spinner-border spinner-border-sm mx-1"></span>
                                :
                                <div
                              onClick={() => {
                                let params = {
                                  cartId: cartData?.id,
                                  productId: data?.id,
                                };
                                setProductById(index);
                                dispatch(
                                  clearOneProduct({
                                    ...params,
                                    cb() {
                                      dispatch(productCart());
                                    },
                                  })
                                );
                              }}
                            >
                              

                              <Image
                                src={Images.redCross}
                                alt="crossImage"
                                className="img-fluid ms-2"
                              />
                            </div>



                              }
                          
                          {/* {retailData?.clearOneProductLoad ||
                          retailData?.productCartLoad ? (
                            productById == data?.id && (
                              <span className="spinner-border spinner-border-sm mx-1"></span>
                            )
                          ) : (
                            <div
                              onClick={() => {
                                let params = {
                                  cartId: cartData?.id,
                                  productId: data?.id,
                                };
                                setProductById(index);
                                dispatch(
                                  clearOneProduct({
                                    ...params,
                                    cb() {
                                      dispatch(productCart());
                                    },
                                  })
                                );
                              }}
                            >
                              <Image
                                src={Images.redCross}
                                alt="crossImage"
                                className="img-fluid ms-2"
                              />
                            </div>
                          )} */}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="col-lg-5 col-md-5">
            <div className="commanOuter me-0 ms-0 commonSubOuter fullCartRight">
              <div className="insertProductSection">
                <div
                  className="addproductCart"
                  onClick={() => setCustomProductAdd(true)}
                >
                  <Image
                    src={Images.addProductImg}
                    alt="addProductimage"
                    className="img-fluid"
                  />
                  {/* <h4 className="monthText">Add Product</h4> */}
                </div>
                <div
                  className="deleteProductCart "
                  onClick={(e) =>
                    cartLength > 0 ? handleDeleteCart(e) : noCartFun()
                  }
                >
                  <Image
                    src={Images.deleteProduct}
                    alt="deleteProductImage"
                    className="img-fluid"
                  />
                  {/* <h4 className="monthText">Delete Product</h4> */}
                </div>
                <div className="addproductCart ">
                  <Image
                    src={Images.pauseImg}
                    alt="pauseproductImage"
                    className="img-fluid"
                  />
                  {/* <h4 className="monthText">Pause Product</h4> */}
                </div>
                <div
                  className="addproductCart"
                  onClick={() =>
                    cartLength > 0 ? setAttachCustomerModal(true) : noCartFun()
                  }
                >
                  <Image
                    src={Images.addUser}
                    alt="adduser Image"
                    className="img-fluid "
                  />
                </div>

                {/* <Image
                  src={Images.addProductImg}
                  alt="addproductImage"
                  className="img-fluid "
                /> */}

                {/* <Image
                  src={Images.crossProduct}
                  alt="crossProductImage"
                  className="img-fluid "
                /> */}
                {/* <Image
                  src={Images.pauseImg}
                  alt="pauseProductImage"
                  className="img-fluid "
                /> */}
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
                  {availableOffersArray?.length > 0 ? (
                    availableOffersArray?.map((offers, index) => {
                      return (
                        <div
                          key={index}
                          // onClick={() => handleGoToProductDetails(offers?.id)}
                          // onClick={() => {
                          //   router.push({ pathname: "/Retails/AddProduct" });
                          // }}
                          onClick={() => productFun(offers.id, index, offers)}
                          className="availableoffer"
                        >
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
                                  <div key={index}>
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
                                  </div>
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
                      {availableOffersArray?.length == null ? (
                        <h6 className="mt-3 mb-3">
                          No available offers Found!
                        </h6>
                      ) : (
                        <div className="loaderOuter">
                          <span className="spinner-border spinner-border-sm mx-1"></span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
              <div className="discountOfferMain">
                <button
                  className="discountBtn"
                  onClick={(e) =>
                    cartLength > 0 ? handleAddDiscount(e) : noCartFun()
                  }
                >
                  <Image
                    src={Images.ticketImg}
                    alt="ticket Image"
                    className="img-fluid me-2"
                  />
                  Add Discount
                </button>
                <button
                  className="notesBtn"
                  onClick={(e) =>
                    cartLength > 0 ? handleAddNotes(e) : noCartFun()
                  }
                >
                  <Image
                    src={Images.noteImg}
                    alt="ticket Image"
                    className="img-fluid me-2"
                  />
                  Add Notes
                </button>
              </div>
              <div className="totalCheckout">
                <div className="offerCartTotal">
                  <div className="flexDiv mt-2">
                    <h4 className="lightOfferText">Sub Total</h4>
                    <h4 className="appointSub m-0">
                      {amountFormat(cartAmount?.products_price)}
                    </h4>
                  </div>
                  <div className="flexDiv mt-2">
                    <h4 className="lightOfferText fw-bold">
                      {`Discount ${
                        cartData?.discount_flag === "percentage" ? "(%)" : ""
                      } `}
                    </h4>
                    <h4 className="appointSub m-0 fw-bold">
                      {formattedReturnPrice(cartAmount?.discount || "0.00")}
                    </h4>
                  </div>
                  {/* <div className="flexDiv mt-2">
                    <h4 className="lightOfferText">Other Fees</h4>
                    <h4 className="appointSub m-0">$14,000</h4>
                  </div> */}
                  <div className="flexDiv mt-2">
                    <h4 className="lightOfferText">Tax</h4>
                    <h4 className="appointSub m-0">
                      {amountFormat(cartAmount?.tax)}
                    </h4>
                  </div>
                </div>
                <div className="flexDiv mt-2">
                  <h4 className="totalText">Total</h4>
                  <h4 className="totalSubText">
                    {amountFormat(cartAmount?.total_amount)}
                  </h4>
                </div>
                <button
                  disabled={
                    cartData?.poscart_products?.length > 0 ? false : true
                  }
                  style={{
                    opacity: cartData?.poscart_products?.length > 0 ? 1 : 0.7,
                  }}
                  className="nextverifyBtn w-100 mt-3"
                  type="submit"
                  onClick={() => {
                    router.push({ pathname: "/Retails/CartAmountByPay" });
                    let params = {
                      seller_id: sellerId,
                    };
                    dispatch(getDrawerSession(params));
                  }}
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
      {/* custom product add */}
      <Modal show={customProductAdd} centered keyboard={false}>
        <CustomProductAdd crosshandler={() => setCustomProductAdd(false)} />
      </Modal>

      {/* custom product add */}
      <Modal show={attachCustomerModal} centered keyboard={false}>
        <AttachCustomer crosshandler={() => setAttachCustomerModal(false)} />
      </Modal>

      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={true}
        isRightSideModal={false}
        mediumWidth={false}
        ids={
          modalDetail.flag === "AddDiscount"
            ? "AddDiscount"
            : "AddNotes"
            ? "AddNotes"
            : "DeleteCarts"
        }
        child={
          modalDetail.flag === "AddDiscount" ? (
            <AddDiscount close={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "AddNotes" ? (
            <AddNotes close={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "DeleteCarts" ? (
            <DeleteCarts close={() => handleOnCloseModal()} />
          ) : (
            ""
          )
        }
        header={
          <>
            {modalDetail.flag === "AddDiscount" ? (
              <h4 className="appointMain mb-0">Add Discount</h4>
            ) : modalDetail.flag === "AddNotes" ? (
              <h4 className="appointMain mb-0">Add Notes</h4>
            ) : modalDetail.flag === "DeleteCarts" ? (
              <h4 className="appointMain mb-0">Delete Product</h4>
            ) : (
              ""
            )}
          </>
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};

export default ServiceCart;
