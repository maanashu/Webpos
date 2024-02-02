import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";

const EmailReceiptModal = () => {
    return (
        <>
            <div className='emailReceiptSection'>
                <form className='createCustomForm'>
                    <div className='emailField'>
                        <label className="form-label amountText m-0">E-mail Address</label>
                        <div className='phoneIcon'>
                            <input className="form-control verifyControl" type="email" placeholder="hello@email.com" />
                            <Image src={Images.mailBox} alt="mailbox image" className="img-fluid lockImg" />
                        </div>
                    </div>
                    <div className='addCustomerBtn mt-4 phoneReceiptBtn'>
                        <button className='serviceCancel ' type='submit'>
                            Cancel
                        </button>
                        <button className='nextverifyBtn ' type='submit'>
                            Send E-receipt
                        </button>
                        <button className='eReciptBtn d-none' type='submit'>
                            E-receipt sent
                            <Image src={Images.btnTick} alt="btnTick image" className="img-fluid ms-2" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EmailReceiptModal