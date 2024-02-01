import React, { useState } from "react";

const ReturnInventory = (props) => {
    const [selectedProductItems, setSelectedProductItems] = useState(props?.selectedProductItems);
    console.log(selectedProductItems,'selectedProductItems');


    const handleDecreaseQty = (data, index) => {
        setSelectedProductItems((prevState) => {
          const updatedProductItems = [...prevState];
          if (updatedProductItems[index].qty > 0) {
            updatedProductItems[index].qty--;
          }
          return updatedProductItems;
        });
      };
    
      const handleIncreaseQty = (data, index) => {
        const updatedData = props?.selectedProductItems?.find((item)=>item?.product_id === data?.product_id)
        setSelectedProductItems((prevState) => {
          const updatedProductItems = [...prevState];
          if (updatedProductItems[index].qty < data.qty) {
            updatedProductItems[index].qty++;
          }
          return updatedProductItems;
        });
      };

  return (
    <>
      <h5 className="inventorySubheading">
        All returned items will be adjusted with inventory
      </h5>
      <div className="productBoxDetails pe-2">
        {props?.selectedProductItems?.map((data, index) => {
          return (
            <div key={index} className="productcartBox mb-2">
              <p className="priceHeading">{data?.qty}×</p>
              <article>
                <h6 className="priceHeading"> {data?.product_name}</h6>
                {/* <p className='productSize'>Yellow / M</p> */}
              </article>
              <div className="form-group flexBox addCart ">
                <button
                  className="removeProductBtn"
                  onClick={() => handleDecreaseQty(data, index)}
                >
                  <i className="fa-solid fa-minus plusMinus"></i>
                </button>
                <input
                  className="form-control customTextarea"
                  type="text"
                  placeholder=""
                 value={data.qty}
                  readOnly
                />
                <button
                  className="addProductBtn"
                  onClick={() => handleIncreaseQty(data, index)}
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
