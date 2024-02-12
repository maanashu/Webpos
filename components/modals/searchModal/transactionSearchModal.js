import React, { useCallback, useEffect, useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { selectLoginAuth } from "../../../redux/slices/auth";

import { searchInvoiceByInvoiceId } from "../../../redux/slices/productReturn";
import { useRouter } from "next/router";

const TransactionSearchModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleNavigateToTrackStatus = (item) => {
    router.push({
      pathname: "/transactions/search",

      query: {
        item: JSON.stringify(item),
      },
    });
  };

  const handleSearchInvoice = (invoiceNumber) => {
    let params = {
      invoiceId: invoiceNumber,
      seller_id: sellerId,
    };
    dispatch(
      searchInvoiceByInvoiceId({
        ...params,
        cb(resp) {
          if (resp?.data?.payload) {
            handleNavigateToTrackStatus(resp?.data?.payload);
          }
        },
      })
    );
  };

  useEffect(() => {
    if (searchKeyword && typeof searchKeyword != "undefined") {
      const search = setTimeout(() => {
        //Your search query and it will run the function after 3secs from user stops typing
        var keyword = searchKeyword.toLowerCase();
        handleSearchInvoice(keyword);
      }, 2000);
      return () => clearTimeout(search);
    } else {
    }
  }, [searchKeyword]);

  return (
    <>
      <div className="customerSearchModal">
        <form className="homeRightForm">
          <div className="searchControlBox">
            <input
              type="text"
              className="form-control searchControl"
              placeholder="Search"
              value={searchKeyword}
              onChange={(e) => {
                setSearchKeyword(e.target.value);
              }}
            />
            <Image
              src={Images.SearchIcon}
              alt="SearchImageIcon"
              className="img-fluid searchImg"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default TransactionSearchModal;
