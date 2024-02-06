import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  clearCart,
  productCart,
  selectRetailData,
  updatePrice,
} from "../../redux/slices/retails";
import { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { digitWithDot } from "../../utilities/validators";

const UpdatePrice = ({ cartProduct, crossHandler }) => {
  const dispatch = useDispatch();
  const retailData = useSelector(selectRetailData);
  const productPrice =
    cartProduct?.product_details?.supply?.supply_prices?.selling_price;
  const [oldPrice, setOldPrice] = useState(`$${productPrice?.toFixed(2)}`);
  const [newPrice, setNewPrice] = useState();
  useEffect(() => {
    setNewPrice(Number(productPrice)?.toFixed(2));
  }, []);

  const priceChangeHandler = () => {
    if (!newPrice) {
      toast.error("Please enter Updated Price");
    }
    if (newPrice && digitWithDot.test(newPrice) === false) {
      toast.error("Please Enter Valid Updated Price");
    }
    const params = {
      cartid: cartProduct?.cart_id,
      cartProductId: cartProduct?.id,
      price: newPrice,
    };
    dispatch(
      updatePrice({
        ...params,
        cb: () => {
          dispatch(productCart());
          crossHandler();
        },
      })
    );
  };

  return (
    <div className="py-3">
      <div className="row justify-content-center mt-4">
        <div className="form-group mb-3">
          <h6 className="my-2">Old Price</h6>
          <input
            className="form-control customInput mb-3"
            type="text"
            placeholder="Product Name"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            disabled
          />
        </div>
        {/* <div className="form-group mb-3">
          <h6 className="my-2">New Price</h6>
          <input
            className="form-control customInput mb-3"
            type="text"
            placeholder="Enter New Price"
            // value={productName}
            // onChange={(e) => setProductName(e.target.value)}
          />
        </div> */}
        <div className="phoneIcon mb-3">
          <input
            className="form-control verifyControl"
            type="email"
            placeholder="Enter New Price"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <h5 className="img-fluid lockImg">$</h5>
          {/* <Image
            src={Images.mailBox}
            alt="mailbox image"
            className="img-fluid lockImg"
          /> */}
        </div>
        <button
          className="ModalBlue"
          onClick={() => priceChangeHandler()}
          disabled={retailData?.updatePriceLoad ? true : false}
        >
          Update Price
          {retailData?.updatePriceLoad && (
            <span className="spinner-border spinner-border-sm mx-1"></span>
          )}
        </button>
      </div>
    </div>
  );
};
export default UpdatePrice;
