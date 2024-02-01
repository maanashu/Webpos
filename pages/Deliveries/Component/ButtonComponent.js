import { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
const ButtonComponent = ({
  selected,
  orderData,
  declineHandler,
  acceptHandler,
  trackHandler,
  isLoading,
  declineLoading,
}) => {
  const orderStatus = orderData?.status;

  const [isProductDetailLoading, setIsProductDetailLoading] = useState(false);

  return (
    <div className="shippingOrdersViewStyle">
      {selected === "0" && (
        <div className="flexBox ">
          {declineLoading ? (
            <button
              onClick={declineHandler}
              className="declineButton w-100"
              type="button"
            >
              <span className="spinner-border spinner-border-sm"></span>
            </button>
          ) : (
            <button
              disabled={declineLoading}
              onClick={declineHandler}
              className="declineButton w-100"
              type="button"
            >
              {" "}
              Decline
            </button>
          )}
          {isLoading ? (
            <button
              onClick={acceptHandler}
              type="button"
              className="BlueBtn w-100"
            >
              <span className="spinner-border spinner-border-sm"></span>
            </button>
          ) : (
            <button
              disabled={isLoading}
              onClick={acceptHandler}
              type="button"
              className="BlueBtn w-100"
            >
              Accept
              <Image
                src={Images.ArrowRight}
                alt="ArrowRight"
                className="img-fluid ArrowRight"
              />
            </button>
          )}
        </div>
      )}

      {/* {(selected === "0" || selected === "1" || selected === "2") && (
        <button
          onClick={() => acceptHandler(orderData?.id)}
          className={`acceptButtonView ${
            selected == "2" ? "skyBlueBackground" : "navyBlueBackground"
          }`}
        >
          {selected == "2" ? (
            <div className="flexBox ">
              <button className="declineButton w-100" type="button">
                {" "}
                Decline
              </button>
              <button type="button" className="BlueBtn w-100">
                Accept
                <Image
                  src={Images.ArrowRight}
                  alt="ArrowRight"
                  className="img-fluid ArrowRight"
                />
              </button>
            </div>
          ) : (
            // <>
            //   <span className="acceptTextStyle">
            //     {selected === "0"
            //       ? strings.buttonStatus.reviewButton
            //       : selected === "1"
            //       ? strings.buttonStatus.preparedButton
            //       : selected === "2"
            //       ? strings.buttonStatus.prepareButton
            //       : ""}
            //   </span>
            //   <img
            //     src={arrowRightTop}
            //     className="pickUpButtonStyle"
            //     alt="Arrow Right Top"
            //   />
            // </>

            <div className="flexBox ">
              <button className="declineButton w-100" type="button">
                {" "}
                Decline
              </button>
              <button type="button" className="BlueBtn w-100">
                Accept
                <Image
                  src={Images.ArrowRight}
                  alt="ArrowRight"
                  className="img-fluid ArrowRight"
                />
              </button>
            </div>
          )}
        </button>
      )} */}
      {selected == "1" && (
        <div className="flexBox ">
          {isLoading ? (
            <button
              onClick={acceptHandler}
              type="button"
              className="preparedBtn w-100"
            >
              <span className="spinner-border spinner-border-sm"></span>
            </button>
          ) : (
            <button
              disabled={isLoading}
              onClick={acceptHandler}
              type="button"
              className="preparedBtn w-100"
            >
              Order Prepared
              <Image
                src={Images.ArrowRight}
                alt="ArrowRight"
                className="img-fluid ArrowRight"
              />
            </button>
          )}
        </div>
      )}
      {selected == "2" && (
        <div className="flexBox ">
          {isLoading ? (
            <button
              onClick={acceptHandler}
              type="button"
              className="preparedBtn w-100"
            >
              <span className="spinner-border spinner-border-sm"></span>
            </button>
          ) : (
            <button
              disabled={isLoading}
              onClick={acceptHandler}
              type="button"
              className="preparedBtn w-100"
            >
              Ready to Pickup
              <Image
                src={Images.ArrowRight}
                alt="ArrowRight"
                className="img-fluid ArrowRight"
              />
            </button>
          )}
        </div>
      )}

      {selected >= "3" && orderStatus !== 7 && orderStatus !== 8 && (
        <div className="flexBox ">
          {isLoading ? (
            <button
              onClick={acceptHandler}
              type="button"
              className="preparedBtn w-100"
            >
              <span className="spinner-border spinner-border-sm"></span>
            </button>
          ) : (
            <button
              disabled={isLoading}
              onClick={acceptHandler}
              type="button"
              className="preparedBtn w-100"
            >
              Ready to Pickup
              <Image
                src={Images.ArrowRight}
                alt="ArrowRight"
                className="img-fluid ArrowRight"
              />
            </button>
          )}
        </div>
      )}

      {selected === "7,8" && orderStatus === 7 && (
        <div className="flexBox ">
          <button type="button" className="cancelledByUser w-100">
            Cancelled by User
            <Image
              src={Images.ArrowRight}
              alt="ArrowRight"
              className="img-fluid ArrowRight"
            />
          </button>
        </div>
      )}

      {selected === "7,8" && orderStatus === 8 && (
        <div className="flexBox ">
          <button type="button" className="rejectedByUser w-100">
            Rejected by Seller
            <Image
              src={Images.ArrowRight}
              alt="ArrowRight"
              className="img-fluid ArrowRight"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonComponent;
