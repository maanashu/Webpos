import React from 'react'
import DeliveryRightSidebar from '../../components/commanComonets/Delivery/deliveryRightSidebar'
import * as Images from "../../utilities/images"
import Image from "next/image";


const DeliverDashboard = () => {
    return (
        <>
            <div className='deliverySection deliveryOuter'>
                <div className='flexbase'>
                    <div className='deliverMain w-100'>
                        <div className='row '>
                            <div className='col-lg-4'>
                                <div className='deliverLeft deliverSubOuter'>
                                    <div className='deliverOrderStatus'>
                                        <h4 className='customerLink text-start'>Today Order Status</h4>
                                        <div className='flexDiv mt-4'>
                                            <h4 className='deliverMainText'>Delivery Order</h4>
                                            <h4 className='deliverMainText'>23</h4>
                                        </div>
                                        <div className='flexDiv mt-3'>
                                            <h4 className='deliverMainText'>Pickup Orders</h4>
                                            <h4 className='deliverMainText'>10</h4>
                                        </div>
                                    </div>
                                    <div className='currentStatus'>
                                        <h4 className='customerLink text-start'>Current Status</h4>
                                        <div className='currentSubStatus'>
                                            <div className='expressDeliver'>
                                                <figure className='expressImg'>
                                                    <Image src={Images.deliverSuperFast} alt="deliverSuperFast image" className="img-fluid" />
                                                </figure>
                                                <div className='expressMain'>
                                                    <h4 className='expessText'>Express Delivery</h4>
                                                    <h4 className='providerSubText text-start mt-2'> 17 orders</h4>
                                                </div>
                                            </div>
                                            <div className='oneHrDeliver'>
                                                <figure className='expressImg'>
                                                    <Image src={Images.deliverFast} alt="deliverFast image" className="img-fluid" />
                                                </figure>
                                                <div className='expressMain'>
                                                    <h4 className='expessText'>Express Delivery</h4>
                                                    <h4 className='providerSubText text-start mt-2'> 17 orders</h4>
                                                </div>
                                            </div>
                                            <div className='twoHrDelivery'>
                                                <figure className='expressImg'>
                                                    <Image src={Images.deliveryLate} alt="deliveryLate image" className="img-fluid" />
                                                </figure>
                                                <div className='expressMain'>
                                                    <h4 className='expessText'>Express Delivery</h4>
                                                    <h4 className='providerSubText text-start mt-2'> 17 orders</h4>
                                                </div>
                                            </div>
                                            <div className='pickupDeliver'>
                                                <figure className='expressImg'>
                                                    <Image src={Images.pickupImg} alt="pickupImg image" className="img-fluid" />
                                                </figure>
                                                <div className='expressMain'>
                                                    <h4 className='amountText ms-0'>Express Delivery</h4>
                                                    <h4 className='providerSubText text-start mt-2'> 17 orders</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='deliverOrder'>
                                        <h4 className='customerLink text-start'>Orders</h4>
                                        <div className="deliverGraph" >
                                            <Image src={Images.garphCircle} alt="pickupImg image" className="img-fluid graphCircleImg" />
                                        </div>
                                        <div className='flexDiv mt-3'>
                                            <h4 className='orderDeliverText'>Delivery Order</h4>
                                            <div className='deliverPercent'>88%</div>
                                        </div>
                                        <div className='flexDiv returnOrder mt-3'>
                                            <h4 className='orderDeliverText'>Delivery Order</h4>
                                            <div className='deliverPercent'>88%</div>
                                        </div>
                                        <div className='flexDiv cancelOrder mt-3'>
                                            <h4 className='orderDeliverText'>Delivery Order</h4>
                                            <div className='deliverPercent'>88%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-8'>
                                <div className='deliverGraphSection'>
                                    <form className='deliverCheck'>
                                        <div class="form-group checkBlue">
                                            <input type="checkbox" id="Incoming Orders" />
                                            <label for="Incoming Orders" className='appointSub  m-0'>Incoming Orders</label>
                                        </div>
                                        <div class="form-group checkBlue checkPurple">
                                            <input type="checkbox" id="Delivery Orders" />
                                            <label for="Delivery Orders" className='appointSub  m-0'>Delivery Orders</label>
                                        </div>
                                        <div class="form-group checkBlue checkYellow">
                                            <input type="checkbox" id="html" />
                                            <label for="html" className='appointSub  m-0'>Incoming Orders</label>
                                        </div>
                                        <div class="form-group checkBlue checkRed">
                                            <input type="checkbox" id="html" />
                                            <label for="html" className='appointSub  m-0'>Incoming Orders</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DeliveryRightSidebar />
                </div>
            </div>
        </>
    )
}

export default DeliverDashboard