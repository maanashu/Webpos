import React, { useEffect, useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import CustomModal from "../../../components/customModal/CustomModal";
import AddStoreModal from "../../../components/settingModal/addStoreModal";
import { getAllPosUser, selectLoginAuth } from "../../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";

const StaffList = ({ handleTouch }) => {
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const UniqueId = authData?.usersInfo?.payload?.uniqe_id;
  const [key, setKey] = useState(Math.random());
  const [getAllStaffList, setGetAllStaffList] = useState("");
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });

  //closeModal
  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };

  // open modal
  const handleOpneModal = (flag) => {
    setModalDetail({
      show: true,
      flag: flag,
      type: flag,
    });
    setKey(Math.random());
  };

  // API for get all POS users...............................
  const getUserList = () => {
    let params = {
      seller_id: UniqueId,
    };
    dispatch(
      getAllPosUser({
        ...params,
        cb(res) {
          if (res.status) {
            setGetAllStaffList(res?.data?.payload?.pos_staff);
          }
        },
      })
    );
  };

  useEffect(() => {
    if (UniqueId) {
      getUserList();
    }
  }, [UniqueId]);

  return (
    <>
      <div className="staffRight settingOuter">
        <Image
          src={Images.customerUsers}
          alt="customerUsers image"
          className="img-fluid"
        />
        <div className="staffData">
          <h4 className="appointMain">Staff List</h4>
          <p className="lightOfferText mt-2">
            Active in the markets they've been added to and visible to
            customers.
          </p>
          <div className="staffListData">
            {authData?.loading ? (
              <>
                <div className="loaderOuter">
                  <div className="spinner-grow loaderSpinner text-center my-5"></div>
                </div>
              </>
            ) : getAllStaffList?.length > 0 ? (
              <>
                {getAllStaffList?.map((data, index) => {
                  return (
                    <div className="staffListSub" key={index}>
                      <div className="staffUser">
                        <Image
                          src={
                            data?.user?.user_profiles?.profile_photo
                              ? data?.user?.user_profiles?.profile_photo
                              : Images.LoginFirst
                          }
                          alt="staffUser image"
                          className="staffUserImg"
                          height={100}
                          width={100}
                        />
                        <div className="staffUserSub">
                          <h4 className="cancelOrderText">
                            {data?.user?.user_profiles?.firstname}{" "}
                            {data?.user?.user_profiles?.lastname}
                          </h4>
                          {data?.user?.user_roles.length > 0 ? (
                            data?.user?.user_roles?.map((data, index) => {
                              return (
                                <h4
                                  className="loginSub text-start mt-1"
                                  key={index}
                                >
                                  {data?.role?.name}
                                </h4>
                              );
                            })
                          ) : (
                            <h4 className="loginSub mt-3">Admin / Manager</h4>
                          )}
                        </div>
                      </div>
                      <Image
                        src={Images.RightArrow}
                        alt="RightArrow image"
                        className="staffArrow pointHand"
                        hight={100}
                        width={100}
                        onClick={() => handleTouch("staffDetail", data?.id)}
                      />
                    </div>
                  );
                })}
              </>
            ) : (
              <h2 className="text-center my-5">No Staff Found</h2>
            )}
            <div
              className="addStaff"
              onClick={() => {
                handleOpneModal("addStaff");
              }}
            >
              <Image
                src={Images.addDark}
                alt="addDark image"
                className="staffUserImg"
                hight={100}
                width={100}
              />
              <h4 className="cancelOrderText">Add Staff</h4>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        className={
          modalDetail.flag === "addStaff" ? "commonWidth customContent" : ""
        }
        ids={modalDetail.flag === "addStaff" ? "addStoreModal" : ""}
        child={
          modalDetail.flag === "addStaff" ? (
            <AddStoreModal getUserList={getUserList} close={() => handleOnCloseModal()} />
          ) : (
            ""
          )
        }
        header={
          modalDetail.flag === "addStaff" ? (
            <>
              <h4 className="appointMain">Add New Store Employee</h4>
            </>
          ) : (
            ""
          )
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};

export default StaffList;
