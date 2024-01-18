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
    <div className="py-3">
      <h5 className="font-28 text-center">
        Are you Sure you want to delete the Product?
      </h5>

      <div className="row justify-content-center mt-4">
        <div className="d-grid gap-1 col-lg-3 col-md-6">
          {retailData?.loading ? (
            <button className="addnotesBtn" type="button" disabled>
              <span className="spinner-border spinner-border-sm"></span>
            </button>
          ) : (
            <button
              className="addnotesBtn"
              type="button"
              onClick={(e) => handleDeleteCarts(e)}
            >
              <span>Yes, Delete</span>
            </button>
          )}
        </div>
        <div className="d-grid gap-1 col-lg-3 col-md-6">
          <button
            className="primaryBtn cancelBtn m-0"
            onClick={(e) => props.close()}
          >
            <span>No, Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteCarts;
