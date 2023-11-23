import React, { useEffect } from 'react'
import Image from "next/image";
import * as Images from "../../utilities/images";
import { useRouter } from 'next/router';


const SuccessVerify = () => {
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/auth/login")
        }, 2000);
        return () => clearTimeout(timer);
    }, [])
    return (
        <>
            <div className='verificationSection verifySuccess'>
                <div className='verifyBox'>
                    <figure className='successImg'>
                        <Image src={Images.SuccessTick} alt="tickImage" className="img-fluid" />
                    </figure>
                    <h1 className='verifyHeading'>Successfully <br />verified</h1>
                </div>
            </div>
        </>
    )
}

export default SuccessVerify