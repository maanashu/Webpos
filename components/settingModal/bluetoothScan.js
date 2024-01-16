import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";
import Link from 'next/link';

const BluetoothScan = () => {
    return (
        <>
            <div className='bluetoothSection text-center'>
                <h4 className='appointMain'>Add a Bluetooth Barcode Scanner</h4>
                <h5 className='refundSubText mt-2'>Searching for devices:</h5>
                <div className='bluetoothLoader'>
                    <div class="outer-circle">
                        <div class="inner-circle">
                            <Image src={Images.BluetoothImg} alt="darkDevices image" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className='flexDiv'>
                    <div className='scannerBx'>
                        <Image src={Images.scanSmall} alt="darkDevices image" className="img-fluid" />
                        <h6 className='addServicePara m-0'>Barcode Scanner JOBR3000-02199</h6>
                    </div>
                    <Link href="#" className='scanLink'>Connect</Link>
                </div>
            </div>
        </>
    )
}

export default BluetoothScan