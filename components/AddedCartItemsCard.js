import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import * as Images from "../utilities/images";
import Image from "next/image";
import { amountFormat, getProductPrice } from "../utilities/globalMethods";
import moment from "moment";

const AddedCartItemsCard = ({ data }) => {
  const productSize = data?.product_details?.supply?.attributes?.filter(
    (item) => item?.name?.toLowerCase() == "size"
  );
  const productColor = data?.product_details?.supply?.attributes?.filter(
    (item) => item?.name?.toLowerCase() == "color"
  );

  const isBookingDateAvailable =
    data?.date || data?.start_time || data?.end_time;
  const bookingDateTime = `${moment.utc(data?.date).format("DD/MM/YYYY")} @ ${
    data?.start_time
  }-${data?.end_time}`;

  return (
    <div className="flexBox mapleProductDetailsBox">
      <div className="flexbase">
        <p className="mapleProductcount">× {data?.qty}</p>
        <article className="ms-3">
          <p className="mapleProductHeading">{data?.product_details?.name}</p>
          {isBookingDateAvailable && (
            <div className="userIdText mt-1">{bookingDateTime}</div>
          )}

          <div className="flexTable mt-1">
            {productColor?.length > 0 && (
              <>
                <span className="userIdText">Colors :</span>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    border: "1px solid black",
                    borderRadius: "15%",
                    // display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: productColor?.[0]?.values?.name,
                  }}
                ></div>
              </>
            )}

            {productSize?.length > 0 && (
              <span className="userIdText mx-2">
                Size : {productSize?.[0]?.values?.name}{" "}
              </span>
            )}
          </div>

          {/* <span className="mapleProductcount">Yellow / M</span> */}
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
