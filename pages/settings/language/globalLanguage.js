import { useEffect, useRef, useState } from "react";
import {
  getSecuritySettingInfo,
  settingInfo,
} from "../../../redux/slices/setting";
import { selectLoginAuth } from "../../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";

const GlobalLanguage = () => {
  const dispatch = useDispatch();
  const scriptAddedRef = useRef(false);
  const settingData = useSelector(settingInfo);
  const { success } = settingData;
  const authData = useSelector(selectLoginAuth);
  const [languageCode, setLanguageCode] = useState("");
  const UniqueId = authData?.usersInfo?.payload?.uniqe_id;

  useEffect(() => {
    if (UniqueId && !scriptAddedRef.current) {
      const getSecuritySetting = async () => {
        let params = {
          app_name: "pos",
          seller_id: UniqueId,
        };
        dispatch(
          getSecuritySettingInfo({
            ...params,
            cb: async (res) => {
              if (res.status) {
                const languageCode = res?.data?.payload?.languages
                  ?.map((item) => item?.lang_code)
                  ?.filter((val) => val != null);

                // Use Set to remove duplicates
                const formattedLanguageCode = Array.from(new Set(languageCode));
                setLanguageCode(formattedLanguageCode);
                const includedLanguagesString = formattedLanguageCode.join(",");
                if (formattedLanguageCode.length > 0) {
                  const googleTranslateElementInit = () => {
                    new window.google.translate.TranslateElement(
                      {
                        pageLanguage: "en",
                        autoDisplay: false,
                        includedLanguages: includedLanguagesString,
                        layout:
                          window.google.translate.TranslateElement.InlineLayout
                            .SIMPLE,
                        multilanguagePage: true,
                      },
                      "google_translate_element"
                    );
                  };

                  const addScript = document.createElement("script");
                  addScript.setAttribute(
                    "src",
                    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                  );
                  document.body.appendChild(addScript);
                  scriptAddedRef.current = true;
                  window.googleTranslateElementInit =
                    googleTranslateElementInit;
                }
              }
            },
          })
        );
      };
      getSecuritySetting();
    }
  }, [UniqueId, success]);

  return <div id="google_translate_element"></div>;
};

export default GlobalLanguage;
