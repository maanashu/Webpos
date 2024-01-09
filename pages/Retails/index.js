import React, { useEffect } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import ProductInnerNav from "../../components/commanComonets/Product/productInnerNav";
import ProductRightSidebar from "../../components/commanComonets/Product/ProductRightSidebar";
import { useRouter } from "next/router";
import {
  getMainProduct,
  getOneProductById,
  selectRetailData,
} from "../../redux/slices/retails";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";
import RightSideBar from "./RightSideBar";
import Link from "next/link";

const Retails = () => {
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const retailData = useSelector(selectRetailData);
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const router = useRouter();
  const mainProductArray = retailData?.mainProductData?.data || [];
  console.log("retailData?.mainProductData", retailData?.mainProductData);
  const productPagination = {
    total: retailData?.mainProductData?.total || "0",
  };

  useEffect(() => {
    let params = {
      seller_id: sellerId,
    };
    dispatch(getMainProduct(params));
  }, [sellerId]);

  const productFun = (productId, index, item) => {
    let params = {
      seller_id: sellerId,
      app_name: "pos",
      need_pos_users: true,
    };
    dispatch(
      getOneProductById({
        params,
        productId,
        cb: (resp) => {
          router.push({ pathname: "/Retails/AddProduct" });
        },
      })
    );
  };
  return (
    <>
      <div className="flexBox">
        <div className="commanOuter">
          <ProductInnerNav productCount={productPagination?.total} />
          <div className="commanscrollBar">
            <div className="row">
              {retailData?.loading ? (
                <>
                  <div className="loaderOuter">
                    <div className="spinner-grow loaderSpinner text-center my-5"></div>
                  </div>
                </>
              ) : (
                mainProductArray?.map((item, index) => {
                  return (
                    <div
                      className="col-xl-2 col-lg-3 col-md-4 mb-3"
                      key={index}
                    >
                      {/* <Link href='/Retails/AddProduct'> */}
                      <div
                        className="productsCard"
                        onClick={() => productFun(item.id, index, item)}
                      >
                        <figure className="productImageBox">
                          <Image
                            src={item.image}
                            // src={Images.Add}
                            alt="image"
                            className="img-fluid ProductIcon"
                            width="100"
                            height="100"
                          />
                          {/* <div className="overlay">
                          <Image
                            src={Images.Add}
                            alt="image"
                            className="img-fluid addIcon"
                          />
                        </div> */}
                        </figure>
                        <article className="productDetails">
                          <p className="productName">{item.name}</p>
                          <p className="productGender">
                            {item.sub_category?.name}
                          </p>
                          {item?.supplies?.[0]?.supply_prices?.[0]
                            ?.offer_price &&
                          item?.supplies?.[0]?.supply_prices?.[0]
                            ?.actual_price ? (
                            <p className="productPrice">
                              $
                              {
                                item?.supplies?.[0]?.supply_prices?.[0]
                                  ?.offer_price
                              }
                            </p>
                          ) : (
                            <p className="productPrice">
                              {" "}
                              $
                              {
                                item?.supplies?.[0]?.supply_prices?.[0]
                                  ?.selling_price
                              }
                            </p>
                          )}
                        </article>
                      </div>
                      {/* </Link> */}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
        <RightSideBar />
      </div>
    </>
  );
};
export default Retails;
