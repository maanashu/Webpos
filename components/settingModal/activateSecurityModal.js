import { useState } from "react";
import styles from "../../pages/settings/styles.module.css";
import Image from "next/image";
import * as Images from "../../utilities/images";
import { useDispatch, useSelector } from "react-redux";
import { getSecurityScanerCode, settingInfo } from "../../redux/slices/setting";
import { useRouter } from "next/router";

const ActivateSecurity = (props) => {
    const settingData = useSelector(settingInfo)
    const dispatch = useDispatch();
    const router = useRouter();

//  Apply API for get Security Scaner code and open Security Scaner code modal
    const activateTwoStepSecurity = (flag) => {
        props?.handleModalChange(flag)
        dispatch(getSecurityScanerCode({
            cb(res) {
                if (res.status) {
                    props.getSecurityScanerInfo(res?.data?.payload?.qrCode ? res?.data?.payload?.qrCode : "")
                }
            },
        })
        );
    };

    return (
        <>
            <div className="m-4">
                <div className={styles.modalTitleStyle}>Enable 2-Steps Security</div>
                <div className={styles.descriptionTextStyle}>
                    Step 1. Download Google Authenticator from the Google Play Store or
                    the iOS App Store.
                </div>
                <div className={styles.box}>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
                        target="_blank" // Opens the link in a new tab/window
                        rel="noopener noreferrer" // Security best practice when using target="_blank"
                    >
                        <div>Download Google Authenticator</div>
                    </a>
                </div>
                <div
                    style={{
                        justifyContent: "space-between",
                        display: "flex",
                        marginTop: "20px",
                    }}
                    className="mb-5"
                >
                    <button className="getQRCode nextverifyBtn w-10"
                        onClick={() => props?.close()}
                    >
                        I will do it later
                    </button>
                    {settingData.loading ?
                        <button className='nextverifyBtn w-10' type='button' disabled>
                            <span className="spinner-border spinner-border-sm"></span>
                        </button> :
                        <button className='nextverifyBtn w-10' type='button' onClick={() => activateTwoStepSecurity("GetSecurityScaner")} >
                            Activate it
                        </button>
                    }
                </div>
            </div>
        </>


    )
}


export default ActivateSecurity