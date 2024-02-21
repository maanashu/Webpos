import { useEffect, useState } from "react";
import Security from "./security";
import {
  locationOutline,
  ringing,
  settingsBoxes,
  settingsDevices,
  settingsLanguage,
  settingsLaw,
  settingsMoney,
  settingsPolicies,
  settingsReceipt,
  settingsTax,
  usersOutline,
  walletOutline,
  securityTick,
  settingsDetails,
} from "../../utilities/images";
import * as Images from "../../utilities/images";
import Image from "next/image";
import StaffList from "./staff";
import Devices from "./device";
import Receipts from "./Receipts";
import Location from "./location";
import StaffDetail from "./staff/staffDetail";
import Link from "next/link";
import Taxes from "./Taxes";
import Legal from "./legal";
import LegalPolicy from "./legal/legalPolicy";
import PolicyInfo from "./policies/policyInfo";
import Policy from "./policies";
import Wallet from "./Wallet";
import Notification from "./notification";
import Language from "./language";
import Plan from "./plans";
import ShippingPickup from "./shipPickup";
import PlanFit from "./plans/planFit";
import { getAllPosUser, getAllPosUserLetest, selectLoginAuth } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import DeviceDetail from "./device/deviceDetail";
import {
  getActivePlan,
  getLocationDetails,
  settingInfo,
} from "../../redux/slices/setting";
import moment from "moment";

export default function Settings() {
  const dispatch = useDispatch();
  const receiptSettings = useSelector(settingInfo);
  const wallet = receiptSettings?.walletInfo;
  const authData = useSelector(selectLoginAuth);
  const UniqueId = authData?.usersInfo?.payload?.uniqe_id;
  const userId = authData?.usersInfo?.payload?.user?.user_profiles?.user_id
    ? authData?.usersInfo?.payload?.user?.user_profiles?.user_id
    : "";
  const [selectedItem, setSelectedItem] = useState("Security");
  const [getAllStaffList, setGetAllStaffList] = useState([]);
  const [securityStatus, setSecurityStatus] = useState("");
  const [selectedItemId, setSelectedItemId] = useState("");
  const [policyInfo, setPolicyInfo] = useState("");
  const [activeTab, setActiveTab] = useState("");
  const [showSidebar, setShowSideBar] = useState(false);
  const [userLocation, setUserLocation] = useState("");
  const [userPlan, setUserPlan] = useState("");

  // API for get get Bussiness LocationInfo...............................

  // get plan information
  const handeGetPlanInfo = () => {
    dispatch(
      getActivePlan({
        cb(res) {
          if (res?.status) {
            setUserPlan(res?.data?.payload[0]?.expiry_date);
          }
        },
      })
    );
  };

  // get location count
  const getBussinessLocationInfo = () => {
    let params = {
      seller_id: UniqueId,
    };
    dispatch(
      getLocationDetails({
        ...params,
        cb(res) {
          if (res.status) {
            setUserLocation(res?.data?.payload);
          }
        },
      })
    );
  };

  // getting setting sideBar information
  useEffect(() => {
    getBussinessLocationInfo();
    handeGetPlanInfo();
    getUserList();
  }, [receiptSettings?.success]);

  console.log("receiptSettings?.success", receiptSettings?.success);
  const settingsOptions = [
    { id: 1, name: "Security", info: securityStatus, image: securityTick },
    { id: 2, name: "Devices", info: "Not Connected", image: settingsDevices },
    { id: 3, name: "Notifications", info: "Not Updated", image: ringing },
    {
      id: 4,
      name: "Locations",
      info: `${userLocation?.length} Locations`,
      image: locationOutline,
    },
    {
      id: 5,
      name: "Plans",
      info: userPlan && `Expire on ${moment(userPlan).format("DD MMMM yyyy")}`,
      image: settingsMoney,
    },
    { id: 6, name: "Receipts", info: "Default", image: settingsReceipt },
    { id: 7, name: "Taxes", info: "Not Updated", image: settingsTax },
    {
      id: 8,
      name: "Wallet",
      info: `${
        wallet?.accept_card_payment ||
        wallet?.accept_cash_payment ||
        wallet?.accept_jbr_coin_payment
          ? "Connected"
          : "Not Connected"
      }`,
      image: walletOutline,
    },
    {
      id: 9,
      name: "Shipping & Pick Up",
      info: "Default",
      image: settingsBoxes,
    },
    {
      id: 10,
      name: "Staff",
      info: getAllStaffList?.length,
      image: usersOutline,
    },
    { id: 11, name: "Language", info: "English", image: settingsLanguage },
    { id: 12, name: "Legal", info: "English", image: settingsLaw },
    { id: 13, name: "Policies", info: "Default", image: settingsPolicies },
    {
      id: 14,
      name: "Device Detail",
      info: "Locations",
      image: settingsDetails,
    },
  ];
  const SettingsBar = ({ item }) => {
    return (
      <Link
        className={
          selectedItem == item.name ? "settingList active" : "settingList"
        }
        href=""
        onClick={() => handleTouch(item)}
      >
        <Image src={item?.image} className="SecurityImg" alt="img" />
        <div className="securityHeading">
          <h1 className="settingText">{item?.name}</h1>
          <h1 className="settingSub mt-1">{item?.info}</h1>{" "}
        </div>
      </Link>
    );
  };

  const handleTouch = (item, id, name) => {
    if (item) {
      setPolicyInfo(id);
      setSelectedItemId(id ? id : "");
      setSelectedItem(item?.name ? item?.name : item);
    }
    if (name) {
      setActiveTab(name);
    }
  };

  const getUserList = () => {
    let params = {
      seller_id: UniqueId,
    };
    dispatch(
      getAllPosUserLetest({
        ...params,
        cb(res) {
          if (res.status) {
            setGetAllStaffList(res?.data?.payload?.pos_staff);
          }
        },
      })
    );
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case "Security":
        return (
          <Security handleTouch={handleTouch} setShowSideBar={setShowSideBar} />
        );
      case "Staff":
        return (
          <StaffList
            handleTouch={handleTouch}
            setShowSideBar={setShowSideBar}
          />
        );
      case "Devices":
        return <Devices setShowSideBar={setShowSideBar} />;
      case "Receipts":
        return <Receipts setShowSideBar={setShowSideBar} />;
      case "Taxes":
        return <Taxes setShowSideBar={setShowSideBar} />;
      case "Locations":
        return <Location setShowSideBar={setShowSideBar} />;
      case "Language":
        return <Language setShowSideBar={setShowSideBar} />;
      case "Legal":
        return (
          <Legal handleTouch={handleTouch} setShowSideBar={setShowSideBar} />
        );
      case "Policies":
        return (
          <Policy handleTouch={handleTouch} setShowSideBar={setShowSideBar} />
        );
      case "staffDetail":
        return (
          <StaffDetail
            handleTouch={handleTouch}
            selectedItemId={selectedItemId}
            setShowSideBar={setShowSideBar}
          />
        );
      case "legalPolicy":
        return (
          <LegalPolicy
            policyInfo={policyInfo}
            handleTouch={handleTouch}
            setShowSideBar={setShowSideBar}
          />
        );
      case "PolicyInfo":
        return (
          <PolicyInfo
            policyInfo={policyInfo}
            handleTouch={handleTouch}
            setShowSideBar={setShowSideBar}
          />
        );
      case "Wallet":
        return <Wallet setShowSideBar={setShowSideBar} />;
      case "Notifications":
        return <Notification setShowSideBar={setShowSideBar} />;
      case "Plans":
        return (
          <Plan handleTouch={handleTouch} setShowSideBar={setShowSideBar} />
        );
      case "allPlans":
        return (
          <PlanFit handleTouch={handleTouch} setShowSideBar={setShowSideBar} />
        );
      case "Shipping & Pick Up":
        return <ShippingPickup setShowSideBar={setShowSideBar} />;
      case "Device Detail":
        return <DeviceDetail setShowSideBar={setShowSideBar} />;
      default:
        return null;
    }
  };
  return (
    <div className="settingMain">
      <div className="row">
        <div className="col-lg-3">
          <div className="deviceLeft settingOuter">
            <div>
              {settingsOptions.map((item) => (
                <SettingsBar key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div>
            {/* <Image src={Images.ShippingOrders} className="SecurityImg" alt="img" onClick={() => setShowSideBar(prev => !prev)} /> */}
            {showSidebar && (
              <div className="deviceLeft settingOuter">
                <div>
                  {settingsOptions.map((item) => (
                    <SettingsBar key={item.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="outerpage">{renderComponent()}</div>
        </div>
      </div>
    </div>
  );
}
