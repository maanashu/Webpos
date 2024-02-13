import Image from "next/image";
import React from "react";
import {
  OrderLocation,
  customerLocationDark,
  emailDark,
  giftCard,
  phoneDark,
} from "../../../utilities/images";
import SwitchToggle from "../SwitchToggle";

const UserProfileBanner = ({
  name,
  email,
  points,
  address,
  contactNo,
  profilePic,
  bannerImage,
  isAcceptingMarketing,
  handleToggle,
}) => {
  return (
    <div
      // style={{ backgroundImage: `url(${bannerImage})` }}
      className="user-profile-banner flex-row-space-between"
    >
      <div
        style={{
          gap: "12px",
          alignItems: "center",
        }}
        className="flex-row-space-between"
      >
        <Image
          width={50}
          height={50}
          src={profilePic}
          objectFit="center"
          style={{
            borderRadius: 50,
          }}
        />
        <div>
          <p className="user-profile-title">{name}</p>
          {
            <div>
              {address ? (
                <Image width={16} height={16} src={customerLocationDark} />
              ) : (
                ""
              )}
              <span
                style={{
                  color: "#263682",
                  fontSize: "14px",
                }}
                className="user-stats-row-name-address"
              >
                {address}
              </span>
            </div>
          }
        </div>
      </div>

      <div>
        {[
          { text: contactNo, icon: phoneDark },
          { text: email, icon: emailDark },
        ].map(({ text, icon }, idx) => (
          <div
            style={{
              alignItems: "center",
              fontSize: "14px",
              gap: "6px",
              justifyContent: "flex-start",
              marginTop: idx == 1 ? "6px" : "0",
            }}
            className="flex-row-space-between user-profile-title"
            key={idx + text}
          >
            {text ? <Image src={icon} width={16} height={16} /> : <></>}
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          gap: "4px",
          alignItems: "flex-end",
          flexDirection: "column",
        }}
        className="flex-row-space-between"
      >
        <div className="flex-row-space-between gift-card-cnt">
          <Image src={giftCard} width={24} height={24} />
          <p className="gift-card-points-text">{points} Points</p>
        </div>
        <SwitchToggle
          labelTextClass="label-text-style"
          value={isAcceptingMarketing}
          label={"Accept Marketing"}
          handleToggle={handleToggle}
        />
      </div>
    </div>
  );
};

export default UserProfileBanner;
