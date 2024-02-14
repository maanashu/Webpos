import React from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment-timezone";
import { useSelector } from "react-redux";
import { selectLoginAuth } from "../../../redux/slices/auth";

const Search = () => {
  const router = useRouter();
  const authData = useSelector(selectLoginAuth);

  const orderDetail = router?.query?.["item"]
    ? JSON.parse(router?.query?.["item"])
    : "";
  const userDetails =
    orderDetail?.order?.user_details ?? orderDetail?.return?.user_details;

  const getDeliveryType = (type) => {
    switch (type) {
      case "1":
        return "Delivery";
      case "3":
        return "In-store";
      case "4":
        return "Shipping";
      case "2":
        return "Reservation";
      default:
        return "In-store";
    }
  };

  const tax = orderDetail?.return
    ? orderDetail?.return?.tax
    : orderDetail?.order?.tax;
  const subTotal = orderDetail?.return
    ? orderDetail?.return?.order?.actual_amount
    : orderDetail?.order?.actual_amount;
  const totalAmout = orderDetail?.return
    ? orderDetail?.return?.order?.payable_amount
    : orderDetail?.order?.payable_amount;
  const deliveryCharges = orderDetail?.return
    ? orderDetail?.return?.order?.delivery_charge
    : orderDetail?.order?.delivery_charge;
  const shippingCharges = orderDetail?.return
    ? orderDetail?.return?.order?.shipping_charge
    : orderDetail?.order?.shipping_charge;
  const discount = orderDetail?.return
    ? orderDetail?.return?.order?.discount
    : orderDetail?.order?.discount;

  const organizationName = orderDetail?.return
    ? orderDetail?.return?.seller_details?.user_profiles?.organization_name
    : orderDetail?.order?.seller_details?.user_profiles?.organization_name;

  const address = orderDetail?.return
    ? `${orderDetail?.return?.seller_details?.user_profiles?.current_address?.city} ${orderDetail?.return?.seller_details?.user_profiles?.current_address?.country} ${orderDetail?.return?.seller_details?.user_profiles?.current_address?.zipcode}`
    : `${orderDetail?.order?.seller_details?.user_profiles?.current_address?.city} ${orderDetail?.order?.seller_details?.user_profiles?.current_address?.country} ${orderDetail?.order?.seller_details?.user_profiles?.current_address?.zipcode}`;

  const phoneNumber = orderDetail?.return
    ? orderDetail?.return?.seller_details?.user_profiles?.full_phone_number
    : orderDetail?.order?.seller_details?.user_profiles?.full_phone_number;

  const orderProductData = orderDetail?.return
    ? orderDetail?.return?.return_details
    : orderDetail?.order?.order_details;

  const paymentMode = orderDetail?.return
    ? orderDetail?.return?.order?.mode_of_payment
    : orderDetail?.order?.mode_of_payment?.toUpperCase();

  const date = orderDetail?.return
    ? moment
        .utc(orderDetail?.return?.order?.created_at)
        .format("ddd DD/MM/YYYY")
    : moment.utc(orderDetail?.order?.created_at).format("ddd DD/MM/YYYY");

  const userID = orderDetail?.return
    ? orderDetail?.return?.user_details?.id
    : orderDetail?.order?.user_details?.id ?? "-";

  const numAmount = (price) => {
    const amount = parseFloat(price);
    const sign = orderDetail?.return ? "-" : price > 0 ? "+ " : "";
    const finalAmount = amount.toFixed(2);
    return `${sign}$${finalAmount}`;
  };

  const getStatus = () => {
    const status = orderDetail?.return
      ? orderDetail?.return?.order?.status
      : orderDetail?.order?.status;
    switch (status) {
      case 1:
        return "Accepted";
      case 2:
        return "Preparing";
      case 3:
        return "Ready to Pickup";
      case 4:
        return "Picked Up";
      case 5:
        return "Delivered";
      case 6:
        return "Picked Up By Customer";
      case 7:
        return "Cancelled";
      case 8:
        return "Rejected By Seller";
      case 9:
        return "Returned";
      default:
        return;
    }
  };

  return (
    <div className="transectionCommon searchSection">
      <div className="row">
        <div className="col-lg-7">
          <div className="SearchLeft">
            <div
              className="flexTable"
              onClick={() => {
                router.back();
              }}
            >
              <Image
                src={Images.boldLeftArrow}
                alt="leftarrow image"
                className="img-fluid"
              />
              <h4 className="appointMain ms-2">Order Detail</h4>
            </div>
            <div className="tableOuter">
              <div className="table-responsive mt-4">
                <table id="invoiceProduct" className="product_table">
                  <thead className="invoiceHeadingBox">
                    <tr>
                      <th className="invoiceHeading"># Invoice</th>
                      <th className="invoiceHeading">Customer</th>
                      <th className="invoiceHeading">Sale</th>
                      <th className="invoiceHeading">Items</th>
                      <th className="invoiceHeading">Price</th>
                      <th className="invoiceHeading"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="product_invoice active">
                      <td className="invoice_subhead">
                        {orderDetail?.invoice_number}
                      </td>
                      <td className="invoice_subhead">
                        <figure className="">
                          <Image
                            src={Images.defaultUser}
                            alt="tableImg"
                            className="costumerImg"
                          />
                          <span>
                            {`${
                              userDetails?.user_profiles?.firstname ?? "N/A"
                            } ${userDetails?.user_profiles?.lastname ?? ""}`}
                          </span>
                        </figure>
                      </td>
                      <td className="invoice_subhead">
                        <figure className="inStoreBtn">
                          <Image
                            src={Images.storeImg}
                            alt="store"
                            className="storeimg"
                          />
                          <span>
                            {getDeliveryType(
                              orderDetail?.order?.delivery_option
                            )}
                          </span>
                        </figure>
                      </td>
                      <td className="invoice_subhead">
                        {orderDetail?.return
                          ? orderDetail?.return?.order?.total_items
                          : orderDetail?.order?.total_items}
                      </td>

                      <td className="invoice_subhead">
                        <figure className="priceBtn">
                          <Image
                            src={Images.moneyImg}
                            alt="money"
                            className="moneyImg"
                          />
                          <span>
                            {orderDetail?.return
                              ? orderDetail?.return?.order?.payable_amount
                              : orderDetail?.order?.payable_amount}
                          </span>
                        </figure>
                      </td>

                      <td className="invoice_subhead">
                        <Image
                          src={Images.arrowIcon}
                          alt="arrows"
                          className="arrowRight_"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* <Pagination /> */}
          </div>
        </div>

        <div className="col-lg-5">
          <div className="deliveryOuter me-0 mapleLeft">
            <div className="confirmRightSub confirmAddress">
              <h2 className="mapleHeading text-center">{organizationName}</h2>
              <h4 className="mapleAddress text-center">{address}</h4>
              <h4 className="mapleAddress text-center p-0">{phoneNumber}</h4>
            </div>
            <div className="confirmRightSub ">
              {orderProductData?.map((item, idx) => {
                const quantity = orderDetail?.return
                  ? item?.order_details?.qty
                  : item?.qty;

                const productName = orderDetail?.return
                  ? item?.order_details?.product_name
                  : item?.product_name;

                const amonut = `${numAmount(
                  orderDetail?.return
                    ? item?.order_details?.price * item?.order_details?.qty
                    : item?.price * item?.qty ?? "0.00"
                )}`;

                const isBookingDateAvailable =
                  orderDetail?.order?.appointments?.[0]?.date ||
                  orderDetail?.order?.appointments[0]?.start_time ||
                  orderDetail?.order?.appointments?.[0]?.end_time;
                const bookingDateTime = `${moment
                  .utc(orderDetail?.order?.appointments?.[0]?.date)
                  .format("DD/MM/YYYY")} @ ${
                  orderDetail?.order?.appointments?.[0]?.start_time
                }-${orderDetail?.order?.appointments?.[0]?.end_time}`;

                return (
                  <li
                    key={item?.id + idx}
                    className="invoice-list-item-customer flex-row-space-between"
                  >
                    <div className="flexBox mapleProductDetailsBox mapleGap">
                      <div className="flexbase">
                        <p className="mapleProductcount"> {quantity} X</p>
                        <article className="ms-2">
                          <p className="mapleProductHeading">{productName}</p>
                          {isBookingDateAvailable && (
                            <span className="mapleDate">{bookingDateTime}</span>
                          )}
                        </article>
                      </div>
                      <article>
                        <p className="mapleProductPrice">{amonut}</p>
                      </article>
                    </div>
                  </li>
                );
              })}
            </div>
            <div className="flexBox mapleInvoiceBox confirmRightSub">
              <article>
                <p className="mapleProductPrice">Payment Option</p>
                <p className="mapleProductHeading">{paymentMode}</p>
                <p className="mapleProductPrice">Invoice</p>
                <p className="mapleProductHeading">
                  #
                  {orderDetail?.return
                    ? orderDetail?.return?.invoices?.invoice_number
                    : orderDetail?.invoice_number}
                </p>
              </article>
              <article>
                <p className="mapleProductPrice">Date</p>
                <p className="mapleProductHeading">{date}</p>
                <p className="mapleProductPrice">POS No.</p>
                <p className="mapleProductHeading">
                  {authData?.posUserLoginDetails?.payload?.pos_number}
                </p>
              </article>
              <article>
                <p className="mapleProductPrice">Mode</p>
                <p className="mapleProductHeading">{getStatus()}</p>
                <p className="mapleProductPrice">User ID</p>
                <p className="mapleProductHeading">{userID}</p>
              </article>
            </div>
            <div className="flexBox maplePriceBox">
              <article>
                <p className="productName">Subtotal</p>
                <p className="productName">Discount</p>
                {deliveryCharges != 0 ?? (
                  <p className="productName">Delivery</p>
                )}
                {shippingCharges != 0 ?? (
                  <p className="productName">Shipping</p>
                )}
                <p className="productName">Tax</p>

                <p className="productName fw-bold">Total</p>
              </article>
              <article>
                <p className="productName">{`${numAmount(subTotal)}`}</p>
                <p className="productName">{`${numAmount(discount)}`}</p>
                {deliveryCharges != 0 ?? (
                  <p className="productName">{`${numAmount(
                    deliveryCharges
                  )}`}</p>
                )}
                {shippingCharges != 0 ?? (
                  <p className="productName">{`${numAmount(
                    shippingCharges
                  )}`}</p>
                )}
                <p className="productName">{`${numAmount(tax)}`}</p>

                <p className="totalBtn">{`${numAmount(totalAmout)}`}</p>
              </article>
            </div>
            <div className="confirmFooter">
              <Image src={Images.Logo} alt="logo" className="img-fluid logo" />
              <img
                src={
                  orderDetail?.return
                    ? orderDetail?.return?.invoices?.barcode
                    : orderDetail?.barcode ?? Images.barCodeScanImg
                }
                alt="barCodeScanImg"
                className="img-fluid barCodeScanImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
