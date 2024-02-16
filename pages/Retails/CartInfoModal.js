import React, { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";

import {
  amountFormat,
  calculatePercentageValue,
  formattedReturnPrice,
  getProductFinalPrice,
  getProductPrice,
} from "../../utilities/globalMethods";
import moment from "moment";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  productCart,
  selectRetailData,
  setCartLength,
} from "../../redux/slices/retails";
import { selectLoginAuth } from "../../redux/slices/auth";

const CartInfoModal = ({
  cartData,
  cartAmount,
  animating = { animating },
  setAnimating = { setAnimating },
  parameter,
  router,
  removeOneCartHandler,
  updateQuantity,
  bulkCartFunction,
}) => {
  const dispatch = useDispatch();

  const authData = useSelector(selectLoginAuth);
  //   console.log("Bulklkslkdlsdsd", bulkCartFunction);
  const retailData = useSelector(selectRetailData);
  const CART_LENGTH = retailData?.cartLength;
  const cartLength = CART_LENGTH;
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const [filterShow, setFilterShow] = useState(false);
  const [customProductAdd, setCustomProductAdd] = useState(false);
  const [customServiceAdd, setCustomServiceAdd] = useState(false);
  //   const [animating, setAnimating] = useState(
  //     retailData?.productCartLoad ?? true
  //   );

  useEffect(() => {
    setAnimating(true);
    // bulkCartFunction();
    dispatch(
      productCart({
        cb: (res) => {
          if (res?.data !== "") {
            setTimeout(() => {
              setAnimating(false);
            }, 500);
            let cart_Length = res?.data?.payload?.poscart_products?.length;
            dispatch(setCartLength(parseInt(cart_Length)));
          } else {
            setAnimating(false);
          }
        },
      })
    );
    return () => {};
  }, []);

  return (
    <div className="AddtoCart ProductAddCart">
      {animating ? (
        <div className="text-center">
          <span className="spinner-border spinner-border-sm mx-auto"></span>
        </div>
      ) : (
        <div className="cartInfo">
          <div className="topcartListting">
          {cartData?.poscart_products?.map((data, index) => {
            const productSize =
              data?.product_details?.supply?.attributes?.filter(
                (item) => item?.name?.toLowerCase() === "size"
              );
            const productColor =
              data?.product_details?.supply?.attributes?.filter(
                (item) => item?.name?.toLowerCase() === "color"
              );

            return (
              <div className="cartSubInfo active productCartShow" key={index}>
                <div className="orderTime productCartInfo">
                  <Image
                    src={data?.product_details?.image}
                    alt="cartFoodImg"
                    className="img-fluid cartFoodImg"
                    width="100"
                    height="100"
                  />
                  <div className="cartorderHeading ms-2 ">
                    <h4 className="cartText cartShowText">
                      {data?.product_details?.name}
                    </h4>
                    {data?.product_type === "service" && (
                      <div className="userIdText mt-1">
                        {moment.utc(data?.date).format("LL")} @
                        {data?.start_time + "-" + data?.end_time}
                      </div>
                    )}

                    <div className="flexTable mt-1">
                      {productColor?.length > 0 && (
                        <>
                          <span className="userIdText">Colors :</span>
                          <div
                            style={{
                              width: "12px",
                              height: "12px",
                              border: "1px solid black",
                              borderRadius: "15%",
                              background: productColor?.[0]?.values?.name,
                            }}
                          ></div>
                        </>
                      )}

                      {productSize?.length > 0 && (
                        <span className="userIdText mx-2">
                          Size : {productSize?.[0]?.values?.name}{" "}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="orderCalculate">
                  <h4 className="cartMoney">
                    {amountFormat(
                      getProductPrice(
                        data.product_details?.supply?.supply_offers,
                        data.product_details?.supply?.supply_prices
                          ?.selling_price,
                        data.qty
                      )
                    )}
                  </h4>
                  {data?.product_type === "product" ? (
                    <div className="incrementBtn ">
                      <i
                        onClick={() => updateQuantity("-", index)}
                        className="fa-solid fa-minus plusMinus"
                      ></i>
                      <input
                        className="form-control addBtnControl"
                        type="number"
                        placeholder="1"
                        value={data?.qty}
                      />

                      <i
                        onClick={() => updateQuantity("+", index)}
                        className="fa-solid fa-plus plusMinus"
                      ></i>
                    </div>
                  ) : (
                    <p>1</p>
                  )}
                  <div
                    onClick={() => {
                      removeOneCartHandler(data, index);
                    }}
                  >
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

          <div className="subFooter">
            <div className="dividesection">
              <hr className="divideBorder" />
            </div>
            <div className="cartTotalsection">
              <div className="cartTotal">
                <h4 className="userPosition">Sub Total</h4>
                <h4 className="amountText m-0">
                  {amountFormat(cartAmount?.products_price)}
                </h4>
              </div>
              <div className="cartTotal">
                <h4 className="userPosition">{`Discount ${
                  cartData?.discount_flag === "percentage" ? "(%)" : ""
                } `}</h4>
                <h4 className="amountText m-0">
                  {formattedReturnPrice(cartAmount?.discount || "0.00")}
                </h4>
              </div>
              <div className="cartTotal">
                <h4 className="userPosition">Total Taxes</h4>
                <h4 className="amountText m-0">
                  {amountFormat(cartAmount?.tax)}
                </h4>
              </div>
              <div className="cartTotal">
                <h4 className="userPosition">Total</h4>
                <h4 className="amountText m-0">
                  {amountFormat(cartAmount?.total_amount)}
                </h4>
              </div>
              <button
                className="nextverifyBtn w-100"
                onClick={() => {
                  parameter == "product"
                    ? router.push({ pathname: "/Retails/ProductCart" })
                    : router.push({ pathname: "/Retails/ServiceCart" });
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
      )}
    </div>
  );
};

export default CartInfoModal;
