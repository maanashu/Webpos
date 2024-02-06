import React, { useEffect, useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import AddlanguageModal from "./addlanguageModal";
import CustomModal from "../../../components/customModal/CustomModal";
import { selectLoginAuth } from "../../../redux/slices/auth";
import {
  getSecuritySettingInfo,
  settingInfo,
  updateSettings,
} from "../../../redux/slices/setting";
import { useDispatch, useSelector } from "react-redux";

const Language = (props) => {
  const authData = useSelector(selectLoginAuth);
  const UniqueId = authData?.usersInfo?.payload?.uniqe_id;
  const settingData = useSelector(settingInfo);
  const dispatch = useDispatch();
  const [key, setKey] = useState(Math.random());
  const [isLoading, setIsLoading] = useState("");
  const [listLoader, setListLoader] = useState(false);
  const [getSelectedLanguages, setGetSelectedLanguages] = useState();
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

  const handleOpenModal = (flag) => {
    setModalDetail({
      show: true,
      flag: flag,
      type: flag,
    });
    setKey(Math.random());
  };

  // API for set selected Language Enable Disable...................................
  const setLanguageEnableDisable = (data) => {
    if (
      data?.language === "English" &&
      data?.country === "United States" &&
      data?.lang_code === "en" &&
      data?.status === 1
    ) {
      return;
    }
    setListLoader(true);
    setIsLoading(data?.id);

    const updateLanguageStatus = getSelectedLanguages
      ?.map((item) => {
        if (item?.id === data?.id) {
          return { ...item, status: item?.status === 0 ? 1 : 0 };
        }
        return item;
      })
      ?.map((value) => ({
        id: value.id,
        status: value.status,
      }));

    let params = {
      languages: updateLanguageStatus,
    };

    dispatch(
      updateSettings({
        ...params,
        cb(res) {
          if (res.status) {
            getselectedLang();
          }
        },
      })
    );
  };

  // API for get selected Language from language list...................................
  const getselectedLang = () => {
    let params = {
      app_name: "pos",
      seller_id: UniqueId,
    };
    dispatch(
      getSecuritySettingInfo({
        ...params,
        cb(res) {
          if (res.status) {
            setGetSelectedLanguages(res?.data?.payload?.languages);
          }
        },
      })
    );
  };

  useEffect(() => {
    if (UniqueId) {
      getselectedLang();
    }
  }, [UniqueId]);

  useEffect(() => {
    props?.setShowSideBar(false);
  }, []);

  return (
    <>
      <div className="settingOuter languageRight">
        <div className="topsettingContent_">
          <Image
            src={Images.darkDevices}
            alt="darkDevices image"
            className="img-fluid me-3"
          />
          <div className="bussinessData">
            <h4 className="appointMain">Published Languages</h4>
            <p className="lightOfferText mt-2">
              Active in the markets they've been added to and visible to
              customers.
            </p>
          </div>
        </div>
        {settingData?.loading && !listLoader ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow loaderSpinner text-center my-5"></div>
          </div>
        ) : (
          <div className="languageMain mt-4 bottonContent_">
            {getSelectedLanguages?.map((data, index) => {
              return (
                <div
                  key={index}
                  className={
                    settingData?.loading && isLoading === data?.id
                      ? "taxCountryMain mb-3 justify-content-center"
                      : "taxCountryMain mb-3"
                  }
                >
                  <>
                    {settingData?.loading &&
                    isLoading === data?.id &&
                    listLoader ? (
                      <div className="spinner-grow loaderSpinner text-center"></div>
                    ) : (
                      <>
                        <div className="operatingCountry">
                          <Image
                            src={data?.flag}
                            className="countryImg"
                            alt="countryImage"
                            width={50}
                            height={50}
                          />
                          <div className="countryText">
                            <h4 className="cancelOrderText">
                              {data?.language} ({data?.country})
                            </h4>
                            <h4 className="settingText mt-1">Default</h4>
                          </div>
                        </div>
                        <div className="roundCheck mb-0">
                          <input
                            type="checkbox"
                            checked={data?.status}
                            onChange={(e) => {
                              setLanguageEnableDisable(data);
                            }}
                          />
                          <label className="amountText d-none "></label>
                        </div>
                      </>
                    )}
                  </>
                </div>
              );
            })}
            <div className="addlanguage_ mt-4 pt-2">
              <button
                className="addlangueBtn_"
                onClick={() => {
                  handleOpenModal("addlanguageModal");
                }}
              >
                {" "}
                <Image
                  src={Images.addDark}
                  className="countryImg me-3"
                  alt="countryImage"
                />{" "}
                <span>Add language</span>
              </button>
            </div>
          </div>
        )}
      </div>
      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        className={
          modalDetail.flag === "addlanguageModal"
            ? "commonWidth customContent"
            : ""
        }
        ids={modalDetail.flag === "addlanguageModal" ? "addlanguageModal" : ""}
        child={
          modalDetail.flag === "addlanguageModal" ? (
            <AddlanguageModal
              close={() => handleOnCloseModal()}
              getAllLanguageList={() => getselectedLang()}
              getSelectedLanguages={getSelectedLanguages}
            />
          ) : (
            ""
          )
        }
        header={
          modalDetail.flag === "addlanguageModal" ? (
            <>
              <Image
                src={Images.languageIcon}
                className="languageImg mb-2"
                alt="languageImage"
              />
              <h4 className="modalHeading_">Add a language</h4>
              <p className="activateText mt-2">
                Select one or more languages to add
              </p>
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

export default Language;
