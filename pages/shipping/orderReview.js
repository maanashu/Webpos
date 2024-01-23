import React, { useEffect, useState } from 'react'
import DeliveryRightSidebar from '../../components/commanComonets/Delivery/deliveryRightSidebar'
import * as Images from "../../utilities/images"
import Image from "next/image";
import CustomModal from '../../components/customModal/CustomModal';
import ConfirmShip from '../../components/modals/shipping/confirmShip';
import { useRouter } from 'next/router';
import { getOrdersList } from '../../redux/slices/delivery';
import { selectLoginAuth } from '../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import NoOrderFound from '../../components/NoOrderFound';
import { getOrderDetailsById } from '../../redux/slices/dashboard';
import moment from 'moment-timezone';

const OrderReview = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id, status, title } = router?.query
    console.log(id, status, title, 'query data');
    const authData = useSelector(selectLoginAuth);
    const sellerUid = authData?.usersInfo?.payload?.uniqe_id;
    const [selectedItemId, setSelectedItemId] = useState(id)
    console.log(selectedItemId, 'iddddddddddddddd');
    const [singleOrderData, setSingleOrderData] = useState('');
    console.log(singleOrderData, 'single order data');
    const [orderData, setOrderData] = useState([]);
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

    const getOrderDetailsByIdHandle = () => {
        let Param = {
            id: selectedItemId,
        };
        dispatch(
            getOrderDetailsById({
                ...Param,
                cb(res) {
                    if (res) {
                        setSingleOrderData(res?.data?.payload);
                    }
                },
            })
        );
    }

    const getAllShippingOrdeshandle = () => {
        let orderListParam = {
            seller_id: sellerUid,
            status: status,
            delivery_option: "4"
        };
        dispatch(
            getOrdersList({
                ...orderListParam,
                cb(res) {
                    if (res) {
                        setOrderData(res?.data?.payload?.data);
                    }
                },
            })
        );
    }

    useEffect(() => {
        if (sellerUid) {
            getAllShippingOrdeshandle()
        }
    }, [sellerUid]);

    useEffect(() => {
        if (selectedItemId) {
            getOrderDetailsByIdHandle()
        }
    }, [selectedItemId])

    return (
        <>
            <div className='shippingSection shipOrderSection'>
                <div className='deliverMain w-100'>
                    <div className='row '>
                        <div className='col-lg-6'>
                            <div className='deliverOrderLeft deliveryOuter me-0'>
                                <div className='flexTable'>
                                    <Image src={Images.boldLeftArrow} alt="boldLeftArrow " className="img-fluid me-2" />
                                    <h4 className='loginMain text-start m-0'>Shipping {router?.query?.title}</h4>
                                </div>
                                <div className='table-responsive mt-3'>
                                    <table id="" className="orderDeliverTable">
                                        <tbody>
                                            {
                                                orderData?.length > 0 ?
                                                    orderData?.map((item, i) => {
                                                        return (
                                                            <tr key={i} className={`product_invoice ${selectedItemId == item?.id ? 'active' : ""}`} onClick={() => setSelectedItemId(item?.id)}>
                                                                <td className="invoice_subhead">
                                                                    <div className="nameLocation">
                                                                        <h4 className="assignId">{item?.user_details?.firstname + " " + item?.user_details?.lastname}</h4>
                                                                        <div className="deliverTableBx">
                                                                            <Image
                                                                                src={Images.OrderLocation}
                                                                                alt="location Image"
                                                                                className="img-fluid m-0"
                                                                            />
                                                                            <span className="locateDistance">{item?.user_details?.current_address?.city + "," + item?.user_details?.current_address?.country}</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="invoice_subhead">
                                                                    <div className="itemMoney">
                                                                        <h4 className="assignId">{item?.total_items} items</h4>
                                                                        <div className="deliverTableBx">
                                                                            <Image
                                                                                src={Images.MoneyItem}
                                                                                alt="MoneyItemImage "
                                                                                className="img-fluid m-0"
                                                                            />
                                                                            <span className="locateDistance">${item?.payable_amount || "00"}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="invoice_subhead">
                                                                    {
                                                                        item?.shipping_details &&
                                                                        <div className='expresSaver'>
                                                                            <Image width={50} height={50} src={item?.shipping_details?.image} alt="pickupImg image" className="img-fluid shipPickImg m-0" />
                                                                            <div className='subSaver'>
                                                                                <h4 className='assignId'>{item?.shipping_details?.title}</h4>
                                                                                <div className='immediateBox mt-1'>
                                                                                    <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                                                    <h4 className='immediateText'>3 Days Shipping</h4>
                                                                                </div>
                                                                            </div>
                                                                        </div>}
                                                                </td>
                                                                <td className='invoice_subhead verticalBase'>
                                                                    <div className='deliverArrow text-end'>
                                                                        <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid ms-1" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }) :
                                                    <NoOrderFound />
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className=' deliveryOuter deliverOrderRight ms-0'>
                                <div className='orderLeftInfo'>
                                    <div className='flexTable'>
                                        <figure className='orderAroundImg'>
                                            <Image width={50} height={50} src={singleOrderData?.user_details?.profile_photo ? singleOrderData?.user_details?.profile_photo : Images.LoginThird} alt="LoginThird image " className="orderPerson" />
                                        </figure>
                                        <div className='returnHeading ms-1'>
                                            <h4 className='cancelOrderText '>{singleOrderData?.user_details?.firstname + " " + singleOrderData?.user_details?.lastname}</h4>
                                            <p className='returnPara'>{singleOrderData?.user_details?.current_address?.street_address}</p>
                                        </div>
                                    </div>
                                    {
                                        singleOrderData?.shipping_details &&
                                        <div className='expresSaver'>
                                            <Image width={50} height={50} src={singleOrderData?.shipping_details?.image} alt="pickupImg image" className="img-fluid shipPickImg m-0" />
                                            <div className='subSaver'>
                                                <h4 className='assignId'>{singleOrderData?.shipping_details?.title}</h4>
                                                <div className='immediateBox mt-1'>
                                                    <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                    <h4 className='immediateText'>3 Days Shipping</h4>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <hr className='divideBorder my-3' />
                                <div className='detailScroll  mt-3'>
                                    {
                                        singleOrderData?.order_details?.length > 0 ?
                                            singleOrderData?.order_details?.map((v, i) => {
                                                return (
                                                    <div key={i} className='selectedProductDetails'>
                                                        <div className='d-flex'>
                                                            <Image height={50} width={50} src={v?.product_image} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                                            <div className='ps-1'>
                                                                <p className='aboutProduct'>{v?.product_name}</p>
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
                                                        <p className='productPriceinvoice'>${v?.price}</p>
                                                        <p className='productPriceinvoice'>{v?.qty}</p>
                                                        <p className='productPriceinvoice'>${(v?.qty) * (v?.price)}</p>
                                                        {/* <article>
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </article> */}
                                                    </div>
                                                )
                                            }) :
                                            singleOrderData?.return_detail?.return_details?.map((v, i) => {
                                                return (
                                                    <div key={i} className='selectedProductDetails'>
                                                        <div className='d-flex'>
                                                            <Image height={50} width={50} src={v?.order_details?.product_image} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                                            <div className='ps-1'>
                                                                <p className='aboutProduct'>{v?.order_details?.product_name}</p>
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
                                                        <p className='productPriceinvoice'>${v?.order_details?.price}</p>
                                                        <p className='productPriceinvoice'>{v?.order_details?.qty}</p>
                                                        <p className='productPriceinvoice'>${(v?.order_details?.qty) * (v?.order_details?.price)}</p>
                                                        {/* <article>
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </article> */}
                                                    </div>
                                                )
                                            })
                                    }
                                </div>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <div className='OrderBox p-0'>
                                            <div className="OrderCheckoutBox">
                                                <p className='orderHeading'>Total Items</p>
                                                <p className='orderSubHeading'>{singleOrderData?.total_items}</p>
                                            </div>
                                            <div className="OrderCheckoutBox">
                                                <p className='orderHeading'>Order Date</p>
                                                <p className='orderSubHeading'>{moment.utc(singleOrderData?.invoices?.delivery_date).format("MM/DD/YYYY")}</p>
                                            </div>
                                            <div className="OrderCheckoutBox">
                                                <p className='orderHeading'>Order ID#</p>
                                                <p className='orderSubHeading'>{singleOrderData?.id}</p>
                                            </div>
                                            <div className="OrderCheckoutBox">
                                                <p className='orderHeading'>Payment Method</p>
                                                <figure className='priceBtn'>
                                                    <Image src={Images.moneyImg} alt="money" className="moneyImg" />
                                                    <span className='ms-1'>{singleOrderData?.mode_of_payment === 'jbr' ? "JBR" : 'Cash'}</span>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-8'>
                                        <div className="productBilling">
                                            <div className='OrderDiscountBox'>
                                                <div className='flexBox '>
                                                    <p className='orderHeading'>Sub Total</p>
                                                    <p className='orderSubHeading'>${singleOrderData?.actual_amount}</p>
                                                </div>
                                                <div className='flexBox'>
                                                    <p className='orderHeading'>Discount</p>
                                                    <p className='orderSubHeading'>-${singleOrderData?.discount}</p>
                                                </div>
                                                {/* <div className='flexBox'>
                                                    <p className='orderHeading'>Other Fees</p>
                                                    <p className='orderSubHeading'>$14,000</p>
                                                </div> */}
                                                <div className='flexBox'>
                                                    <p className='orderHeading'>Shipping Charge</p>
                                                    <p className='orderSubHeading'>${singleOrderData?.shipping_charge}</p>
                                                </div>
                                                <div className='flexBox'>
                                                    <p className='orderHeading'>Tax</p>
                                                    <p className='orderSubHeading'>${singleOrderData?.tax}</p>
                                                </div>
                                                <div className='flexBox'>
                                                    <p className='orderHeading'>Tips</p>
                                                    <p className='orderSubHeading'>${singleOrderData?.tips}</p>
                                                </div>
                                            </div>
                                            <div className='OrderTotal'>
                                                <div className='flexBox'>
                                                    <p className='priceHeading'>Total</p>
                                                    <p className='priceHeading'>${singleOrderData?.payable_amount}</p>
                                                </div>
                                                {
                                                    singleOrderData?.status === 0 ?
                                                        <div className='flexBox '>
                                                            <button className='declineButton w-100' type='button'> Decline</button>
                                                            <button type='button' className='BlueBtn w-100'>
                                                                Accept Order
                                                                <Image src={Images.ArrowRight} alt="ArrowRight" className="img-fluid ArrowRight" />
                                                            </button>
                                                        </div> :
                                                        singleOrderData?.status === 3 ?
                                                            <button type='button ' className='pickupBtn w-100 mt-2'>
                                                                Print Label
                                                                <Image src={Images.btnSticker} alt="deliverHand image" className="img-fluid" />
                                                            </button> :
                                                            singleOrderData?.status === 4 ?
                                                                <button type='button ' disabled className='pickupBtn w-100 mt-2'>
                                                                    Shipped
                                                                </button> :
                                                                singleOrderData?.status === 7 ?
                                                                    <button type='button ' disabled className='cancelUserBtn w-100 mt-2'>
                                                                        {singleOrderData?.is_returned_order ? "Refunded" : "Cancelled"}
                                                                    </button> :
                                                                    singleOrderData?.status === 8 ?
                                                                        <button type='button ' disabled className='pickupBtn w-100 mt-2'>
                                                                            Rejected
                                                                        </button> :
                                                                        singleOrderData?.status === 9 ?
                                                                            <button type='button ' disabled className='pickupBtn w-100 mt-2'>
                                                                                Returned
                                                                            </button>
                                                                            : <></>
                                                }
                                            </div>
                                        </div>
                                    </div>
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
                className={modalDetail.flag === "confirmship" ? "commonWidth customContent" : ""}
                ids={modalDetail.flag === "confirmship" ? "confirmShipModal" : ""}
                child={
                    modalDetail.flag === "confirmship" ? (
                        <ConfirmShip
                            close={() => handleOnCloseModal()}
                        />
                    ) :
                        ""
                }
                header=

                {modalDetail.flag === "confirmship" ?
                    <>

                        <div className='trackingSub headerModal'>
                            <figure className='profileImage '>
                                <Image src={Images.deliverBack} alt="trackingImage" className="confirmImg shipImgReturn" />
                            </figure>
                            <h4 className='shipReturnText mt-2 text-center'>Returned</h4>
                            <p className='verifySub mt-1'>This return has been completed.</p>
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

export default OrderReview