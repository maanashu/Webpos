import React, { useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import * as Images from "../../../utilities/images"
import Image from "next/image";
import Link from 'next/link';
import CustomModal from '../../../components/customModal/CustomModal';
import BarcodeModal from '../../../components/settingModal/barcodeModal';
import BluetoothScan from '../../../components/settingModal/bluetoothScan';

const Devices = () => {
    const [key, setKey] = useState(Math.random());
    const [modalDetail, setModalDetail] = useState({
        show: false,
        title: "",
        flag: "",
    });

    //closeModal
    const handleOnCloseModal = () => {
        setModalDetail({
            show: false,
            title: "",
            flag: "",
        });
        setKey(Math.random());
    };

    const handleUserProfile = (flag) => {

        setModalDetail({
            show: true,
            flag: flag,
            type: flag,
        });
        setKey(Math.random()); 
    };
    return (
        <>
            <div className='deviceRight settingOuter'>
                <Image src={Images.darkDevices} alt="darkDevices image" className="img-fluid" />
                <div className='deviceData w-100'>
                    <h4 className='appointMain'>Devices</h4>
                    <p className='lightOfferText mt-2'>Add a new device as any of the following or configure the settings of a registered one.</p>
                    <div className='addDeviceSection'>
                        <h4 className='amountText m-0'>Add a New Device</h4>
                        <div className='addDeviceSub'>
                            <div className='SubReader' onClick={() => { handleUserProfile("barcodeScan") }}>
                                <Image src={Images.deviceScan} alt="darkDevices image" className="img-fluid" />
                                <h4 className='cancelOrderText mt-3'>Barcode Scanner</h4>
                            </div>
                            <div className='SubReader' onClick={() => { handleUserProfile("bluetoothScan") }}>
                                <Image src={Images.cardReader} alt="cardReader image" className="img-fluid" />
                                <h4 className='cancelOrderText mt-3'>Card Reader</h4>
                            </div>
                            <div className='SubReader'>
                                <Image src={Images.cashDraw} alt="cashDraw image" className="img-fluid" />
                                <h4 className='cancelOrderText mt-3'>Cash Drawers</h4>
                            </div>
                            <div className='SubReader'>
                                <Image src={Images.printer} alt="printer image" className="img-fluid" />
                                <h4 className='cancelOrderText mt-3'>Receipt Printers</h4>
                            </div>
                        </div>
                    </div>
                    <div className='configureBox'>
                        <h4 className='amountText m-0'>Configure Settings on Your Device</h4>
                        <h4 className='lightOfferText mt-3'>All you need to manage Basic Point of Sale is a device nickname and location to allow team members to accept payments.</h4>
                        <div className='deviceBarcodeSub'>
                            <div className='locationHead'>
                                <Image src={Images.deviceScan} alt="darkDevices image" className="img-fluid" />
                                <div className='barcodeHeading'>
                                    <h4 className='cancelOrderText'>Barcode Scanner</h4>
                                    <h6 className='settingText mt-1'>Bluetooth Device - JOBR 3000-02199</h6>
                                </div>
                            </div>
                            <div className="roundCheck mb-0">
                                <input type="checkbox" />
                                <label className='amountText d-none '></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CustomModal
                key={key}
                show={modalDetail.show}
                backdrop="static"
                showCloseBtn={false}
                isRightSideModal={true}
                mediumWidth={false}
                className={modalDetail.flag === "barcodeScan" ? "commonWidth customContent" : ""}
                ids={modalDetail.flag === "barcodeScan" ? "barcodeScanModal" : modalDetail.flag === "bluetoothScan" ? "bluetoothScanModal" : ""}
                child={
                    modalDetail.flag === "barcodeScan" ? (
                        <BarcodeModal
                            close={() => handleOnCloseModal()}
                        />
                    ) :
                        modalDetail.flag === "bluetoothScan" ? (
                            <BluetoothScan
                                close={() => handleOnCloseModal()}
                            />
                        ) :
                            ""
                }
                header=
                {modalDetail.flag === "barcodeScan" ?
                    <>
                        {/* <div className='trackingSub w-100'>
                            <figure className='profileImage '>
                                <Image src={Images.deviceScan} alt="deviceScan  image" className="confirmImg" />
                            </figure>
                            <h4 className='loginheading mt-2'>Add a Barcode Scanner</h4>
                        </div> */}
                    </>
                    :
                    ''
                }
                onCloseModal={() => handleOnCloseModal()}
            />
        </>
    )
}

export default Devices