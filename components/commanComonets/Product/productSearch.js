import React from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";

const ProductSearch = (props) => {
  return (
    <>
      <div className="ProductsearchBar">
        <input
          type="text"
          className="form-control searchControl"
          placeholder="Search by Barcode, SKU, Name..."
          value={props?.value}
          onChange={props?.onChange}
        />
        <Image
          src={Images.SearchIcon}
          alt="SearchImageIcon"
          className="img-fluid searchImg"
        />
      </div>
    </>
  );
};

export default ProductSearch;
