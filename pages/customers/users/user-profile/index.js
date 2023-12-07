import React from "react";
import Image from "next/image";
import PaginationHeader from "../../../../components/commanComonets/PaginationHeader";
import UserProfileBanner from "../../../../components/commanComonets/customers/UserProfileBanner";

import { RightArrow, editProfile } from "../../../../utilities/images";
import { PaginationFooter } from "../../../../components/commanComonets/customers/PaginationFooter";
import Link from "next/link";

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

      <table className="user-stats-table">
        <tr
          className="flex-row-space-between"
          style={{
            padding: "16px",
            alignItems: "center",
            display: "flex",
            alignItems: "flex-start",
            alignSelf: "stretch",
          }}
        >
          <th className="users-stats-row-num users-stats-table-head-text">#</th>
          <th className="users-stats-row-total-orders users-stats-table-head-text">
            Order ID
          </th>
          <th className="users-stats-row-total-orders users-stats-table-head-text">
            Date
          </th>
          <th className="users-stats-row-total-orders users-stats-table-head-text">
            Location
          </th>
          <th className="users-stats-row-total-orders users-stats-table-head-text">
            Responsible
          </th>
          <th
            style={{ padding: "6px 30px" }}
            className="users-stats-row-total-orders users-stats-table-head-text"
          >
            No. of Items
          </th>
          <th className="users-stats-row-total-orders users-stats-table-head-text">
            Amount
          </th>
          <th
            style={{ padding: "6px 40px" }}
            className="users-stats-row-total-orders users-stats-table-head-text"
          >
            Sales Type
          </th>
        </tr>

        {[1, 2, 34, 5, 6, 6, 7, 8, 34, 5, 2, 1, 12, 4, 2, 34, 34].map(
          (_, idx) => (
            <Link href="/customers/users/user-profile/track-status">
              <tr
                key={"td-" + idx}
                className="flex-row-space-between users-stats-table-row"
              >
                <td className="users-stats-row-num">
                  {(idx > 8 ? "" : "0") + (idx + 1)}
                </td>

                <td className="users-stats-row-total-orders">232 232</td>
                <td className="users-stats-row-total-orders">10 / 10 / 2023</td>
                <td className="users-stats-row-total-orders">Miami</td>
                <td
                  style={{ gap: "12px" }}
                  className="users-stats-row-total-orders"
                >
                  <Image
                    width={36}
                    height={36}
                    style={{
                      borderRadius: 50,
                    }}
                    src={
                      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                  />
                  <div
                    style={{
                      gap: "4px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p className="user-stats-row-name-text">Gwen steele</p>
                    <p className="user-stats-row-responsible-tag">Shipping</p>
                  </div>
                </td>
                <td className="users-stats-row-total-orders">3 Items</td>
                <td className="users-stats-row-total-orders">$7600.00</td>
                <td className="users-stats-row-total-orders">Pickup</td>
              </tr>
            </Link>
          )
        )}
      </table>

      <PaginationFooter />
    </div>
  );
};

export default index;
