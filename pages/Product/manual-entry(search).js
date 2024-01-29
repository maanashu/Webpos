import React, { useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import ReturnInventory from "../../components/commanComonets/Product/ProductModal/returnInventory";
import CustomModal from "../../components/customModal/CustomModal";
import {
  searchBySKU,
  selectReturnData,
} from "../../redux/slices/productReturn";
import { selectLoginAuth } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Manualinvoice = (props) => {
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const [productsSearchBySku, setProductsSearchBySku] = useState("");

  const handleSearchSku = (e) => {
    let params = {
      search: e.target.value,
      seller_id: sellerId,
    };
    dispatch(
      searchBySKU({
        ...params,
        cb(resp) {
          setProductsSearchBySku(resp?.data?.payload);
        },
      })
    );
  };
  const handleManulEntry = () => {
    if (!productsSearchBySku) {
      toast.error("Please add Product by search SKU!");
      return;
    }
    else{
      props.closeManulModal()
    }
  };
  return (
    <>
      <div className="manualInvoice">
        <div className="commanscrollBar manualOrderedProduct mt-3">
          <div className="ManualsearchBar">
            <input
              type="text"
              className="form-control searchControl"
              placeholder="search sku here..."
              onChange={(e) => handleSearchSku(e)}
            />
            <Image
              src={Images.SearchIcon}
              alt="SearchImageIcon"
              className="img-fluid searchImg"
            />
            <button className="closeButton">
              <Image
                src={Images.modalCross}
                alt="img"
                onClick={() => props.closeManulModal()}
              />
            </button>
          </div>

          <div className="manualSelectedProduct">
            {productsSearchBySku ? (
              <div className="selectedProductDetails active">
                <div className="d-flex">
                  <figure>
                    <Image
                      src={productsSearchBySku?.product_detail?.image}
                      alt="tableImg"
                      className="costumerImg"
                      height={100}
                      width={100}
                    />
                  </figure>
                  <div className="ps-1">
                    <p className="aboutProduct">
                      {productsSearchBySku?.product_detail?.name}
                    </p>
                    <div className="d-flex">
                      <article className="productColor">
                        <span className="Yellow"></span>
                        <span className="Red"></span>
                        <span className="Pink"></span>
                        <span className="Blue"></span>
                        <span className="Black"></span>
                        <span className="White"></span>
                      </article>

                      <span className="sku">
                        {productsSearchBySku?.product_detail?.sku
                          ? productsSearchBySku?.product_detail?.sku
                          : ""}
                      </span>
                      <span className="productSize">Colors / Size</span>
                    </div>
                  </div>
                </div>
                <p className="productPriceinvoice">
                  ${productsSearchBySku?.product_detail?.price}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="flexBox buttonBox">
            <button
              type="button"
              className="cancelBtn"
              onClick={() => props.closeManulModal()}
            >
              Cancel
            </button>
            <button
              type="button"
              className="BlueBtn"
              onClick={(e) => handleManulEntry(e)}
            >
              Next
              <Image
                src={Images.ArrowRight}
                alt="ArrowRight"
                className="img-fluid ArrowRight"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manualinvoice;
