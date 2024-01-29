import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearCart, productCart, selectRetailData } from "../../redux/slices/retails";

const CartAlert = ({crossHandler}) => {
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
          toast.success("Carts Deleted!");
          crossHandler()
        },
      })
    );
  };
  return (
    <div className="py-3">
      <h5 className="font-28 text-center">
          Please clear {onlyProductCartArray?.length > 0 ? 'product' : 'service'} cart
      </h5>
        

        <div className="mt-5" style={{display:'flex', flexDirection :'row', alignSelf :'center', borderWidth:'1px'}}>
        <button
            className="primaryBtn cancelBtn m-0"
            // onClick={(e) => props.close()}
            onClick={() => crossHandler()}
          >
            <span>Cancel</span>
          </button>
         
            <button
              className="addnotesBtn"
              type="button"

              onClick={(e) =>  handleDeleteCarts(e)}
              disabled={retailData?.clearCartLoad ? true : false}
            >
              
              <span>Clear Cart</span>
              {
                retailData?.clearCartLoad
                &&
                
              <span className="spinner-border spinner-border-sm mx-1"></span>
                
              }
            </button>

          
          
        </div>

    </div>
  );
};
export default CartAlert;
