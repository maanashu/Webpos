import React from 'react'
import Image from "next/image";
import * as Images from "../utilities/images";
const LoginModal = () => {
  return (
    <div className='row'>
        <div className='col-md-6 mb-3'>
            <div className='chooseRole'>
                <Image src={Images.customerIcon} alt="img" className='img-fluid mb-3 hideIcon'/>
                <p className='heading16'>Customer</p>
            </div>
        </div>
        <div className='col-md-6 mb-3'>
        <div className='chooseRole'>
                <Image src={Images.merchantIcon} alt="img" className='img-fluid mb-3 hideIcon'/>
                <p className='heading16'>Merchant</p>
            </div>
        </div>
    </div>
  )
}

export default LoginModal