import React from 'react'
import * as Images from "../../../../utilities/images";
import Image from "next/image";

const JobrWalletModal = () => {
  return (
    <>
      <div className='jobrWalletSection'>
        <div className='walletLeftModal'>
          <Image src={Images.walletCoin} alt='walletCoin Image' className='img-fluid' />
          <h4 className='payHeading'>Scan to Pay</h4>
          <div className='JbrAmount'>JBR 35,000</div>
          <h4 className='payHeading mt-0'>$350.00 USD</h4>
          <Image src={Images.scanner} alt='scanner Image' className='img-fluid scannerImg' />
        </div>
        <div className='walletRightModal'>
          <Image src={Images.customerWallet} alt='wallet image' className='walletImg_' />
          <p className='payHeading'>Or send the payment request to your JOBR wallet:</p>
          <form className='walletForm text-start '>
            <div className='walletField'>
              <label className="form-label amountText m-0 text-start">Wallet Number</label>
              <div className='phoneIcon mt-1'>
                <input className="form-control walletControl" type="number" placeholder="3 3 9    4  5  5    0 2 0 0" />
                <Image src={Images.Wallets} alt="mailbox image" className="img-fluid lockImg" />
              </div>
            </div>
            <div className='addCustomerBtn mt-4 walletModalBtn'>
              <button className='serviceCancel' type='submit'>
                Cancel
              </button>
              <button className='nextverifyBtn ' type='submit'>
                Send Request
              </button>
              <button className='eReciptBtn d-none' type='submit'>
                Request Sent
                <Image src={Images.btnTick} alt="btnTick image" className="img-fluid ms-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default JobrWalletModal