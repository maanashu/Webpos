import React from 'react'
import * as Images from "../../../../utilities/images";
import Image from "next/image";

const DetailModal = () => {
    return (
        <>
            <div className='detailModalSection'>
                <div className="detailSubBox">
                    <Image
                        src={Images.AlertCircle}
                        alt="image"
                        className="img-fluid productOverImg"
                        width="100" height="100"
                    />
                    <div className='detailSubRight'>
                        <h5 className="linkHeading m-0 text-start">vitamin products</h5>
                        <h5 className="loginSub text-start ">vitamin Product Descriptions value </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailModal