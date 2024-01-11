import styles from "./styles.module.css";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { settingInfo, updateSettings } from "../../../redux/slices/setting";
import CustomModal from "../../../components/customModal/CustomModal";

const Taxes = () => {
  const dispatch = useDispatch();
  const receiptSettings = useSelector(settingInfo);
  const userSettings = receiptSettings?.getSettings;

  return (
    <>
      <div style={{ padding: "30px", flex: 1 }}>
        <div>
          <div className={styles.headingTextStyle}>My receipts</div>
          <div className={styles.textInformationStyle}>
            If you haven’t already, create a shipping zone in the region(s)
            you’re liable in. Then, find the region in this list and select it
            to manage its tax settings. If you’re unsure about where you’re
            liable, check with a tax professional.
          </div>

          <div style={{ marginTop: 30 }} />

          <div className={styles.shadowBox}>
            <div className={styles.rowJustified}>
              <div className={styles.boxTopTitleTextStyle}>
                Active Tax Payer Information
              </div>
              <button style={{ border: 0, backgroundColor: "white" }}>
                <div className={styles.activateButtonStyle}>Activate</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        key={1}
        show={false}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        className={"commonWidth customContent"}
        ids={"AddEmployee"}
        child={() => (
          <div className={styles.addEmployeeModal}>sgsdagasgegtwaetrhea</div>
        )}
        header={
          <div
            className="modalHeader_ mainheader-modal {
            display: inline-block;
            width: 100%;
        }"
          >
            Tax Payer Information
          </div>
        }
        // onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};
export default Taxes;
