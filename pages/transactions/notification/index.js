import React, { useEffect, useMemo } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import moment from "moment-timezone";
import {
  getNotifications,
  selectTransactionData,
} from "../../../redux/slices/transactions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Notifications = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const getWalletData = useSelector(selectTransactionData);

  const notifications = getWalletData?.notifications;

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  const listedNotifications = useMemo(() => {
    return notifications?.reduce((acc, curr) => {
      const date = moment(curr?.notification?.created_at).format(
        "MMMM DD, YYYY"
      );
      let title = date;
      if (moment(date).isSame(moment(), "Today")) {
        title = "Today";
      } else if (moment(date).isSame(moment().subtract(1, "days"), "day")) {
        title = "Yesterday";
      }
      const groupIndex = acc?.findIndex((group) => group?.title === title);
      if (groupIndex === -1) {
        acc.push({
          title,
          data: [{ ...curr }],
        });
      } else {
        acc[groupIndex].data.push({ ...curr });
      }
      return acc;
    }, []);
  }, [notifications]);

  const renderSectionHeader = ({ title }) => (
    <h4 className="selectedproductDetails">{title}</h4>
  );
  return (
    <>
      <div className="notifySection">
        <div className="flexTable mb-4">
          <Image
            src={Images.boldLeftArrow}
            alt="boldLeftArrow "
            className="img-fluid me-2 pointHand"
            onClick={() => {
              router.back();
            }}
          />
          <h4 className="appointMain text-start m-0">Notification</h4>
        </div>

        {getWalletData?.loading ? (
          <td className="text-center" colSpan={12}>
            Loading...
          </td>
        ) : (
          <>
            {listedNotifications?.map((section, index) => (
              <div className="notificationArea" key={index}>
                {renderSectionHeader({ title: section.title })}

                {section.data.map((item, index) => (
                  <div className="NotificationSubArea" key={index}>
                    <div className="taxCountryMain">
                      <div className="operatingCountry">
                        <Image
                          src={Images.defaultUser}
                          className="countryImg"
                          alt="countryImage"
                        />
                        <div className="countryText">
                          <h4 className="cancelOrderText">
                            {item?.notification?.title}
                          </h4>
                          <p className="settingText mt-1">
                            {item?.notification?.description.length > 70
                              ? `${item?.notification?.description?.slice(
                                  0,
                                  70
                                )}...`
                              : item?.notification?.description}
                          </p>
                        </div>
                      </div>
                      <button className="notifyBtn" type="button">
                        {moment(item?.notification?.created_at).fromNow()}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Notifications;
