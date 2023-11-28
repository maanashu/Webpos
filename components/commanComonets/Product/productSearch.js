import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";

const ProductSearch = () => {
    return (
        <>
            <div class="ProductsearchBar">
                <input type="text" class="form-control searchControl" placeholder="Search by Barcode, SKU, Name..." />
                <Image src={Images.SearchIcon} alt="SearchImageIcon" className="img-fluid searchImg" />
            </div>
        </>
    )
}

export default ProductSearch