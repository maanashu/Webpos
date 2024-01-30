import React, { useEffect } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import ProductInnerNav from "../../components/commanComonets/Product/productInnerNav";
import ProductRightSidebar from "../../components/commanComonets/Product/ProductRightSidebar";
import { useRouter } from "next/router";
import { getMainProduct, selectRetailData } from "../../redux/slices/retails";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";

const Product = () => {
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const retailData = useSelector(selectRetailData);
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const router = useRouter();
  const mainProductArray = retailData?.mainProductData?.payload?.data || [];

  useEffect(() => {
    let params = {
      seller_id: sellerId,
    };
    dispatch(getMainProduct(params));
  }, []);
  return (
    <>
      <div className="flexBox">
        <div className="commanOuter">
          <ProductInnerNav />
          <div className="commanscrollBar">
            <div className="row">
              {mainProductArray?.map((item, index) => {
                return (
                  <div className="col-xl-2 col-lg-3 col-md-4 mb-3" key={index}>
                    <div className="productsCard">
                      <figure className="productImageBox">
                        <Image
                          src={item.image}
                        // src={Images.Add}
                          alt="image"
                          className="img-fluid ProductIcon"
                          width="100" height="100"
                        />
                        <div className="overlay">
                          <Image
                            src={Images.Add}
                            alt="image"
                            className="img-fluid addIcon"
                          />
                        </div>
                      </figure>
                      <article className="productDetails">
                        <p className="productName">{item.name}</p>
                        <p className="productGender">
                          {item.sub_category?.name}
                        </p>
                        {item?.supplies?.[0]?.supply_prices?.[0]?.offer_price &&
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <ProductRightSidebar />
      </div>
    </>
  );
};
export default Product;
