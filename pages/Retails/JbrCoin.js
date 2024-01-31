import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  attachCustomer,
  clearCart,
  createOrder,
  paymentRequestCancel,
  productCart,
  qrcodestatus,
  requestCheck,
  requestMoney,
  selectRetailData,
  setQrcodestatus,
  setRequestCheck,
  walletGetByPhone,
} from "../../redux/slices/retails";

import { toast } from "react-toastify";
import * as Images from "../../utilities/images";
import PhoneInput from "react-phone-input-2";
import Image from "next/image";
import {
  digits,
  emailReg,
  mobileReg,
  phoneRegex,
} from "../../utilities/validators";
import { useRouter } from "next/router";
import { amountFormat } from "../../utilities/globalMethods";
import { selectLoginAuth } from "../../redux/slices/auth";

const JbrCoin = forwardRef(({ crossHandler }, ref) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const retailData = useSelector(selectRetailData);
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const qrcode = retailData?.walletQrData;
  const cartData = retailData?.productCart;
  const [phoneCode, SetPhoneCode] = useState("+1");
  const [phoneNo, setPhoneNo] = useState("");
  const [walletIdInp, setWalletIdInp] = useState();
  const walletUser = retailData?.walletGetByPhoneData?.[0] || [];

  const [sendRequest, setsendRequest] = useState(false);
  const [requestId, setRequestId] = useState();
  const [duration, setDuration] = useState(120);
  const requestStatus = retailData?.requestCheckData;
  const qrStatus = retailData?.qrcodestatusData;
  console.log("requestStatus", requestStatus, qrStatus);
  const drawerData = retailData?.drawerSession;

  const generateRandomName = () => {
    return Math.random().toString(36).substr(2, 10);
  };

  useImperativeHandle(ref, () => ({
    handleCancel() {
      handleOnCancel();
    },
  }));

  // function for change the number and save number is state...............................
  const onChangePhoneNumber = (value, data) => {
    let phoneCode = data.dialCode;
    let phoneNumber = value.slice(data.dialCode.length);
    setPhoneNo(phoneNumber);
    SetPhoneCode(phoneCode);
  };

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  useEffect(() => {
    let timer;

    if (sendRequest && duration > 0) {
      timer = setInterval(() => setDuration(duration - 1), 1000);
    } else if (duration == 0) {
      setsendRequest(false);
      setDuration(120);
    }
    return () => clearInterval(timer);
  }, [sendRequest, duration]);

  useEffect(() => {
    setWalletIdInp(phoneNo);
    if (phoneNo?.length > 9) {
      if (phoneNo && digits.test(phoneNo) === false) {
        toast.error("Please enter valid phone number ");
      } else {
        let params = {
          phoneNumber: "+" + phoneCode + phoneNo,
        };
        console.log(params);
        // return;
        dispatch(walletGetByPhone(params));
      }
    }
  }, [phoneNo?.length > 9]);

  const sendRequestFun = () => {
    let params = {
      amount: (cartData?.amount?.total_amount * 100)?.toFixed(0),
      reciever_address: walletUser?.wallet_address,
      seller_id: sellerId,
    };
    dispatch(
      requestMoney({
        ...params,
        cb: (res) => {
          setsendRequest(true);
          setRequestId(res?._id);
          let param = {
            requestId: res?._id,
          };
          dispatch(requestCheck(param));
        },
      })
    );
  };

  const handleOnCancel = () => {
    let params = {
      requestId: requestId,
    };
    sendRequest && dispatch(paymentRequestCancel(params));

    dispatch(setRequestCheck(""));
    dispatch(setQrcodestatus(""));
    setsendRequest(false);
    setDuration(120);
    setWalletIdInp("");
  };

  const funRunOnCreateOrder = () => {
    dispatch(setRequestCheck(""));
    dispatch(setQrcodestatus(""));
    setsendRequest(false);
    setDuration(120);
    setWalletIdInp("");
  };

  const createOrderHandler = () => {
    let params = {
      cart_id: cartData.id,
      tips: (cartData?.amount?.total_amount * 100)?.toFixed(0),
      mode_of_payment: "jbr",
      drawer_id: drawerData?.id,
    };
    dispatch(
      createOrder({
        ...params,
        cb() {
          dispatch(
            clearCart({
              cb: () => {
                dispatch(productCart());
                funRunOnCreateOrder();
              },
            })
          );
          router.push({
            pathname: "/Retails/ShowPaidAmountCart",
            query: {
              cart: JSON.stringify(cartData),
              paymentData: JSON.stringify(params),
            },
          });
        },
      })
    );
  };

  useEffect(() => {
    let interval;

    if (requestStatus !== "success" && sendRequest) {
      interval = setInterval(() => {
        setRequestId((requestId) => {
          let param = {
            requestId: requestId,
          };
          dispatch(requestCheck(param));
          return requestId;
        });
      }, 10000);
    } else if (requestStatus == "success" && sendRequest) {
      createOrderHandler();
      clearInterval(interval);
    } else if (qrStatus !== "success" && sendRequest == false) {
      interval = setInterval(() => {
        let params = {
          cartId: cartData?.id,
        };
        dispatch(qrcodestatus(params));
      }, 5000);
    } else if (qrStatus == "success" && sendRequest == false) {
      createOrderHandler();
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [
    // isFocused,
    requestStatus == "success",
    qrStatus == "success",
    sendRequest,
  ]);

  return (
    <div className="jobrWalletSection">
      <div className="walletLeftModal">
        <Image
          src={Images.walletCoin}
          alt="walletCoin Image"
          className="img-fluid"
        />
        <h4 className="payHeading">Scan to Pay</h4>
        <div className="JbrAmount">
          JBR {amountFormat(cartData?.amount?.total_amount * 100, "notSign")}
        </div>
        <h4 className="payHeading mt-0">
          {amountFormat(cartData?.amount?.total_amount)} USD
        </h4>
        <Image
          src={qrcode?.qr_code}
          alt="scanner Image"
          className="img-fluid scannerImg"
          width="100"
          height="100"
          style={
            sendRequest
              ? { width: "100%", height: "100%", filter: "blur(20px)" }
              : { width: "100%", height: "100%" }
          }
        />
      </div>
      <div className="walletRightModal">
        <Image
          src={Images.customerWallet}
          alt="wallet image"
          className="walletImg_"
        />
        <p className="payHeading">
          Or send the payment request to your JOBR wallet:
        </p>
        <form className="walletForm text-start ">
          <div className="walletField">
            <label className="form-label amountText m-0 text-start">
              Wallet Number
            </label>
            {/* <div className="phoneIcon mt-1">
              <input
                className="form-control walletControl"
                type="number"
                placeholder="3 3 9    4  5  5    0 2 0 0"
              />
              <Image
                src={Images.Wallets}
                alt="mailbox image"
                className="img-fluid lockImg"
              />
            </div> */}
            <div className=" verifySelect">
              <div id="result" className="phoneIcon">
                <PhoneInput
                  country="us"
                  value={phoneCode?.toString() + phoneNo?.toString()}
                  enableSearch={true}
                  name={generateRandomName}
                  placeholder="Phone no."
                  autoComplete="off"
                  onChange={(value, data, event, formattedValue) =>
                    onChangePhoneNumber(value, data, event, formattedValue)
                  }
                />
                <Image
                  src={Images.AlertCircle}
                  alt="alertImage"
                  className="img-fluid alertImg"
                />
              </div>
            </div>
          </div>
          <div className="addCustomerBtn mt-4 walletModalBtn">
            <button
              className="serviceCancel"
              type="button"
              onClick={() => {
                crossHandler();
                handleOnCancel();
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => sendRequestFun()}
              disabled={
                walletUser?.step >= 2 && walletIdInp?.length > 9 && !sendRequest
                  ? false
                  : true
              }
              className={sendRequest ? "eReciptBtn" : "nextverifyBtn "}
              type="button"
              style={{
                opacity:
                  walletUser?.step >= 2 &&
                  walletIdInp?.length > 9 &&
                  !sendRequest
                    ? 1
                    : 0.7,
              }}
            >
              {sendRequest ? "Request Sent" : "Send Request"}
              {retailData?.requestMoneyLoad && (
                <span className="spinner-border spinner-border-sm mx-1"></span>
              )}

              {sendRequest && (
                <Image
                  src={Images.btnTick}
                  alt="btnTick image"
                  className="img-fluid ms-2"
                />
              )}
            </button>
            {/* <button className="eReciptBtn d-none" type="submit" > 
              Request Sent
              <Image
                src={Images.btnTick}
                alt="btnTick image"
                className="img-fluid ms-2"
              />
            </button> */}
          </div>
          {sendRequest && (
            <h6 className="text-center mt-3">{formatTime(duration)}</h6>
          )}
        </form>
      </div>
    </div>
  );
});
export default JbrCoin;
