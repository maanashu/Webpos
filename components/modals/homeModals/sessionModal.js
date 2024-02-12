import React, { useState } from 'react'
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
// import { getDrawerSessionInfo } from '../../../redux/slices/dashboard';
import { getDrawerSession, updateDrawerSession } from "../../../redux/slices/cashDrawer";
import { toast } from 'react-toastify';
import { selectLoginAuth } from '../../../redux/slices/auth';

const SessionModal = (props) => {
    const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
    const dispatch = useDispatch();
    const toastId = React.useRef(null)
    const authData = useSelector(selectLoginAuth)
    const [amount, setAmount] = useState("");
    const [notes, setNotes] = useState("");
    const [drawerSessionDetails, setDrawerSessionDetails] = useState("");

    const UniqueId = authData?.usersInfo?.payload?.uniqe_id ? authData?.usersInfo?.payload?.uniqe_id : ""

    const startTrackingSession = (drawerId) => {
        let params = {
            drawer_id: drawerId,
            amount: Number(amount),
            transaction_type: "start_tracking_session",
            mode_of_cash: "cash_in"
        };

        dispatch(
            updateDrawerSession({
              ...params,
              cb(res) {
                if(res.status){
                    dispatch(getDrawerSession({seller_id: UniqueId}))

                    setAmount("")
                    setNotes("")
                    props.close()
                }
              }
            })
        );
    }

    // API for get Drawer Session Info...............................
    const drawerSessionInfo = () => {
        if (!amount) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please enter amount");
            }
            return;
        }
        // else if (!notes) {
        //     if (!toast.isActive(toastId.current)) {
        //         toastId.current = toast.error("Please enter note");
        //     }
        //     return
        // }
        let params = {
            seller_id: UniqueId,
            amount: amount,
            notes: notes
        };
        
        dispatch(getDrawerSession({
            ...params,
            cb(res) {
                if (res.status && res?.data?.payload?.id) {
                    startTrackingSession(res.data.payload.id);
                }
            },
        }))
    };

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
                        {/* <input className="form-control trackingInput" type="text" placeholder=" $  500.00" /> */}
                        <input
                            type="number"
                            className="form-control trackingInput"
                            // name={generateRandomName}
                            // autoComplete="new-password"
                            placeholder="0.00"
                            // value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            onKeyDown={blockInvalidChar}
                        />
                        {/* <select name="cars" id="cars" className='trackingSelect'>
                            <option value="usd">USD</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select> */}
                    </div>
                    <p className='loginSub'>This is a hint text to help user.</p>
                    <div className='textAreaSection'>
                        <textarea class="form-control textControl" id="exampleFormControlTextarea1" rows="2" placeholder='Please enter note' onChange={(e) => setNotes(e.target.value)}></textarea>
                        <Image src={Images.commentText} alt="commentBox Image" className="img-fluid commentImg" />
                    </div>
                    <div className='verifyBtn mt-4'>
                        <button className='nextverifyBtn w-100' type='button' onClick={() => { drawerSessionInfo() }}>
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