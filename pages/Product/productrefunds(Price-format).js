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

const productrefunds = () => {
  const toastId = React.useRef(null);
  const dispatch = useDispatch();
  const [enableText, setEnabletext] = useState(false);
  const router = useRouter();
  const [refundAmount, setRefundAmount] = useState("");
  const [inputValues, setInputValues] = useState([]);
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

  // const sumProductPrices = refundedItems.reduce((sum, item) => {
  //   const price = parseFloat(item.price) || 0;
  //   return sum + price;
  // }, 0);

  const { sumProductPrices, sumTax } = refundedItems.reduce(
    (acc, item) => {
      const price = parseFloat(item.price) || 0;
      const tax = 0.08 * price; // 8% tax

      acc.sumProductPrices += price;
      acc.sumTax += tax;

      return acc;
    },
    { sumProductPrices: 0, sumTax: 0 }
  );
  const totalAmount = sumProductPrices + sumTax;

  console.log("Sum of Product Prices:", sumProductPrices);
  console.log("Sum of Tax:", sumTax);
  console.log("Total Amount:", totalAmount);

  const handleGoToinventery = () => {
    const isGreater = refundedItems.some(
      (item) => Number(refundAmount) > Number(item.price)
    );
    if (isGreater == false) {
      setModalDetail({ show: true, flag: "ReturnInventory" });
      setKey(Math.random());

      const shareData = {
        selectedItems: JSON.stringify(refundedItems),
        inputValues: JSON.stringify(inputValues),
        totalSum: totalSum?.toString(),
        subtotal: subtotal?.toString(),
        totalTax: discount?.toString(),
      };
      dispatch(setInvoiceData(shareData));
    } else {
      toast.error("Please enter a valid refund amount");
      return;
    }
  };

  let products = refundedItems?.map((item, index) => ({
    id: item?.product_id,
    qty: item?.qty,
    add_to_inventory_qty: newQty?.find((val) => val?.id == item?.id)?.qty || 0,
    write_off_qty:
      item?.qty - newQty?.find((val) => val?.id == item?.id)?.qty || 0,
    refund_value:
      Number(inputValues?.find((val) => val?.index == index)?.value) ||
      refundAmount ||
      0,
  }));
  const handlereturnToInventory = () => {
    let params = {
      order_id: orderDetails?.order?.id,
      products: products,
      total_taxes: discount,
      total_refund_amount: subtotal,
      delivery_charge: orderDetails?.order?.delivery_charge,
      return_reason: "testing reason",
      drawer_id: orderDetails?.order?.drawer_id,
    };
    dispatch(
      returnToInventory({
        ...params,
        cb(res) {
          if (res) {
            router.push({
              pathname: "/Product/RefundsConfirmation(No_Selection)",
            });
          }
        },
      })
    );
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
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          "Refund amount should not be greater than the unit price"
        );
      }
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

  const inputCheck = (e) => {
    let updateValue;
    if (inputValues && inputValues.length > 0) {
      if (e.target.checked) {
        updateValue = inputValues?.map(
          (item) => Number(item) + Number(refundAmount)
        );
      } else {
        setRefundAmount("");
        updateValue = inputValues?.map(
          (item) => Number(item) - Number(refundAmount)
        );
        // setInputValues(updateValue);
      }
      setInputValues(updateValue);
    } else {
      const newValues = [...inputValues];
      for (let i = 0; i < refundedItems?.length; i++) {
        let result = {
          value: refundAmount,
          index: i,
        };
        newValues.push(result);
      }
      setInputValues(newValues);
    }
  };

  const subtotal = refundedItems?.reduce((acc, data, idx) => {
    const itemTotal =
      !isNaN(parseFloat(inputValues[idx]?.value)) &&
      !isNaN(parseFloat(data?.qty))
        ? (parseFloat(inputValues[idx]?.value) * parseFloat(data?.qty)).toFixed(
            2
          )
        : "0.00";

    return acc + parseFloat(itemTotal);
  }, 0);

  const discount = (subtotal * 0.08).toFixed(2);
  const totalSum = (subtotal - parseFloat(discount)).toFixed(2);

  const handleActiveText = () => {
    setEnabletext(true);
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
    if (!isNaN(enteredValue) && enteredValue <= maxPrice) {
      setRefundAmount(enteredValue);
    } else {
      toastId.current = toast.error(
        "Refund amount should not be greater than any item's price"
      );
    }

    // const maxPrices = [];
    // for (let i = 0; i < refundedItems.length; i++) {
    //   const price = parseFloat(refundedItems[i]?.price);
    //   if (!isNaN(price)) {
    //     const maxPrice = maxPrices[i] || 0;
    //     const currentMax = Math.max(maxPrice, price);
    //     maxPrices[i] = currentMax;
    //   }
    // }

    // console.log("Maximum prices for each index:", maxPrices);
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
              <div className="flexBox">
                <input
                  onChange={(e) => inputCheck(e)}
                  type="checkbox"
                  className="me-2"
                />
                <h5 className="priceHeading pe-3">
                  Apply a fixed amount to all items.
                </h5>
                <div className="flexBox refundPricebox">
                  <input
                    type="text"
                    placeholder="$00.00"
                    className="tablecustomInput"
                    value={refundAmount}
                    onChange={(e) => handleRefund(e)}
                  />
                  <article>
                    <div
                      className={
                        enableText === true
                          ? "priceFilterBtn active"
                          : "priceFilterBtn "
                      }
                      onClick={handleActiveText}
                    >
                      $ %
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="table-responsive">
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
                            placeholder="$00.00"
                            className={
                              enableText === true
                                ? "enableInput"
                                : "tablecustomInput"
                            }
                            value={inputValues[idx]?.value}
                            onChange={(e) => handleInputChange(e, idx)}
                            disabled={enableText === false}
                          />
                          {refundAmount > Number(data?.price) && (
                            <p style={{ color: "red" }}>
                              Refund amount should not grater then Unit Price.
                            </p>
                          )}
                        </td>
                        <td className="recent_subhead text-center">
                          × {data?.qty}
                        </td>
                        <td className="recent_subhead text-center">
                          ${" "}
                          {!isNaN(parseFloat(inputValues[idx]?.value)) &&
                          !isNaN(parseFloat(data?.qty))
                            ? (
                                parseFloat(inputValues[idx]?.value) *
                                parseFloat(data?.qty)
                              ).toFixed(2)
                            : "0.00"}
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
                      ${subtotal ? subtotal : sumProductPrices}
                    </p>
                  </div>
                  <div className="flexBox justify-content-between ">
                    <p className="orderHeading">Total Taxes</p>
                    <p className="orderHeading">
                      -${subtotal ? discount : sumTax}%
                    </p>
                  </div>
                </div>
                <div className="flexBox justify-content-between itemsRefundedTotal">
                  <p className="priceHeading">Total</p>
                  <p className="priceHeading">
                    ${subtotal ? totalSum : totalAmount}
                  </p>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="ConfirmReturn active"
                    //disabled={!inptotalAmountutValues}
                    onClick={(e) => handleGoToinventery(e)}
                  >
                    Confirm
                    <Image
                      src={Images.Arrowtopright}
                      alt="Arrowtopright"
                      className="img-fluid Arrowtopright"
                    />
                  </button>
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
            <div className="modal-footer">
              <button
                className="cancelBtn"
                onClick={() => handleOnCloseModal()}
              >
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
            </div>
          </>
        }
      />
    </>
  );
};

export default productrefunds;
