import React, { useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  productCart,
  selectRetailData,
} from "../../redux/slices/retails";
import {
  amountFormat,
  formattedReturnPrice,
} from "../../utilities/globalMethods";
import CustomProductAdd from "./CustomProductAdd";
import { useRouter } from "next/router";
import CartAlert from "./CartAlert";
import CustomServiceAdd from "./CustomServiceAdd";
// import CustomModal from '../../customModal/CustomModal';
// import AddProduct from '../../../components/';

const RightSideBar = ({props, parameter}) => {
  
  const router = useRouter();
  const dispatch = useDispatch();
  const retailData = useSelector(selectRetailData);
  const cartData = retailData?.productCart;
  const cartAmount = cartData?.amount;
  const cartLength = cartData?.poscart_products?.length;
  const [filterShow, setFilterShow] = useState(false);
  const [customProductAdd, setCustomProductAdd] = useState(false);
  const [customServiceAdd, setCustomServiceAdd] = useState(false);
  const [cartAlert, setCartAlert] = useState(false)

  const productCarts = cartData?.poscart_products?.filter(
    (item) => item?.product_type == "product"
  );

  const serviceCart = cartData?.poscart_products?.filter(
    (item) => item?.product_type == "service"
  );

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

  
  return (
    <>
    {
      parameter == "product"
      ?
      <div className={props?.showSidebar ? "sidebarRight show" : "sidebarRight hide"}>
      <ListGroup>
        <ListGroupItem
          className="rightSidebarItems active"
          onClick={() => {
            productCarts?.length > 0 ? setFilterShow((prev) => !prev) : void 0;
          }}
        >
          <div className="sidebarBg">
            <Image
              src={Images.ShoppingOutline}
              alt="image"
              className="imgSize"
            />
          </div>
          <span className="cartNum">{productCarts?.length || "0"}</span>
        </ListGroupItem>
        {/* <ListGroupItem className="rightSidebarItems" onClick={() => {
                      setModalDetail({ show: true, flag: "AddProduct" });
                      setKey(Math.random());
                  }}>
                      <div className='sidebarBg'>
                          <Image src={Images.AddProduct} alt="image" className="img-fluid rightSidebarIcons" />
                      </div>
                  </ListGroupItem> */}

        <ListGroupItem className="rightSidebarItems">
          <div
            className="sidebarBg"
            onClick={() => {serviceCart?.length > 0 ? setCartAlert(true)  :  setCustomProductAdd(true)}}
          >
            <Image
              src={Images.AddProduct}
              alt="image"
              className="img-fluid rightSidebarIcons"
            />
          </div>
        </ListGroupItem>
        <ListGroupItem
          className="rightSidebarItems"
          onClick={() =>
            dispatch(
              clearCart({
                cb: () => {
                  dispatch(productCart());
                },
              })
            )
          }
        >
          <div className="sidebarBg">
            <Image
              src={Images.Cancelproduct}
              alt="image"
              className="img-fluid rightSidebarIcons"
            />
          </div>
        </ListGroupItem>
        <ListGroupItem className="rightSidebarItems">
          <div className="sidebarBg">
            <Image
              src={Images.PauseCircleOutline}
              alt="image"
              className="img-fluid rightSidebarIcons"
            />
          </div>
        </ListGroupItem>

        <ListGroupItem className="rightSidebarItems" onClick={() => productCarts?.length > 0 ? router.push({ pathname: "/Retails/ProductCart" }) : void(0)}>
      <Image
            src={Images.RightArrow}
            alt="image"
            className="img-fluid rightSidebarIcons"
          />
      </ListGroupItem>

      </ListGroup>
    </div>
    :
    <div className={props?.showSidebar ? "sidebarRight show" : "sidebarRight hide"}>
    <ListGroup>
      <ListGroupItem
        className="rightSidebarItems active"
        onClick={() => {
          serviceCart?.length > 0 ? setFilterShow((prev) => !prev) : void 0;
        }}
      >
        <div className="sidebarBg">
          <Image
            src={Images.ShoppingOutline}
            alt="image"
            className="imgSize"
          />
        </div>
        <span className="cartNum">{serviceCart?.length || "0"}</span>
      </ListGroupItem>
      {/* <ListGroupItem className="rightSidebarItems" onClick={() => {
                    setModalDetail({ show: true, flag: "AddProduct" });
                    setKey(Math.random());
                }}>
                    <div className='sidebarBg'>
                        <Image src={Images.AddProduct} alt="image" className="img-fluid rightSidebarIcons" />
                    </div>
                </ListGroupItem> */}

      <ListGroupItem className="rightSidebarItems">
        <div
          className="sidebarBg"        
              onClick={() => {serviceCart?.length > 0 ? setCartAlert(true)  :  setCustomServiceAdd(true)}}

        >
          <Image
            src={Images.AddProduct}
            alt="image"
            className="img-fluid rightSidebarIcons"
          />
        </div>
      </ListGroupItem>
      <ListGroupItem
        className="rightSidebarItems"
        // onClick={() =>
        //   dispatch(
        //     clearCart({
        //       cb: () => {
        //         dispatch(productCart());
        //       },
        //     })
        //   )
        // }
      >
        <div className="sidebarBg">
          <Image
            src={Images.Cancelproduct}
            alt="image"
            className="img-fluid rightSidebarIcons"
          />
        </div>
      </ListGroupItem>
      <ListGroupItem className="rightSidebarItems">
        <div className="sidebarBg">
          <Image
            src={Images.PauseCircleOutline}
            alt="image"
            className="img-fluid rightSidebarIcons"
          />
        </div>
      </ListGroupItem>
      <ListGroupItem className="rightSidebarItems" onClick={() => serviceCart?.length > 0 ? router.push({ pathname: "/Retails/ServiceCart" }) : void(0)}>
      <Image
            src={Images.RightArrow}
            alt="image"
            className="img-fluid rightSidebarIcons"
          />
      </ListGroupItem>

     
    </ListGroup>
  </div>

    }
     
      {filterShow ? (
        <div className="AddtoCart ProductAddCart">
          {cartData?.poscart_products?.map((data, index) => (
            <div className="cartInfo">
              <div className="cartSubInfo active">
                <div className="orderTime">
                  <Image
                    src={data?.product_details?.image}
                    alt="cartFoodImg"
                    className="img-fluid cartFoodImg"
                    width="100"
                    height="100"
                  />
                  <div className="cartorderHeading ms-2 ">
                    <h4 className="cartText">{data?.product_details?.name}</h4>
                    <div className="flexTable mt-1">
                      <article className="productColor">
                        <span className="Yellow"></span>
                        <span className="Red"></span>
                        <span className="Pink"></span>
                        <span className="Blue"></span>
                        <span className="Black"></span>
                        <span className="White"></span>
                      </article>
                      <span className="userIdText ms-2">Colors / Size</span>
                    </div>
                  </div>
                </div>
                <div className="orderCalculate">
                  <h4 className="cartMoney">$90.00</h4>
                  <div className="incrementBtn ">
                    <i className="fa-solid fa-minus plusMinus"></i>
                    <input
                      className="form-control addBtnControl"
                      type="number"
                      placeholder="1"
                    />
                    <i className="fa-solid fa-plus plusMinus"></i>
                  </div>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          ))}

          <div className="subFooter">
            <div className="dividesection">
              <hr className="divideBorder" />
            </div>
            <div className="cartTotalsection">
              <div className="cartTotal">
                <h4 className="userPosition">Sub Total</h4>
                <h4 className="amountText m-0">
                  {amountFormat(cartAmount?.products_price)}
                </h4>
              </div>
              <div className="cartTotal">
                <h4 className="userPosition">{`Discount ${
                  cartData?.discount_flag === "percentage" ? "(%)" : ""
                } `}</h4>
                <h4 className="amountText m-0">
                  {formattedReturnPrice(cartAmount?.discount || "0.00")}
                </h4>
              </div>
              <div className="cartTotal">
                <h4 className="userPosition">Total Taxes</h4>
                <h4 className="amountText m-0">
                  {amountFormat(cartAmount?.tax)}
                </h4>
              </div>
              <div className="cartTotal">
                <h4 className="userPosition">Total</h4>
                <h4 className="amountText m-0">
                  {amountFormat(cartAmount?.total_amount)}
                </h4>
              </div>
              <button className="nextverifyBtn w-100" type="submit">
                Proceed to checkout
                <Image
                  src={Images.ArrowRight}
                  alt="rightArrow"
                  className="img-fluid rightImg"
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* custom product add popup */}
      <Modal show={customProductAdd} centered keyboard={false}>
        <CustomProductAdd crosshandler={() => setCustomProductAdd(false)} />
      </Modal>
    {/* cart alert popup */}
      <Modal show={cartAlert} centered keyboard={false}>
      <CartAlert 
      crossHandler={() => setCartAlert(false)}
      />
      </Modal>

      
      {/* custom service add popup */}
      <Modal show={customServiceAdd} centered keyboard={false}>
        <CustomServiceAdd crosshandler={() => setCustomServiceAdd(false)} />
      </Modal>
      {/* <CustomModal
                key={key}
                show={modalDetail.show}
                backdrop="static"
                showCloseBtn={false}
                isRightSideModal={false}
                mediumWidth={false}
                ids={modalDetail.flag === "AddProduct" ? "AddProduct" : "AddProduct"}

                child={
                    modalDetail.flag === "AddProduct" ? (
                        <AddProduct close={() => handleOnCloseModal()} />
                    ) :
                        ""
                }
                header={
                    <>
                        <h2 className="modalHeading mb-0">
                            <figure className='text-center'>
                                <Image src={Images.plusRound} alt="img" onClick={() => handleOnCloseModal()} />
                            </figure>
                            <p className='addProductHeading'>Add New Product<br></br> Manually</p>
                        </h2>
                        <button className="closeButton d-none">
                            <Image src={Images.crossIcon} alt="img" onClick={() => handleOnCloseModal()} />
                        </button>
                    </>
                }

                onCloseModal={() => handleOnCloseModal()}
                footer={
                    <>
                        <div className='modal-footer'>
                            <button className='cancelBtn' onClick={() => handleOnCloseModal()}>Cancel</button>
                            <button className='ModalBlue'>Add to the cart
                                <Image src={Images.plusRound} alt="image" className="img-fluid BtnIcon" />
                            </button>
                        </div>
                    </>
                }
            /> */}
    </>
  );
};

export default RightSideBar;
