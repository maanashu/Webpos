import React, { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CustomModal from "../../customModal/CustomModal";
import CashSummary from "./cashSummary";
import {
  getExpectedCashByDrawerId,
  selectCashDrawerData,
} from "../../../redux/slices/cashDrawer";


const EndCashModal = ({  }) => {
  const dispatch = useDispatch();
  const sessionData = useSelector(selectCashDrawerData);
  const drawerSessionDetail = sessionData?.drawerSession?.payload;
  // const expectedCash = sessionData?.expectedCashByDrawerId;

  const digits = /^[0-9]+$/;
  const [key, setKey] = useState(Math.random());
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");

  const [modalDetail, setModalDetail] = useState({show: false});

  const handleShowModal = () => {
    setModalDetail({show: true});
    setKey(Math.random());
  };

  const handleOnCloseModal = () => {
    setModalDetail({show: false});
    setKey(Math.random());
  };

  const countCashFirst = async () => {
    if (amount && digits.test(amount) === false) {
      toast.error("Please enter amount");
    } else if (amount <= 0) {
      toast.error("Please enter valid amount");
    } else {
      // await dispatch(getExpectedCashByDrawerId(drawerSessionDetail?.id));
      setIsLoading(true);
      dispatch(
        getExpectedCashByDrawerId({
          drawer_session_id: drawerSessionDetail?.id,
          cb(res) {
            if (res.status) {
              handleShowModal();
              setTimeout(() => {
                setIsLoading(false);
              }, 200);
            }
            else {
              setIsLoading(false);
            }
          },
        })
      );
    }
  };

  return (
    <>
      <div className="trackingSection">
        <div className="trackingSub">
          <figure className="profileImage ">
            <Image
              src={Images.salesTracking}
              alt="trackingImage"
              className="img-fluid"
              height={50}
              width={50}
            />
          </figure>
          <h6 className="loginheading px-5">End Cash Tracking Session</h6>
          {/* <h4 className="trackingHeading">Enter amount </h4> */}
        </div>
        <form className="trackingForm">
          <h3 className="amountText">Enter Amount</h3>
          <div className="inputSelect mt-2">
            <input
              type="number"
              className="form-control trackingInput"
              // name={generateRandomName}
              // autoComplete="new-password"
              placeholder="$0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="verifyBtn mt-4">
            <button
              className="nextverifyBtn w-100"
              type="button"
              onClick={() => {!isLoading ? countCashFirst() : false} }
            >
              {isLoading ? <span className="spinner-border spinner-border-sm"></span> : 
                <>
                  Next
                  <Image
                    src={Images.ArrowRight}
                    alt="rightArrow"
                    className="img-fluid rightImg"
                  />
                </>
              }
            </button>
          </div>
        </form>
      </div>

      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        ids={"trackingModal"}
        child={
          <CashSummary
            amount={amount}
            close={() => handleOnCloseModal()}
          />
        }
        header={
          <p onClick={handleOnCloseModal} className="modal_cancel">
            <Image
              src={Images.modalCross}
              alt="modalCross"
              className="img-fluid"
            />
          </p>
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};

export default EndCashModal;
