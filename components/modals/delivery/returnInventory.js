import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";

const ReturnInventory = () => {
    return (
        <>
            <div className='inventoryReturn'>
                <form className='formReturn'>
                    <div className='inventoryBox'>
                        <div className='subInventoryBx'>
                            <h4 className='appointSub m-0'>1×</h4>
                            <div className='dayPackBx'>
                                <p className='appointSub m-0'>Lightweight Stylish Casual Daypack</p>
                                <h4 className='productSize p-0'>Yellow / M</h4>
                            </div>
                            <div className='incrementBtn active'>
                                <i className="fa-solid fa-minus plusMinus"></i>
                                <input className="form-control addBtnControl" type="number" placeholder="1" />
                                <i className="fa-solid fa-plus plusMinus"></i>
                            </div>
                        </div>
                        <div className='subInventoryBx'>
                            <h4 className='appointSub m-0'>1×</h4>
                            <div className='dayPackBx'>
                                <p className='appointSub m-0'>Lightweight Stylish Casual Daypack</p>
                                <h4 className='productSize p-0'>Yellow / M</h4>
                            </div>
                            <div className='incrementBtn'>
                                <i className="fa-solid fa-minus plusMinus"></i>
                                <input className="form-control addBtnControl" type="number" placeholder="1" />
                                <i className="fa-solid fa-plus plusMinus"></i>
                            </div>
                        </div>
                        <div className='subInventoryBx'>
                            <h4 className='appointSub m-0'>1×</h4>
                            <div className='dayPackBx'>
                                <p className='appointSub m-0'>Lightweight Stylish Casual Daypack</p>
                                <h4 className='productSize p-0'>Yellow / M</h4>
                            </div>
                            <div className='incrementBtn '>
                                <i className="fa-solid fa-minus plusMinus"></i>
                                <input className="form-control addBtnControl" type="number" placeholder="1" />
                                <i className="fa-solid fa-plus plusMinus"></i>
                            </div>
                        </div>
                    </div>
                    <div className='addCustomerBtn mt-4'>
                        <button className='serviceCancel ' type='submit'>
                            Cancel
                        </button>
                        <button className='nextverifyBtn ' type='submit'>
                            Return to Inventory
                            <Image src={Images.ShoppingReturn} alt="rightArrow" className="img-fluid rightImg" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ReturnInventory