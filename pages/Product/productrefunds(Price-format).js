import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { useRouter } from "next/router";
import CustomModal from "../../components/customModal/CustomModal";
import ReturnInventory from "../../components/commanComonets/Product/ProductModal/returnInventory";

const productrefunds = () => {
  const toastId = React.useRef(null);
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
  const [refundAmount, setRefundAmount] = useState("");
  const [inputValues, setInputValues] = useState([]);
  console.log(inputValues, "inputValues");

  const handleGoToinventery = () => {
    // setModalDetail({ show: true, flag: "ReturnInventory" });
    // setKey(Math.random());
    router.push({
      pathname: "/Product/RefundsConfirmation(No_Selection)",
      query: { selectedItems: JSON.stringify(refundedItems) },
    });
  };

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = value;
    setInputValues(updatedInputValues);
  };

  useEffect(() => {
    setInputValues((pre) => [...pre, refundAmount]);
  }, [refundAmount]);

  //   const handleCheckboxChange = (data) => {
  //     setCheckedItems((prevCheckedItems) => ({
  //       ...prevCheckedItems,
  //       [data.product_id]: !prevCheckedItems[data.product_id],
  //     }));
  //   };

  //   const handleCheckAll = () => {
  //     const allCheckedItems = refundedItems.reduce((acc, item) => {
  //       acc[item.product_id] = true;
  //       return acc;
  //     }, {});
  //     setCheckedItems(allCheckedItems);
  //     setIsChecked(true);
  //   };

  //   const handleUncheckAll = () => {
  //     setCheckedItems({});
  //     setIsChecked(false);
  //   };

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
                <h5 className="priceHeading pe-3">
                  Apply a fixed amount to all items.
                </h5>
                <div className="flexBox refundPricebox">
                  <input
                    type="text"
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
                            type="text"
                            placeholder="$00.00"
                            className="tablecustomInput"
                            value={inputValues[idx] || refundAmount}
                            onChange={(e) => handleInputChange(e, idx)}
                          />
                        </td>
                        <td className="recent_subhead text-center">
                          × {data?.qty}
                        </td>
                        <td className="recent_subhead text-center">
                          ${data?.price * data?.qty}
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
                    <p className="orderHeading">$2,396.50</p>
                  </div>
                  <div className="flexBox justify-content-between ">
                    <p className="orderHeading">Total Taxes</p>
                    <p className="orderHeading">-$19.00</p>
                  </div>
                </div>
                <div className="flexBox justify-content-between itemsRefundedTotal">
                  <p className="priceHeading">Total</p>
                  <p className="priceHeading">$254.60</p>
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
