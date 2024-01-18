import { Modal } from "react-bootstrap";
import React, { useState } from "react";

const CustomModal = (props) => {
  const [show, setShow] = useState(props.show);

  const handleClose = () => {
    setShow(false);
    if (props.onCloseModal) {
      props.onCloseModal();
    }
  };

  const bodyClasses = props.bodyClasses ? props.bodyClasses : "";
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop={props?.backdrop}
      keyboard={false}
      centered
      id={props.ids}
      size={props.size}
      dialogClassName={props.isRightSideModal ? "modal-dialog-slideout" : ""}
      // className={props?.isRightSideModal ? 'pe-0' : props?.checkoutModal ? 'checkout_modal' : props?.mediumWidth ? 'mediumwidth_modal' : props?.walletModal ? 'wallet_modal' : props?.Walletauthen ? 'walletauthenModal' :""}
      className={props.className}
      animation={true}
    >
      {props.title || props.showCloseBtn || props?.header ? (
        <>
          {props?.showCloseBtn ? (
            <Modal.Header closeButton>
              {props?.header}
              {props.title ? <Modal.Title>{props.title}</Modal.Title> : ""}
            </Modal.Header>
          ) : (
            <Modal.Header>
              {props?.header}
              {props.title ? <Modal.Title>{props.title}</Modal.Title> : ""}
            </Modal.Header>
          )}
        </>
      ) : (
        ""
      )}
      {/* <Modal.Body className={props.isRightSideModal ? "p-0" : ""}> */}
      <Modal.Body
        className={
          props.isRightSideModal ? `p-0 ${bodyClasses}` : `${bodyClasses}`
        }
      >
        {props.child}
      </Modal.Body>
      {props.footer ? (
        <Modal.Footer className={props.footerClasses}>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button> */}
          {props.footer}
        </Modal.Footer>
      ) : (
        ""
      )}
    </Modal>
  );
};

export default CustomModal;
