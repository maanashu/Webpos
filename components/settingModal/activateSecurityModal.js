
import Image from "next/image";
import * as Images from "../../utilities/images";
import { useDispatch, useSelector } from "react-redux";
import { getSecurityScanerCode, settingInfo } from "../../redux/slices/setting";
import { useRouter } from "next/router";
import Link from "next/link";

const ActivateSecurity = (props) => {
  const settingData = useSelector(settingInfo);
  const dispatch = useDispatch();
  const router = useRouter();

  //  Apply API for get Security Scaner code and open Security Scaner code modal
  const activateTwoStepSecurity = (flag) => {
    props?.handleModalChange(flag);
    dispatch(
      getSecurityScanerCode({
        cb(res) {
          if (res.status) {
            props.getSecurityScanerInfo(
              res?.data?.payload?.qrCode ? res?.data?.payload?.qrCode : ""
            );
          }
        },
      })
    );
  };

  return (
    <>
      <div className="m-4 enableSecurity">
        <Image className="sercureImg mb-4" src={Images.enablesec} />
        <h3 className="headingTextStyle mb-2">Enable 2-Steps Security</h3>
        <p className="descriptionTextStylesmall">
          Step 1. Download Google Authenticator from the{" "}
          <Link href="#" className="applinktext">
            Google Play Store
          </Link>{" "}
          or the iOS{" "}
          <Link href="#" className="applinktext">
            App Store
          </Link>
          .
        </p>
        <div className="box">
          <a
            href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
            target="_blank" // Opens the link in a new tab/window
            rel="noopener noreferrer" // Security best practice when using target="_blank"
          >
            <div className="dowlnloadathen_">
              <Image className="downIcon_ mb-2" src={Images.downloadimagee} />
              <h4 className="smallblueHeading_">
                Download Google Authenticator
              </h4>
            </div>
          </a>
        </div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            marginTop: "30px",
          }}
          className=""
        >
          <button
            className="getQRCode nextverifyBtn w-100"
            onClick={() => props?.close()}
          >
            I will do it later
          </button>
          {settingData.loading ? (
            <button className="nextverifyBtn w-100" type="button" disabled>
              <span className="spinner-border spinner-border-sm"></span>
            </button>
          ) : (
            <button
              className="nextverifyBtn w-100"
              type="button"
              onClick={() => activateTwoStepSecurity("GetSecurityScaner")}
            >
              Activate it{" "}
              <Image className="codeqr ms-2" src={Images.qrcodeimg} />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ActivateSecurity;
