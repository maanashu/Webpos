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
} from "../../utilities/images";
import Image from "next/image";
import StaffList from "./staff";
import Devices from "./device";
import Receipts from "./Receipts";
import Taxes from "./Taxes";
export default function Settings() {
  const [selectedItem, setSelectedItem] = useState("Security");
  console.log(selectedItem, "selectedItem");

  const settingsOptions = [
    { id: 1, name: "Security", info: "Not Updated", image: settingsSecurity },
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
  ];
  const SettingsBar = ({ item }) => {
    return (
      <button
        onClick={() => handleTouch(item)}
        className="settings-sidebar-button "
      >
        <div className="settings-sidebar-options-view">
          <Image src={item?.image} className="settings-sidebar-icons" />

          <div className={styles.sidebarTitleView}>
            <h1 className="settings-bar-titles">{item?.name}</h1>
            <h1 className="settings-bar-titles-info">{item?.info}</h1>{" "}
          </div>
        </div>
      </button>
    );
  };

  const handleTouch = (item) => {
    setSelectedItem(item?.name);
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case "Security":
        return <Security />;
      case "Staff":
        return <StaffList />;
      case "Devices":
        return <Devices />;
      case "Receipts":
        return <Receipts />;
      case "Taxes":
        return <Taxes />;
      default:
        return null;
    }
  };
  return (
    <div className="settings-main-container">
      <div className="settings-options-container">
        {settingsOptions.map((item) => (
          <SettingsBar key={item.id} item={item} />
        ))}
      </div>
      <div className="settings-component-container">
        <div>{renderComponent()}</div>
      </div>
    </div>
  );
}
