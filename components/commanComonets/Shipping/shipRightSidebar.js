import Link from 'next/link'
import React, { useState } from 'react'
import { ListGroupItem } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import * as Images from "../../../utilities/images"
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const ShipRightSidebar = (props) => {
    const [activeSidebar, setActiveSidebar] = useState(true);
    console.log(props?.data, "dtaassas");
    return (
        <>
            <div className={`shipRightBar ${activeSidebar ? "hideDeliver" : "fullDeliver"}`}>
                <div onClick={() => setActiveSidebar((prev) => !prev)}>
                    <div className='rightInnerToggle mb-3'>
                        <Image src={Images.sideArrow} alt="sideArrow image" className="img-fluid" />
                    </div>
                    <div className='collapseToggle mb-4' >
                        <Image src={Images.modalCross} alt="sideArrow image" className="img-fluid" />
                        <div className='amountText ms-0'>Collapse</div>
                    </div>
                </div>
                <ListGroup>

                    {
                        props?.data?.length > 0 ?
                            <>
                                {
                                    props?.data?.map((val, index) => {
                                        <ListGroupItem className='deliverRightItem'>
                                            <Link href="#" className='rightLinkBar'>
                                                <Image src={
                                                    val?.title == "ordersToReview" ?
                                                        Images.ordersReview :
                                                        val?.title == "acceptedOrders" ?
                                                            Images.deliveryCheck :
                                                            val?.title == "prepairingOrders" ?
                                                                Images.deliverClock :
                                                                val?.title == "readyForPickupOrders" ?
                                                                    Images.sticker :
                                                                    val?.title == "shippedOrders" ?
                                                                        Images.trackDeliver :
                                                                        val?.title == "deliverdOrders" ?
                                                                            Images.deliverSend :
                                                                            val?.title == "canceledAndRejectedOrders" ?
                                                                                Images.deliveryClose :
                                                                                val?.title == "returnedOrders" ?
                                                                                    Images.deliverBack :
                                                                                    ""
                                                }

                                                    alt="ordersReview image" className="img-fluid" />
                                                <div className={`orderReview ${(index <= 4) ? "" : (index == 5) ? "purpleOrder" : (index == 6) ? "cancelOrder" : "returnOrder"}`}>
                                                    <h4 className='loginSub text-start'>
                                                        {
                                                            val?.title == "ordersToReview" ?
                                                                "Order to Review" :
                                                                val?.title == "acceptedOrders" ?
                                                                    "Order Accepted" :
                                                                    val?.title == "prepairingOrders" ?
                                                                        "Order Prepared" :
                                                                        val?.title == "readyForPickupOrders" ?
                                                                            "Printing Label" :
                                                                            val?.title == "shippedOrders" ?
                                                                                "Track Delivery" :
                                                                                val?.title == "deliverdOrders" ?
                                                                                    "Delivered" :
                                                                                    val?.title == "canceledAndRejectedOrders" ?
                                                                                        "Rejected/Cancelled" :
                                                                                        val?.title == "returnedOrders" ?
                                                                                            "Returned" :
                                                                                            ""
                                                        }
                                                    </h4>
                                                    <div className='deliverPercent '>{val?.count}</div>
                                                </div>
                                            </Link>
                                        </ListGroupItem>
                                    })
                                }
                            </>
                            : ""
                    }
                    {/* <ListGroupItem className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.ordersReview} alt="ordersReview image" className="img-fluid" />
                            <div className='orderReview'>
                                <h4 className='loginSub text-start'>Orders to Review</h4>
                                <div className='deliverPercent '>88%</div>
                            </div>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.deliveryCheck} alt="deliveryCheckimage" className="img-fluid" />
                            <div className='orderReview'>
                                <h4 className='loginSub text-start'>Order Accepted</h4>
                                <div className='deliverPercent '>88%</div>
                            </div>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.deliverClock} alt="deliverClock image" className="img-fluid" />
                            <div className='orderReview'>
                                <h4 className='loginSub text-start'>Orders Prepared</h4>
                                <div className='deliverPercent '>88%</div>
                            </div>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.sticker} alt="assignDriver image" className="img-fluid" />
                            <div className='orderReview'>
                                <h4 className='loginSub text-start'>Printing Label</h4>
                                <div className='deliverPercent '>88%</div>
                            </div>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.trackDeliver} alt="assignDriver image" className="img-fluid" />
                            <div className='orderReview'>
                                <h4 className='loginSub text-start'>Track Delivery</h4>
                                <div className='deliverPercent '>88%</div>
                            </div>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.deliverSend} alt=" deliverSend image" className="img-fluid" />
                            <div className='orderReview purpleOrder'>
                                <h4 className='loginSub text-start'>Delivered</h4>
                                <div className='deliverPercent '>88%</div>
                            </div>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.deliveryClose} alt="deliveryClose image" className="img-fluid" />
                            <div className='orderReview cancelOrder'>
                                <h4 className='loginSub text-start'>Rejected/Cancelled</h4>
                                <div className='deliverPercent '>88%</div>
                            </div>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.deliverBack} alt="deliverBack image" className="img-fluid" />
                            <div className='orderReview returnOrder'>
                                <h4 className='loginSub text-start'>Returned</h4>
                                <div className='deliverPercent '>88%</div>
                            </div>
                        </Link>
                    </ListGroupItem> */}
                </ListGroup>
            </div>
        </>
    )
}

export default ShipRightSidebar