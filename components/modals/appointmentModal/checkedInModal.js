import React from 'react'
import * as Images from "../../../utilities/images"
import Image from 'next/image'

const checkedInModal = () => {

  return (

    <div className='checkedInSec verifySuccess'>
      <div className='verifyBox'>
        <figure className='successImg'>
          <Image src={Images.checkedImages} alt="checkedImage" className="img-fluid " />
        </figure>
        <h1 className='verifyHeading'>Checked In</h1>
        <h6 className='fontEighteen text-center mt-2'>Successfully confirmed</h6>
      </div>
    </div>

  )
}

export default checkedInModal