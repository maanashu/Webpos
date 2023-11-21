import React, { useState } from 'react'
import CustomModal from '../components/customModal/CustomModal';
import Link from 'next/link';
import Image from "next/image";
import * as Images from "../utilities/images";
import SignUpModal from './signUpModal';

const AfterHeader = () => {
  const [key, setKey] = useState(Math.random());
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });
  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };
  return (
    <>
      <header className='afterHeader'>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/">
                <Image src={Images.logo} alt="img" />
              </Link>


              <div className="loginBtnCon">

                <button className="signUpBtn"
                  onClick={() => {
                    setModalDetail({ show: true, flag: "earlyModal" });
                    setKey(Math.random());
                  }}
                >Sign Up</button>
              </div>

            </div>
          </nav>
        </div>
      </header>
      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={false}
        mediumWidth={false}
        //   className={modalDetail.flag === "AddProductModal" ? "customContent commonWidth" : ""}
        ids={modalDetail.flag === "earlyModal" ? "earlyModal" : ""}
        size={modalDetail.flag === "earlyModal" ? "md" : "lg"}
        child={
          modalDetail.flag === "earlyModal" ? (
            <SignUpModal close={() => handleOnCloseModal()} />
          ) :
            ""
        }
        header={
          <>
            {/* <div className='modalHeader_'> */}
            <h2 className="modalHeading mb-0">
              Sign up
            </h2>
            <button className="closeButton">
              <Image src={Images.crossIcon} alt="img" onClick={() => handleOnCloseModal()} />
            </button>
            {/* <button className='primaryBtn'>Add to Cart</button> */}

            {/* </div> */}
          </>
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  )
}

export default AfterHeader