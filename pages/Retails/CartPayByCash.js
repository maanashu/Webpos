import React, { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { selectLoginAuth } from "../../redux/slices/auth";
import { createOrder, selectRetailData } from "../../redux/slices/retails";
import { useDispatch, useSelector } from "react-redux";
import { amountFormat } from "../../utilities/globalMethods";

const CartPayByCash = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const authData = useSelector(selectLoginAuth);
  const merchentDetails = authData?.usersInfo?.payload?.user?.user_profiles;
  const retailData = useSelector(selectRetailData);
  const cartData = retailData?.productCart;
  const [selectedCart, setSelectedCart] = useState(null);
  const [selectedId, setSelectedId] = useState(1);
  const [cashRate, setCashRate] = useState();
  const [amount, setAmount] = useState();

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

  const totalPayAmount = () => {
    const cartAmount = cartData?.amount?.total_amount ?? "0.00";
    // const totalPayment = parseFloat(cartAmount) + parseFloat(tipAmount);
    const totalPayment = parseFloat(cartAmount);
    return totalPayment.toFixed(2);
    // return amountFormat(totalPayment);
  };
  function findGreaterCurrencyNotes(targetValue, currencyNotes) {
    const greaterNotes = currencyNotes.filter((note) => note > targetValue);
    return greaterNotes;
  }
  const currencyNotes = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 5000];
  const targetValue = totalPayAmount();
  const greaterNotes = findGreaterCurrencyNotes(targetValue, currencyNotes);

  const selectCashArray = [
    {
      id: 1,
      usd: totalPayAmount(),
    },
    {
      id: 2,
      usd: greaterNotes[0] <= 5000 ? greaterNotes[0] : totalPayAmount(),
    },
    {
      id: 3,
      usd: greaterNotes[1] <= 5000 ? greaterNotes[1] : totalPayAmount(),
    },
  ];
  const [localyPay, setlocalyPay] = useState(selectCashArray?.[0]);
  useEffect(() => {
    setCashRate(
      selectedId === 1
        ? selectCashArray?.[0]?.usd
        : selectedId === 2
        ? selectCashArray?.[1]?.usd
        : selectCashArray?.[2]?.usd
    );
  }, [selectedId, selectCashArray]);

  const createOrderHandler = () => {
    let params = {
      cart_id: cartData.id,
      tips: amount === undefined || amount === "" ? cashRate : amount,
      mode_of_payment: "cash",
    };
    dispatch(createOrder(params));
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
                  {selectCashArray?.map((item, index) => {
                    const formattedNumber = amountFormat(
                      Math.round(item.usd * 100) / 100
                    );

                    return (
                      <div className="col-lg-4" key={index}>
                        <div
                          className={
                            selectedId == item?.id
                              ? "receiveAmountSelected"
                              : "receiveAmount"
                          }
                          // onClick={() => handleSelectCart("cartOne")}
                          onClick={() => {
                            setSelectedId(item.id);
                            setCashRate(item.usd);
                            setlocalyPay(item);
                          }}
                        >
                          <p className="amount">{formattedNumber}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* <button className="otherAmountbtn w-100 mt-3" type="submit">
                  Other Amount
                </button> */}
                <input
                  type="text"
                  className="otherAmountbtn w-100 mt-3 "
                  placeholder="Other Amount"
                  style={{ border: "1px solid black" }}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <button
                  className="continueAmountBtn w-100 mt-3"
                  type="button"
                  // onClick={(e) => handleContineAmount(e)}
                  onClick={() => createOrderHandler()}
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
