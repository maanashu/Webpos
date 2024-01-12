import styles from "./styles.module.css";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { settingInfo, updateSettings } from "../../../redux/slices/setting";
import CustomModal from "../../../components/customModal/CustomModal";
import TaxPayerModal from "../../../components/settingModal/taxPayerModal";
import { useState } from "react";
import CreatetaxModal from "../../../components/settingModal/createtaxModal";

const Taxes = () => {
  const dispatch = useDispatch();
  const receiptSettings = useSelector(settingInfo);
  const userSettings = receiptSettings?.getSettings;
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
      <div className="settingOuter taxRight">
        <h4 className="appointMain">Taxes and duties</h4>
        <p className="lightOfferText mt-2">
          If you haven’t already, create a shipping zone in the region(s)
          you’re liable in. Then, find the region in this list and select it
          to manage its tax settings. If you’re unsure about where you’re
          liable, check with a tax professional.
        </p>
        <div className="activateMain">
          <h4 className="cancelOrderText">Active Tax Payer Information</h4>
          <button className="blueActiveBtn" type="button" onClick={() => {
            handleUserProfile("taxPayer")
          }}>Activate</button>
        </div>
        <div className="taxVerifySection">
          <div className="taxverifyLeft">
            <h4 className="cancelOrderText mb-4">Charles Reineer</h4>
            <h5 className="blueHeading_ mb-3 ps-2">SSN: ●●●●  ●●●●  ●●●●  3498</h5>
            <h5 className="blueHeading_ ps-2">3755 Williams Mine Road, Newark, Nj07102</h5>

          </div>
          <div className="taxverifyRight">
            <button className="verifyButton_">Verified <Image
              src={Images.checkverify}
              alt="image"
              className="img-fluid verifyimg"
            /></button>
          </div>
        </div>
        <div className="countryBox_">
          <div className='bussinessSub'>
            <div className='locationHead'>
              <Image src={Images.countryflag} alt="staffLocate image" className="img-fluid" />
              <div className='bussinessHeading'>
                <h4 className='cancelOrderText'>Operating Country</h4>
                <p className='settingText'>United States</p>
              </div>
            </div>
            <div className="roundCheck mb-0">
              <input type="checkbox" />
              <label className='amountText '></label>
            </div>
          </div>
          <div className="smallCountry">
            <div className='bussinessSub'>
              <div className='locationHead'>
                <Image src={Images.countryflag1} alt="staffLocate image" className="img-fluid" />
                <div className='bussinessHeading'>
                  <h4 className='cancelOrderText'>Miami, FL</h4>
                  <p className='settingText'>1899 Rollins Road, Grand Island Nebraska 68801, United States</p>
                </div>
              </div>
              <div className="roundCheck mb-0">
                <div className="checkinput d-none">
                <input type="checkbox" />
                <label className='amountText '></label></div>
                <button className="blueActiveBtn " type="button" >Activate</button>
              </div>
            </div>
          </div>
          <button className="createTaxbtn_ mt-4" type="submit" onClick={() => {
            handleUserProfile("createtaxModal")
          }}>Create Tax <Image src={Images.editimg}/></button>

        </div>
      </div>
      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        className={modalDetail.flag === "taxPayer" ? "commonWidth customContent" : modalDetail.flag === "createtaxModal" ? "commonWidth customContent" :""}
        ids={modalDetail.flag === "taxPayer" ? "taxPayerModal" : modalDetail.flag === "createtaxModal" ? "createtaxModal" :""}
        child={
          modalDetail.flag === "taxPayer" ? (
            <TaxPayerModal
              close={() => handleOnCloseModal()}
            />
          ) :
          modalDetail.flag === "createtaxModal" ? (
            <CreatetaxModal
              close={() => handleOnCloseModal()}
            />
          ) :
            ""
        }
        header=
        {modalDetail.flag === "taxPayer" ?
          <>
            <h4 className='appointMain'>Tax Payer Information</h4>
          </>
          :
          modalDetail.flag === "createtaxModal" ?
          <>
            <h4 className='appointMain'>Create a Tax</h4>
          </>
          :
          
          ''
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};
export default Taxes;
