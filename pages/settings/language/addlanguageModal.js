import React, { useState } from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";
const AddlanguageModal = () => {
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    console.log(selectedLanguages, "selectedLanguages");

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

    const onSelectLanguage = (item) => {
        const indexItem = selectedLanguages.findIndex((lang) => lang.name === item.name);
    
        if (indexItem !== -1) {
            // Language already selected, remove it
            setSelectedLanguages((prevLanguages) =>
                prevLanguages.filter((lang) => lang.name !== item.name)
            );
        } else {
            // Language not selected, add it
            setSelectedLanguages((prevLanguages) => [
                ...prevLanguages,
                { name: item.name, image: item.image, status: item.status },
            ]);
        }
    };

    let params = {
        "email": email,
        "firstname": firstName,
        "lastname": lastName,
        "phone_code": `+${phoneCode}`,
        "phone_no": phoneNo,
      }
  
      dispatch(
        updateSetting({
            ...params,
            cb(res) {
                if (res.status) {
                  props.close()
                } else {
                }
            },
        })
    );
    
    return (
        <div className='addlanguageContent mt-3' >
            <div className='addStoreForm'>
                <div className='addlanguagebox_'>
                    {languageList?.map((data, index) => {
                        return (
                            <div className='countryLanguage_ activelang mb-3' onClick={() => onSelectLanguage(data, index)}>
                                <Image src={data?.image} alt="langImg" width={50} height={50} className="img-fluid rightImg me-3" />
                                <span className='smalblueText_' >{data?.name}</span>
                            </div>
                        )
                    })}
                </div>
                <div className='addCustomerBtn mt-4'>
                    <button className='serviceCancel w-100 ' type='button'>
                        Cancel
                    </button>
                    <button className='nextverifyBtn w-100' type='button'>
                        Add
                        <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddlanguageModal