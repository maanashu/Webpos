import { useState } from "react";
import styles from "./styles.module.css";
import CustomModal from "../../../components/customModal/CustomModal";
import { Modal } from "react-bootstrap";
import QRModal from "../QRModal";
import { getSecurityScanerCode } from "../../../redux/slices/setting";
import { useDispatch } from "react-redux";

export default function Security() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [qrcodeModal, setQrCodeModal] = useState();
  const ModalComponent = ({ onClose }) => {

    const activateTwoStepSecurity = () => {
      setQrCodeModal(!qrcodeModal);
      setShowModal(false);
      // let params = {
      //   seller_id: UniqueId,
      // };
      dispatch(getSecurityScanerCode({
        // ...params,
        cb(res) {
          if (res.status) {
          }
        },
      })
      );
    };

    return (
      <div
        style={{
          padding: "24px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderWidth: 0,
          boxShadow:
            "-2.529px 6.008px 6.519px 0px rgba(52, 79, 117, 0.03), -11.954px 28.402px 25.481px 0px rgba(52, 79, 117, 0.04), -31.035px 73.735px 80px 0px rgba(52, 79, 117, 0.07)",
        }}
      >
        {/* Your modal content */}
        <div className={styles.modalTitleStyle}>Enable 2-Steps Security</div>
        <div className={styles.descriptionTextStyle}>
          Step 1. Download Google Authenticator from the Google Play Store or
          the iOS App Store.
        </div>
        <div className={styles.box}>
          <a
            href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
            target="_blank" // Opens the link in a new tab/window
            rel="noopener noreferrer" // Security best practice when using target="_blank"
          >
            <div>Download Google Authenticator</div>
          </a>
        </div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
            onClick={() =>toggleModal()}
          >
            I will do it later
          </button>
          <button onClick={() => activateTwoStepSecurity()}>Activate it</button>
        </div>
      </div>
    );
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal2 = () => {
    setQrCodeModal(!qrcodeModal);
    setShowModal(false);
  };
  return (
    <div style={{ padding: "30px", flex: 1 }}>
      <div className={styles.headingTextStyle}>2-Step Verification</div>
      <div className={styles.textInformationStyle}>
        An extra layer to boost your team members account security. A
        verification code will be required in addition to password each time you
        sign in.
      </div>
      <div className={styles.shadowBox}>
        <div className={styles.boxTopTitleTextStyle}>
          2-step verification for team members
          <div onClick={toggleModal}>
            <input type="checkbox"
              onClick={toggleModal} />
          </div>
        </div>
        <div className={styles.boxbottomTextStyle}>
          Team members must enable their own verification methods.
        </div>
      </div>
      {showModal && (
        <Modal
          style={{ borderWidth: 0, top: "30%" }}
          show={showModal}
          onHide={toggleModal}
        >
          <ModalComponent />
        </Modal>
      )}
      {qrcodeModal && <QRModal onClick={toggleModal2} show={qrcodeModal} />}
    </div>
  );
}
