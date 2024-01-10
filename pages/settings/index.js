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
import StaffDetail from "./staff/staffDetail";
import { ListGroup } from "react-bootstrap";
import ListGroupItem from "react-bootstrap";
import Link from "next/link";


export default function Settings() {
  const [selectedItem, setSelectedItem] = useState("Security");
  const [selectedItemId, setSelectedItemId] = useState("");
  console.log(selectedItemId, "selectedItemId");

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
    { id: 15, name: "Locations", info: "1 Locations", image: settingsDetails },
  ];
  const SettingsBar = ({ item }) => {
    return (

      <Link className="settingList" href="#" onClick={() => handleTouch(item)}>
        <Image src={item?.image} className="SecurityImg" />
        <div className="securityHeading">
          <h1 className="settingText">{item?.name}</h1>
          <h1 className="settingSub mt-1">{item?.info}</h1>{" "}
        </div>
      </Link>
    );
  };

  const handleTouch = (item,id) => {
    setSelectedItemId(id ? id:"")
    console.log(item,"itemname");
    setSelectedItem(item?.name ? item?.name : item );
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case "Security":
        return <Security />;
      case "Staff":
        return <StaffList handleTouch={handleTouch} />;
      case "Devices":
        return <Devices />;
      case "Receipts":
        return <Receipts />;
        case "staffDetail":
        return <StaffDetail selectedItemId={selectedItemId}/>;
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
          <div>{renderComponent()}</div>
        </div>
      </div>
    </div>
  );
}
