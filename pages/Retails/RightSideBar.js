import React, { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  createBulkCart,
  getHoldProductCart,
  getMainProduct,
  holdCart,
  productCart,
  selectRetailData,
  setCartLength,
  setLocalCart,
  setMainProduct,
  setProductCart,
} from "../../redux/slices/retails";
import {
  amountFormat,
  calculatePercentageValue,
  formattedReturnPrice,
  getProductFinalPrice,
  getProductPrice,
} from "../../utilities/globalMethods";
import CustomProductAdd from "./CustomProductAdd";
import { useRouter } from "next/router";
import CartAlert from "./CartAlert";
import CustomServiceAdd from "./CustomServiceAdd";
import moment from "moment";
import { selectLoginAuth } from "../../redux/slices/auth";
import CustomModal from "../../components/customModal/CustomModal";
import CartInfoModal from "./CartInfoModal";
// import CustomModal from '../../customModal/CustomModal';
// import AddProduct from '../../../components/';

const RightSideBar = ({ props, bulkCartFunction, setSelectedCartItems }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { parameter } = router.query;
  const authData = useSelector(selectLoginAuth);
  console.log("Bulklkslkdlsdsd", bulkCartFunction);
  const retailData = useSelector(selectRetailData);
  const cartData = retailData?.productCart || {};
  const cartAmount = cartData?.amount;
  const CART_LENGTH = retailData?.cartLength;
  const cartLength = CART_LENGTH;
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const [filterShow, setFilterShow] = useState(false);
  const [customProductAdd, setCustomProductAdd] = useState(false);
  const [customServiceAdd, setCustomServiceAdd] = useState(false);
  const [animating, setAnimating] = useState(retailData?.productCartLoad);
  console.log("LOADTTDTDT", retailData?.productCartLoad);
  const holdCartArray = retailData?.holdProductData || [];
  const LOCAL_CART_ARRAY = retailData?.localCartArray;
  const [localCartArray, setLocalCartArray] = useState(LOCAL_CART_ARRAY);
  const holdProductArray =
    holdCartArray ?? holdCartArray?.filter((item) => item.is_on_hold === true);
  const [cartAlert, setCartAlert] = useState(false);

  const productCarts = cartData?.poscart_products?.filter(
    (item) => item?.product_type == "product"
  );

  const serviceCart = cartData?.poscart_products?.filter(
    (item) => item?.product_type == "service"
  );
  // useEffect(() => {
  //   if (Object.keys(cartData)?.length == 0) {
  //     setFilterShow(false);
  //   }
  // }, [cartData]);

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
  const eraseCart = async () => {
    setAnimating(false);
    setSelectedCartItems([]);
    dispatch(setCartLength(0));
    dispatch(setLocalCart([]));
  };
  const cartStatusHandler = async () => {
    if (localCartArray.length > 0) {
      const dataToSend = {
        seller_id: sellerId,
        products: localCartArray,
      };
      try {
        // eraseClearCart();
        eraseCart();
        const bulkData = await createBulkCart(dataToSend)(dispatch);

        // if (holdProductArray?.length == 0 || getRetailData?.getAllCart?.length == 0) {
        if (
          holdProductArray?.length == 0 &&
          Object.keys(retailData?.productCart)?.length == 0
        ) {
          const params =
            holdProductArray?.length > 0
              ? {
                  status: true,
                  cartId: holdProductArray?.[0]?.id,
                }
              : {
                  status: true,
                  cartId: bulkData?.id,
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
        } else {
          const params =
            holdProductArray?.length > 0
              ? {
                  status: !holdProductArray?.[0]?.is_on_hold,
                  cartId: holdProductArray?.[0]?.id,
                }
              : {
                  status: !retailData?.productCart?.is_on_hold,
                  cartId: bulkData?.id,
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
        }
      } catch (error) {
        console.log("catch", error);
      }
    } else {
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
    }
  };
  // hold Cart function
  const serviceCartStatusHandler = () => {
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
      let amountObj = { ...cart.amount };
      amountObj.tax = parseFloat(taxesAndOtherCharges); // Update tax value
      amountObj.total_amount = totalOrderAmount;
      amountObj.products_price = subTotalAmount;
      cart.amount = amountObj;
      // console.log("CART----", JSON.stringify(cart));

      // return;
      var DATA = {
        payload: cart,
      };
      dispatch(setProductCart(DATA));
    }
  };
  const updateQuantity = (operation, index) => {
    const updatedCart = { ...retailData?.productCart };
    const updatedProducts = [...updatedCart?.poscart_products];

    const product = { ...updatedProducts[index] };
    const restProductQty = product?.product_details?.supply?.rest_quantity;
    if (operation === "+") {
      if (restProductQty > product?.qty) {
        product.qty += 1;
        updatedProducts[index] = product;
        updatedCart.poscart_products = updatedProducts;
        calculateOrderAmount(updatedCart);
      } else {
        alert("There are no more quantity left to add");
      }
    } else if (operation === "-") {
      if (product.qty > 0) {
        if (product.qty === 1) {
          updatedProducts.splice(index, 1);
          if (CART_LENGTH > 0) {
            dispatch(setCartLength(CART_LENGTH - 1));
          } else {
            setFilterShow(false);
            dispatch(setCartLength(0));
          }
        } else {
          product.qty -= 1;
          updatedProducts[index] = product;
        }
        updatedCart.poscart_products = updatedProducts;
        calculateOrderAmount(updatedCart);
      }
    }
  };
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
      dispatch(setCartLength(CART_LENGTH - 1));
      var DATA = {
        payload: newCart,
      };
      dispatch(setProductCart(DATA));
    }
  };

  const clearCartHandler = () => {
    setAnimating(true);
    dispatch(
      clearCart({
        cb: () => {
          setAnimating(false);
          setSelectedCartItems([]);
          dispatch(setCartLength(0));
          dispatch(setLocalCart([]));
          dispatch(productCart());
          setFilterShow(false);
        },
      })
    );
  };
  return (
    <>
      {parameter == "product" ? (
        <div
          className={
            props?.showSidebar ? "sidebarRight show " : "sidebarRight hide"
          }
        >
          <ListGroup>
            <ListGroupItem
              className="rightSidebarItems active"
              onClick={() => {
                setTimeout(() => {
                  bulkCartFunction();
                }, 100);

                cartLength > 0
                  ? setFilterShow((prev) => !prev)
                  : setFilterShow(false);
              }}
            >
              <div className="sidebarBg">
                <Image
                  src={Images.ShoppingOutline}
                  alt="image"
                  className="imgSize"
                />
              </div>
              <span className="cartNum">{cartLength || "0"}</span>
            </ListGroupItem>
            {/* <ListGroupItem className="rightSidebarItems" onClick={() => {
                      setModalDetail({ show: true, flag: "AddProduct" });
                      setKey(Math.random());
                  }}>
                      <div className='sidebarBg'>
                          <Image src={Images.AddProduct} alt="image" className="img-fluid rightSidebarIcons" />
                      </div>
                  </ListGroupItem> */}

            <ListGroupItem className="rightSidebarItems">
              <div
                className="sidebarBg"
                onClick={() => {
                  bulkCartFunction(),
                    serviceCart?.length > 0
                      ? setCartAlert(true)
                      : setModalDetail({
                          show: true,
                          flag: "AddProduct",
                        });
                  setKey(Math.random());
                  // setCustomProductAdd(true);
                }}
              >
                <Image
                  src={Images.AddProduct}
                  alt="image"
                  className="img-fluid rightSidebarIcons"
                />
              </div>
            </ListGroupItem>
            <ListGroupItem
              className="rightSidebarItems"
              onClick={() => clearCartHandler()}
            >
              <div className="sidebarBg">
                <Image
                  src={Images.Cancelproduct}
                  alt="image"
                  className="img-fluid rightSidebarIcons"
                />
              </div>
            </ListGroupItem>
            {retailData?.holdCartLoad || retailData?.getHoldProductCartLoad ? (
              <div
                className="rightSidebarItems mt-4"
                style={{ borderWidth: "1px" }}
              >
                <span className="spinner-border spinner-border-sm mx-1"></span>
              </div>
            ) : (
              <ListGroupItem
                className={
                  holdProductArray?.length > 0
                    ? "rightSidebarItems active "
                    : "rightSidebarItems"
                }
                onClick={() => cartStatusHandler()}
              >
                <>
                  <div className="sidebarBg">
                    <Image
                      src={Images.PauseCircleOutline}
                      alt="image"
                      className="img-fluid rightSidebarIcons"
                    />
                  </div>
                  {holdProductArray?.length > 0 && (
                    <span className="holdNum">
                      {holdProductArray?.length || "0"}
                    </span>
                  )}
                </>
              </ListGroupItem>
            )}
            <ListGroupItem
              className="rightSidebarItems"
              onClick={() =>
                productCarts?.length > 0
                  ? router.push({ pathname: "/Retails/ProductCart" })
                  : void 0
              }
            >
              <Image
                src={Images.RightArrow}
                alt="image"
                className="img-fluid rightSidebarIcons"
              />
            </ListGroupItem>
          </ListGroup>
        </div>
      ) : (
        <div
          className={
            props?.showSidebar ? "sidebarRight show" : "sidebarRight hide"
          }
        >
          <ListGroup>
            <ListGroupItem
              className="rightSidebarItems active"
              onClick={() => {
                serviceCart?.length > 0
                  ? setFilterShow((prev) => !prev)
                  : void 0;
              }}
            >
              <div className="sidebarBg">
                <Image
                  src={Images.ShoppingOutline}
                  alt="image"
                  className="imgSize"
                />
              </div>
              <span className="cartNum">{serviceCart?.length || "0"}</span>
            </ListGroupItem>
            {/* <ListGroupItem className="rightSidebarItems" onClick={() => {
                    setModalDetail({ show: true, flag: "AddProduct" });
                    setKey(Math.random());
                }}>
                    <div className='sidebarBg'>
                        <Image src={Images.AddProduct} alt="image" className="img-fluid rightSidebarIcons" />
                    </div>
                </ListGroupItem> */}

            <ListGroupItem className="rightSidebarItems">
              <div
                className="sidebarBg"
                onClick={() => {
                  productCarts?.length > 0
                    ? setCartAlert(true)
                    : //  setCustomServiceAdd(true);
                      setModalDetail({
                        show: true,
                        flag: "ServiceProductAdd",
                      });
                  setKey(Math.random());
                }}
              >
                <Image
                  src={Images.AddProduct}
                  alt="image"
                  className="img-fluid rightSidebarIcons"
                />
              </div>
            </ListGroupItem>
            <ListGroupItem
              className="rightSidebarItems"
              onClick={() =>
                dispatch(
                  clearCart({
                    cb: () => {
                      dispatch(productCart());
                    },
                  })
                )
              }
            >
              <div className="sidebarBg">
                <Image
                  src={Images.Cancelproduct}
                  alt="image"
                  className="img-fluid rightSidebarIcons"
                />
              </div>
            </ListGroupItem>

            {retailData?.holdCartLoad || retailData?.getHoldProductCartLoad ? (
              <div
                className="rightSidebarItems mt-4"
                style={{ borderWidth: "1px" }}
              >
                <span className="spinner-border spinner-border-sm mx-1"></span>
              </div>
            ) : (
              <ListGroupItem
                className={
                  holdProductArray?.length > 0
                    ? "rightSidebarItems active "
                    : "rightSidebarItems"
                }
                onClick={() => serviceCartStatusHandler()}
              >
                <>
                  <div className="sidebarBg">
                    <Image
                      src={Images.PauseCircleOutline}
                      alt="image"
                      className="img-fluid rightSidebarIcons"
                    />
                  </div>
                  {holdProductArray?.length > 0 && (
                    <span className="holdNum">
                      {holdProductArray?.length || "0"}
                    </span>
                  )}
                </>
              </ListGroupItem>
            )}

            <ListGroupItem
              className="rightSidebarItems"
              onClick={() =>
                serviceCart?.length > 0
                  ? router.push({ pathname: "/Retails/ServiceCart" })
                  : void 0
              }
            >
              <Image
                src={Images.RightArrow}
                alt="image"
                className="img-fluid rightSidebarIcons"
              />
            </ListGroupItem>
          </ListGroup>
        </div>
      )}

      {filterShow ? (
        // <div className="AddtoCart ProductAddCart">
        //   {animating ? (
        //     <div className="text-center">
        //       <span className="spinner-border spinner-border-sm mx-auto"></span>
        //     </div>
        //   ) : (
        //     <div className="cartInfo">
        //       {cartData?.poscart_products?.map((data, index) => {
        //         const productSize =
        //           data?.product_details?.supply?.attributes?.filter(
        //             (item) => item?.name?.toLowerCase() == "size"
        //           );
        //         const productColor =
        //           data?.product_details?.supply?.attributes?.filter(
        //             (item) => item?.name?.toLowerCase() == "color"
        //           );

        //         return (
        //           <div
        //             className="cartSubInfo active productCartShow"
        //             key={index}
        //           >
        //             <div className="orderTime productCartInfo">
        //               <Image
        //                 src={data?.product_details?.image}
        //                 alt="cartFoodImg"
        //                 className="img-fluid cartFoodImg"
        //                 width="100"
        //                 height="100"
        //               />
        //               <div className="cartorderHeading ms-2 ">
        //                 <h4 className="cartText cartShowText">
        //                   {data?.product_details?.name}
        //                 </h4>
        //                 {data?.product_type === "service" && (
        //                   <div className="userIdText mt-1">
        //                     {moment.utc(data?.date).format("LL")} @
        //                     {data?.start_time + "-" + data?.end_time}
        //                   </div>
        //                 )}

        //                 <div className="flexTable mt-1">
        //                   {productColor?.length > 0 && (
        //                     <>
        //                       <span className="userIdText">Colors :</span>
        //                       <div
        //                         style={{
        //                           width: "12px",
        //                           height: "12px",
        //                           border: "1px solid black",
        //                           borderRadius: "15%",
        //                           // display: "flex",
        //                           justifyContent: "center",
        //                           alignItems: "center",
        //                           background: productColor?.[0]?.values?.name,
        //                         }}
        //                       ></div>
        //                     </>
        //                   )}

        //                   {productSize?.length > 0 && (
        //                     <span className="userIdText mx-2">
        //                       Size : {productSize?.[0]?.values?.name}{" "}
        //                     </span>
        //                   )}
        //                 </div>
        //               </div>
        //             </div>
        //             <div className="orderCalculate">
        //               <h4 className="cartMoney">
        //                 {amountFormat(
        //                   getProductPrice(
        //                     data.product_details?.supply?.supply_offers,
        //                     data.product_details?.supply?.supply_prices
        //                       ?.selling_price,
        //                     data.qty
        //                   )
        //                 )}
        //               </h4>
        //               {data?.product_type === "product" ? (
        //                 <div className="incrementBtn ">
        //                   <i
        //                     onClick={() => updateQuantity("-", index)}
        //                     className="fa-solid fa-minus plusMinus"
        //                   ></i>
        //                   <input
        //                     className="form-control addBtnControl"
        //                     type="number"
        //                     placeholder="1"
        //                     value={data?.qty}
        //                   />

        //                   <i
        //                     onClick={() => updateQuantity("+", index)}
        //                     className="fa-solid fa-plus plusMinus"
        //                   ></i>
        //                 </div>
        //               ) : (
        //                 <p>1</p>
        //               )}
        //               {/* <label className="custom-checkbox"> */}
        //               <div
        //                 onClick={() => {
        //                   removeOneCartHandler(data, index);
        //                 }}
        //               >
        //                 <Image
        //                   src={Images.redCross}
        //                   alt="crossImage"
        //                   className="img-fluid ms-2"
        //                 />
        //               </div>
        //               {/* <span className="checkmark"></span> */}
        //               {/* </label> */}
        //             </div>
        //           </div>
        //         );
        //       })}

        //       <div className="subFooter">
        //         <div className="dividesection">
        //           <hr className="divideBorder" />
        //         </div>
        //         <div className="cartTotalsection">
        //           <div className="cartTotal">
        //             <h4 className="userPosition">Sub Total</h4>
        //             <h4 className="amountText m-0">
        //               {amountFormat(cartAmount?.products_price)}
        //             </h4>
        //           </div>
        //           <div className="cartTotal">
        //             <h4 className="userPosition">{`Discount ${
        //               cartData?.discount_flag === "percentage" ? "(%)" : ""
        //             } `}</h4>
        //             <h4 className="amountText m-0">
        //               {formattedReturnPrice(cartAmount?.discount || "0.00")}
        //             </h4>
        //           </div>
        //           <div className="cartTotal">
        //             <h4 className="userPosition">Total Taxes</h4>
        //             <h4 className="amountText m-0">
        //               {amountFormat(cartAmount?.tax)}
        //             </h4>
        //           </div>
        //           <div className="cartTotal">
        //             <h4 className="userPosition">Total</h4>
        //             <h4 className="amountText m-0">
        //               {amountFormat(cartAmount?.total_amount)}
        //             </h4>
        //           </div>
        //           <button
        //             className="nextverifyBtn w-100"
        //             onClick={() => {
        //               parameter == "product"
        //                 ? router.push({ pathname: "/Retails/ProductCart" })
        //                 : router.push({ pathname: "/Retails/ServiceCart" });
        //             }}
        //           >
        //             Proceed to checkout
        //             <Image
        //               src={Images.ArrowRight}
        //               alt="rightArrow"
        //               className="img-fluid rightImg"
        //             />
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   )}
        // </div>
        <CartInfoModal
          cartData={cartData}
          cartAmount={cartAmount}
          animating={animating}
          setAnimating={setAnimating}
          parameter={parameter}
          router={router}
          removeOneCartHandler={removeOneCartHandler}
          updateQuantity={updateQuantity}
          bulkCartFunction={bulkCartFunction}
        />
      ) : (
        <></>
      )}

      {/* cart alert popup */}
      <Modal show={cartAlert} centered keyboard={false}>
        <CartAlert crossHandler={() => setCartAlert(false)} />
      </Modal>

      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={false}
        mediumWidth={false}
        ids={
          modalDetail.flag === "AddProduct"
            ? "AddProduct"
            : "ServiceProductAdd"
            ? "ServiceProductAdd"
            : ""
        }
        child={
          modalDetail.flag === "AddProduct" ? (
            <CustomProductAdd crosshandler={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "ServiceProductAdd" ? (
            <CustomServiceAdd crosshandler={() => handleOnCloseModal()} />
          ) : (
            " "
          )
        }
        header={
          <>
            {modalDetail.flag === "AddProduct" ? (
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
                    Add New Product
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
            ) : modalDetail.flag === "ServiceProductAdd" ? (
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
            ) : (
              ""
            )}
          </>
        }
        onCloseModal={() => handleOnCloseModal()}
        // footer={
        //   <>
        //     <div className="modal-footer">
        //       <button
        //         className="cancelBtn"
        //         onClick={() => handleOnCloseModal()}
        //       >
        //         Cancel
        //       </button>
        //       <button className="ModalBlue">
        //         Add to the cart
        //         <Image
        //           src={Images.plusRound}
        //           alt="image"
        //           className="img-fluid BtnIcon"
        //         />
        //       </button>
        //     </div>
        //   </>
        // }
      />
    </>
  );
};

export default RightSideBar;
