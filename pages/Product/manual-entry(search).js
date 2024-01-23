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

const Manualinvoice = (props) => {
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const [key, setKey] = useState(Math.random());
  const [productsSearchBySku, setProductsSearchBySku] = useState("");
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
              onClick={() => {
                setModalDetail({ show: true, flag: "ReturnInventory" });
                setKey(Math.random());
              }}
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
      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={false}
        mediumWidth={false}
        ids={
          modalDetail.flag === "ReturnInventory"
            ? "ReturnInventory"
            : "ReturnInventory"
        }
        child={
          modalDetail.flag === "ReturnInventory" ? (
            <ReturnInventory
              close={() => handleOnCloseModal()}
              closeManualModal={() => props.close()}
            />
          ) : (
            ""
          )
        }
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
        onCloseModal={() => handleOnCloseModal()}
        footer={
          <>
            <div className="modal-footer">
              <button
                className="cancelBtn"
                onClick={() => handleOnCloseModal()}
              >
                Cancel
              </button>
              <button className="ModalBlue">
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

export default Manualinvoice;
