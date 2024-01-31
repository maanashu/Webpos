import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { useRouter } from "next/router";
import CustomModal from "../../components/customModal/CustomModal";
import ReturnInventory from "../../components/commanComonets/Product/ProductModal/returnInventory";
import { returnToInventory } from "../../redux/slices/productReturn";
import { useDispatch } from "react-redux";

const productrefunds = () => {
  const toastId = React.useRef(null);
  const dispatch = useDispatch();
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
  const router = useRouter();
  const refundedItems = JSON.parse(router.query.selectedItems || "[]");
  console.log(refundedItems, "refundedItems");
  const [refundAmount, setRefundAmount] = useState("");
  const [inputValues, setInputValues] = useState([]);

  const handleGoToinventery = () => {
    // setModalDetail({ show: true, flag: "ReturnInventory" });
    // setKey(Math.random());
    router.push({
      pathname: "/Product/RefundsConfirmation(No_Selection)",
      query: {
        selectedItems: JSON.stringify(refundedItems),
        totalSum: totalSum.toString(), // Convert totalSum to string if needed
        subtotal: subtotal.toString(),
      },
    });
  };
  const handlereturnToInventory = () => {
    let params = {
      order_id: 223,
      products: [
        {
          id: 493,
          qty: 1,
          write_off_qty: 0,
          add_to_inventory_qty: 1,
          refund_value: "20",
        },
      ],
      total_taxes: "8",
      total_refund_amount: "100",
      delivery_charge: "20",
      return_reason: "testing reason",
      drawer_id: 327,
    };
    dispatch(
      returnToInventory({
        ...params,
        cb(res) {},
      })
    );
  };
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = value;
    setInputValues(updatedInputValues);
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
      for (let i = 0; i < refundedItems.length; i++) {
        newValues.push(refundAmount);
      }
      setInputValues(newValues);
    }
  };

  const subtotal = refundedItems?.reduce((acc, data, idx) => {
    const itemTotal =
      !isNaN(parseFloat(inputValues[idx])) && !isNaN(parseFloat(data?.qty))
        ? (parseFloat(inputValues[idx]) * parseFloat(data?.qty)).toFixed(2)
        : "0.00";

    return acc + parseFloat(itemTotal);
  }, 0);

  const totalSum = refundedItems
    ?.reduce((acc, data, idx) => {
      const productPrice = parseFloat(data?.price) || 0;
      const taxRate = 0.08; // 8% tax rate

      const itemTotal =
        !isNaN(parseFloat(inputValues[idx])) && !isNaN(parseFloat(data?.qty))
          ? (parseFloat(inputValues[idx]) * parseFloat(data?.qty)).toFixed(2)
          : "0.00";

      const itemTotalWithTax = (parseFloat(itemTotal) + productPrice * taxRate) // Ensure the multiplication is inside the parentheses
        .toFixed(2);

      return acc + parseFloat(itemTotalWithTax);
    }, 0)
    .toFixed(2); // Apply toFixed(2) here to ensure totalSum itself has only two decimal places

  console.log(totalSum, "totalSum");

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
                  onClick={(e) => inputCheck(e)}
                />
                <h5 className="priceHeading pe-3">
                  Apply a fixed amount to all items.
                </h5>
                <div className="flexBox refundPricebox">
                  <input
                    type="number"
                    placeholder="$00.00"
                    className="tablecustomInput"
                    value={refundAmount}
                    onChange={(e) => setRefundAmount(e.target.value)}
                  />
                  <article>
                    <Link href="/" className="priceFilterBtn active">
                      $
                    </Link>
                    <Link href="/" className="priceFilterBtn">
                      %
                    </Link>
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
                    <th className="recent_head">
                      {/* <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() =>
                            isChecked ? handleUncheckAll() : handleCheckAll()
                          }
                        />

                        <span className="checkmark"></span>
                      </label> */}
                    </th>
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
                            type="number"
                            placeholder="$00.00"
                            className="tablecustomInput"
                            value={inputValues[idx]}
                            onChange={(e) => handleInputChange(e, idx)}
                          />
                        </td>
                        <td className="recent_subhead text-center">
                          × {data?.qty}
                        </td>
                        <td className="recent_subhead text-center">
                          $
                          {!isNaN(parseFloat(inputValues[idx])) &&
                          !isNaN(parseFloat(data?.qty))
                            ? (
                                parseFloat(inputValues[idx]) *
                                parseFloat(data?.qty)
                              ).toFixed(2)
                            : "0.00"}
                        </td>
                        {/* <td className="recent_subhead">
                          <label className="custom-checkbox">
                            <input
                              type="checkbox"
                              checked={checkedItems[data.product_id] || false}
                              onChange={() => handleCheckboxChange(data)}
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td> */}
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
                    <p className="orderHeading">${subtotal}</p>
                  </div>
                  <div className="flexBox justify-content-between ">
                    <p className="orderHeading">Total Taxes</p>
                    <p className="orderHeading">+8 %</p>
                  </div>
                </div>
                <div className="flexBox justify-content-between itemsRefundedTotal">
                  <p className="priceHeading">Total</p>
                  <p className="priceHeading">${totalSum}</p>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className={
                      inputValues?.length > 0
                        ? "ConfirmReturn active"
                        : "comfirmatiopnBtn"
                    }
                    disabled={!inputValues}
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
              selectedProductItems={refundedItems}
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
