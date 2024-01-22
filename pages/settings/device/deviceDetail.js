import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";

const DeviceDetail = () => {
    return (
        // <div className='row settingMain'>
        //     <div className='col-lg-3'></div>
        //     <div className='col-lg-9'>
        <div className='settingOuter deviceDetailRight deviceRight'>
            <Image src={Images.darkDevices} alt="darkDevices image" className="img-fluid" />
            <div className='deviceDetailData w-100'>
                <h2 className='appointMain'>Devices</h2>
                <p className='lightOfferText mt-2'>An extra layer to boost your team members account security. A verification code will be required in addition to password each time you sign in.</p>
                <div className='deviceDetailSub'>
                    <div className='SoftwareUpdateBx'>
                        <Image src={Images.rotateArrow} alt="rotateArrow image" className="imgSize" />
                        <div className='softwareSub'>
                            <h4 className='cancelOrderText'>Software Updates</h4>
                            <h6 className='orderPara'>Last Updated 9/23/2023</h6>
                        </div>
                    </div>
                    <div className='deviceInfo'>
                        <div className='flexDiv'>
                            <h4 className='appointSub m-0'>Device Model</h4>
                            <h4 className='appointSub m-0'>iPad</h4>
                        </div>
                        <hr className='cartDivide' />
                        <div className='flexDiv'>
                            <h4 className='appointSub m-0'>IMEI Number</h4>
                            <h4 className='appointSub m-0'>543750t83</h4>
                        </div>
                        <hr className='cartDivide' />
                        <div className='flexDiv'>
                            <h4 className='appointSub m-0'>Serial Number</h4>
                            <h4 className='appointSub m-0'>543750t83</h4>
                        </div>
                        <hr className='cartDivide' />
                        <div className='flexDiv'>
                            <h4 className='appointSub m-0'>Model Number</h4>
                            <h4 className='appointSub m-0'>543750t83</h4>
                        </div>
                    </div>
                    <div className='deviceInfo'>
                        <div className='flexDiv'>
                            <h4 className='appointSub m-0'>Capacity</h4>
                            <h4 className='appointSub m-0'>128 GB</h4>
                        </div>
                        <hr className='cartDivide' />
                        <div className='flexDiv'>
                            <h4 className='appointSub m-0'>Available Storage</h4>
                            <h4 className='appointSub m-0'>35 GB</h4>
                        </div>
                    </div>
                    <div className='deviceInfo'>
                        <div className='flexDiv'>
                            <h4 className='appointSub m-0'>WiFi Address</h4>
                            <h4 className='appointSub m-0'>1c:23:34:67:N1</h4>
                        </div>
                        <hr className='cartDivide' />
                        <div className='flexDiv'>
                            <h4 className='appointSub m-0'>Available Storage</h4>
                            <h4 className='appointSub m-0'>1c:23:34:67:N1</h4>
                        </div>
                        <hr className='cartDivide' />
                        <div className='flexDiv'>
                            <h4 className='appointSub m-0'>Network</h4>
                            <h4 className='appointSub m-0'>Vodafone</h4>
                        </div>
                        <hr className='cartDivide' />
                        <div className='flexDiv'>
                            <h4 className='appointSub m-0'>Network Password</h4>
                            <h4 className='appointSub m-0'>*********</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //     </div>
        // </div>
    )
}

export default DeviceDetail