import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";

const SearchInvoice = () => {
    return (
        <>
            <div class="searchBar">
                <input type="text" class="form-control searchControl" placeholder="Search here the # of invoice" />
                <figure className='scanBox'>
                    <Image src={Images.scanImg} alt="ScanIcon" className="img-fluid " />
                </figure>
                <Image src={Images.SearchIcon} alt="SearchImageIcon" className="img-fluid searchImg" />
            </div>
        </>
    )
}

export default SearchInvoice