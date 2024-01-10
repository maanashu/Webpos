import React, { useState } from 'react'
import DeliveryRightSidebar from '../../components/commanComonets/Delivery/deliveryRightSidebar'
import * as Images from "../../utilities/images"
import Image from "next/image";
import CustomModal from '../../components/customModal/CustomModal';
import ConfirmReturn from '../../components/modals/delivery/confirmReturn';

const DeliverReturn = () => {
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
            <div className='deliverReturnSection deliverySection'> 
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
                                            <tr className='product_invoice active' onClick={() => {
                                                handleUserProfile("confirmreturn")
                                            }}>
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
                            <div className=' deliveryOuter assignMapRight ms-0'>
                                <Image src={Images.map} alt="map Image" className="mapImg" />
                                <div className='orderStatusBox'>
                                    <div className='orderFlex'>
                                        <Image src={Images.orderDriver} alt="orderDriver Image" className="img-fluid" />
                                        <h4 className='customerLink '>Order Status</h4>
                                    </div>
                                    <div className='orderTrackStatus'>
                                        <div className='subOrderTime'>
                                            <div className='positionImg'>
                                                <Image src={Images.dotStep} alt="dotStep Image" className="img-fluid" />
                                                <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                                            </div>
                                            <div className='positionText'>
                                                <h4 className='appointSub mt-0'>Return Code</h4>
                                                <h4 className='orderPara'>****</h4>
                                            </div>
                                        </div>
                                        <div className='subOrderTime'>
                                            <div className='positionImg'>
                                                <Image src={Images.pickupStep} alt="pickupStep Image" className="img-fluid dotStepImg" />
                                                <Image src={Images.longStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                                            </div>
                                            <div className='positionText'>
                                                <h4 className='appointSub mt-0'>Returning to the Store</h4>
                                                <div className='startFlex mt-1'>
                                                    <Image src={Images.mapleCard} alt="mapleCard Image" className="img-fluid mapleCardImg" />
                                                    <div className='mapleBx'>
                                                        <h4 className='orderPara fw-bold m-0'>Maple Inc. </h4>
                                                        <h4 className='orderPara m-0'>1222 Tully Street,Detroit, MI 48227</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='subOrderTime'>
                                            <div className='positionImg'>
                                                <Image src={Images.cancelStep} alt="deliverDot Image" className="img-fluid dotStepImg" />
                                                <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                                            </div>
                                            <div className='positionText'>
                                                <h4 className='cancelHeading'>Cancelled</h4>
                                                <h4 className='orderPara'>29 Oct, 2023 | 10:41 am</h4>
                                            </div>
                                        </div>
                                        <div className='subOrderTime'>
                                            <div className='positionImg'>
                                                <Image src={Images.deliverDot} alt="deliverDot Image" className="img-fluid dotStepImg" />
                                                <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                                            </div>
                                            <div className='positionText'>
                                                <h4 className='appointSub mt-0'>Product Pickup</h4>
                                                <h4 className='orderPara'>Within 10 minutes</h4>
                                            </div>
                                            <div className='jobrPickUp'>
                                                <Image src={Images.deliverBox} alt="map Image" className="img-fluid" />
                                                <h4 className='locateDistance '>JOBR-899</h4>
                                            </div>
                                        </div>
                                        <div className='subOrderTime'>
                                            <div className='positionImg'>
                                                <Image src={Images.readyStep} alt="readyStep Image" className="img-fluid dotStepImg" />
                                                <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                                            </div>
                                            <div className='positionText'>
                                                <h4 className='appointSub mt-0'>Assign Driver</h4>
                                                <h4 className='orderPara'>21 Jun, 2022 | 10:02 am</h4>
                                            </div>
                                        </div>
                                        <div className='subOrderTime'>
                                            <div className='positionImg'>
                                                <Image src={Images.readyStep} alt="readyStep Image" className="img-fluid dotStepImg" />
                                                <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                                            </div>
                                            <div className='positionText'>
                                                <h4 className='appointSub mt-0'>Ready to Pickup</h4>
                                                <h4 className='orderPara'>21 Jun, 2022 | 12:09 am</h4>
                                            </div>
                                        </div>
                                        <div className='subOrderTime'>
                                            <div className='positionImg'>
                                                <Image src={Images.acceptStep} alt="acceptStep Image" className="img-fluid dotStepImg" />
                                            </div>
                                            <div className='positionText'>
                                                <h4 className='appointSub mt-0'>Order Accepted</h4>
                                                <h4 className='orderPara'>21 Jun, 2022 | 02:10 am</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='maximizeImg'>
                                    <Image src={Images.maximize} alt="maximize Image" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DeliveryRightSidebar />
            </div>
            <CustomModal
                key={key}
                show={modalDetail.show}
                backdrop="static"
                showCloseBtn={false}
                isRightSideModal={true}
                mediumWidth={false}
                className={modalDetail.flag === "confirmreturn" ? "commonWidth customContent" : ""}
                ids={modalDetail.flag === "confirmreturn" ? "confirmReturnModal" : ""}
                child={
                    modalDetail.flag === "confirmreturn" ? (
                        <ConfirmReturn
                            close={() => handleOnCloseModal()}
                        />
                    ) :
                        ""
                }
                header=

                {modalDetail.flag === "confirmreturn" ?
                    <>

                        <div className='trackingSub headerModal'>
                            <figure className='profileImage '>
                                <Image src={Images.deliverBack} alt="trackingImage" className="confirmImg" />
                            </figure>
                            <h4 className='loginheading mt-2'>Confirm Return</h4>
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

export default DeliverReturn