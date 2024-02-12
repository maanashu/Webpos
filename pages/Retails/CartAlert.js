import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  clearCart,
  productCart,
  selectRetailData,
} from "../../redux/slices/retails";

const CartAlert = ({ crossHandler }) => {
  const dispatch = useDispatch();
  const retailData = useSelector(selectRetailData);
  const cartData = retailData?.productCart || {};

  const onlyProductCartArray = cartData?.poscart_products?.filter(
    (item) => item?.product_type == "product"
  );
  const onlyServiceCartArray = cartData?.poscart_products?.filter(
    (item) => item?.product_type == "service"
  );

  const handleDeleteCarts = () => {
    dispatch(
      clearCart({
        cb: () => {
          dispatch(productCart());
          crossHandler();
        },
      })
    );
  };
  return (
    <div className="clearBtns addCustomerBtn mt-4 ">
      <button
        className="serviceCancel"
        // onClick={(e) => props.close()}
        onClick={() => crossHandler()}
      >
        <span>Cancel</span>
      </button>
      <button
        className="nextverifyBtn" 
        type="button"
        onClick={(e) => handleDeleteCarts(e)}
        disabled={retailData?.clearCartLoad ? true : false}
      >
        <span>Clear Cart</span>
        {retailData?.clearCartLoad && (
          <span className="spinner-border spinner-border-sm mx-1"></span>
        )}
      </button>
    </div>
  );
};
export default CartAlert;
