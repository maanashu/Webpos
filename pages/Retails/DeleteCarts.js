import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearCart, productCart, selectRetailData } from "../../redux/slices/retails";

const DeleteCarts = (props) => {
  const dispatch = useDispatch();
  const retailData = useSelector(selectRetailData);

  const handleDeleteCarts = () => {
    dispatch(
      clearCart({
        cb: () => {
          dispatch(productCart());
          toast.success("Carts Deleted!");
          props?.close();
        },
      })
    );
  };
  return (
    <div className="deleteModal">
      <h5 className="customerLink">
        Are you Sure you want to delete the Product?
      </h5>

      <div className="addCustomerBtn mt-4 ">
        {retailData?.loading ? (
          <button className="serviceCancel" type="button" disabled>
            <span className="spinner-border spinner-border-sm"></span>
          </button>
        ) : (
          <button
            className="serviceCancel"
            type="button"
            onClick={(e) => handleDeleteCarts(e)}
          >
            <span>Yes, Delete</span>
          </button>
        )}
        <button
          className="nextverifyBtn"
          onClick={(e) => props.close()}
        >
          <span>No, Cancel</span>
        </button>
      </div>
    </div>
  );
};
export default DeleteCarts;
