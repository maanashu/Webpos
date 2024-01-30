import React, { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  getTips,
  getWalletQr,
  merchantWalletCheck,
  productCart,
  selectRetailData,
  setProductCart,
  updateCartByTip,
} from "../../redux/slices/retails";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";
import FullScrennLoader from "../../components/FullScrennLoader";
import { settingInfo } from "../../redux/slices/setting";
import {
  amountFormat,
  formattedReturnPrice,
  formattedReturnPriceWithoutSign,
} from "../../utilities/globalMethods";
import { Modal } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import AttachWithPhone from "./AttachWithPhone";
import AttachWithEmail from "./AttachWithEmail";
import AddedCartItemsCard from "../../components/AddedCartItemsCard";
import moment from "moment-timezone";
import { toast } from "react-toastify";
import JbrCoin from "./JbrCoin";
import CustomModal from "../../components/customModal/CustomModal";
import JobrWalletModal from "../../components/modals/homeModals/service/jobrWalletModal";

const CartAmountByPay = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const posUserData = authData?.posUserLoginDetails;
  const merchentDetails = authData?.usersInfo?.payload?.user?.user_profiles;
  const retailData = useSelector(selectRetailData);
  const getSettingData = useSelector(settingInfo);
  const getTip = retailData?.getTipsData;
  const cartData = retailData?.productCart;
  const cartAmount = cartData?.amount;
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const [key, setKey] = useState(Math.random());
  const [selectedTipIndex, setSelectedTipIndex] = useState(null);
  const [selectedTipAmount, setSelectedTipAmount] = useState("0.00");
  const [selectedPaymentIndex, setSelectedPaymentIndex] = useState(null);
  const [selectedPaymentId, setSelectedPaymentId] = useState(null);

  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null);
  const [phoneModal, setPhoneModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [qrModal, setQrModal] = useState(false);
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });
  const locallyTips = (tips) => {
    var cart = { ...retailData?.productCart };
    cart.amount = { ...cart.amount, tip: parseFloat(tips) };
    var DATA = {
      payload: cart,
    };

    dispatch(setProductCart(DATA));
  };
  useEffect(() => {
    // dispatch(getWalletId(sellerID));
    dispatch(getTips(sellerId));
  }, [sellerId]);

  //closeModal
  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };
  const paymentShow = () => {
    const produdctPrice = cartData?.amount?.products_price || "0.00";
    const discount = formattedReturnPriceWithoutSign(
      cartData?.amount?.discount || "0.00"
    );
    const tips = cartData?.amount?.tip || "0.00";
    const tax = cartData?.amount?.tax || "0.00";

    const payment =
      parseFloat(produdctPrice) +
      parseFloat(discount) +
      parseFloat(tips) +
      parseFloat(tax);

    return payment.toFixed(2);
    // return amountFormat(payment, 'notSign');
  };

  const handleUserProfile = (flag) => {
    setModalDetail({
      show: true,
      flag: flag,
      type: flag,
    });
    setKey(Math.random());
  };
  const TIPS_DATA = [
    { title: getTip?.first_tips ?? 18, percent: getTip?.first_tips ?? "18" },
    { title: getTip?.second_tips ?? 20, percent: getTip?.second_tips ?? "20" },
    { title: getTip?.third_tips ?? 22, percent: getTip?.third_tips ?? "22" },
    { title: "0.00", percent: "No, thanks" },
  ];
  // tips calculation function
  function calculatePercentageValue(value, percentage) {
    if (percentage == "") {
      return "";
    }
    const percentageValue = (percentage / 100) * parseFloat(value);
    return percentageValue.toFixed(2) || "0.00";
  }

  const paymentMethodData = [];
  if (Object.keys(getSettingData?.getSettings)?.length == 0) {
    paymentMethodData.push(
      {
        title: "cash",
        icon: Images.MoneyOutline,
        status: getSettingData?.getSettings.accept_cash_payment || true,
        id: 1,
      },
      {
        title: "jobr coin",
        icon: Images.JOBRCoinOutline,
        status: true,
        id: 2,
      },
      {
        title: "debit/credit",
        icon: Images.Mastercard,
        status: getSettingData?.getSettings.accept_card_payment || true,
        id: 3,
      }
    );
  } else {
    paymentMethodData.push({
      title: "JBR Coin",
      icon: Images.JOBRCoinOutline,
      status: true,
      id: 2,
    });
  }
  const filteredPaymentMethods = paymentMethodData.filter(
    (item) => item.status
  );

  const totalAmountByPaymentMethod = (index) => {
    if (index === 0) {
      return `${amountFormat(paymentShow())}`;
    } else if (index === 1) {
      // return `J${(paymentShow() * 100).toFixed(0)}`;
      return `J ${amountFormat(paymentShow() * 100, "notSign")}`;
    } else {
      return `${amountFormat(paymentShow())}`;
    }
  };
  const receiptData = [
    { title: "SMS", icon: Images.Sms },
    { title: "E-mail", icon: Images.Email },
    { title: "No, thanks", icon: Images.Like },
  ];
  // if (getSettingData?.getSetting?.invoice_email_send_status) {
  //   receiptData.unshift({ title: 'E-mail', icon: Images.emailReceipt });
  // }
  // if (getSettingData?.getSetting?.invoice_sms_send_status) {
  //   receiptData.unshift({ title: 'SMS', icon: Images.smsReceipt });
  // }

  const noThanksHandler = () => {
    let params = {
      tip: selectedTipAmount.toString(),
      cartId: cartData.id,
    };
    dispatch(
      updateCartByTip({
        ...params,
        cb() {
          router.push({
            pathname: "/Retails/CartPayByCash",
          });
          dispatch(productCart());
        },
      })
    );
  };
  const invoiceData = [
    {
      title: "Payment Option",
      data: "Cash",
      id: 1,
    },
    {
      title: "POS No.",
      data: posUserData?.payload?.pos_number,
      id: 2,
    },
    {
      title: "Date",
      // data: moment().format('ddd') + ' ' + moment().subtract(10, 'days').calendar();
      data: moment().format("ddd") + " " + moment().format("MM/DD/YY"),
      id: 3,
    },
    {
      title: "User ID",
      data: posUserData?.payload?.id,
      id: 4,
    },
    {
      title: "Mode",
      data: "Walk-In",
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
                    <h4 className="confirmBack ms-2">Back</h4>
                  </div>
                </div>
              </div>
              <div className="confirmStep">
                <div className="confirmFirst">
                  <p className="customerLink">
                    1. Did we do it well?, Give us a{" "}
                    <span className="fw-bold">tip.</span>
                  </p>
                  <div className="coinAverageSelect">
                    {TIPS_DATA?.map((item, index) => (
                      <div
                        key={index}
                        className="coinPercentSelect"
                        style={{
                          background:
                            selectedTipIndex == index
                              ? "#914BEB"
                              : "transparent",
                        }}
                        onClick={() => {
                          const tipAmount = calculatePercentageValue(
                            cartData?.amount?.products_price,
                            item.title
                          );
                          {
                            item.percent === "No, thanks"
                              ? setSelectedTipAmount("0.00")
                              : setSelectedTipAmount(tipAmount);
                          }

                          setSelectedTipIndex(index);
                          locallyTips(tipAmount);
                        }}
                      >
                        <h2
                          className="coinHeading"
                          style={{
                            color:
                              selectedTipIndex == index ? "white" : "#7233C2",
                          }}
                        >
                          {item.percent}
                          {item.percent === "No, thanks" ? "" : "%"}
                        </h2>
                        <h6
                          className="coinSubText mt-1"
                          style={{
                            color:
                              selectedTipIndex == index ? "white" : "#7233C2",
                          }}
                        >
                          $
                          {calculatePercentageValue(
                            cartData?.amount?.products_price,
                            item.title
                          )}
                        </h6>
                      </div>
                    ))}

                    {/* <div className="coinPercentSelect">
                      <h2 className="coinHeading">15%</h2>
                      <h6 className="coinSubText mt-1">$6.00</h6>
                    </div> */}
                    {/* <div className="coinPercentSelect">
                      <h2 className="coinHeading">20%</h2>
                      <h6 className="coinSubText mt-1">$12.00</h6>
                    </div> */}
                    {/* <div className="coinPercentSelect">
                      <h2 className="coinHeading">No, thanks</h2>
                      <h6 className="coinSubText mt-1">$0.00</h6>
                    </div> */}
                  </div>
                </div>
                <hr className="cartDivide m-0" />
                {selectedTipIndex !== null && (
                  <div className="confirmSecond">
                    <div className="flexBox justify-content-center">
                      <p className="customerLink">
                        2. What is your
                        <span className="fw-bold">Payment Method?</span>
                      </p>
                      <div
                        className="giftCardBox active"
                        onClick={() => {
                          handleUserProfile("giftCard");
                        }}
                      >
                        <Image
                          src={Images.giftOffer}
                          alt="giftOffer Image"
                          className="img-fluid giftOffer"
                        />
                        <Image
                          src={Images.lightGiftOffer}
                          alt="giftOffer Image"
                          className="img-fluid giftLightOffer"
                        />
                        <h6 className="giftHeading">Got a Gift Card?</h6>
                      </div>
                    </div>
                    <div className="row mt-4">
                      {filteredPaymentMethods?.map((item, index) => (
                        <div
                          key={index}
                          className="col-lg-4"
                          onClick={() => {
                            setSelectedPaymentIndex(index);
                            setSelectedPaymentId(item?.id);
                          }}
                        >
                          <div
                            className="debitCreditBox pointHand"
                            style={{
                              background:
                                selectedPaymentIndex == index
                                  ? "#12B76A"
                                  : "#EFFBFF",
                            }}
                          >
                            <article className="flexBox justify-content-between">
                              <Image
                                src={item.icon}
                                alt="Mastercard"
                                className="img-fluid Mastercard"
                              />
                              <p className="debitText">{item.title}</p>
                            </article>
                            {index == "2" && (
                              <p className="cardNumber pt-5">
                                ●●●● ●●●● ●●●● 7224
                              </p>
                            )}

                            <p className="priceRefunded">
                              {totalAmountByPaymentMethod(index)}
                            </p>
                            {index == 1 && (
                              <div className="savingText">Save 15%</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <hr className="cartDivide m-0" />

                {selectedPaymentIndex !== null && selectedPaymentId == 1 && (
                  <div className="confirmThird">
                    <p className="customerLink">
                      3. Select how you want to receive your{" "}
                      <span className="fw-bold">e-receipt.</span>
                    </p>
                    <div className="receiptDetails mt-4 mb-0">
                      <div className="row justify-content-center">
                        {receiptData?.map((item, index) => (
                          <div className="col-lg-3" key={index}>
                            <div
                              className="receiptCard pointHand"
                              style={{
                                background:
                                  selectedRecipeIndex == index
                                    ? "#F79009"
                                    : "#FEEFC6",
                              }}
                              // onClick={() => {
                              //   handleUserProfile("PhoneReceipt");
                              // }}
                              onClick={() => setSelectedRecipeIndex(index)}
                            >
                              <Image
                                src={item.icon}
                                alt="Sms"
                                className="img-fluid Sms"
                              />
                              <p>{item?.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* cash flow buttton   */}
                    {selectedPaymentIndex !== null &&
                      selectedPaymentId === 1 &&
                      selectedRecipeIndex !== null && (
                        <div className="text-center mb-4 mt-4 ">
                          <button
                            className="nextverifyBtn"
                            type="submit"
                            // onClick={() =>
                            //   router.push({
                            //     pathname: "/Retails/CartPayByCash",
                            //   })
                            // }
                            onClick={() => {
                              if (selectedRecipeIndex == "0") {
                                // handleUserProfile("PhoneReceipt");
                                setPhoneModal(true);
                              } else if (selectedRecipeIndex == "1") {
                                // handleUserProfile("emailReceipt");
                                setEmailModal(true);
                              } else if (selectedRecipeIndex == "2") {
                                noThanksHandler();
                                // router.push({
                                //   pathname: "/Retails/CartPayByCash",
                                // });
                              }
                            }}
                          >
                            Confirm
                          </button>
                        </div>
                      )}
                  </div>
                )}
                {selectedPaymentIndex !== null && selectedPaymentId == 2 && (
                  <div style={{ alignSelf: "center" }}>
                    <div className=" justify-content-center my-5 ">
                      <span className="savingBox">You are saving $13.35 !</span>
                    </div>
                    <div className="text-center mb-4 mt-4 ">
                      <button
                        disabled={
                          retailData?.merchantWalletCheckLoad ? true : false
                        }
                        className="nextverifyBtn"
                        type="submit"
                        onClick={() => {
                          let params = {
                            seller_id: sellerId,
                          };
                          dispatch(
                            merchantWalletCheck({
                              ...params,
                              cb: (res) => {
                                if (res?.user_profiles?.wallet_steps <= 4) {
                                  toast.error(
                                    "Please complete your wallet steps"
                                  );
                                } else {
                                  let params = {
                                    tip: selectedTipAmount.toString(),
                                    cartId: cartData.id,
                                  };
                                  dispatch(getWalletQr(params));
                                  setModalDetail({
                                    show: true,
                                    flag: "jobrWallet",
                                  });
                                  setKey(Math.random());

                                  dispatch(
                                    updateCartByTip({
                                      ...params,
                                      cb() {
                                        dispatch(productCart());
                                      },
                                    })
                                  );
                                }
                              },
                            })
                          );
                        }}
                      >
                        Confirm
                        {retailData?.merchantWalletCheckLoad && (
                          <span className="spinner-border spinner-border-sm mx-1"></span>
                        )}
                      </button>
                    </div>
                  </div>
                )}
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
                  return <AddedCartItemsCard data={data} key={index} />;
                })}
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
                  {/* 15% ($13.50) */}
                  <p className="productName">
                    {amountFormat(cartData?.amount?.tax)}
                  </p>
                  <p className="totalBtn">{amountFormat(paymentShow())}</p>
                </article>
              </div>
              <div className="confirmFooter">
                <Image
                  src={Images.Logo}
                  alt="logo"
                  className="img-fluid logo"
                />
                <Image
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

      {/* attach with phone number popup */}
      <Modal show={phoneModal} centered keyboard={false}>
        <AttachWithPhone
          phoneModalClose={() => setPhoneModal(false)}
          tipUpdate={() => {
            noThanksHandler();
            setPhoneModal(false);
          }}
        />
      </Modal>

      {/* attach with email popup */}
      <Modal show={emailModal} centered keyboard={false}>
        <AttachWithEmail
          emailModalClose={() => setEmailModal(false)}
          tipUpdate={() => {
            noThanksHandler();
            setEmailModal(false);
          }}
        />
      </Modal>

      {/* Qr modal popup */}
      <Modal show={qrModal} centered keyboard={false} id={"jobrWalletModal"}>
        <JbrCoin crossHandler={() => setQrModal(false)} />
      </Modal>

      {/* <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        className={"PhoneReceipt"}
        ids={"PhoneReceiptModal"}
        child={<PhoneReceiptModal close={() => handleOnCloseModal()} />}
        header={
          <>
            <div className="trackingSub headerModal">
              <figure className="profileImage ">
                <Image
                  src={Images.phoneMessage}
                  alt="phoneMessage Image"
                  className="img-fluid "
                />
              </figure>
              <h4 className="loginheading mt-2">
                What phone number do we send the e-receipt to?
              </h4>
              <p onClick={handleOnCloseModal} className="crossModal">
                <Image
                  src={Images.modalCross}
                  alt="modalCross"
                  className="img-fluid"
                />
              </p>
            </div>
          </>
        }
        onCloseModal={() => handleOnCloseModal()}
      />  */}
      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        className={
          modalDetail.flag === "PhoneReceipt" ? "commonWidth customContent" : ""
        }
        ids={
          modalDetail.flag === "PhoneReceipt"
            ? "PhoneReceiptModal"
            : modalDetail.flag === "emailReceipt"
            ? "emailReceiptModal"
            : modalDetail.flag === "giftCard"
            ? "giftCardModal"
            : modalDetail.flag === "jobrWallet"
            ? "jobrWalletModal"
            : ""
        }
        child={
          modalDetail.flag === "PhoneReceipt" ? (
            <PhoneReceiptModal close={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "emailReceipt" ? (
            <EmailReceiptModal close={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "giftCard" ? (
            <GiftCardModal close={() => handleOnCloseModal()} />
          ) : modalDetail.flag === "jobrWallet" ? (
            <JbrCoin crossHandler={() => handleOnCloseModal()} />
          ) : (
            ""
          )
        }
        header={
          modalDetail.flag === "PhoneReceipt" ? (
            <>
              <div className="trackingSub headerModal">
                <figure className="profileImage ">
                  <Image
                    src={Images.phoneMessage}
                    alt="phoneMessage Image"
                    className="img-fluid "
                  />
                </figure>
                <h4 className="loginheading mt-2">
                  What phone number do we send the e-receipt to?
                </h4>
                <p onClick={handleOnCloseModal} className="crossModal">
                  <Image
                    src={Images.modalCross}
                    alt="modalCross"
                    className="img-fluid"
                  />
                </p>
              </div>
            </>
          ) : modalDetail.flag === "emailReceipt" ? (
            <>
              <div className="trackingSub headerModal">
                <figure className="profileImage ">
                  <Image
                    src={Images.emailSms}
                    alt="emailSms Image"
                    className="img-fluid "
                  />
                </figure>
                <h4 className="loginheading mt-2">
                  What e-mail address do we send the e-receipt to?
                </h4>
                <p onClick={handleOnCloseModal} className="crossModal">
                  <Image
                    src={Images.modalCross}
                    alt="modalCross"
                    className="img-fluid"
                  />
                </p>
              </div>
            </>
          ) : modalDetail.flag === "giftCard" ? (
            <>
              <div className="trackingSub headerModal">
                <figure className="profileImage ">
                  <Image
                    src={Images.giftModal}
                    alt="giftImage"
                    className="img-fluid "
                  />
                </figure>
                <h4 className="loginheading mt-2">Add your Gift Card number</h4>
                <p onClick={handleOnCloseModal} className="crossModal">
                  <Image
                    src={Images.modalCross}
                    alt="modalCross"
                    className="img-fluid"
                  />
                </p>
              </div>
            </>
          ) : modalDetail.flag === "jobrWallet" ? (
            <>
              <p onClick={handleOnCloseModal} className="modal_cancel">
                <Image
                  src={Images.modalCross}
                  alt="modalCross"
                  className="img-fluid"
                />
              </p>
            </>
          ) : (
            ""
          )
        }
        onCloseModal={() => handleOnCloseModal()}
      />
      {retailData?.updateCartByTipLoad && <FullScrennLoader />}
    </>
  );
};

export default CartAmountByPay;
