import React, { useEffect } from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";
import Link from 'next/link';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getStaffDetails, viewPayment, settingInfo } from '../../../redux/slices/setting';

const StaffLocation = (props) => {
    console.log(props, "props");
    const dispatch = useDispatch()

    const getPaymentDetails = () => {
        let params = {
            'transaction_id': props?.selectedItemId?.transaction_id,
            'week_no': props?.selectedItemId?.weekNo
        };
        dispatch(viewPayment({
            ...params,
            cb(res) {
                if (res.status) {
                    setGetStaffInfo(res?.data?.payload)
                }
            },
        })
        );
    }

    useEffect(() => {
        getPaymentDetails()
    }, [])
    return (
        <>
            <div className='settingMain staffLocationSection'>
                <div className='row'>
                    <div className='col-lg-9'>
                        <div className='settingOuter staffLocateRight'>
                            <Image src={Images.boldLeftArrow} alt="boldLeftArrow " className="img-fluid  pointHand" />
                            <div className='staffSubLocate'>
                                <div className='JobrLocation'>
                                    <Image src={Images.jobrIcon} alt="boldLeftArrow" className="img-fluid me-2" />
                                    <div className='LocateDetail'>
                                        <div className='locateSubDetail'>
                                            <h4 className='LocateHeading'>Miami, FL.</h4>
                                            <h4 className='LocateSubText mt-2'>+1 (305) 305-0000</h4>
                                            <h4 className='LocateSubText'>contact@jobr.com</h4>
                                        </div>
                                        <button className='jobrBtn' type='button'>jobr.com</button>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-2'>
                                            <div className='locateLeft'>
                                                <h4 className='LocateHeading'>Invoice</h4>
                                                <h4 className='locateLightText mt-1'>Nº 0000A</h4>
                                                <h4 className='LocateHeading mt-3'>Date</h4>
                                                <h4 className='locateLightText mt-1'>07/10/2021</h4>
                                            </div>
                                        </div>
                                        <div className='col-lg-10'>
                                            <div className='locateRight'>
                                                <div className='billSection'>
                                                    <h4 className='billHeading'>Bill To</h4>
                                                    <div className='flexContent mt-2'>
                                                        <h4 className='LocateHeading'>Halton Company</h4>
                                                        <h4 className='LocateHeading '>+00325 625 632</h4>
                                                    </div>
                                                    <div className='flexContent mt-2'>
                                                        <h4 className='LocateHeading'>123 Miami Avenue - London</h4>
                                                        <h4 className='LocateHeading '>CIF 1238888B</h4>
                                                    </div>
                                                </div>
                                                <div className='billDescription'>
                                                    <div className='billFlex'>
                                                        <div className='descriptLeft'>
                                                            <h4 className='billHeading'> Add item description for service or equipment</h4>
                                                            <h4 className='locateLightText mt-1'>Add observations  </h4>
                                                        </div>
                                                        <div className='descriptRight'>
                                                            <h4 className='LocateSubText'>00</h4>
                                                            <h4 className='LocateSubText'>$0000</h4>
                                                        </div>
                                                    </div>
                                                    <div className='billFlex'>
                                                        <div className='descriptLeft'>
                                                            <h4 className='billHeading'> Add item description for service or equipment</h4>
                                                            <h4 className='locateLightText mt-1'>Add observations  </h4>
                                                        </div>
                                                        <div className='descriptRight'>
                                                            <h4 className='LocateSubText'>00</h4>
                                                            <h4 className='LocateSubText'>$0000</h4>
                                                        </div>
                                                    </div>
                                                    <div className='billFlex'>
                                                        <div className='descriptLeft'>
                                                            <h4 className='billHeading'> Add item description for service or equipment</h4>
                                                            <h4 className='locateLightText mt-1'>Add observations  </h4>
                                                        </div>
                                                        <div className='descriptRight'>
                                                            <h4 className='LocateSubText'>00</h4>
                                                            <h4 className='LocateSubText'>$0000</h4>
                                                        </div>
                                                    </div>
                                                    <div className='billFlex'>
                                                        <div className='descriptLeft'>
                                                            <h4 className='billHeading'> Add item description for service or equipment</h4>
                                                            <h4 className='locateLightText mt-1'>Add observations  </h4>
                                                        </div>
                                                        <div className='descriptRight'>
                                                            <h4 className='LocateSubText'>00</h4>
                                                            <h4 className='LocateSubText'>$0000</h4>
                                                        </div>
                                                    </div>
                                                    <div className='billSubtotal'>
                                                        <div className='billSubArea'>
                                                            <h4 className='LocateSubText'>Subtotal</h4>
                                                            <h4 className='LocateSubText'>$0000</h4>
                                                        </div>
                                                        <div className='billSubArea'>
                                                            <h4 className='LocateSubText'>Tax</h4>
                                                            <h4 className='LocateSubText'>$0000</h4>
                                                        </div>
                                                        <div className='billSubArea'>
                                                            <h4 className='LocateSubText'>Total</h4>
                                                            <h4 className='LocateSubText'>$0000</h4>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className='paymentCondition'>
                                                    <div className='paymentBx'>
                                                        <h4 className='billHeading'>Payment</h4>
                                                        <h4 className='LocateSubText mt-2'>By Bank</h4>
                                                        <h4 className='LocateSubText'>London State Bank</h4>
                                                        <h4 className='LocateSubText'>LN34 00 1258 99 6874 15587</h4>
                                                    </div>
                                                    <div className='conditionBx'>
                                                        <h4 className='billHeading'>Conditions</h4>
                                                        <p className='LocateSubText mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                            elit,.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='locationAdd'>
                                <button type='button' className='locationAddBtn'>
                                    <Image src={Images.plusBtn} alt="plusBtn image " className="img-fluid" />
                                </button>
                                <button type='button' className='locationAddBtn'>
                                    <Image src={Images.minusBtn} alt="plusBtn image " className="img-fluid" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaffLocation