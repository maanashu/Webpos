import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";

const BarcodeModal = () => {
    return (
        <>
            <div className='barcodeScanSection'>
                <div className='scannerMain'>
                    <Image src={Images.deviceScan} alt="deviceScan  image" className="confirmImg" />
                    <h4 className='appointMain'>Add a Barcode Scanner</h4>
                    <h5 className='refundSubText'>1. Plugin USB/C Port to POS Monitor</h5>
                    <h5 className='refundSubText'>2.Scan the barcode below </h5>
                </div>
            </div>
        </>
    )
}

export default BarcodeModal