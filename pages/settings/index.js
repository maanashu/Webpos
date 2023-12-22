import { useState } from "react";
import styles from "./styles.module.css";
import Security from "./security";
export default function Settings() {
  const [selectedItem, setSelectedItem] = useState("Security");
  console.log("selected item", selectedItem);
  const settingsOptions = [
    { id: 1, name: "Security", info: "Not Updated" },
    { id: 2, name: "Devices", info: "Not Connected" },
    { id: 3, name: "Notifications", info: "Not Updated" },
    { id: 4, name: "Locations", info: "1 Locations" },
    { id: 5, name: "Plans", info: "Expire on April 2024" },
    { id: 6, name: "Receipts", info: "Default" },
    { id: 7, name: "Taxes", info: "Not Updated" },
    { id: 8, name: "Wallet", info: "Not Connected" },
    { id: 9, name: "Shipping & Pick Up", info: "Default" },
    { id: 10, name: "Staff", info: 3 },
    { id: 11, name: "Language", info: "English" },
    { id: 12, name: "Legal", info: "English" },
    { id: 13, name: "Policies", info: "Default" },

    // Add more items as needed
  ];
  const Settings = ({ itemName, handleTouch, info }) => {
    console.log(itemName, "itemName, handleTouch, info");
    return (
      <div>
        <button onClick={handleTouch} className={styles.titleName}>
          {itemName}
          <h1 style={{ fontSize: "12px", textAlign: "initial" }}>{info}</h1>
        </button>
      </div>
    );
  };

  const handleTouch = (item) => {
    console.log(item, "item");
    setSelectedItem(item);
  };

  const SecurityComponent = () => {
    return <div style={{ backgroundColor: "red", fontSize: 20 }}>Security</div>;
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case "Security":
        return <Security />;

      // Add cases for other items...
      default:
        return null;
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div style={{ backgroundColor: "#FFFFFF", marginRight: 70 }}>
        <div className={styles.verticalContainer}>
          {settingsOptions.map((item) => (
            <Settings
              key={item.id}
              itemName={item.name}
              info={item.info}
              handleTouch={() => handleTouch(item.name)}
            />
          ))}
        </div>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
}
