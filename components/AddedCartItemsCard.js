import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import * as Images from "../utilities/images";
import Image from "next/image";
import { amountFormat, getProductPrice } from "../utilities/globalMethods";

const AddedCartItemsCard = ({ data }) => {
  return (
    <div className="flexBox mapleProductDetailsBox">
      <div className="flexbase">
        <p className="mapleProductcount">× {data?.qty}</p>
        <article className="ms-3">
          <p className="mapleProductHeading">{data?.product_details?.name}</p>
          <span className="mapleProductcount">Yellow / M</span>
        </article>
      </div>
      <article>
        <p className="mapleProductPrice">
          {amountFormat(
            getProductPrice(
              data.product_details?.supply?.supply_offers,
              data.product_details?.supply?.supply_prices?.selling_price,
              data.qty
            )
          )}
        </p>
      </article>
    </div>
  );
};

export default AddedCartItemsCard;
