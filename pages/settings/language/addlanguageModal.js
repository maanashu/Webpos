import React, { useEffect, useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import {
  getLanguageList,
  settingInfo,
  updateSettings,
} from "../../../redux/slices/setting";
import { useDispatch, useSelector } from "react-redux";
const AddlanguageModal = (props) => {
  const dispatch = useDispatch();
  const settingData = useSelector(settingInfo);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [getLanguagesList, setGetLanguagesList] = useState([]);

  const onSelectLanguage = (id, data) => {
    if (
      data?.name === "English" &&
      data?.country === "United States" &&
      data?.lang_code === "en"
    ) {
      return;
    }
    setSelectedLanguages((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // API for add specific Language from list...................................
  const addLanguage = () => {
    setIsLoading(true);
    const getLatest = getLanguagesList
      ?.filter((item) => selectedLanguages?.includes(item?.id))
      ?.map((value) => {
        return { id: value?.id, status: 1 };
      })
      ?.filter((val) => val?.id);
    let params = {
      languages: getLatest,
    };
    dispatch(
      updateSettings({
        ...params,
        cb(res) {
          if (res.status) {
            props?.getAllLanguageList();
            props?.close();
          }
        },
      })
    );
  };

  // close the modal after cancle buttom
  const closeModal = () => {
    props?.close();
  };

  // API for get all Language list...................................
  const getAllLanguageList = () => {
    dispatch(
      getLanguageList({
        cb(res) {
          if (res.status) {
            const allLanguageList = res?.data?.payload?.filter(
              (item) => item?.lang_code != null
            );
            setGetLanguagesList(allLanguageList);
            const selectedLanguageIds = props?.getSelectedLanguages;
            const getActiveLanguages = res?.data?.payload?.filter((item) =>
              selectedLanguageIds?.map((item) => item?.id)?.includes(item?.id)
            );
            setSelectedLanguages(getActiveLanguages?.map((item) => item?.id));
          } else {
          }
        },
      })
    );
  };

  useEffect(() => {
    getAllLanguageList();
  }, []);

  return (
    <div className="addlanguageContent mt-3">
      <div className="addStoreForm">
        <div className="addlanguagebox_">
          {settingData?.loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-grow loaderSpinner text-center my-5"></div>
            </div>
          ) : (
            <>
              {getLanguagesList?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={`countryLanguage_ ${
                      selectedLanguages?.includes(data?.id) ? "activelang" : ""
                    }`}
                    onClick={() => onSelectLanguage(data?.id, data)}
                  >
                    <Image
                      src={data?.flag}
                      alt="langImg"
                      width={50}
                      height={50}
                      className="img-fluid rightImg me-3"
                    />
                    <span className="smalblueText_">{data?.name}</span>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="addCustomerBtn mt-4">
          <button
            className="serviceCancel w-100 "
            type="button"
            onClick={() => {
              closeModal();
            }}
          >
            Cancel
          </button>
          <button
            disabled={settingData?.loading}
            className="nextverifyBtn w-100 d-flex text-align-center"
            type="button"
            onClick={addLanguage}
          >
            {settingData?.loading && isLoading && (
              <span className="spinner-border spinner-border-sm me-2 text-center"></span>
            )}
            Add
            <Image
              src={Images.ArrowRight}
              alt="rightArrow"
              className="img-fluid rightImg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddlanguageModal;
