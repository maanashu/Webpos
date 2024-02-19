import React from 'react'
import * as Images from "../../../../utilities/images";
import Image from "next/image";

const DetailModal = () => {
    return (
        <>
            <div className='detailModalSection'>
                <div className="detailSubBox">
                    <Image
                        src={Images.AlertCircle}
                        alt="image"
                        className="img-fluid productOverImg"
                        width="100" height="100"
                    />
                    <div className='detailSubRight'>
                        <h5 className="linkHeading m-0 text-start">vitamin products</h5>
                        <h5 className="loginSub text-start ">vitamin Product Descriptions value </h5>
                    </div>
                </div>
                <div className='priceBox flexContent'>
                    <h5 className='linkHeading m-0'>Price</h5>
                    <h5 className='appointSub m-0'>55</h5>
                </div>
                <div className='availableScroll'>
                    <div className="deviceInfo">
                        <div className="flexDiv">
                            <h4 className="appointSub m-0">SKU</h4>
                            <h4 className="appointSub m-0">1111111</h4>
                        </div>
                        <hr className="cartDivide my-2" />
                        <div className="flexDiv">
                            <h4 className="appointSub m-0">Barcode</h4>
                            <h4 className="appointSub m-0">543750t83</h4>
                        </div>
                        <hr className="cartDivide my-2" />
                        <div className="flexDiv">
                            <h4 className="appointSub m-0">Unit Type</h4>
                            <h4 className="appointSub m-0">Physical</h4>
                        </div>
                        <hr className="cartDivide my-2" />
                        <div className="flexDiv">
                            <h4 className="appointSub m-0">Unit Weight</h4>
                            <h4 className="appointSub m-0">9lb</h4>
                        </div>
                        <hr className="cartDivide my-2" />
                        <div className="flexDiv">
                            <h4 className="appointSub m-0">Other Location</h4>
                            <h4 className="appointSub m-0">NA</h4>
                        </div>
                    </div>
                    <div className="deviceInfo">
                        <h5 className='appointSub'>Available For Selling</h5>

                        <div className="detailAvailable">
                            <h4 className="linkHeading">In-Store</h4>
                            <div className="roundCheck mb-0 darkCheck">
                                <input
                                    type="checkbox"
                                />
                                <label className="amountText d-none "></label>
                            </div>
                        </div>
                        <div className="detailAvailable">
                            <h4 className="linkHeading">Online-Delivery</h4>
                            <div className="roundCheck mb-0 darkCheck">
                                <input
                                    type="checkbox"
                                />
                                <label className="amountText d-none "></label>
                            </div>
                        </div>
                        <div className="detailAvailable">
                            <h4 className="linkHeading">Online-Shipping</h4>
                            <div className="roundCheck mb-0 darkCheck">
                                <input
                                    type="checkbox"
                                />
                                <label className="amountText d-none "></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailModal