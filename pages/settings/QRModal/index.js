import { useEffect } from "react";
import { Modal } from "react-bootstrap";

export default function QRModal({ show, onHide, onClick }) {
  // useEffect(() => {
  //   alert("lllllllllllllllllllll");
  // }, []);

  return (
    <Modal
      style={{ borderWidth: 0, top: "30%", padding: 20 }}
      show={show}
      onHide={onHide}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: 24,
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div>
          <div>Enable 2-Steps Security</div>
          <div>Step 2. Scan the code to activate Google Authenticator</div>
        </div>
        <div>kiwhduw</div>
      </div>
      <button onClick={onClick}>smdswnd</button>
    </Modal>
  );
}
