import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";

const ShippingPickup = () => {
  return (
    <>
      <div className='settingOuter shippingRight'>
        <div className='localPickupBx'>
          <Image src={Images.pickupImg} alt="pickupImg image" className="img-fluid" />
          <div className='localSubPickup w-100'>
            <h4 className='appointMain'>Local Pickup</h4>
            <p className='lightOfferText mt-1'>You need to provide some additional information to start receiving payouts from Shopify Payments.</p>
            <div className='georgiaBox'>
              <div className='operatingCountry'>
                <Image src={Images.locateOuline} alt="pickupImg image" className="img-fluid" />
                <div className='georgiaSubBox'>
                  <h4 className='cancelOrderText'>Georgia Inc</h4>
                  <p className='orderPara'>1899 Rollins Road, Grand Island Nebraska 68801, United States</p>
                </div>
              </div>
              <div className="roundCheck mb-0 darkCheck">
                <input type="checkbox" />
                <label className='amountText d-none '></label>
              </div>
            </div>
            <div className='georgiaBox'>
              <div className='operatingCountry'>
                <Image src={Images.locateOuline} alt="pickupImg image" className="img-fluid" />
                <div className='georgiaSubBox'>
                  <h4 className='cancelOrderText'>Georgia Inc</h4>
                  <p className='orderPara'>1899 Rollins Road, Grand Island Nebraska 68801, United States</p>
                </div>
              </div>
              <div className="roundCheck mb-0 darkCheck">
                <input type="checkbox" />
                <label className='amountText d-none '></label>
              </div>
            </div>
          </div>
        </div>
        <div className='localPickupBx'>
          <Image src={Images.postMotor} alt="pickupImg image" className="img-fluid" />
          <div className='localSubPickup w-100'>
            <h4 className='appointMain'>JOBR Delivery</h4>
            <p className='lightOfferText mt-1'>You need to provide some additional information to start receiving payouts from Shopify Payments.</p>
            <div className='georgiaBox'>
              <div className='operatingCountry'>
                <Image src={Images.locateOuline} alt="pickupImg image" className="img-fluid" />
                <div className='georgiaSubBox'>
                  <h4 className='cancelOrderText'>Georgia Inc</h4>
                  <p className='orderPara'>1899 Rollins Road, Grand Island Nebraska 68801, United States</p>
                </div>
              </div>
              <div className="roundCheck mb-0 darkCheck">
                <input type="checkbox" />
                <label className='amountText d-none '></label>
              </div>
            </div>
          </div>
        </div>
        <div className='localPickupBx'>
          <Image src={Images.deliverHandDark} alt="pickupImg image" className="img-fluid" />
          <div className='localSubPickup w-100'>
            <h4 className='appointMain'>Local Drop-off</h4>
            <p className='lightOfferText mt-1'>You need to provide some additional information to start receiving payouts from Shopify Payments.</p>
            <div className='georgiaBox'>
              <div className='operatingCountry'>
                <Image src={Images.locateOuline} alt="pickupImg image" className="img-fluid" />
                <div className='georgiaSubBox'>
                  <h4 className='cancelOrderText'>Georgia Inc</h4>
                  <p className='orderPara'>1899 Rollins Road, Grand Island Nebraska 68801, United States</p>
                </div>
              </div>
              <div className="roundCheck mb-0 darkCheck">
                <input type="checkbox" />
                <label className='amountText d-none '></label>
              </div>
            </div>
          </div>
        </div>
        <div className='localPickupBx'>
          <Image src={Images.PlaneDark} alt="pickupImg image" className="imgSize" />
          <div className='localSubPickup w-100'>
            <h4 className='appointMain'>Shipping</h4>
            <p className='lightOfferText mt-1'>You need to provide some additional information to start receiving payouts from Shopify Payments.</p>
            <div className='georgiaBox'>
              <div className='operatingCountry'>
                <Image src={Images.locateOuline} alt="pickupImg image" className="img-fluid" />
                <div className='georgiaSubBox'>
                  <h4 className='cancelOrderText'>Georgia Inc</h4>
                  <p className='orderPara'>1899 Rollins Road, Grand Island Nebraska 68801, United States</p>
                </div>
              </div>
              <div className='shippSub'>
                <div className='dhlConnect'>
                  <Image src={Images.shipDhl} alt="pickupImg image" className="dhlImg" />
                  <h6 className='amountText m-0'>DHL Connected</h6>
                </div>
                <div className="roundCheck mb-0 darkCheck">
                  <input type="checkbox" />
                  <label className='amountText d-none '></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShippingPickup