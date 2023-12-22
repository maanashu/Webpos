import React, { useState } from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import CustomModal from '../../customModal/CustomModal';
import AddProduct from './ProductModal/addProduct';


const ProductRightSidebar = () => {
    const [filterShow, setFilterShow] = useState(false)

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
            <div className='sidebarRight'>
                <ListGroup>
                    <ListGroupItem className="rightSidebarItems active" onClick={() => setFilterShow(prev => !prev)}>
                        <div className='sidebarBg'>
                            <Image src={Images.ShoppingOutline} alt="image" className="imgSize" />
                        </div>
                        <span className='cartNum'>1</span>
                    </ListGroupItem>
                    <ListGroupItem className="rightSidebarItems" onClick={() => {
                        setModalDetail({ show: true, flag: "AddProduct" });
                        setKey(Math.random());
                    }}>
                        <div className='sidebarBg'>
                            <Image src={Images.AddProduct} alt="image" className="img-fluid rightSidebarIcons" />
                        </div>
                    </ListGroupItem>
                    <ListGroupItem className="rightSidebarItems" >
                        <div className='sidebarBg'>
                            <Image src={Images.Cancelproduct} alt="image" className="img-fluid rightSidebarIcons" />
                        </div>
                    </ListGroupItem>
                    <ListGroupItem className='rightSidebarItems'>
                        <div className='sidebarBg'>
                            <Image src={Images.PauseCircleOutline} alt="image" className="img-fluid rightSidebarIcons" />
                        </div>
                    </ListGroupItem>
                    <ListGroupItem className='rightSidebarItems'>
                        <Image src={Images.RightArrow} alt="image" className="img-fluid rightSidebarIcons" />
                    </ListGroupItem>
                </ListGroup>
            </div>
            {
                filterShow ?
                    <div className='AddtoCart ProductAddCart'>
                        <div className='cartInfo'>
                            <div className='cartSubInfo active'>
                                <div className='orderTime'>
                                    <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                    <div className='cartorderHeading ms-2 '>
                                        <h4 className='cartText'>Mexican Food Catering</h4>
                                        <div className='flexTable mt-1'>
                                            <article className='productColor'>
                                                <span className='Yellow'></span>
                                                <span className='Red'></span>
                                                <span className='Pink'></span>
                                                <span className='Blue'></span>
                                                <span className='Black'></span>
                                                <span className='White'></span>
                                            </article>
                                            <span className='userIdText ms-2'>Colors / Size</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='orderCalculate'>
                                    <h4 className='cartMoney'>$90.00</h4>
                                    <div className='incrementBtn '>
                                        <i className="fa-solid fa-minus plusMinus"></i>
                                        <input className="form-control addBtnControl" type="number" placeholder="1" />
                                        <i className="fa-solid fa-plus plusMinus"></i>
                                    </div>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className='cartSubInfo '>
                                <div className='orderTime'>
                                    <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                    <div className='cartorderHeading ms-2 '>
                                        <h4 className='cartText'>Mexican Food Catering</h4>
                                        <div className='flexTable mt-1'>
                                            <article className='productColor'>
                                                <span className='Yellow'></span>
                                                <span className='Red'></span>
                                                <span className='Pink'></span>
                                                <span className='Blue'></span>
                                                <span className='Black'></span>
                                                <span className='White'></span>
                                            </article>
                                            <span className='userIdText ms-2'>Colors / Size</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='orderCalculate'>
                                    <h4 className='cartMoney'>$90.00</h4>
                                    <div className='incrementBtn '>
                                        <i className="fa-solid fa-minus plusMinus"></i>
                                        <input className="form-control addBtnControl" type="number" placeholder="1" />
                                        <i className="fa-solid fa-plus plusMinus"></i>
                                    </div>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className='cartSubInfo '>
                                <div className='orderTime'>
                                    <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                    <div className='cartorderHeading ms-2 '>
                                        <h4 className='cartText'>Mexican Food Catering</h4>
                                        <div className='flexTable mt-1'>
                                            <article className='productColor'>
                                                <span className='Yellow'></span>
                                                <span className='Red'></span>
                                                <span className='Pink'></span>
                                                <span className='Blue'></span>
                                                <span className='Black'></span>
                                                <span className='White'></span>
                                            </article>
                                            <span className='userIdText ms-2'>Colors / Size</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='orderCalculate'>
                                    <h4 className='cartMoney'>$90.00</h4>
                                    <div className='incrementBtn '>
                                        <i className="fa-solid fa-minus plusMinus"></i>
                                        <input className="form-control addBtnControl" type="number" placeholder="1" />
                                        <i className="fa-solid fa-plus plusMinus"></i>
                                    </div>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className='cartSubInfo '>
                                <div className='orderTime'>
                                    <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                    <div className='cartorderHeading ms-2 '>
                                        <h4 className='cartText'>Mexican Food Catering</h4>
                                        <div className='flexTable mt-1'>
                                            <article className='productColor'>
                                                <span className='Yellow'></span>
                                                <span className='Red'></span>
                                                <span className='Pink'></span>
                                                <span className='Blue'></span>
                                                <span className='Black'></span>
                                                <span className='White'></span>
                                            </article>
                                            <span className='userIdText ms-2'>Colors / Size</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='orderCalculate'>
                                    <h4 className='cartMoney'>$90.00</h4>
                                    <div className='incrementBtn '>
                                        <i className="fa-solid fa-minus plusMinus"></i>
                                        <input className="form-control addBtnControl" type="number" placeholder="1" />
                                        <i className="fa-solid fa-plus plusMinus"></i>
                                    </div>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className='cartSubInfo '>
                                <div className='orderTime'>
                                    <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                    <div className='cartorderHeading ms-2 '>
                                        <h4 className='cartText'>Mexican Food Catering</h4>
                                        <div className='flexTable mt-1'>
                                            <article className='productColor'>
                                                <span className='Yellow'></span>
                                                <span className='Red'></span>
                                                <span className='Pink'></span>
                                                <span className='Blue'></span>
                                                <span className='Black'></span>
                                                <span className='White'></span>
                                            </article>
                                            <span className='userIdText ms-2'>Colors / Size</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='orderCalculate'>
                                    <h4 className='cartMoney'>$90.00</h4>
                                    <div className='incrementBtn '>
                                        <i className="fa-solid fa-minus plusMinus"></i>
                                        <input className="form-control addBtnControl" type="number" placeholder="1" />
                                        <i className="fa-solid fa-plus plusMinus"></i>
                                    </div>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='subFooter'>
                            <div className='dividesection'>
                                <hr className='divideBorder' />
                            </div>
                            <div className='cartTotalsection'>
                                <div className='cartTotal'>
                                    <h4 className='userPosition'>Cart Total</h4>
                                    <h4 className='amountText m-0'>$360.00</h4>
                                </div>
                                <div className='cartTotal'>
                                    <h4 className='userPosition'>Taxes</h4>
                                    <h4 className='amountText m-0'>$36.00</h4>
                                </div>
                                <div className='cartTotal'>
                                    <h4 className='userPosition'>Delivery</h4>
                                    <h4 className='amountText m-0'>$4.99</h4>
                                </div>
                                <div className='cartTotal'>
                                    <h4 className='userPosition'>Promo Discount</h4>
                                    <h4 className='amountText m-0'>$360.00</h4>
                                </div>
                                <div className='cartTotal'>
                                    <h4 className='userPosition'>Subtotal</h4>
                                    <h4 className='amountText m-0'>$425.00</h4>
                                </div>
                                <button className='nextverifyBtn w-100' type='submit'>
                                    Proceed to checkout
                                    <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
            }
            <CustomModal
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
            />
        </>
    )
}

export default ProductRightSidebar