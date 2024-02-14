import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { useRouter } from "next/router";
import CustomModal from "../../components/customModal/CustomModal";
import ReturnInventory from "../../components/commanComonets/Product/ProductModal/returnInventory";
import {
  returnToInventory,
  selectReturnData,
} from "../../redux/slices/productReturn";
import { useDispatch, useSelector } from "react-redux";
import {
  setInvoiceData,
  onErrorStopLoad,
} from "../../redux/slices/productReturn";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";
import { logout } from "../../redux/slices/auth";
import { formattedReturnPrice } from "../../utilities/globalMethods";

const productrefunds = () => {
  const toastId = React.useRef(null);
  const dispatch = useDispatch();
  const [enableText, setEnabletext] = useState(false);
  const [enableTextForPercent, setnableTextForPercent] = useState(false);
  const [enableTextFordoller, setnableTextForDoller] = useState(true);
  const router = useRouter();
  const [refundAmount, setRefundAmount] = useState("");
  const [inputValues, setInputValues] = useState([]);
  const [applyRefund, setApplyRefund] = useState(false);
  const [allApplicable, setAppApplicable] = useState(false);
  const invoiceData = useSelector(selectReturnData);
  const orderDetails = invoiceData?.invoiceByInvoiceId;
  const selectedData = invoiceData?.invoiceData;
  let refundedItems = JSON.parse(selectedData?.selectedItems || "[]");
  const [key, setKey] = useState(Math.random());
  const [newQty, setNewQty] = useState([]);
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

  const handleGoToinventery = () => {
    const isGreater = refundedItems.some(
      (item) => Number(refundAmount) > Number(item.price)
    );
    // if (isGreater == false) {
    if (orderDetails?.order?.order_type === "service") {
      handlereturnToInventory();
    } else {
      setModalDetail({ show: true, flag: "ReturnInventory" });
    }

    setKey(Math.random());

    const shareData = {
      selectedItems: JSON.stringify(refundedItems),
      inputValues: JSON.stringify(inputValues),
      totalSum: totalSum?.toString(),
      subtotal: subtotal?.toString(),
      totalTax: discount?.toString(),
      existingTax: sumTax,
      existingSubtotal: sumQtyPrice,
      existingTotal: totalAmount,
    };
    dispatch(setInvoiceData(shareData));
    // } else {
    //   if (!toast.isActive(toastId.current)) {
    //     toastId.current = toast.error("Please enter a valid refund amount");
    //   }
    //   return;
    // }
  };

  let products = refundedItems?.map((item, index) => {
    const newItem = {
      id: item?.product_id,
      qty: item?.qty,
      add_to_inventory_qty:
        (newQty?.find((val) => val?.id === item?.id) || {}).qty || 0,
      write_off_qty:
        item?.qty - (newQty?.find((val) => val?.id === item?.id) || {}).qty ||
        0,
      refund_value:
        Number(
          (inputValues?.find((val) => val?.index === index) || {}).value
        ) ||
        item?.price ||
        0,
    };
    return newItem;
  });

  // Return API should not hit here
  const handlereturnToInventory = () => {
    const refundSubTotal = subtotal ? subtotal : sumQtyPrice;
    const refundTaxAmount = sumTax ? sumTax : discount;
    const refundAmount = totalSum ? totalSum : totalAmount;

    const { title, deliveryCharges } = deliveryShippingCharges();

    let refundData = {
      subtotal: parseFloat(refundSubTotal).toFixed(2),
      order_id: orderDetails?.order?.id,
      products: products,
      total_taxes: parseFloat(refundTaxAmount).toFixed(2),
      total_refund_amount: totalRefundableAmount(),
      return_reason: "testing reason",
      drawer_id: orderDetails?.order?.drawer_id || 0,
      deliveryShippingTitle: title,
      deliveryShippingCharges: deliveryCharges,
    };

    router.push({
      pathname: "/Product/RefundsConfirmation(No_Selection)",
      query: { refundData: JSON.stringify(refundData) },
    });
  };

  const totalRefundableAmount = () => {
    const { deliveryCharges } = deliveryShippingCharges();
    const _refundAmount = totalSum ? totalSum : totalAmount;
    const _refundTaxAmount = sumTax ? sumTax : discount;
    const total_payable_amount =
      parseFloat(deliveryCharges) +
      // parseFloat(_refundTaxAmount) +
      parseFloat(_refundAmount);
    return total_payable_amount.toFixed(2) || 0;
  };

  useEffect(() => {
    dispatch(onErrorStopLoad());
  }, [dispatch]);

  const handleInputChange = (e, index) => {
    const enteredValue = e.target.value;
    const isValidInput = /^[+]?\d*\.?\d*$/.test(enteredValue);
    if (!isValidInput) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          "Refund amount should be a numeric non-negative number"
        );
      }
      return;
    }

    const inputValue = parseFloat(enteredValue);
    const productPrice = parseFloat(refundedItems[index]?.price);

    if (!isNaN(inputValue) && inputValue <= productPrice) {
      const updatedInputValues = [...inputValues];
      updatedInputValues[index] = {
        ...updatedInputValues[index],
        value: enteredValue,
        index: index,
      };
      setInputValues(updatedInputValues);
    } else {
      // if (!toast.isActive(toastId.current)) {
      //   toastId.current = toast.error(
      //     "Refund amount should not be greater than the unit price"
      //   );
      // }
    }
    if (enteredValue === "") {
      const updatedInputValues = [...inputValues];
      updatedInputValues[index] = {
        ...updatedInputValues[index],
        value: "",
        index: index,
      };
      setInputValues(updatedInputValues);
    }
  };

  const inputCheck = (
    isChecked,
    refundAmountUpdated,
    hasDollar,
    hasPercentage
  ) => {
    let updateValue;
    if (isChecked === false) {
      setApplyRefund(false);
    }
    setAppApplicable(isChecked);
    if (isChecked == false) {
      setInputValues([]);
      return;
    }

    const newValues = [];
    for (let i = 0; i < refundedItems?.length; i++) {
      if (hasDollar == true) {
        let result = {
          value: refundAmountUpdated,
          index: i,
        };
        newValues.push(result);
      }
      if (hasPercentage) {
        let result = {
          value: (
            (Number(refundedItems[i].price) * Number(refundAmountUpdated)) /
            100
          ).toFixed(2),
          index: i,
        };
        newValues.push(result);
      }
    }
    setInputValues(newValues);
  };
  const subtotal = refundedItems?.reduce((acc, data, idx) => {
    const qty = Number(data?.qty) || 0;
    const lineTotal = inputValues[idx]?.value * qty || 0;
    return acc + parseFloat(lineTotal);
  }, 0);

  const sumTax = refundedItems.reduce((acc, item, index) => {
    const qty = item.qty || 0;
    const lineTotal = inputValues[index]?.value * qty || 0;
    const tax = 0.08 * lineTotal;
    return acc + tax;
  }, 0);

  const { sumQtyPrice } = refundedItems.reduce(
    (acc, item) => {
      const qty = Number(item.qty) || 0;
      const price = Number(item.price) || 0;

      acc.sumQtyPrice += qty * price;

      return acc;
    },
    { sumQtyPrice: 0 }
  );
  const discount = (sumQtyPrice * 0.08).toFixed(2);
  const totalSum = subtotal + sumTax;
  const totalAmount = (parseFloat(discount) + sumQtyPrice).toFixed(2);

  const deliveryShippingCharges = () => {
    let deliveryCharges;
    let title;
    if (orderDetails?.order?.delivery_charge !== "0") {
      deliveryCharges = orderDetails?.order?.delivery_charge;
      title = "Delivery Charges";
    } else if (orderDetails?.order?.shipping_charge !== "0") {
      deliveryCharges = orderDetails?.order?.shipping_charge;
      title = "Shipping Charges";
    } else {
      title = "";
      deliveryCharges = "0";
    }
    return { title, deliveryCharges };
  };

  const handleActiveText = (flag) => {
    if (flag == "flagPrice") {
      setnableTextForDoller(true);
      setnableTextForPercent(false);
      setRefundAmount("");
      setInputValues([]);
      setApplyRefund(false);
    } else if (flag == "flagPercent") {
      setnableTextForPercent(true);
      setnableTextForDoller(false);
      setApplyRefund(false);
      setRefundAmount("");
      setInputValues([]);
    }
  };

  const handleApplyRefund = () => {
    setApplyRefund(true);
  };
  const handleCheckeachItems = (e) => {
    if (e.target.checked === false) {
      setApplyRefund(false);
    }
    setEnabletext(e.target.checked);
  };
  const handleRefund = (e) => {
    const enteredValue = e.target.value;
    const isValidInput = /^[+]?\d*\.?\d*$/.test(enteredValue);
    if (!isValidInput) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          "Refund amount should be numeric and non-negative"
        );
      }
      return;
    }

    const maxPrice = Math.max(
      ...refundedItems?.map((item) => parseFloat(item?.price))
    );

    let _refundAmount = 0;
    if (!isNaN(enteredValue)) {
      if (enableTextFordoller) {
        _refundAmount = enteredValue > maxPrice ? maxPrice : enteredValue;
        setRefundAmount(_refundAmount);
      } else {
        _refundAmount = enteredValue <= 100 ? enteredValue : 100;
        setRefundAmount(_refundAmount);
      }
    } else {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          "Refund amount should not be greater than any item's price"
        );
      }
      return;
    }

    inputCheck(
      allApplicable,
      _refundAmount,
      enableTextFordoller,
      enableTextForPercent
    );
  };

  return (
    <>
      <div className="commanOuter">
        <div className="refundsBox">
          <div className="">
            <div className="flexBox justify-content-between">
              <article>
                <h3 className="refundItems">
                  Refunds{" "}
                  <span className="refundCount">({refundedItems?.length})</span>
                </h3>
                <p className="priceHeading">Select the items to refund.</p>
              </article>
              <div className="flexBox refundHeadRight">
                <div className="form-group checkBlue">
                  <input
                    onChange={(e) =>
                      inputCheck(
                        e.target.checked,
                        refundAmount,
                        enableTextFordoller,
                        enableTextForPercent
                      )
                    }
                    type="checkbox"
                    id="Incoming Orders"
                    className="me-1"
                    checked={allApplicable}
                    disabled={enableText === true}
                  />
                  <label for="Incoming Orders" className="appointSub  m-0">
                    Applicable for all items.
                  </label>
                </div>
                <div className="flexBox refundPricebox">
                  {enableTextFordoller === true ? (
                    <input
                      type="text"
                      placeholder="$0.00"
                      className="tablecustomInput"
                      value={refundAmount}
                      disabled={enableText === true}
                      onChange={(e) => handleRefund(e)}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="0%"
                      className="tablecustomInput"
                      value={refundAmount}
                      disabled={enableText === true}
                      onChange={(e) => handleRefund(e)}
                    />
                  )}
                  <article className="refundButtons">
                    <button
                      className={
                        enableTextFordoller === true
                          ? "refundPriceBtn active"
                          : "refundPriceBtn "
                      }
                      onClick={() => handleActiveText("flagPrice")}
                    >
                      $
                    </button>

                    <button
                      className={
                        enableTextForPercent === true
                          ? "percentBtn active"
                          : "percentBtn "
                      }
                      onClick={() => handleActiveText("flagPercent")}
                    >
                      %
                    </button>
                  </article>
                </div>
                <div className="flexBox">
                  <div className="form-group checkBlue">
                    <input
                      onChange={(e) => handleCheckeachItems(e)}
                      type="checkbox"
                      className="me-1"
                      id="accept Orders"
                      checked={enableText}
                      disabled={allApplicable === true}
                    />
                    <label for="accept Orders" className="appointSub  m-0">
                      {" "}
                      Applicable for each items.
                    </label>
                  </div>
                </div>
                {applyRefund == true ? (
                  <button className="ConfirmReturn active">
                    Applied <i class="fa-solid fa-check ms-2"></i>
                  </button>
                ) : (
                  <button
                    className={
                      allApplicable === false && enableText === false
                        ? "ConfirmReturn"
                        : "ConfirmReturn active"
                    }
                    onClick={(e) => handleApplyRefund(e)}
                    disabled={allApplicable === false && enableText === false}
                  >
                    Apply Refund
                  </button>
                )}
              </div>
            </div>
            <div className="table-responsive refundTable">
              <table id="tableProduct" className="refundproduct_table">
                <thead>
                  <tr>
                    <th className="recent_head">#</th>
                    <th className="recent_head">Item</th>
                    <th className="recent_head text-center">Unit Price</th>
                    <th className="recent_head text-center">Refund Amount</th>
                    <th className="recent_head text-center">Quantity</th>
                    <th className="recent_head text-center">Line Total</th>
                    <th className="recent_head"></th>
                  </tr>
                </thead>
                <tbody>
                  {refundedItems?.map((data, idx) => {
                    return (
                      <tr key={idx} className="activities_user">
                        <td className="recent_subhead">{idx + 1}</td>
                        <td className="recent_subhead">
                          <div className="trandTable flexBox">
                            <Image
                              src={data?.product_image}
                              alt="tableImg"
                              className="img-fluid refundItemImage"
                              height={100}
                              width={100}
                            />
                            <article>
                              <h3 className="productPrice">
                                {data?.product_name}
                              </h3>
                              <p className="flexBox paginatinationBtn">
                                <span className="productDot"></span>
                                {data?.sku ? data?.sku : ""}
                              </p>
                            </article>
                          </div>
                        </td>

                        <td className="recent_subhead text-center">
                          <span className="">${data?.price}</span>
                        </td>
                        <td className="recent_subhead text-center">
                          <input
                            type="text"
                            placeholder="$0.00"
                            className={
                              enableText === true
                                ? "enableInput"
                                : "tablecustomInput"
                            }
                            value={
                              inputValues?.length > 0
                                ? inputValues[idx]?.value > Number(data?.price)
                                  ? String(Number(data?.price))
                                  : inputValues[idx]?.value
                                : ""
                            }
                            onChange={(e) => handleInputChange(e, idx)}
                            disabled={enableText === false}
                          />
                          {/* {refundAmount > Number(data?.price) && (
                            <p style={{ color: "red" }}>
                              Refund amount should not greater then Unit Price.
                            </p>
                          )} */}
                        </td>
                        <td className="recent_subhead text-center">
                          × {data?.qty}
                        </td>
                        <td className="recent_subhead text-center">
                          ${" "}
                          {!isNaN(parseFloat(inputValues[idx]?.value)) &&
                          !isNaN(parseFloat(data?.qty))
                            ? (parseFloat(inputValues[idx]?.value) >
                              parseFloat(data?.price)
                                ? parseFloat(data?.price)
                                : parseFloat(inputValues[idx]?.value)) *
                              parseFloat(data?.qty)
                            : parseFloat(data?.qty) * parseFloat(data?.price)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 offset-8">
              <div className="refundedItems">
                <div className="flexBox justify-content-between itemsRefundedBox">
                  <p className="priceHeading">Items Refunded</p>
                  <p className="priceHeading">{refundedItems?.length}</p>
                </div>
                <div className="itemsRefundedsubTotal">
                  <div className="flexBox justify-content-between ">
                    <p className="orderHeading">Sub Total</p>
                    <p className="orderHeading">
                      {formattedReturnPrice(
                        subtotal ? subtotal : sumQtyPrice.toFixed(2)
                      )}
                      {/* +${subtotal ? subtotal : sumQtyPrice.toFixed(2)} */}
                    </p>
                  </div>
                  {deliveryShippingCharges().title != "" && (
                    <div className="flexBox justify-content-between ">
                      <p className="orderHeading">
                        {deliveryShippingCharges().title}
                      </p>
                      <p className="orderHeading">
                        {formattedReturnPrice(
                          deliveryShippingCharges().deliveryCharges
                        )}
                      </p>
                    </div>
                  )}

                  <div className="flexBox justify-content-between ">
                    <p className="orderHeading">Total Taxes</p>
                    <p className="orderHeading">
                      {formattedReturnPrice(
                        sumTax ? sumTax.toFixed(2) : discount
                      )}
                      {/* +${sumTax ? sumTax.toFixed(2) : discount} */}
                    </p>
                  </div>
                </div>
                <div className="flexBox justify-content-between itemsRefundedTotal">
                  <p className="priceHeading">Total</p>
                  <p className="priceHeading">
                    {/* ${totalSum ? totalSum.toFixed(2) : totalAmount} */}
                    {formattedReturnPrice(totalRefundableAmount())}
                  </p>
                </div>
                <div className="text-end">
                  {allApplicable === true ? (
                    <button
                      type="button"
                      className={
                        applyRefund == true
                          ? "ConfirmReturn active"
                          : "ConfirmReturn"
                      }
                      disabled={applyRefund === false}
                      onClick={(e) => handleGoToinventery(e)}
                    >
                      Confirm
                      <Image
                        src={Images.Arrowtopright}
                        alt="Arrowtopright"
                        className="img-fluid Arrowtopright"
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="ConfirmReturn active"
                      onClick={(e) => handleGoToinventery(e)}
                    >
                      Confirm
                      <Image
                        src={Images.Arrowtopright}
                        alt="Arrowtopright"
                        className="img-fluid Arrowtopright"
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={false}
        mediumWidth={false}
        ids={modalDetail.flag === "ReturnInventory" ? "ReturnInventory" : ""}
        child={
          modalDetail.flag === "ReturnInventory" ? (
            <ReturnInventory
              closeManulModal={() => handleOnCloseModal()}
              selectedProducts={refundedItems}
              setNewQty={setNewQty}
            />
          ) : (
            ""
          )
        }
        onCloseModal={() => handleOnCloseModal()}
        header={
          <>
            <h2 className="modalHeading mb-0">
              <figure className="text-center">
                <Image
                  src={Images.ShoppingReturn}
                  alt="Shopping-Return"
                  className="img-fluid ShoppingReturn"
                  onClick={() => handleOnCloseModal()}
                />
              </figure>

              <p className="addProductHeading">Return to Inventory</p>
              <h5 className="inventorySubheading">
                All returned items will be adjusted with inventory
              </h5>
            </h2>
            <button className="closeButton">
              <Image
                src={Images.modalCross}
                alt="img"
                onClick={() => handleOnCloseModal()}
              />
            </button>
          </>
        }
        footer={
          <>
            <button className="cancelBtn" onClick={() => handleOnCloseModal()}>
              Cancel
            </button>

            <button
              className="ModalBlue"
              onClick={(e) => handlereturnToInventory(e)}
            >
              Return to Inventory
              {invoiceData?.loading && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}{" "}
              <Image
                src={Images.ShoppingReturn}
                alt="image"
                className="img-fluid BtnIcon"
              />
            </button>
          </>
        }
      />
    </>
  );
};

export default productrefunds;
