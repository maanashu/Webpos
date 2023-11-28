import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";

const AddProduct = () => {
    return (
        <>
            <div className='form-group mb-3'>
                <input className="form-control customInput" type="text" placeholder="Product Name" />
            </div>
            <div className='form-group mb-3'>
                <input className="form-control customInput" type="text" placeholder="$0.00USD" />
            </div>
            <div className='form-group mb-3'>
                <Image src={Images.commentText} alt="img" className="InputIcon" />
                <textarea className='customTextarea' placeholder='Add Notes'></textarea>
            </div>
        </>
    )
}

export default AddProduct