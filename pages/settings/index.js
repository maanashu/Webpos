import { useState } from "react";
import styles from "./styles.module.css";
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
  settingsSecurity,
  settingsTax,
  usersOutline,
  walletOutline,
  securityTick,
  settingHome,
  settingsDetails,
} from "../../utilities/images";
import Image from "next/image";
import StaffList from "./staff";
import Devices from "./device";
import Receipts from "./Receipts";
import Location from "./location";
import StaffDetail from "./staff/staffDetail";
import { ListGroup } from "react-bootstrap";
import ListGroupItem from "react-bootstrap";
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

export default function Settings() {
  const [selectedItem, setSelectedItem] = useState("Security");
  const [selectedItemId, setSelectedItemId] = useState("");
  const [policyInfo, setPolicyInfo] = useState("");
  const [activeTab, setActiveTab] = useState("");

  const settingsOptions = [
    { id: 1, name: "Security", info: "Not Updated", image: securityTick },
    { id: 2, name: "Devices", info: "Not Connected", image: settingsDevices },
    { id: 3, name: "Notifications", info: "Not Updated", image: ringing },
    { id: 4, name: "Locations", info: "1 Locations", image: locationOutline },
    {
      id: 5,
      name: "Plans",
      info: "Expire on April 2024",
      image: settingsMoney,
    },
    { id: 6, name: "Receipts", info: "Default", image: settingsReceipt },
    { id: 7, name: "Taxes", info: "Not Updated", image: settingsTax },
    { id: 8, name: "Wallet", info: "Not Connected", image: walletOutline },
    {
      id: 9,
      name: "Shipping & Pick Up",
      info: "Default",
      image: settingsBoxes,
    },
    { id: 10, name: "Staff", info: 3, image: usersOutline },
    { id: 11, name: "Language", info: "English", image: settingsLanguage },
    { id: 12, name: "Legal", info: "English", image: settingsLaw },
    { id: 13, name: "Policies", info: "Default", image: settingsPolicies },
    { id: 14, name: "Shop", info: "Locations", image: settingHome },
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

  const renderComponent = () => {
    switch (selectedItem) {
      case "Security":
        return <Security handleTouch={handleTouch} />;
      case "Staff":
        return <StaffList handleTouch={handleTouch} />;
      case "Devices":
        return <Devices />;
      case "Receipts":
        return <Receipts />;
      case "Taxes":
        return <Taxes />;
      case "Locations":
        return <Location />;
      case "Language":
        return <Language />;
      case "Legal":
        return <Legal handleTouch={handleTouch} />;
      case "Policies":
        return <Policy handleTouch={handleTouch} />;
      case "staffDetail":
        return <StaffDetail handleTouch={handleTouch} selectedItemId={selectedItemId} />;
      case "legalPolicy":
        return (
          <LegalPolicy policyInfo={policyInfo} handleTouch={handleTouch} />
        );
      case "PolicyInfo":
        return <PolicyInfo policyInfo={policyInfo} handleTouch={handleTouch} />;
      case "Wallet":
        return <Wallet />;
      case "Notifications":
        return <Notification />;
      case "Plans":
        return <Plan handleTouch={handleTouch} />;
      case "allPlans":
        return <PlanFit handleTouch={handleTouch} />;
      case "Shipping & Pick Up":
        return <ShippingPickup />;
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
          <div className="outerpage">{renderComponent()}</div>
        </div>
      </div>
    </div>
  );
}
