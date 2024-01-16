import styles from "./styles.module.css";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { settingInfo, updateSettings } from "../../../redux/slices/setting";
import CustomModal from "../../../components/customModal/CustomModal";
import TaxPayerModal from "../../../components/settingModal/taxPayerModal";
import { useState } from "react";
import ActivateTax from "../../../components/settingModal/activateTax";
import CreateTaxModal from "../../../components/settingModal/createTaxModal";

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
          <button className="blueActiveBtn" type="button" onClick={() => { handleUserProfile("taxPayer") }}>Activate</button>
        </div>
        <div className="taxVerifySection">
          <div className="taxverifyLeft">
            <h4 className="cancelOrderText mb-3">Charles Reineer</h4>
            <span className="appointSub m-0">SSN: </span>
            <span className="amountText ms-1">●●●●  ●●●●  ●●●●  3498</span>
            <p className="appointSub mt-1">3755 Williams Mine Road, Newark, NJ 07102</p>
          </div>
          <button className='eReciptBtn' type='submit'>
            Verified
            <Image src={Images.btnTick} alt="btnTick image" className="ms-2 taxVerifyImg" />
          </button>
        </div>
        <div className="taxCountrySection">
          <div className="taxCountryMain">
            <div className="operatingCountry">
              <Image src={Images.countryImg} className="countryImg" alt="countryImage" />
              <div className="countryText">
                <h4 className="cancelOrderText">Operating Country</h4>
                <h4 className="settingText mt-1">United States</h4>
              </div>
            </div>
            <div className="roundCheck mb-0">
              <input type="checkbox" />
              <label className='amountText d-none '></label>
            </div>
          </div>
          <div className="taxCountrySub">
            <div className="taxCountryMain countryMainSub">
              <div className="operatingCountry">
                <Image src={Images.countryImg} className="countryImg" alt="countryImage" />
                <div className="countryText">
                  <h4 className="cancelOrderText">Miami, FL</h4>
                  <p className="orderPara">1899 Rollins Road, Grand Island Nebraska 68801, United States</p>
                </div>
              </div>
              <div className="roundCheck mb-0 d-none">
                <input type="checkbox" />
                <label className='amountText d-none '></label>
              </div>
              <button className="blueActiveBtn" type="button" onClick={() => { handleUserProfile("activateTax") }}>Activate</button>
            </div>
          </div>
          <button className="createTaxBtn" type="button" onClick={() => { handleUserProfile("createtax") }}>
            Create Tax
            <Image src={Images.editTax} alt="editTax image" className="ms-2 " />
          </button>
        </div>
        <div className="taxTableMain">
          <div className="taxDateArea">
            <div className='appointmenMonth cancelCalendar m-0'>
              <div className='flexTable'>
                <Image src={Images.calendarLight} alt='calendarimage' className='img-fluid' />
                <span className='monthText ms-2'>Today</span>
              </div>
              <Image src={Images.arrowDown} alt='arrowDown image' className='img-fluid text-end' />
            </div>
            <div className='areaselect w-100'>
              <select class="form-select" aria-label="Default select example" >
                <option selected>Area</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <table className="orderDeliverTable">
            <thead className='taxTableHead'>
              <tr>
                <th className='invoiceHeading '>#</th>
                <th className='invoiceHeading text-center'>Tax Name</th>
                <th className='invoiceHeading text-center'>Locations</th>
                <th className='invoiceHeading text-center'>Tax Rate</th>
                <th className='invoiceHeading text-end'>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className='taxRowTable'>
                <td className='taxSubHead'>
                  <h4 className="taxText">01</h4>
                </td>
                <td className='taxSubHead text-center'>
                  <h4 className="taxText">Sales</h4>
                </td>
                <td className='taxSubHead text-center'>
                  <h4 className="taxText">Miami, FL</h4>
                </td>
                <td className='taxSubHead text-center'>
                  <h4 className="taxText">6%</h4>
                </td>
                <td className='taxSubHead'>
                  <div className="roundCheck mb-0 justify-content-end">
                    <input type="checkbox" />
                    <label className='amountText d-none '></label>
                  </div>
                </td>
              </tr>
              <tr className='taxRowTable'>
                <td className='taxSubHead'>
                  <h4 className="taxText">01</h4>
                </td>
                <td className='taxSubHead text-center'>
                  <h4 className="taxText">Sales</h4>
                </td>
                <td className='taxSubHead text-center'>
                  <h4 className="taxText">Miami, FL</h4>
                </td>
                <td className='taxSubHead text-center'>
                  <h4 className="taxText">6%</h4>
                </td>
                <td className='taxSubHead'>
                  <div className="roundCheck mb-0 justify-content-end">
                    <input type="checkbox" />
                    <label className='amountText d-none '></label>
                  </div>
                </td>
              </tr>
              <tr className='taxRowTable'>
                <td className='taxSubHead'>
                  <h4 className="taxText">01</h4>
                </td>
                <td className='taxSubHead text-center'>
                  <h4 className="taxText">Sales</h4>
                </td>
                <td className='taxSubHead text-center'>
                  <h4 className="taxText">Miami, FL</h4>
                </td>
                <td className='taxSubHead text-center'>
                  <h4 className="taxText">6%</h4>
                </td>
                <td className='taxSubHead'>
                  <div className="roundCheck mb-0 justify-content-end">
                    <input type="checkbox" />
                    <label className='amountText d-none '></label>
                  </div>
                </td>
              </tr>
              <tr className='taxRowTable'>
                <td className='taxSubHead'>
                  <h4 className="taxText">01</h4>
                </td>
                <td className='taxSubHead text-center'>
                  <h4 className="taxText">Sales</h4>
                </td>
                <td className='taxSubHead text-center'>
                  <h4 className="taxText">Miami, FL</h4>
                </td>
                <td className='taxSubHead text-center'>
                  <h4 className="taxText">6%</h4>
                </td>
                <td className='taxSubHead'>
                  <div className="roundCheck mb-0 justify-content-end">
                    <input type="checkbox" />
                    <label className='amountText d-none '></label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
        ids={modalDetail.flag === "taxPayer" ? "taxPayerModal" : modalDetail.flag === "activateTax" ? "activateTaxModal" : modalDetail.flag === "createtax" ? "createModalTax" : ""}
        child={
          modalDetail.flag === "taxPayer" ? (
            <TaxPayerModal
              close={() => handleOnCloseModal()}
            />
          ) :
            modalDetail.flag === "activateTax" ? (
              <ActivateTax
                close={() => handleOnCloseModal()}
              />
            ) :
              modalDetail.flag === "createtax" ? (
                <CreateTaxModal
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
          modalDetail.flag === "activateTax" ?
            <>
              <h4 className='appointMain'>Activate your State Tax</h4>
              <p className="activateText mt-2">This will show in your financial reports</p>
            </>
            :
            modalDetail.flag === "createtax" ?
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
