import Image from "next/image";
import React from "react";
import { RightArrow, editProfile } from "../../../../utilities/images";
import UserProfileBanner from "../../../../components/commanComonets/customers/UserProfileBanner";
import PaginationHeader from "../../../../components/commanComonets/PaginationHeader";

const index = () => {
  return (
    <div className="main-container-customers">
      <div
        style={{ padding: "24px 24px 0px 24px" }}
        className="flex-row-space-between"
      >
        <div
          style={{ gap: "12px" }}
          className="flex-row-space-between"
        >
          <Image
            style={{
              transform: "rotate(270deg)",
              marginTop: "7px",
            }}
            src={RightArrow}
          />
          <p className="user-profile-title">User Profile</p>
        </div>
        <div
          style={{
            gap: "4px",
            padding: "8px 10px",
          }}
          className="flex-row-space-between"
        >
          <p
            className="user-profile-title"
            style={{
              fontWeight: 400,
              fontSize: "14px",
            }}
          >
            Edit Profile
          </p>
          <Image
            width={16}
            height={16}
            src={editProfile}
          />
        </div>
      </div>

      <UserProfileBanner
        profilePic="https://images.unsplash.com/photo-1672863512959-6f7b696006cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzg4fHx1c2VyfGVufDB8fDB8fHww"
        name="Mary Jane: The spidy women"
        address="Daffodil Lane, Savage, Virginia(VA), 20763"
        contactNo="+1 991 012 0998"
        email="mary.jane@yopmail.com"
        points={2}
        isAcceptingMarketing={true}
      />

      <PaginationHeader />
    </div>
  );
};

export default index;
