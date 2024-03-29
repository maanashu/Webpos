import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";

const BarcodeModal = () => {
    return (
        <>
            <div className='barcodeScanSection'>
                <div className='scannerMain'>
                    <Image src={Images.deviceScan} alt="deviceScan  image" className="confirmImg" />
                    <h4 className='appointMain mt-3'>Add a Barcode Scanner</h4>
                    <h5 className='refundSubText text-start mt-4'>1. Plugin USB/C Port to POS Monitor</h5>
                    <h5 className='refundSubText text-start mt-3'>2. Scan the barcode below </h5>
                </div>
                <Image src={Images.barCodeScanImg} alt="deviceScan  image" className="barcodeDevice" />
                <div className='codeDisplayMain'>
                    <h6 className='staffTableText'>The code displays here</h6>
                    <div className='codeSubDisplay'></div>
                </div>
                <div className='text-center w-100 '>
                    <button className='nextverifyBtn w-100' type='submit'>
                        Confirm
                    </button>
                </div>
            </div>
        </>
    )
}

export default BarcodeModal 