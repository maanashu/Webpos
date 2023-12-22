import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";


const Deliveries = () => {
    return (
        <>
            <div className='commanOuter'>
                <div className='mainDelivery'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='deliveries_'>
                                    {/* <figure>
                                      <Image src={Images.moneyTransactions} alt="" className="img-fluid "/> 
                                    </figure> */}
                                    hello

                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6'>
                                <div className='deliverBox mt-2 mb-2'>
                                   
                                    <Image src={Images.analticsImg} alt="" className="img-fluid totalIcons"/> 
                                    <h6 className='textSmall mt-2 mb-2'>New Customers</h6>
                                    <h5 className='textBig mt-2 mb-2'>2,983</h5>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6'>
                                <div className='deliverBox boxDeliverBlue mt-2 mb-2 '>
                                   
                                    <Image src={Images.coinImg} alt="" className="img-fluid totalIcons"/> 
                                   
                                    <h6 className='textSmall mt-2 mb-2'>Returning Customers</h6>
                                    <h5 className='textBig mt-2 mb-2'>3,450</h5>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6'>
                                <div className='deliverBox boxDeliverGreen mt-2 mb-2'>
                                    
                                    <Image src={Images.moneyTransactions} alt="" className="img-fluid  totalIcons"/> 
                                   
                                    <h6 className='textSmall mt-2 mb-2'>Online Customers</h6>
                                    <h5 className='textBig mt-2 mb-2'>$5,680</h5>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6'>
                                <div className='deliverBox boxDeliversky mt-2 mb-2'>
                              
                                    <Image src={Images.visaGreen} alt="" className="img-fluid totalIcons "/> 
                                    
                                    <h6 className='textSmall mt-2 mb-2'>Walk-in Customers</h6>
                                    <h5 className='textBig mt-2 mb-2'>3,835</h5>
                                </div>
                            </div>

                        </div>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='deliveryGraph mt-3'>

                                </div>
                            </div>
                            <div className='col-lg-6'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deliveries