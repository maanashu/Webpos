import React, { useState } from "react";

const SwitchToggle = ({ label: labelText, labelTextClass, value }) => {
  const [isToggled, setIsToggled] = useState(value);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={handleToggle}
        />
        <span className="switch-slider"></span>
      </label>
      <p className={labelTextClass}>{labelText}</p>
    </div>
  );
};

export default SwitchToggle;
