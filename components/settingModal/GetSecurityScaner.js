import { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { settingInfo } from "../../redux/slices/setting";
import { useRouter } from "next/router";

const GetSecurityScanerCode = (props) => {
    const settingData = useSelector(settingInfo)
    const router = useRouter();

    // function used for open Security Verification modal
    const handleSecurityVerification = (flag) => {
        props?.handleModalChange(flag)
    };

    return (
        <>
            <div>
                <div style={{
                    backgroundColor: "#FFFFFF",
                    padding: 24,
                    flexDirection: "row",
                    display: "flex",
                }}>
                    <div>
                        <div>Enable 2-Steps Security</div>
                        <div>Step 2. Scan the code to activate Google Authenticator</div>
                    </div>
                    {settingData.loading ?
                        <span colSpan="6" style={{ textAlign: "center" }}>
                            Loading...
                        </span>
                        :
                        <div>
                            <Image src={props?.getSecurityScnerCode} alt="img" width="150" height="150" />
                        </div>}
                </div>

                <div className='verifyBtn mb-5 m-3'>
                    <button className='nextverifyBtn w-50' type='button' onClick={() => { router.back() }}>
                        Back
                    </button>

                    {/* {settingData.loading ?
                        <button className='nextverifyBtn w-50' type='button' disabled>
                            <span className="spinner-border spinner-border-sm"></span>
                        </button> : */}
                    <button className='nextverifyBtn w-50' type='button' onClick={() => { handleSecurityVerification("SecurityVerification") }} >
                        Next
                    </button>
                    {/* } */}
                </div>
            </div>
        </>
    )
}
export default GetSecurityScanerCode