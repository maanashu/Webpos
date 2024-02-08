import React, { useEffect, useState } from "react";
import * as Images from "../../../../utilities/images";
import Image from "next/image";
import moment from "moment-timezone";
import { useSelector } from "react-redux";

import { deliveryData } from "../../../../redux/slices/delivery";
import GoogleMap from "../../../../components/commanComonets/GoogleMap/GoogleMap";
import MapleOrder from "../../../Deliveries/mapleOrder";
import CustomModal from "../../../../components/customModal/CustomModal";
import { useRouter } from "next/router";
import { selectLoginAuth } from "../../../../redux/slices/auth";
import Invoices from "../invoices";
import { ApiClient } from "../../../../utilities/api";
import { ORDER_API_URL } from "../../../../utilities/config";
import { formattedPrice } from "../../../../utilities/globalMethods";

const Invoice = () => {
  const { orderList } = useSelector(deliveryData);

  const orderData = (orderList?.data && orderList?.data[0]) || null;
  const [isMaximize, setIsMaximize] = useState(true);

  const router = useRouter();
  const userId = router?.query?.["order_id"];

  const authData = useSelector(selectLoginAuth);

  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    if (userId)
      ApiClient.get(ORDER_API_URL + "/api/v1/orders/pos/" + userId)
        .then((res) => {
          setOrderDetails(res?.data?.payload);
        })
        .catch((err) => {});
  }, [userId]);

  const orderProductData = orderDetails?.is_returned_order
    ? orderDetails?.return_detail?.return_details
    : orderDetails?.order_details;

  return (
    <div className=" orderDeliverSection TransectionOuter ">
      <div className="deliverMain w-100">
        {orderDetails?.delivery_option == 1 ||
        (orderDetails?.delivery_option == 4 && orderDetails?.status !== 0) ? (
          <div className="row ">
            <div className="col-xl-6 col-lg-12">
              <div className="deliveryOuter me-0 mapleLeft">
                <div
                  style={{
                    gap: "12px",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                  // className="flex-row-space-between"
                  onClick={() => {
                    router.back();
                  }}
                >
                  <Image
                    style={{
                      transform: "rotate(270deg)",
                    }}
                    src={Images.RightArrow}
                  />

                  <h4 style={{ color: "#263682" }}>{"Back"}</h4>
                </div>
                {!orderDetails ? (
                  <td className="text-center" colSpan={12}>
                    Loading...
                  </td>
                ) : (
                  <>
                    <div className="confirmRightSub confirmAddress">
                      <h2 className="mapleHeading text-center">
                        {`${orderDetails?.seller_details?.organization_name}` ??
                          "-"}
                      </h2>
                      <h4 className="mapleAddress text-center">
                        {`${
                          orderDetails?.seller_details?.current_address
                            ?.street_address ?? "-"
                        }`}
                      </h4>
                      <h4 className="mapleAddress text-center p-0">
                        {`${orderDetails?.seller_details?.phone_number}` ?? "-"}
                      </h4>
                    </div>
                    <div className="mapleProductDetails confirmRightSub">
                      {orderProductData?.map((item, index) => {
                        const quantity = orderDetails?.is_returned_order
                          ? item?.order_details?.qty
                          : item?.qty;
                        const productName = orderDetails?.is_returned_order
                          ? item?.order_details?.product_name
                          : item?.product_name;

                        const amonut = orderDetails?.is_returned_order
                          ? item?.order_details?.price *
                            item?.order_details?.qty
                          : item?.price * item?.qty ?? "0.00";

                        return (
                          <div className="flexBox mapleProductDetailsBox">
                            <div className="flexbase">
                              <p className="mapleProductcount">× 1</p>
                              <article className="ms-2">
                                <p className="mapleProductHeading">
                                  {productName ?? "-"}
                                </p>
                                <span className="mapleProductcount">
                                  {`QTY : ${quantity}`}
                                </span>
                              </article>
                            </div>
                            <article>
                              <p className="mapleProductPrice">
                                {`${formattedPrice(amonut)}` ?? "-"}
                              </p>
                            </article>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flexBox mapleInvoiceBox confirmRightSub">
                      <article>
                        <p className="mapleProductPrice">Payment Option</p>
                        <p className="mapleProductHeading">
                          {" "}
                          {orderDetails?.mode_of_payment?.toUpperCase() ?? "-"}
                        </p>

                        <p className="mapleProductPrice">Invoice</p>
                        <p className="mapleProductHeading">
                          #{" "}
                          {orderDetails?.is_returned_order
                            ? orderDetails?.return_detail?.invoices
                                ?.invoice_number
                            : orderDetails?.invoices?.invoice_number}
                        </p>
                      </article>
                      <article>
                        <p className="mapleProductPrice">Date</p>
                        <p className="mapleProductHeading">
                          {moment
                            .utc(orderDetails?.created_at)
                            .format("ddd DD/MM/YYYY")}
                        </p>
                        <p className="mapleProductPrice">POS No.</p>
                        <p className="mapleProductHeading">
                          {authData?.posUserLoginDetails?.payload?.pos_number ??
                            "-"}
                        </p>
                      </article>
                      <article>
                        <p className="mapleProductPrice">Mode</p>
                        <p className="mapleProductHeading">Walk-In</p>
                        <p className="mapleProductPrice">User ID</p>
                        <p className="mapleProductHeading">
                          {orderDetails?.pos_user_details?.id ?? "-"}
                        </p>
                      </article>
                    </div>
                    <div className="flexBox maplePriceBox">
                      <article>
                        <p className="productName">Subtotal</p>
                        <p className="productName">Discount</p>
                        {orderDetails?.delivery_charge > 0 ? (
                          <p className="productName">Delivery Charges</p>
                        ) : (
                          <></>
                        )}
                        {orderDetails?.shipping_charge > 0 ? (
                          <p className="productName">Shipping Charges</p>
                        ) : (
                          <></>
                        )}
                        <p className="productName">Taxes</p>
                        <p className="productName">Tips</p>

                        <p className="productName fw-bold">Total</p>
                      </article>
                      <article>
                        <p className="productName">
                          {formattedPrice(orderDetails?.total_sale_price)}
                        </p>
                        <p className="productName">
                          {formattedPrice(orderDetails?.discount)}
                        </p>
                        {orderDetails?.delivery_charge > 0 ? (
                          <p className="productName">
                            {formattedPrice(orderDetails?.delivery_charge)}
                          </p>
                        ) : (
                          <></>
                        )}
                        {orderDetails?.shipping_charge > 0 ? (
                          <p className="productName">
                            {formattedPrice(orderDetails?.shipping_charge)}
                          </p>
                        ) : (
                          <></>
                        )}

                        <p className="productName">
                          {formattedPrice(orderDetails?.tax)}
                        </p>
                        <p className="productName">
                          {formattedPrice(orderDetails?.tips)}
                        </p>
                        <p className="totalBtn">
                          {formattedPrice(orderDetails?.payable_amount)}
                        </p>
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
                  </>
                )}
              </div>
            </div>

            <div className="col-xl-6 col-lg-12">
              <div className=" deliveryOuter assignMapRight m-0">
                <GoogleMap />
                <div className="orderStatusBox">
                  <div className="orderFlex">
                    <Image
                      src={Images.orderDriver}
                      alt="orderDriver Image"
                      className="img-fluid"
                    />
                    <h4 className="customerLink ">Order Status</h4>
                  </div>
                  {isMaximize ? (
                    <div className="orderTrackStatus">
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.pickupStep}
                            alt="pickupStep Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Verify Code</h4>
                          <h4 className="orderPara">
                            {orderData?.status_desc?.status_5_updated_at
                              ? moment
                                  .utc(
                                    orderData?.status_desc?.status_5_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.deliverDot}
                            alt="deliverDot Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Delivered</h4>
                          <h4 className="orderPara">
                            {orderData?.status_desc?.status_5_updated_at
                              ? moment
                                  .utc(
                                    orderData?.status_desc?.status_5_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.deliverDot}
                            alt="deliverDot Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Product Pickup</h4>
                          <h4 className="orderPara">
                            {orderData?.status_desc?.status_4_updated_at
                              ? moment
                                  .utc(
                                    orderData?.status_desc?.status_4_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                        <div className="jobrPickUp">
                          <Image
                            src={Images.deliverBox}
                            alt="deliverBox Image"
                            className="img-fluid"
                          />
                          <h4 className="locateDistance ">
                            {" "}
                            {orderData?.delivery_option === "3"
                              ? orderData?.customer_pickup_otp || "1234"
                              : orderData?.order_delivery?.seller_otp || "1234"}
                          </h4>
                        </div>
                      </div>
                      {orderData?.delivery_option !== "3" && (
                        <div className="subOrderTime">
                          <div className="positionImg">
                            <Image
                              src={Images.readyStep}
                              alt="readyStep Image"
                              className="img-fluid dotStepImg"
                            />
                            <Image
                              src={Images.lineStep}
                              alt="lineStep Image"
                              className="img-fluid lineStepImg"
                            />
                          </div>
                          <div className="positionText">
                            <h4 className="appointSub mt-0">Assign Driver</h4>
                            <h4 className="orderPara">
                              {orderData?.status_desc?.status_3_updated_at
                                ? moment
                                    .utc(
                                      orderData?.status_desc
                                        ?.status_3_updated_at
                                    )
                                    .format("DD MMM YYYY | HH:mm A")
                                : ""}
                            </h4>
                          </div>
                        </div>
                      )}
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.readyStep}
                            alt="readyStep Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Ready to Pickup</h4>
                          <h4 className="orderPara">
                            {orderData?.status_desc?.status_2_updated_at
                              ? moment
                                  .utc(
                                    orderData?.status_desc?.status_2_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.acceptStep}
                            alt="acceptStep Image"
                            className="img-fluid dotStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Order Accepted</h4>
                          <h4 className="orderPara">
                            {orderData?.status_desc?.status_1_updated_at
                              ? moment
                                  .utc(
                                    orderData?.status_desc?.status_1_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="orderTrackStatus">
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.acceptStep}
                            alt="acceptStep Image"
                            className="img-fluid dotStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Order Accepted</h4>
                          <h4 className="orderPara">
                            {" "}
                            {orderData?.status_desc?.status_1_updated_at
                              ? moment
                                  .utc(
                                    orderData?.status_desc?.status_1_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setIsMaximize(!isMaximize)}
                  className="maximizeImg"
                >
                  <Image
                    src={Images.maximize}
                    alt="maximize Image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Invoices />
          </>
        )}
      </div>
    </div>
  );
};

export default Invoice;
