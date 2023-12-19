import Link from 'next/link'
import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import * as Images from "../../../utilities/images"
import Image from "next/image";

const DeliveryRightSidebar = () => {
    return (
        <>
            <div className='deliverRightBar'>
                <ListGroup>
                    <ListGroupItem className='mb-4'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.sideArrow} alt="sideArrow image" className="img-fluid" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.ordersReview} alt="ordersReview image" className="img-fluid" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem  className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.deliveryCheck} alt="deliveryCheckimage" className="img-fluid" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem  className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.deliverClock} alt="deliverClock image" className="img-fluid" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem  className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.assignDriver} alt="assignDriver image" className="img-fluid" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem  className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.deliverSend} alt=" deliverSend image" className="img-fluid" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem  className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.deliveryClose} alt="deliveryClose image" className="img-fluid" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem  className='deliverRightItem'>
                        <Link href="#" className='rightLinkBar'>
                            <Image src={Images.deliverBack} alt="deliverBack image" className="img-fluid" />
                        </Link>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </>
    )
}

export default DeliveryRightSidebar