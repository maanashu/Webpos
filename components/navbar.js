import React, { useEffect, useState } from 'react'
import * as Images from "../utilities/images";
import Image from "next/image";
import { useSelector } from 'react-redux';
import { selectLoginAuth } from '../redux/slices/auth';

const Navbar = () => {
  const authData = useSelector(selectLoginAuth)
  // const [token, setToken] = useState('')
  const token = authData?.posUserLoginDetails?.payload?.token
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setToken(localStorage.getItem('authToken'))
  //   }
  // }, [])

  return (
    <>
   
      <div className='headerSection'>
        {/* <div {...(!token && {className: 'container'})}> */}
        <div className={!token ? 'container':""}>
          <div className='row'>
            <div className='col-lg-6 col-md-6 d-flex align-items-center '>
              <div className='leftHeader'>
                <div className='timeNav'>
                  <Image src={Images.SunImg} alt="image" className="img-fluid" />
                  <h4 className='timeHeading'>12:24 pm</h4>
                </div>
                <h4 className='timeHeading'>Thursday, 12th October 2023</h4>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 d-flex justify-content-end align-items-center'>
              <h4 className='timeHeading'>POS Ni. <span>#Front-CC01</span></h4>
              <button className='navBtn'>Walk-in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar