import React, { useCallback, useEffect, useState } from "react";
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
  getHoldProductCart,
  getOneProductById,
  getOneServiceById,
  holdCart,
  productCart,
  selectRetailData,
  setProductCart,
  updateCart,
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
import AttachCustomer from "./AttachCustomer";
import moment from "moment-timezone";
import CustomServiceAdd from "./CustomServiceAdd";
import { debounce } from "lodash";
import UpdatePrice from "./UpdatePrice";

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
  const [cartSearch, setCartSearch] = useState("");
  const [productById, setProductById] = useState();
  const [customServiceAdd, setCustomServiceAdd] = useState(false);
  const holdCartArray = retailData?.holdProductData || [];
  const holdProductArray = holdCartArray?.filter(
    (item) => item.is_on_hold === true
  );
  const onlyServiceCartArray = cartData?.poscart_products?.filter(
    (item) => item?.product_type == "service"
  );

  const [cartDetails, setCartDetails] = useState(onlyServiceCartArray || []);

  const cartLength = onlyServiceCartArray?.length;

  const [cartProduct, setCartProduct] = useState("");

  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });

  useEffect(() => {
    setCartDetails(onlyServiceCartArray);
  }, [retailData?.productCart]);

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
      type: "service",
    };
    dispatch(
      availableOffers({
        ...params,
        cb(res) {},
      })
    );
  };

  const clearCartHandler = () => {
    dispatch(
      clearCart({
        cb: () => {
          dispatch(productCart());
        },
      })
    );
  };

  useEffect(() => {
    offers();
  }, [sellerId]);

  const handleAddDiscount = () => {
    cartUpdate();
    setModalDetail({ show: true, flag: "AddDiscount" });
    setKey(Math.random());
  };
  const handleAddNotes = () => {
    cartUpdate();
    setModalDetail({ show: true, flag: "AddNotes" });
    setKey(Math.random());
  };
  const handleDeleteCart = () => {
    cartUpdate();
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

  const getOneService = (serviceId) => {
    cartUpdate();
    let params = {
      seller_id: sellerId,
      app_name: "pos",
      need_pos_users: true,
    };
    dispatch(
      getOneServiceById({
        params,
        serviceId,
        cb: (resp) => {
          router.push({ pathname: "/Retails/AddService" });
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

  const removeOneCartHandler = (data, index) => {
    const offeyKey = data?.product_details?.supply?.supply_offers;
    const updatedCart = { ...retailData?.productCart };

    if (updatedCart?.poscart_products?.length === 1 && index === 0) {
      clearCartHandler();
    } else {
      const newCart = { ...updatedCart };

      if (offeyKey?.length > 0) {
        const product = newCart?.poscart_products[index];
        const productPrice = getProductFinalPrice(data);

        if (product.qty > 0) {
          newCart.amount = { ...newCart.amount };
          newCart.amount.total_amount -= productPrice;
          newCart.amount.products_price -= productPrice;
          newCart.poscart_products = [
            ...newCart.poscart_products.slice(0, index),
            ...newCart.poscart_products.slice(index + 1),
          ];
        }
      } else {
        const product = newCart?.poscart_products[index];
        const productPrice =
          product.product_details?.supply?.supply_prices?.selling_price;

        if (product.qty > 0) {
          newCart.amount = { ...newCart.amount };
          newCart.amount.total_amount -= productPrice * product.qty;
          newCart.amount.products_price -= productPrice * product.qty;
          newCart.poscart_products = [
            ...newCart.poscart_products.slice(0, index),
            ...newCart.poscart_products.slice(index + 1),
          ];
        }
      }

      const totalAmount = newCart.amount.products_price;
      const TAX = calculatePercentageValue(
        totalAmount,
        parseInt(newCart.amount.tax_percentage)
      );
      newCart.amount.tax = parseFloat(TAX);
      newCart.amount.total_amount = totalAmount + parseFloat(TAX);
      var DATA = {
        payload: newCart,
      };
      dispatch(setProductCart(DATA));
    }
  };

  const cartUpdate = () => {
    var arr = retailData?.productCart;
    if (arr?.poscart_products?.length > 0) {
      const products = arr?.poscart_products.map((item) => ({
        product_id: item?.product_id,
        qty: item?.qty,
      }));
      let params = {
        updated_products: products,
        cartId: arr?.id,
      };
      dispatch(updateCart(params));
    }
  };

  // hold Cart function
  const serviceCartStatusHandler = () => {
    cartUpdate();
    const params =
      holdProductArray?.length > 0
        ? {
            status: !holdProductArray?.[0]?.is_on_hold,
            cartId: holdProductArray?.[0]?.id,
          }
        : {
            status: !retailData?.productCart?.is_on_hold,
            cartId: retailData?.productCart?.id,
          };
    dispatch(
      holdCart({
        ...params,
        cb: () => {
          dispatch(getHoldProductCart());
          dispatch(productCart());
        },
      })
    );
  };

  const onSearchCart = (text) => {
    if (text?.length > 1) {
      const filterData = onlyServiceCartArray?.filter((item) =>
        item?.product_details?.name.toLowerCase().includes(text.toLowerCase())
      );
      setCartDetails(filterData);
    } else if (text?.length == 0) {
      setCartDetails(onlyServiceCartArray);
    }
  };

  const cartdebounceSearch = useCallback(debounce(onSearchCart, 1000), [,]);

  return (
    <>
      <div className="fullCartSection">
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <div className="commanOuter me-0 commonSubOuter fullCartLeft">
              <div className="fullCartInfo">
                  <div
                    onClick={() => {
                      cartUpdate();
                      router.push("/Retails?parameter=services");
                    }}
                    className="appointmentHeading"
                  >
                    <Image
                      src={Images.boldLeftArrow}
                      alt="leftarrow image"
                      className="img-fluid"
                    />
                    <h4 className="appointMain ms-2">Full Cart</h4>
                  </div>
                <div className="ProductSearch w-50">
                  <ProductSearch
                    value={cartSearch}
                    onChange={(event) => {
                      setCartSearch(event.target.value);
                      cartdebounceSearch(event.target.value);
                    }}
                  />
                </div>
              </div>
              <hr className="cartDivide" />
              <div className="cartDetails serviceCartSub">
                <div className="flexTable w-50 serviceCartDetail">
                  <h4 className="providerSubText ">#</h4>
                  <h4 className="providerSubText ms-2">Item</h4>
                </div>
                <div className="fullCartInfo w-50 serviceCartInfo">
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
              {!cartDetails?.length ? (
                <div className="mt-5">
                  <h6 className="mt-2 mb-2 text-center">No Carts Found!</h6>
                </div>
              ) : (
                cartDetails?.map((data, index) => {
                  return (
                    <div className="cartSubInfo active serviceCartSub" key={index}>
                      <div className="cartItemDetail w-50 serviceCartDetail">
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
                                {moment.utc(data?.date).format("LL")} @
                                {data?.start_time + "-" + data?.end_time}
                              </h6>
                            </div>
                            <div className="flexTable mt-1">
                              <Image
                                src={data?.pos_user_details?.user?.user_profiles?.profile_photo ? data.pos_user_details.user.user_profiles.profile_photo : Images.defaultUser}
                                alt="cartFoodImg"
                                className="img-fluid cartProfileImg"
                                width="100"
                                height="100"
                              />
                              <h6 className="userIdText">
                                {data?.pos_user_details?.user?.user_profiles
                                  ?.firstname +
                                  " " +
                                  data?.pos_user_details?.user?.user_profiles
                                    ?.lastname}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="fullCartInfo w-50 serviceCartInfo">
                        <div className="unitPriceControl">
                          {amountFormat(
                            getProductPrice(
                              data.product_details?.supply?.supply_offers,
                              data.product_details?.supply?.supply_prices
                                ?.selling_price,
                              data.qty
                            )
                          )}
                        </div>
                        <p className="quantityText">{data?.qty}</p>
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

                          <div
                            className="mx-3"
                            onClick={() => {
                              setModalDetail({
                                show: true,
                                flag: "UpdatePrice",
                              });
                              setKey(Math.random());
                              setCartProduct(data);
                              cartUpdate();
                            }}
                          >
                            <Image
                              src={Images.Edit_line}
                              alt="crossImage"
                              className="img-fluid ms-2"
                            />
                          </div>
                          <div
                            onClick={() => removeOneCartHandler(data, index)}
                          >
                            <Image
                              src={Images.redCross}
                              alt="crossImage"
                              className="img-fluid ms-2"
                            />
                            {/* {retailData?.clearOneProductLoad ||
                              (retailData?.productCartLoad &&
                                productById == index && (
                                  <span className="spinner-border spinner-border-sm mx-1"></span>
                                ))} */}
                          </div>
                          {/* )} */}

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
                  onClick={() => {
                    cartUpdate();
                    // setCustomServiceAdd(true);
                    setModalDetail({
                      show: true,
                      flag: "AddService",
                    });
                    setKey(Math.random());
                  }}
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
                {retailData?.holdCartLoad ||
                retailData?.getHoldProductCartLoad ? (
                  <div className="addproductCart ">
                    <>
                      <span className="spinner-border spinner-border-sm mx-1"></span>
                    </>
                  </div>
                ) : (
                  <div
                    className="addproductCart "
                    onClick={() => serviceCartStatusHandler()}
                  >
                    <Image
                      src={Images.pauseImg}
                      alt="pauseproductImage"
                      className="img-fluid"
                    />
                    <p>{holdProductArray?.length}</p>
                    {/* <h4 className="monthText">Pause Product</h4> */}
                  </div>
                )}

                <div
                  className="addproductCart"
                  onClick={() =>
                    cartLength > 0
                      ? (cartUpdate(),
                        setModalDetail({
                          show: true,
                          flag: "AttachCustomer",
                        }),
                        setKey(Math.random()))
                      : noCartFun()
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
                  {retailData?.availableOffersLoad ? (
                    <div className="loaderOuter">
                      <span className="spinner-border spinner-border-sm mx-1"></span>
                    </div>
                  ) : availableOffersArray?.length == 0 ? (
                    <h6 className="mt-3 mb-3 text-center">
                      No available offers Found!
                    </h6>
                  ) : (
                    availableOffersArray?.map((offers, index) => {
                      return (
                        <div
                          key={index}
                          // onClick={() => handleGoToProductDetails(offers?.id)}
                          // onClick={() => {
                          //   router.push({ pathname: "/Retails/AddProduct" });
                          // }}
                          onClick={() => getOneService(offers?.id, index)}
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
                    cartData?.poscart_products?.length > 0 ||
                    !retailData?.productCartLoad
                      ? false
                      : true
                  }
                  style={{
                    opacity: cartData?.poscart_products?.length > 0 ? 1 : 0.7,
                  }}
                  className="nextverifyBtn w-100 mt-3"
                  type="submit"
                  onClick={() => {
                    cartUpdate();
                    if (Object.keys(cartData?.user_details)?.length == 0) {
                      // setAttachCustomerModal(true);
                      setModalDetail({
                        show: true,
                        flag: "AttachCustomer",
                      }),
                        setKey(Math.random());
                    } else {
                      router.push({ pathname: "/Retails/CartAmountByPay" });
                      let params = {
                        seller_id: sellerId,
                      };
                      dispatch(getDrawerSession(params));
                    }
                  }}
                >
                  Proceed to checkout
                  {retailData?.productCartLoad ? (
                    <span className="spinner-border spinner-border-sm mx-1"></span>
                  ) : (
                    <Image
                      src={Images.ArrowRight}
                      alt="rightArrow"
                      className="img-fluid rightImg"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* custom service add popup */}
      {/* <Modal show={customServiceAdd} centered keyboard={false}>
        <CustomServiceAdd crosshandler={() => setCustomServiceAdd(false)} />
      </Modal> */}

      {/* custom product add */}
      {/* <Modal show={attachCustomerModal} centered keyboard={false}>
        <AttachCustomer crosshandler={() => setAttachCustomerModal(false)} />
      </Modal> */}

      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={false}
        mediumWidth={false}
        ids={
          modalDetail.flag === "AddDiscount"
            ? "AddDiscount"
            : "AddNotes"
            ? "AddNotes"
            : "DeleteCarts"
            ? "DeleteCarts"
            : "UpdatePrice"
            ? "UpdatePrice"
            : "AddService"
            ? "AddService"
            : "AttachCustomer"
            ? "AttachCustomer"
            : ""
        }
        child={
          modalDetail.flag === "AddDiscount" ? (
            <AddDiscount close={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "AddNotes" ? (
            <AddNotes close={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "DeleteCarts" ? (
            <DeleteCarts close={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "UpdatePrice" ? (
            <UpdatePrice
              close={() => handleOnCloseModal()}
              {...{ cartProduct }}
              crossHandler={() => handleOnCloseModal()}
            />
          ) : modalDetail.flag === "AddService" ? (
            <CustomServiceAdd crosshandler={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "AttachCustomer" ? (
            // <CustomProductAdd crosshandler={() => handleOnCloseModal()} />
            <AttachCustomer crosshandler={() => handleOnCloseModal()} />
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
            ) : modalDetail.flag === "UpdatePrice" ? (
              <h4 className="appointMain mb-0">Price Changing</h4>
            ) : modalDetail.flag === "AddService" ? (
              <>
                <h2 className="modalHeading mb-0">
                  <figure className="text-center">
                    <Image
                      src={Images.plusRound}
                      alt="img"
                      onClick={() => handleOnCloseModal()}
                    />
                  </figure>
                  <p className="addProductHeading">
                    Add New Service
                    <br></br> Manually
                  </p>
                </h2>
                <button className="closeButton d-none">
                  <Image
                    src={Images.crossIcon}
                    alt="img"
                    onClick={() => handleOnCloseModal()}
                  />
                </button>
              </>
            ) : modalDetail.flag === "AttachCustomer" ? (
              <>
                <div className="trackingSub headerModal">
                  <figure className="profileImage ">
                    <Image
                      src={Images.addCutomer}
                      alt="trackingImage"
                      className="img-fluid "
                    />
                  </figure>
                  <h4 className="loginheading mt-2">Add a customer</h4>
                  <h4 className="trackingHeading">
                    Search a costumer or{" "}
                    <span className="fw-bold">create a new one. </span>
                  </h4>
                  <div onClick={handleOnCloseModal} className="crossModal">
                    <Image
                      src={Images.modalCross}
                      alt="modalCross"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </>
            ) : (
              " "
            )}
          </>
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};

export default ServiceCart;
