import React, { useState } from 'react'
import DeliveryRightSidebar from '../../components/commanComonets/Delivery/deliveryRightSidebar'
import * as Images from "../../utilities/images"
import Image from "next/image";
import CustomModal from '../../components/customModal/CustomModal';
import ReturnInventory from '../../components/modals/delivery/returnInventory';

const ReturnHistory = () => {
    const [key, setKey] = useState(Math.random());
    const [modalDetail, setModalDetail] = useState({
        show: false,
        title: "",
        flag: "",
    });

    //closeModal
    const handleOnCloseModal = () => {
        setModalDetail({
            show: false,
            title: "",
            flag: "",
        });
        setKey(Math.random());
    };

    const handleUserProfile = (flag) => {

        setModalDetail({
            show: true,
            flag: flag,
            type: flag,
        });
        setKey(Math.random());
    };
    return (
        <>
            <div className='deliverySection cancelOrderSection'>
                <div className='deliverMain w-100'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='assignLeft deliveryOuter me-0'>
                                <div className='flexTable'>
                                    <Image src={Images.boldLeftArrow} alt="boldLeftArrow " className="img-fluid me-2" />
                                    <h4 className='loginMain text-start m-0'>Delivery Returns</h4>
                                </div>
                                <div className='table-responsive mt-3'>
                                    <table id="" className="orderDeliverTable">
                                        <thead className='invoiceHeadingBox'>
                                            <tr>
                                                <th className='invoiceHeading'>#</th>
                                                <th className='invoiceHeading'>Client/Items</th>
                                                <th className='invoiceHeading'>Delivery Type/Returning Time</th>
                                                <th className='invoiceHeading'></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='product_invoice active'>
                                                <td className='invoice_subhead verticalBase'>
                                                    <h4 className='assignId'>#7869YZ</h4>
                                                </td>
                                                <td className="invoice_subhead">
                                                    <div className="nameLocation">
                                                        <h4 className="assignId">Samara Schwansteiger</h4>
                                                        <div className="deliverTableBx">
                                                            <Image
                                                                src={Images.OrderLocation}
                                                                alt="location Image"
                                                                className="img-fluid ms-1"
                                                            />
                                                            <span className="locateDistance">2.5 miles</span>
                                                        </div>
                                                    </div>
                                                    <div className="itemMoney mt-4">
                                                        <h4 className="assignId">3 items</h4>
                                                        <div className="deliverTableBx">
                                                            <Image
                                                                src={Images.MoneyItem}
                                                                alt="MoneyItemImage "
                                                                className="img-fluid ms-1"
                                                            />
                                                            <span className="locateDistance">$500.50
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="invoice_subhead">
                                                    <div className='itemType'>
                                                        <h4 className='assignId'>Delivery Type</h4>
                                                        <div className='immediateBox mt-1'>
                                                            <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                            <h4 className='immediateText'>Express Delivery</h4>
                                                        </div>
                                                    </div>
                                                    <div className="itemTime mt-3">
                                                        <h4 className="assignId">Return Within:</h4>
                                                        <div className="orderDeliverTime">
                                                            <Image
                                                                src={Images.deliverTime}
                                                                alt="deliverTime image "
                                                                className="img-fluid mb-1"
                                                            />
                                                            <span className="immediateText ">In 05:59 min</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='invoice_subhead verticalBase'>
                                                    <div className='deliverArrow '>
                                                        <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className='product_invoice'>
                                                <td className='invoice_subhead verticalBase'>
                                                    <h4 className='assignId'>#7869YZ</h4>
                                                </td>
                                                <td className="invoice_subhead">
                                                    <div className="nameLocation">
                                                        <h4 className="assignId">Samara Schwansteiger</h4>
                                                        <div className="deliverTableBx">
                                                            <Image
                                                                src={Images.OrderLocation}
                                                                alt="location Image"
                                                                className="img-fluid ms-1"
                                                            />
                                                            <span className="locateDistance">2.5 miles</span>
                                                        </div>
                                                    </div>
                                                    <div className="itemMoney mt-4">
                                                        <h4 className="assignId">3 items</h4>
                                                        <div className="deliverTableBx">
                                                            <Image
                                                                src={Images.MoneyItem}
                                                                alt="MoneyItemImage "
                                                                className="img-fluid ms-1"
                                                            />
                                                            <span className="locateDistance">$500.50
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="invoice_subhead">
                                                    <div className='itemType'>
                                                        <h4 className='assignId'>Delivery Type</h4>
                                                        <div className='immediateBox mt-1'>
                                                            <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                            <h4 className='immediateText'>Express Delivery</h4>
                                                        </div>
                                                    </div>
                                                    <div className="itemTime mt-3">
                                                        <h4 className="assignId">Return Within:</h4>
                                                        <div className="orderDeliverTime">
                                                            <Image
                                                                src={Images.deliverTime}
                                                                alt="deliverTime image "
                                                                className="img-fluid mb-1"
                                                            />
                                                            <span className="immediateText ">In 05:59 min</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='invoice_subhead verticalBase'>
                                                    <div className='deliverArrow '>
                                                        <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className='recentFlex'>
                                        <h4 className='recentText'>Recent Deliveries</h4>
                                    </div>
                                    <table id="" className="orderDeliverTable">
                                        <tbody>
                                            <tr className='product_invoice' >
                                                <td className='invoice_subhead verticalBase'>
                                                    <h4 className='assignId'>#7869YZ</h4>
                                                </td>
                                                <td className="invoice_subhead">
                                                    <div className="nameLocation">
                                                        <h4 className="assignId">Samara Schwansteiger</h4>
                                                        <div className="deliverTableBx">
                                                            <Image
                                                                src={Images.OrderLocation}
                                                                alt="location Image"
                                                                className="img-fluid ms-1"
                                                            />
                                                            <span className="locateDistance">2.5 miles</span>
                                                        </div>
                                                    </div>
                                                    <div className="itemMoney mt-4">
                                                        <h4 className="assignId">3 items</h4>
                                                        <div className="deliverTableBx">
                                                            <Image
                                                                src={Images.MoneyItem}
                                                                alt="MoneyItemImage "
                                                                className="img-fluid ms-1"
                                                            />
                                                            <span className="locateDistance">$500.50
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="invoice_subhead">
                                                    <div className='itemType'>
                                                        <h4 className='assignId'>Delivery Type</h4>
                                                        <div className='immediateBox mt-1'>
                                                            <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                            <h4 className='immediateText'>Express Delivery</h4>
                                                        </div>
                                                    </div>
                                                    <div className="itemTime mt-3">
                                                        <h4 className="assignId">Return:</h4>
                                                        <div className="flexTable mt-1">
                                                            <Image
                                                                src={Images.deliverTime}
                                                                alt="deliverTime image "
                                                                className="img-fluid"
                                                            />
                                                            <span className="immediateText ">Today 29 Oct, 2023 | 10:41 am</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='invoice_subhead verticalBase'>
                                                    <div className='deliverArrow '>
                                                        <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className='product_invoice'>
                                                <td className='invoice_subhead verticalBase'>
                                                    <h4 className='assignId'>#7869YZ</h4>
                                                </td>
                                                <td className="invoice_subhead">
                                                    <div className="nameLocation">
                                                        <h4 className="assignId">Samara Schwansteiger</h4>
                                                        <div className="deliverTableBx">
                                                            <Image
                                                                src={Images.OrderLocation}
                                                                alt="location Image"
                                                                className="img-fluid ms-1"
                                                            />
                                                            <span className="locateDistance">2.5 miles</span>
                                                        </div>
                                                    </div>
                                                    <div className="itemMoney mt-4">
                                                        <h4 className="assignId">3 items</h4>
                                                        <div className="deliverTableBx">
                                                            <Image
                                                                src={Images.MoneyItem}
                                                                alt="MoneyItemImage "
                                                                className="img-fluid ms-1"
                                                            />
                                                            <span className="locateDistance">$500.50
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="invoice_subhead">
                                                    <div className='itemType'>
                                                        <h4 className='assignId'>Delivery Type</h4>
                                                        <div className='immediateBox mt-1'>
                                                            <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                            <h4 className='immediateText'>Express Delivery</h4>
                                                        </div>
                                                    </div>
                                                    <div className="itemTime mt-3">
                                                        <h4 className="assignId">Return:</h4>
                                                        <div className="flexTable mt-1">
                                                            <Image
                                                                src={Images.deliverTime}
                                                                alt="deliverTime image "
                                                                className="img-fluid"
                                                            />
                                                            <span className="immediateText ">Today 29 Oct, 2023 | 10:41 am</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='invoice_subhead verticalBase'>
                                                    <div className='deliverArrow '>
                                                        <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className=' deliveryOuter cancelOrderRight ms-0'>
                                <div className='orderLeftInfo'>
                                    <div className='flexTable'>
                                        <figure className='orderAroundImg'>
                                            <Image src={Images.LoginThird} alt="LoginThird image " className="orderPerson" />
                                        </figure>
                                        <div className='returnHeading ms-1'>
                                            <h4 className='cancelOrderText '>Samara Stellinberg</h4>
                                            <p className='returnPara'>1480 Bassel Street, New Orleans...</p>
                                        </div>
                                    </div>
                                    <div className='flexTable'>
                                        <Image src={Images.deliverFast} alt="deliverFast image" className="img-fluid" />
                                        <h4 className='expressText ms-1'>Express Delivery</h4>
                                    </div>
                                </div>
                                <hr className='divideBorder my-3' />
                                <div className='detailScroll  mt-3'>
                                    <div className='selectedProductDetails'>
                                        <div className='d-flex'>
                                            <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                            <div className='ps-1'>
                                                <p className='aboutProduct'>Name Product Gender and Quality</p>
                                                <div className='d-flex'>
                                                    <article className='productColor'>
                                                        <span className='Yellow'></span>
                                                        <span className='Red'></span>
                                                        <span className='Pink'></span>
                                                        <span className='Blue'></span>
                                                        <span className='Black'></span>
                                                        <span className='White'></span>
                                                    </article>
                                                    <span className='productSize ms-2'>Colors / Size</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='productPriceinvoice'>$90.00</p>
                                        <p className='productPriceinvoice'>1</p>
                                        <p className='productPriceinvoice'>$90.00</p>
                                    </div>
                                    <div className='selectedProductDetails'>
                                        <div className='d-flex'>
                                            <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                            <div className='ps-1'>
                                                <p className='aboutProduct'>Name Product Gender and Quality</p>
                                                <div className='d-flex'>
                                                    <article className='productColor'>
                                                        <span className='Yellow'></span>
                                                        <span className='Red'></span>
                                                        <span className='Pink'></span>
                                                        <span className='Blue'></span>
                                                        <span className='Black'></span>
                                                        <span className='White'></span>
                                                    </article>
                                                    <span className='productSize ms-2'>Colors / Size</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='productPriceinvoice'>$90.00</p>
                                        <p className='productPriceinvoice'>1</p>
                                        <p className='productPriceinvoice'>$90.00</p>
                                    </div>
                                    <div className='selectedProductDetails'>
                                        <div className='d-flex'>
                                            <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                            <div className='ps-1'>
                                                <p className='aboutProduct'>Name Product Gender and Quality</p>
                                                <div className='d-flex'>
                                                    <article className='productColor'>
                                                        <span className='Yellow'></span>
                                                        <span className='Red'></span>
                                                        <span className='Pink'></span>
                                                        <span className='Blue'></span>
                                                        <span className='Black'></span>
                                                        <span className='White'></span>
                                                    </article>
                                                    <span className='productSize ms-2'>Colors / Size</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='productPriceinvoice'>$90.00</p>
                                        <p className='productPriceinvoice'>1</p>
                                        <p className='productPriceinvoice'>$90.00</p>
                                    </div>
                                    <div className='selectedProductDetails'>
                                        <div className='d-flex'>
                                            <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                            <div className='ps-1'>
                                                <p className='aboutProduct'>Name Product Gender and Quality</p>
                                                <div className='d-flex'>
                                                    <article className='productColor'>
                                                        <span className='Yellow'></span>
                                                        <span className='Red'></span>
                                                        <span className='Pink'></span>
                                                        <span className='Blue'></span>
                                                        <span className='Black'></span>
                                                        <span className='White'></span>
                                                    </article>
                                                    <span className='productSize ms-2'>Colors / Size</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='productPriceinvoice'>$90.00</p>
                                        <p className='productPriceinvoice'>1</p>
                                        <p className='productPriceinvoice'>$90.00</p>
                                    </div>
                                    <div className='selectedProductDetails'>
                                        <div className='d-flex'>
                                            <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                            <div className='ps-1'>
                                                <p className='aboutProduct'>Name Product Gender and Quality</p>
                                                <div className='d-flex'>
                                                    <article className='productColor'>
                                                        <span className='Yellow'></span>
                                                        <span className='Red'></span>
                                                        <span className='Pink'></span>
                                                        <span className='Blue'></span>
                                                        <span className='Black'></span>
                                                        <span className='White'></span>
                                                    </article>
                                                    <span className='productSize ms-2'>Colors / Size</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='productPriceinvoice'>$90.00</p>
                                        <p className='productPriceinvoice'>1</p>
                                        <p className='productPriceinvoice'>$90.00</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <div className='OrderBox p-0'>
                                            <div className="OrderCheckoutBox">
                                                <p className='orderHeading'>Total Items</p>
                                                <p className='orderSubHeading'>7</p>
                                            </div>
                                            <div className="OrderCheckoutBox">
                                                <p className='orderHeading'>Order Date</p>
                                                <p className='orderSubHeading'>10/10/2023</p>
                                            </div>
                                            <div className="OrderCheckoutBox">
                                                <p className='orderHeading'>Order ID#</p>
                                                <p className='orderSubHeading'>JOBR00001</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-8'>
                                        <div className="productBilling">
                                            <div className='OrderDiscountBox'>
                                                <div className='flexBox '>
                                                    <p className='orderHeading'>Sub Total</p>
                                                    <p className='orderSubHeading'>$2,396.50</p>
                                                </div>
                                                <div className='flexBox'>
                                                    <p className='orderHeading'>Discount</p>
                                                    <p className='orderSubHeading'>-$19.00</p>
                                                </div>
                                                <div className='flexBox'>
                                                    <p className='orderHeading'>Other Fees</p>
                                                    <p className='orderSubHeading'>$14,000</p>
                                                </div>
                                                <div className='flexBox'>
                                                    <p className='orderHeading'>Fax</p>
                                                    <p className='orderSubHeading'>$236</p>
                                                </div>
                                            </div>
                                            <div className='OrderTotal'>
                                                <div className='flexBox'>
                                                    <p className='priceHeading'>Total</p>
                                                    <p className='priceHeading'>$254.60</p>
                                                </div>
                                                <div className='flexBox'>
                                                    <button className='declineButton w-100' type='button'> Later</button>
                                                    <button type='button' className='BlueBtn w-100' onClick={() => {
                                                        handleUserProfile("returnInventory")
                                                    }}>
                                                        Done
                                                        <Image src={Images.ArrowRight} alt="ArrowRight" className="img-fluid ArrowRight" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CustomModal
                key={key}
                show={modalDetail.show}
                backdrop="static"
                showCloseBtn={false}
                isRightSideModal={true}
                mediumWidth={false}
                className={modalDetail.flag === "returnInventory" ? "commonWidth customContent" : ""}
                ids={modalDetail.flag === "returnInventory" ? "returnInventoryModal" : ""}
                child={
                    modalDetail.flag === "returnInventory" ? (
                        <ReturnInventory
                            close={() => handleOnCloseModal()}
                        />
                    ) :
                        ""
                }
                header=

                {modalDetail.flag === "returnInventory" ?
                    <>
                        <div className='trackingSub headerModal'>
                            <figure className='profileImage '>
                                <Image src={Images.ShoppingReturn} alt="ShoppingReturn images" className="confirmImg" />
                            </figure>
                            <h4 className='loginheading'>Confirm Return</h4>
                            <h4 className='trackingHeading'>All returned items will be adjusted with inventory</h4>
                            <p onClick={handleOnCloseModal} className='crossModal'>
                                <Image src={Images.modalCross} alt="modalCross" className="img-fluid" />
                            </p>
                        </div>

                    </>
                    :
                    ''
                }
                onCloseModal={() => handleOnCloseModal()}
            />
        </>
    )
}

export default ReturnHistory