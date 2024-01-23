import React, { useState } from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";
import AddlanguageModal from './addlanguageModal';
import CustomModal from "../../../components/customModal/CustomModal";

const Language = () => {
    const [key, setKey] = useState(Math.random());
    const [modalDetail, setModalDetail] = useState({
        show: false,
        title: "",
        flag: "",
    });

    //closeModal
    const handleOnCloseModal = () => {
        setModalDetail({
            show: false,
            title: "",
            flag: "",
        });
        setKey(Math.random());
    };

    const handleUserProfile = (flag) => {

        setModalDetail({
            show: true,
            flag: flag,
            type: flag,
        });
        setKey(Math.random());
    };


    return (
        <>
            <div className='settingOuter languageRight'>
                <Image src={Images.darkDevices} alt="darkDevices image" className="img-fluid" />
                <div className='bussinessData'>
                    <h4 className='appointMain'>Published Languages</h4>
                    <p className='lightOfferText mt-2'>Active in the markets they've been added to and visible to customers.</p>
                    <div className='languageMain mt-4'>
                        <div className="taxCountryMain mb-3">
                            <div className="operatingCountry">
                                <Image src={Images.countryImg} className="countryImg" alt="countryImage" />
                                <div className="countryText">
                                    <h4 className="cancelOrderText">English (USA)</h4>
                                    <h4 className="settingText mt-1">Default</h4>
                                </div>
                            </div>
                            <div className="roundCheck mb-0">
                                <input type="checkbox" />
                                <label className='amountText d-none '></label>
                            </div>
                        </div>
                        <div className="taxCountryMain mb-3">
                            <div className="operatingCountry">
                                <Image src={Images.lang1} className="countryImg" alt="countryImage" />
                                <div className="countryText">
                                    <h4 className="cancelOrderText">French (CA)</h4>
                                    <h4 className="settingText mt-1">Default</h4>
                                </div>
                            </div>
                            <div className="roundCheck mb-0">
                                <input type="checkbox" />
                                <label className='amountText d-none '></label>
                            </div>
                        </div>
                        <div className="taxCountryMain mb-3">
                            <div className="operatingCountry">
                                <Image src={Images.lang2} className="countryImg" alt="countryImage" />
                                <div className="countryText">
                                    <h4 className="cancelOrderText">Spanish (SPA)</h4>
                                    <h4 className="settingText mt-1">Default</h4>
                                </div>
                            </div>
                            <div className="roundCheck mb-0">
                                <input type="checkbox" />
                                <label className='amountText d-none '></label>
                            </div>
                        </div>
                        <div className="taxCountryMain mb-3">
                            <div className="operatingCountry">
                                <Image src={Images.lang3} className="countryImg" alt="countryImage" />
                                <div className="countryText">
                                    <h4 className="cancelOrderText">Portuguese (POR)</h4>
                                    <h4 className="settingText mt-1">Default</h4>
                                </div>
                            </div>
                            <div className="roundCheck mb-0">
                                <input type="checkbox" />
                                <label className='amountText d-none '></label>
                            </div>
                        </div>
                        <div className='addlanguage_ mt-4 pt-2'>
                            <button className='addlangueBtn_' onClick={() => { handleUserProfile("addlanguageModal") }}>  <Image src={Images.addDark} className="countryImg me-3" alt="countryImage" /> <span>Add language</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <CustomModal
                key={key}
                show={modalDetail.show}
                backdrop="static"
                showCloseBtn={false}
                isRightSideModal={true}
                mediumWidth={false}
                className={modalDetail.flag === "addlanguageModal" ? "commonWidth customContent" : ""}
                ids={modalDetail.flag === "addlanguageModal" ? "addlanguageModal" : ""}
                child={
                    modalDetail.flag === "addlanguageModal" ? (
                        <AddlanguageModal
                            close={() => handleOnCloseModal()}
                        />
                    ) :

                        ""
                }
                header=
                {modalDetail.flag === "addlanguageModal" ?
                    <>
                        <Image src={Images.languageIcon} className="languageImg mb-2" alt="languageImage" />
                        <h4 className='appointMain'>Add a language</h4>
                        <p className="activateText mt-2">Select one or more languages to add</p>

                    </>
                    :
                    ''
                }
                onCloseModal={() => handleOnCloseModal()}
            />
        </>
    )
}

export default Language
