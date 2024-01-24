import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { settingInfo, updateSettings } from "../../../redux/slices/setting";

const Notification = () => {
  const dispatch = useDispatch();
  const settingsData = useSelector(settingInfo);
  const [isLoading, setIsLoading] = useState("");

  const appSettingsData = settingsData?.getSettings?.app_notifications;
  const smsSettingsData = settingsData?.getSettings?.sms_notifications;
  const emailSettingsData = settingsData?.getSettings?.email_notifications;

  const appNotificationKeys = {
    new_order: "New Order",
    cancelled_order: "Cancelled Order",
    low_stock_warning: "Low Stock Warning",
    out_of_stock_alert: "Out-of-Stock Alert",
    daily_sales_summary: "Daily Sales Summary",
    unusual_sales_activity: "Unusual Sales Activity:",
    employee_logins: "Employee Logins",
  };

  const appNotifications = useMemo(() => {
    const fields = [];
    if (!appSettingsData) {
      for (const key in appNotificationKeys) {
        fields.push({
          fieldName: appNotificationKeys[key],
          fieldStatus: false,
          fieldType: key,
        });
      }
    } else {
      for (const key in appNotificationKeys) {
        const value = appSettingsData[key];
        fields.push({
          fieldName: appNotificationKeys[key],
          fieldStatus: value,
          fieldType: key,
        });
      }
    }

    return fields;
  }, [appSettingsData]);

  const smsNotifications = useMemo(() => {
    const fields = [];
    if (!smsSettingsData) {
      for (const key in appNotificationKeys) {
        fields.push({
          fieldName: appNotificationKeys[key],
          fieldStatus: false,
          fieldType: key,
        });
      }
    } else {
      for (const key in appNotificationKeys) {
        const value = smsSettingsData[key];
        fields.push({
          fieldName: appNotificationKeys[key],
          fieldStatus: value,
          fieldType: key,
        });
      }
    }

    return fields;
  }, [smsSettingsData]);

  const emailNotifications = useMemo(() => {
    const fields = [];

    if (!emailSettingsData) {
      for (const key in appNotificationKeys) {
        fields.push({
          fieldName: appNotificationKeys[key],
          fieldStatus: false,
          fieldType: key,
        });
      }
    } else {
      for (const key in appNotificationKeys) {
        const value = emailSettingsData[key];
        fields.push({
          fieldName: appNotificationKeys[key],
          fieldStatus: value,
          fieldType: key,
        });
      }
    }

    return fields;
  }, [emailSettingsData]);

  const onPressSettingsHandler = useCallback((item, type) => {
    let updatedSettings;
    if (type == "1") {
      updatedSettings = {
        app_notifications: {
          [item.fieldType]: !item.fieldStatus,
        },
      };
    } else if (type == "2") {
      updatedSettings = {
        sms_notifications: {
          [item.fieldType]: !item.fieldStatus,
        },
      };
    } else if (type == "3") {
      updatedSettings = {
        email_notifications: {
          [item.fieldType]: !item.fieldStatus,
        },
      };
    }

    dispatch(updateSettings(updatedSettings));
    setIsLoading({ ...item, type });
  }, []);

  return (
    <>
      <div className="notificationSection settingOuter">
        <div className="notifySub">
          <h4 className="cancelOrderText">App Notifications</h4>
          <hr className="cartDivide" />

          {appNotifications?.map((item, index) => {
            return (
              <div className="settings-notification-view">
                <h7>{item?.fieldName}</h7>

                <div className="roundCheck  mb-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked={item?.fieldStatus}
                    onChange={() => onPressSettingsHandler(item, "1")}
                  />
                  <label
                    className="form-check-label d-none"
                    for="flexSwitchCheckChecked"
                  ></label>
                </div>
              </div>
            );
          })}

          <div className="notifyCheck"></div>
        </div>

        <div className="notifySub">
          <h4 className="cancelOrderText">Sms Notifications</h4>
          <hr className="cartDivide" />

          {smsNotifications?.map((item, index) => {
            return (
              <div className="settings-notification-view">
                <h7>{item?.fieldName}</h7>

                <div className="roundCheck  mb-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked={item?.fieldStatus}
                    onChange={() => onPressSettingsHandler(item, "2")}
                  />
                  <label
                    className="form-check-label d-none"
                    for="flexSwitchCheckChecked"
                  ></label>
                </div>
              </div>
            );
          })}

          <div className="notifyCheck"></div>
        </div>

        <div className="notifySub">
          <h4 className="cancelOrderText">Email Notifications</h4>
          <hr className="cartDivide" />

          {emailNotifications?.map((item, index) => {
            return (
              <div className="settings-notification-view">
                <h7>{item?.fieldName}</h7>

                <div className="roundCheck  mb-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked={item?.fieldStatus}
                    onChange={() => onPressSettingsHandler(item, "3")}
                  />
                  <label
                    className="form-check-label d-none"
                    for="flexSwitchCheckChecked"
                  ></label>
                </div>
              </div>
            );
          })}

          <div className="notifyCheck"></div>
        </div>
      </div>
    </>
  );
};

export default Notification;
