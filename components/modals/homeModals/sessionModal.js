import React from 'react'
import * as Images from "../../../utilities/images";
import Image from "next/image";

const SessionModal = () => {
    return (
        <>
            <div className='trackingSection'>
                <div className='trackingSub'>
                    <figure className='profileImage '>
                        <Image src={Images.trackingImage} alt="trackingImage" className="img-fluid " />
                    </figure>
                    <h4 className='loginheading'> Start Tracking Session </h4>
                    <h4 className='trackingHeading'>Count Cash in Drawer </h4>
                </div>
                <form className='trackingForm'>
                    <h4 className='amountText'>Amount Counted</h4>
                    <div className='inputSelect mt-2'>
                        <input className="form-control trackingInput" type="text" placeholder=" $  500.00" />
                        <select name="cars" id="cars" className='trackingSelect'>
                            <option value="volvo">USD</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <p className='loginSub'>This is a hint text to help user.</p>
                    <div className='textAreaSection'>
                        <textarea class="form-control textControl" id="exampleFormControlTextarea1" rows="2" placeholder=''>Cash cut-off before rush hour-
                            checked by Eugenia.</textarea>
                        <Image src={Images.commentBox} alt="commentBox Image" className="img-fluid commentImg" />
                    </div>
                    <div className='verifyBtn mt-4'>
                        <button className='nextverifyBtn w-100' type='submit'>
                        Start Session
                            <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SessionModal