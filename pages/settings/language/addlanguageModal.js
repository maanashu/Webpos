import React, { useEffect, useState } from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";
import { getLanguageList, settingInfo, updateSettings } from '../../../redux/slices/setting';
import { useDispatch, useSelector } from 'react-redux';
const AddlanguageModal = (props) => {
    console.log(props?.getSelectedLanguages, "propsprops");
    const dispatch = useDispatch()
    const settingData = useSelector(settingInfo)
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    console.log(selectedLanguages, "selectedLanguages");
    const [getLanguagesList, setGetLanguagesList] = useState([]);
    console.log(getLanguagesList, "getLanguagesList");

    const languageList = [
        {
            // id: 1,
            name: 'United States of America',
            image: 'https://flagcdn.com/w320/us.png',
            status: false,
        },
        {
            // id: 2,
            name: 'Russia',
            image: 'https://flagcdn.com/w320/ru.png',
            status: false,
        },
        {
            // id: 3,
            name: 'Portugal',
            image: 'https://flagcdn.com/w320/pt.png',
            status: false,
        },
        {
            // id: 4,
            name: 'Spanish',
            image: 'https://flagcdn.com/w320/es.png',
            status: false,
        },
        {
            // id: 5,
            name: 'Italian',
            image: 'https://flagcdn.com/w320/it.png',
            status: false,
        },
    ];

    const onSelectLanguage = (id) => {
        setSelectedLanguages((prev) => {
            if (prev.includes(id)) {
                return prev.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });

        // // Toggle the active class for the selected language
        // const updatedLanguagesList = getLanguagesList.map((language) => {
        //     if (language.id === selectedLanguage.id) {
        //         return { ...language, status: !language.status };
        //     } else {
        //         return { ...language };
        //     }
        // });

        // setGetLanguagesList(updatedLanguagesList);

        // // Update the selectedLanguages array based on the status
        // if (selectedLanguage.status) {
        //     // Remove the language from the selectedLanguages array
        //     setSelectedLanguages((prevLanguages) =>
        //         prevLanguages.filter((lang) => lang.id !== selectedLanguage.id)
        //     );
        // } else {
        //     // Add the language to the selectedLanguages array
        //     setSelectedLanguages((prevLanguages) => [
        //         ...prevLanguages,
        //         {
        //             id: selectedLanguage.id,
        //             status: 1
        //         },
        //     ]);
        // }
    };

    const addLanguage = () => {
        const getLatest = getLanguagesList?.filter((item) => selectedLanguages?.includes(item?.id))?.map((value) => {
            return { id: value?.id, status: 1 }
        })
        let params = {
            languages: getLatest
        }
        dispatch(updateSettings({
            ...params, cb(res) {
                if (res.status) {
                    props?.getAllLanguageList()
                    props?.close()
                }
            },
        })
        );
    }
    const closeModal = () => {
        props?.close()
    }


    const getAllLanguageList = () => {
        dispatch(
            getLanguageList({
                cb(res) {
                    console.log("");
                    if (res.status) {
                        setGetLanguagesList(res?.data?.payload);
                        console.log("selectedLanguageIxxxds", res?.data?.payload);
                        const selectedLanguageIds = props?.getSelectedLanguages
                        console.log("selectedLanguageIds", selectedLanguageIds);
                        const getActiveLanguages = res?.data?.payload?.filter((item) => selectedLanguageIds?.map((item) => item?.id)?.includes(item?.id))
                        console.log("getActiveLanguagesgetActiveLanguagesdd", res?.data?.payload?.filter((item) => selectedLanguageIds?.map((item) => item?.id)?.includes(item?.id)));
                        console.log("selectedLanguageIds", selectedLanguageIds);
                        setSelectedLanguages(getActiveLanguages?.map((item) => item?.id))



                    } else {
                    }
                },
            })
        );
    }


    useEffect(() => {
        getAllLanguageList()
    }, [])

    return (
        <div className='addlanguageContent mt-3' >
            <div className='addStoreForm'>
                <div className='addlanguagebox_'>
                    {settingData?.loading ? (
                        <>
                            <div className="loaderOuter">
                                <div className="spinner-grow loaderSpinner text-center my-5"></div>
                            </div>
                        </>
                    ) : (
                        getLanguagesList.map((data, index) => {
                            return (

                                <div className={`countryLanguage_ ${selectedLanguages?.includes(data?.id) ? 'activelang' : ''}`} onClick={() => onSelectLanguage(data?.id)}>
                                    <Image src={data?.flag} alt="langImg" width={50} height={50} className="img-fluid rightImg me-3" />
                                    <span className='smalblueText_' >{data?.name}</span>
                                </div>
                            )
                        })
                    )}
                </div>
                <div className='addCustomerBtn mt-4'>
                    <button className='serviceCancel w-100 ' type='button' onClick={() => { closeModal() }}>
                        Cancel
                    </button>
                    <button className='nextverifyBtn w-100' type='button' onClick={addLanguage}>
                        Add
                        <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddlanguageModal