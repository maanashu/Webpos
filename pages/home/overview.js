import React, { useEffect, useState } from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import CustomModal from "../../components/customModal/CustomModal";
import SessionModal from '../../components/modals/homeModals/sessionModal';
import { selectLoginAuth } from '../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import withAuth from '../../components/withAuth';


const Overview = () => {
    const authData = useSelector(selectLoginAuth)
    const token = authData?.posUserLoginDetails?.payload?.token
    const router = useRouter();
    const dispatch = useDispatch();
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

    useEffect(() => {
        // Check if the user is logged in
        // const isLoggedIn = /* your authentication check here */;

        if (router.pathname === '/home/overview') {
            // Redirect to the dashboard
            router.push('/home/overview');
        }
    }, []);



    return (
        <>
            <div className='homeOverview'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-12'>
                            <div className='homeLeft'>
                                <div className='homeProfile'>
                                    <figure className='profileImage'>
                                        <Image src={Images.HomeProfileImg} alt="HomeProfileImage" className="img-fluid homeProfileImg" />
                                    </figure>
                                    <h2 className='loginheading mt-2'>Eugenia Salas</h2>
                                    <div className='cashBox'>
                                        <h4 className='cashierHeading'>POS Cashier</h4>
                                        <div className='IdTextMain'>
                                            <h4 className='userIdText'>ID: 3890EN</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='profileSaleData'>
                                    <div className='todaySale '>
                                        <h4 className='loginMain'>Today’s Sales</h4>
                                        <div className='flexHeading mt-4'>
                                            <h4 className='saleHeading'>Cash Sales amount</h4>
                                            <h4 className='saleHeading'>$400.50</h4>
                                        </div>
                                        <div className='flexHeading mt-2'>
                                            <h4 className='saleHeading'>Cash Sales amount</h4>
                                            <h4 className='saleHeading'>$400.50</h4>
                                        </div>
                                        <div className='flexHeading mt-2'>
                                            <h4 className='saleHeading'>Cash Sales amount</h4>
                                            <h4 className='saleHeading'>$400.50</h4>
                                        </div>
                                        <div className='flexHeading mt-2'>
                                            <h4 className='saleHeading'>JOBR Coin Sales amount</h4>
                                            <h4 className='saleHeading'>JOBR 400.50</h4>
                                        </div>
                                    </div>
                                    <div className='todaySale cashDraw'>
                                        <h4 className='loginMain'>Cash Drawer</h4>
                                        <div className='flexHeading mt-4'>
                                            <h4 className='saleHeading'>Opening Balance</h4>
                                            <h4 className='saleHeading'>$900.50</h4>
                                        </div>
                                        <div className='flexHeading mt-2'>
                                            <h4 className='saleHeading'>Closing Balance</h4>
                                            <h4 className='saleHeading'>$450.00</h4>
                                        </div>
                                    </div>
                                    <div className='timedetail'>
                                        <div className='flexHeading mt-2'>
                                            <h4 className='dayTimeText'>Today 25 April, 2023</h4>
                                            <h4 className='dayTimeText'>11:15:23 am</h4>
                                        </div>
                                        <div className='flexHeading mt-2'>
                                            <h4 className='dayTimeText'>Log in Time:</h4>
                                            <h4 className='dayTimeText'>10:15:03 am</h4>
                                        </div>
                                        <div className='flexHeading mt-2'>
                                            <h4 className='dayTimeText'>Session:</h4>
                                            <h4 className='dayTimeText'>01h:03 min</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='productReturn'>
                                    <h4 className='linkHeading'>Product Returns</h4>
                                    <Image src={Images.ProductBox} alt="BoxImage" className="img-fluid " onClick={() => {
                                        handleUserProfile("trackingmodal")
                                    }} />
                                </div>
                                <div className='lockScreenBox'>
                                    <h4 className='linkHeading'>Lock Screen</h4>
                                    <Image src={Images.ProductLock} alt="LockImage" className="img-fluid " />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7 col-md-12'>
                            <div className='homeRight'>
                                <form className='homeRightForm'>
                                    <div className="searchControlBox">
                                        <input type="text" className="form-control searchControl" placeholder="Search here" />
                                        <Image src={Images.Scan} alt="ScanImage" className="img-fluid scanSearch" />
                                        <Image src={Images.SearchIcon} alt="SearchImageIcon" className="img-fluid searchImg" />
                                    </div>
                                </form>
                                <div className='sellingOrder'>
                                    <div className='startSelling'>
                                        <figure className='profileImage'>
                                            <Image src={Images.HomeIcon} alt="HomeImage" className="img-fluid" />
                                        </figure>
                                        <h4 className='loginMain'>Start Selling</h4>
                                        <figure className='scanText'>
                                            <Image src={Images.SearchLight} alt="SearchImage" className="img-fluid" />
                                            <span className='smallText'>
                                                Scan / Search
                                            </span>
                                        </figure>
                                    </div>
                                    <div className='onlineOrder'>
                                        <figure className='profileImage'>
                                            <Image src={Images.ShoppingCart} alt="HomeImage" className="img-fluid" />
                                        </figure>
                                        <h4 className='loginMain'>Online Orders</h4>
                                        <button className='OrderBtn'>12 New Orders</button>
                                        <div className='bellImg'>
                                            <figure className='bellOuter'>
                                                <Image src={Images.bellIcon} alt="BellImage" className="img-fluid bellImage_" />
                                            </figure>
                                        </div>

                                    </div>
                                </div>
                                <div className='profileMainTable'>
                                    <h4 className='loginMain'>Order Deliveries</h4>
                                    <div className="table-responsive deliverTable">
                                        <table id="tableProduct" className="product_table">
                                            <tbody>
                                                <tr >
                                                    <td className='deliverSubdata'>
                                                        <div className='orderFirstId'>
                                                            <h4 className='orderId'>#7869YZ</h4>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='nameLocation'>
                                                            <h4 className='orderId'>Jeremy McFlan</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                                                <span className='locateDistance'>2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemMoney'>
                                                            <h4 className='orderId'>3 items</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>$500.50</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemTime'>
                                                            <h4 className='orderId'>1 hour delivery window</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>Immediately</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='deliveryTime'>
                                                            <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                                            <span className='orderId'>00:03:06</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr >
                                                    <td className='deliverSubdata'>
                                                        <div className='orderFirstId'>
                                                            <h4 className='orderId'>#7869YZ</h4>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='nameLocation'>
                                                            <h4 className='orderId'>Jeremy McFlan</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                                                <span className='locateDistance'>2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemMoney'>
                                                            <h4 className='orderId'>3 items</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>$500.50</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemTime'>
                                                            <h4 className='orderId'>1 hour delivery window</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>Immediately</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='deliveryTime'>
                                                            <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                                            <span className='orderId'>00:03:06</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr >
                                                    <td className='deliverSubdata'>
                                                        <div className='orderFirstId'>
                                                            <h4 className='orderId'>#7869YZ</h4>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='nameLocation'>
                                                            <h4 className='orderId'>Jeremy McFlan</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                                                <span className='locateDistance'>2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemMoney'>
                                                            <h4 className='orderId'>3 items</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>$500.50</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemTime'>
                                                            <h4 className='orderId'>1 hour delivery window</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>Immediately</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='deliveryTime'>
                                                            <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                                            <span className='orderId'>00:03:06</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr >
                                                    <td className='deliverSubdata'>
                                                        <div className='orderFirstId'>
                                                            <h4 className='orderId'>#7869YZ</h4>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='nameLocation'>
                                                            <h4 className='orderId'>Jeremy McFlan</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                                                <span className='locateDistance'>2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemMoney'>
                                                            <h4 className='orderId'>3 items</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>$500.50</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemTime'>
                                                            <h4 className='orderId'>1 hour delivery window</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>Immediately</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='deliveryTime'>
                                                            <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                                            <span className='orderId'>00:03:06</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr >
                                                    <td className='deliverSubdata'>
                                                        <div className='orderFirstId'>
                                                            <h4 className='orderId'>#7869YZ</h4>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='nameLocation'>
                                                            <h4 className='orderId'>Jeremy McFlan</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                                                <span className='locateDistance'>2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemMoney'>
                                                            <h4 className='orderId'>3 items</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>$500.50</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemTime'>
                                                            <h4 className='orderId'>1 hour delivery window</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>Immediately</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='deliveryTime'>
                                                            <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                                            <span className='orderId'>00:03:06</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr >
                                                    <td className='deliverSubdata'>
                                                        <div className='orderFirstId'>
                                                            <h4 className='orderId'>#7869YZ</h4>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='nameLocation'>
                                                            <h4 className='orderId'>Jeremy McFlan</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                                                <span className='locateDistance'>2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemMoney'>
                                                            <h4 className='orderId'>3 items</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>$500.50</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemTime'>
                                                            <h4 className='orderId'>1 hour delivery window</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>Immediately</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='deliveryTime'>
                                                            <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                                            <span className='orderId'>00:03:06</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr >
                                                    <td className='deliverSubdata'>
                                                        <div className='orderFirstId'>
                                                            <h4 className='orderId'>#7869YZ</h4>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='nameLocation'>
                                                            <h4 className='orderId'>Jeremy McFlan</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                                                <span className='locateDistance'>2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemMoney'>
                                                            <h4 className='orderId'>3 items</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>$500.50</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemTime'>
                                                            <h4 className='orderId'>1 hour delivery window</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>Immediately</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='deliveryTime'>
                                                            <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                                            <span className='orderId'>00:03:06</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr >
                                                    <td className='deliverSubdata'>
                                                        <div className='orderFirstId'>
                                                            <h4 className='orderId'>#7869YZ</h4>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='nameLocation'>
                                                            <h4 className='orderId'>Jeremy McFlan</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                                                <span className='locateDistance'>2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemMoney'>
                                                            <h4 className='orderId'>3 items</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>$500.50</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='itemTime'>
                                                            <h4 className='orderId'>1 hour delivery window</h4>
                                                            <div className='flexTable'>
                                                                <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                                                <span className='locateDistance'>Immediately</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='deliverSubdata'>
                                                        <div className='deliveryTime'>
                                                            <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                                            <span className='orderId'>00:03:06</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
                className={modalDetail.flag === "trackingmodal" ? "commonWidth customContent" : ""}
                ids={modalDetail.flag === "trackingmodal" ? "trackingModal" : ""}
                child={
                    modalDetail.flag === "trackingmodal" ? (
                        <SessionModal
                            close={() => handleOnCloseModal()}
                        />
                    ) :
                        ""
                }
                header=

                {modalDetail.flag === "trackingmodal" ?
                    <>
                        <p onClick={handleOnCloseModal} className='modal_cancel'>
                            <Image src={Images.modalCross} alt="modalCross" className="img-fluid" />
                        </p>

                    </>
                    :
                    ''
                }
                onCloseModal={() => handleOnCloseModal()}
            />
        </>
    )
}

export default withAuth(Overview)