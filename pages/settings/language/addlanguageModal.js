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
        console.log(item, "itemitem");
        const indexItem = selectedLanguages.indexOf(item.name);
        if (indexItem !== -1) {
            // Language already selected, remove it
            setSelectedLanguages((prevLanguages) =>
                prevLanguages.filter((lang) => lang !== item.name)
            );
        } else {
            // Language not selected, add it
            setSelectedLanguages((prevLanguages) => [...prevLanguages, item.name]);
        }
    };
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
                    {/* <div className='countryLanguage_  activelang mb-3'>
                        <Image src={Images.lang2} alt="langImg" className="img-fluid rightImg me-3" />
                        <span className='smalblueText_' >Spanish</span>
                    </div>
                    <div className='countryLanguage_  activelang mb-3'>
                        <Image src={Images.lang3} alt="langImg" className="img-fluid rightImg me-3" />
                        <span className='smalblueText_' >Portuguese</span>
                    </div>
                    <div className='countryLanguage_  mb-3'>
                        <Image src={Images.lang4} alt="langImg" className="img-fluid rightImg me-3" />
                        <span className='smalblueText_' >Russian</span>
                    </div> */}
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