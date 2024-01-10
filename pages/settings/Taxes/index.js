import styles from "./styles.module.css";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { settingInfo, updateSettings } from "../../../redux/slices/setting";
import CustomModal from "../../../components/customModal/CustomModal";
import TaxPayerModal from "../../../components/settingModal/taxPayerModal";
import { useState } from "react";

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
            <h4 className="cancelOrderText">Charles Reineer</h4>
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
        className={modalDetail.flag === "taxPayer" ? "commonWidth customContent" : ""}
        ids={modalDetail.flag === "taxPayer" ? "taxPayerModal" : ""}
        child={
          modalDetail.flag === "taxPayer" ? (
            <TaxPayerModal
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
          ''
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};
export default Taxes;
