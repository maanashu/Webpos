import React, { useEffect, useState } from "react";
import Image from "next/image";
import PaginationHeader from "../../../../components/commanComonets/PaginationHeader";
import UserProfileBanner from "../../../../components/commanComonets/customers/UserProfileBanner";

import {
  RightArrow,
  defaultUser,
  editProfile,
  userImages,
} from "../../../../utilities/images";
import { PaginationFooter } from "../../../../components/commanComonets/customers/PaginationFooter";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../../../redux/slices/auth";
import {
  getStoreLocation,
  getUserDetailsAndOrders,
  getUserMarketingStatus,
  selectCustomersData,
  updateUserMarketingStatus,
} from "../../../../redux/slices/customers";
import moment from "moment-timezone";
import { DELIVERY_MODE } from "../../../../constants/commonConstants";
import {
  createFullAddress,
  formattedPrice,
} from "../../../../utilities/globalMethods";

const UserProfile = () => {
  const router = useRouter();
  const { query } = router;
  const userUid = query["user-id"];

  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const customersData = useSelector(selectCustomersData);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState("10");
  const [orderData, setOrderData] = useState([]);

  const sellerUid = authData?.usersInfo?.payload?.uniqe_id;

  const userDetails =
    customersData?.userDetailsAndOrder?.payload?.data?.[0]?.user_details;

  const userOrderList = customersData?.userDetailsAndOrder?.payload;
  const storeLocationList = customersData?.storeLocation?.payload?.data;
  const userMarketingStatus = customersData?.userMarketingStatus?.payload?.data;
  const [isToggled, setIsToggled] = useState(false);

  const [monthSelect, setMonthSelect] = useState("none");
  const [storeSelected, setStoreSelected] = useState("none");

  const storeLocationSelector = [
    { label: "None", value: "none" },
    ...(storeLocationList
      ? storeLocationList?.map((item, index) => ({
          label: item?.city,
          value: item?.city,
        }))
      : []),
  ];

  useEffect(() => {
    const data = {
      user_id: userDetails?.id,
      seller_id: sellerUid,
    };
    dispatch(getUserMarketingStatus(data));
  }, []);
  console.log("khaskfhksajfh", customersData?.userMarketingStatus);
  console.log("sgfjdsgfjsgfjgds", customersData?.updateMarketingStatus);

  const toggleHandler = async () => {

    setIsToggled((prev) => !prev);
    // const data = {
    //   seller_id: sellerUid.toString(),
    //   user_id: userDetails?.id,
    //   accept: !isToggled,
    // };
    // const res = await dispatch(updateUserMarketingStatus(data));
    // if (res) {
    //   const data = {
    //     user_id: userDetails?.id,
    //     seller_id: sellerUid,
    //   };
    //   dispatch(getUserMarketingStatus(data));
    //   setIsToggled((prev) => !prev);
    // }
  };

  useEffect(() => {
    if (sellerUid && userUid) {
      const params = {
        page,
        user_uid: userUid,
        limit: Number(limit),
        seller_id: sellerUid,
        month: monthSelect?.value,
        store_location: storeSelected?.value,
      };
      dispatch(
        getUserDetailsAndOrders({
          ...params,
          cb(res) {
            if (res.statusCode == 200) {
              setOrderData(res?.data?.payload?.data);
            } else {
              setOrderData([]);
            }
          },
        })
      );
      // dispatch(getUserDetailsAndOrders(params));
      dispatch(getStoreLocation({ seller_id: params.seller_id }));
    }
  }, [sellerUid, userUid, page, limit, monthSelect, storeSelected]);

  useEffect(() => {
    if (userDetails?.id) {
      dispatch(
        getUserMarketingStatus({
          user_id: userDetails?.id,
          seller_id: sellerUid,
        })
      );
    }
  }, [userDetails?.id, sellerUid]);

  const handleNavigateToTrackStatus = (item) => {
    router.push({
      pathname: "/transactions/transactionList/invoice",

      query: {
        item: JSON.stringify(item),
        order_id: item?.id,
      },
    });
    // router.push(
    //   "/customers/users/[user-id]/[order-id]",
    //   `/customers/users/${userUid}/${item?.id}`
    // );
  };

  return (
    <div className="main-container-customers fullheightBox_">
      <div
        style={{ padding: "24px 24px 0px 24px" }}
        className="flex-row-space-between"
      >
        <div
          style={{ gap: "12px" }}
          className="flex-row-space-between"
          onClick={() => {
            router.back();
          }}
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
        {/* <div
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
          <Image width={16} height={16} src={editProfile} />
        </div> */}
      </div>

      <UserProfileBanner
        profilePic={
          userDetails?.profile_photo ? userDetails?.profile_photo : defaultUser
        }
        name={
          userDetails?.firstname && userDetails?.lastname
            ? `${userDetails?.firstname} ${userDetails?.lastname}`
            : "Unknown"
        }
        address={createFullAddress(userDetails)}
        contactNo={userDetails?.phone_number}
        email={userDetails?.email}
        points={2}
        isAcceptingMarketing={isToggled}
        bannerImage={userDetails?.banner_image}
        handleToggle={() => toggleHandler()}
      />

      <PaginationHeader
        page={page}
        limit={limit}
        setPage={setPage}
        setLimit={setLimit}
        totalItems={userOrderList?.total}
        data={orderData}
        month
        storeLocationsData={storeLocationSelector}
        setMonthSelect={setMonthSelect}
        setStoreSelected={setStoreSelected}
      />

      <div style={{ margin: "16px" }}>
        <table className="customers-stats-table">
          <thead>
            <tr>
              <th
                className="customers-table-data"
                style={{ border: "none", color: "#7E8AC1" }}
              >
                #
              </th>
              <th
                className="customers-table-data"
                style={{ border: "none", color: "#7E8AC1" }}
              >
                Invoice ID
              </th>
              <th
                className="customers-table-data"
                style={{ border: "none", color: "#7E8AC1" }}
              >
                Date
              </th>
              <th
                className="customers-table-data"
                style={{ border: "none", color: "#7E8AC1" }}
              >
                Location
              </th>
              <th
                className="customers-table-data"
                style={{ border: "none", textAlign: "left", color: "#7E8AC1" }}
              >
                Responsible
              </th>
              <th
                className="customers-table-data"
                style={{ border: "none", color: "#7E8AC1" }}
              >
                No. of Items
              </th>
              <th
                className="customers-table-data"
                style={{ border: "none", color: "#7E8AC1" }}
              >
                Amount
              </th>
              <th
                className="customers-table-data"
                style={{ border: "none", color: "#7E8AC1" }}
              >
                Sales Type
              </th>
            </tr>
          </thead>
          <tbody>
            {customersData?.loading ? (
              <td className="text-center" colSpan={12}>
                Loading...
              </td>
            ) : (
              <>
                {orderData?.length == 0 ? (
                  <td className="text-center" colSpan={12}>
                    No data found
                  </td>
                ) : (
                  <>
                    {orderData?.map((item, idx) => (
                      <tr className="customers-table-row">
                        <td
                          onClick={() => handleNavigateToTrackStatus(item)}
                          className="customers-table-data"
                        >
                          {(idx + Number(page > 1 ? limit : 0) > 8 ? "" : "0") +
                            (idx + 1 + Number(page > 1 ? limit : 0))}
                        </td>
                        <td
                          onClick={() => handleNavigateToTrackStatus(item)}
                          className="customers-table-data"
                        >
                          {item?.is_returned_order
                            ? item?.return_detail?.invoices?.invoice_number
                            : item?.invoices?.invoice_number}
                        </td>
                        <td
                          onClick={() => handleNavigateToTrackStatus(item)}
                          className="customers-table-data"
                        >
                          {moment(item?.created_at).format("l")}
                        </td>
                        <td
                          onClick={() => handleNavigateToTrackStatus(item)}
                          className="customers-table-data"
                        >
                          {item?.seller_details?.current_address?.city}
                        </td>
                        <td
                          onClick={() => handleNavigateToTrackStatus(item)}
                          className="customers-table-data"
                          style={{
                            display: "flex",
                            gap: "12px",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            width={36}
                            height={36}
                            style={{
                              borderRadius: 50,
                            }}
                            src={
                              item?.delivery_option == 4 &&
                              item?.shipping_details?.image
                                ? item?.shipping_details?.image
                                : (item?.delivery_option == 3 ||
                                    item?.delivery_option == 2) &&
                                  item?.pos_user_details?.profile_photo
                                ? item?.pos_user_details?.profile_photo
                                : item?.delivery_option == 1 &&
                                  item?.driver_details?.profile_photo
                                ? item?.driver_details?.profile_photo
                                : defaultUser
                            }
                          />
                          <div
                            style={{
                              gap: "4px",
                              display: "flex",
                              flexDirection: "column",
                              // alignItems: "flex-start",
                            }}
                          >
                            <p className="user-stats-row-name-text">
                              {item?.delivery_option == 4
                                ? item?.shipping_details?.title
                                : item?.delivery_option == 3 ||
                                  item?.delivery_option == 2
                                ? item?.pos_user_details?.firstname
                                : item?.driver_details?.firstname}
                            </p>
                            {/* <p className="user-stats-row-responsible-tag">Shipping</p> */}
                          </div>
                        </td>
                        <td
                          onClick={() => handleNavigateToTrackStatus(item)}
                          className="customers-table-data"
                        >
                          {item?.total_items}
                        </td>
                        <td
                          onClick={() => handleNavigateToTrackStatus(item)}
                          className="customers-table-data"
                        >
                          {formattedPrice(item?.payable_amount)}
                        </td>
                        <td
                          onClick={() => handleNavigateToTrackStatus(item)}
                          className="customers-table-data"
                        >
                          <div
                            style={{
                              display: "inline-block",
                              padding: "5px 10px",
                              borderRadius: "30px",
                              color:
                                DELIVERY_MODE[item?.delivery_option] ===
                                "Delivery"
                                  ? "#7233C2"
                                  : DELIVERY_MODE[item?.delivery_option] ===
                                    "Shipping"
                                  ? "#308CAD"
                                  : "#4659B5",
                              backgroundColor:
                                DELIVERY_MODE[item?.delivery_option] ===
                                "Delivery"
                                  ? "#F5EDFF"
                                  : DELIVERY_MODE[item?.delivery_option] ===
                                    "Shipping"
                                  ? "#BFEEFF99"
                                  : "#E4E6F299",
                            }}
                          >
                            {DELIVERY_MODE[item?.delivery_option]}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* <PaginationFooter /> */}
    </div>
  );
};

export default UserProfile;
