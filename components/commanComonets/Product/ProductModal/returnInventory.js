import React, { useState } from "react";

const ReturnInventory = ({ selectedProducts, setNewQty }) => {
  const [selectedProductItems, setSelectedProductItems] =
    useState(selectedProducts);
  const handleQuantity = (data, flag) => {
    let updateProductQuantity;
    if (flag === "increase") {
      const getSingleProduct = selectedProducts?.find(
        (item) => item?.product_id === data?.product_id
      );
      updateProductQuantity = selectedProductItems?.map((item) => {
        if (
          item?.product_id === getSingleProduct?.product_id &&
          getSingleProduct?.qty > item?.qty
        ) {
          return { ...item, qty: item?.qty + 1 };
        }
        return item;
      });
    } else {
      const getSingleProduct = selectedProducts?.find(
        (item) => item?.product_id === data?.product_id
      );
      updateProductQuantity = selectedProductItems?.map((item) => {
        if (
          item?.product_id === getSingleProduct?.product_id &&
          item?.qty > 1
        ) {
          return { ...item, qty: item?.qty - 1 };
        }
        return item;
      });
    }
    setSelectedProductItems(updateProductQuantity);
    setNewQty(updateProductQuantity);
  };

  return (
    <>
      <div className="productBoxDetails my-3">
        {selectedProductItems?.map((data, index) => {
          return (
            <div key={index} className="productcartBox mb-2 justify-content-between">
              <div className="d-flex">
                <p className="priceHeading">{data?.qty}×</p>
                <article className="returnProduct">
                  <h6 className="priceHeading"> {data?.product_name}</h6>
                </article>
              </div>
              <div className="form-group flexBox addCart ">
                <button
                  className="removeProductBtn"
                  onClick={() => handleQuantity(data, "decrease")}
                >
                  <i className="fa-solid fa-minus plusMinus"></i>
                </button>
                <input
                  className="form-control customTextarea"
                  type="text"
                  placeholder=""
                  value={data?.qty}
                  readOnly
                />
                <button
                  className="addProductBtn"
                  onClick={() => handleQuantity(data, "increase")}
                >
                  <i className="fa-solid fa-plus plusMinus"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReturnInventory;
