import React, { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import ProductInnerNav from "../../components/commanComonets/Product/productInnerNav";
import { useRouter } from "next/router";
import {
  getMainProduct,
  getMainServices,
  getOneProductById,
  getOneServiceById,
  selectRetailData,
} from "../../redux/slices/retails";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";
import RightSideBar from "./RightSideBar";
import { amountFormat } from "../../utilities/globalMethods";

const Retails = () => {
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const retailData = useSelector(selectRetailData);
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const router = useRouter();
  const { parameter } = router.query;
  const cartData = retailData?.productCart;
  const cartLength = cartData?.poscart_products?.length;
  const cartPosCart = cartData?.poscart_products || [];
  const mainProductArray = retailData?.mainProductData?.data || [];
  const mainServicesArray = retailData?.mainServicesData?.data || [];
  const productPagination = {
    total: retailData?.mainProductData?.total || "0",
  };
  const servicesCount = {
    total: retailData?.mainServicesData?.total || "0",
  };
  const completePathName = router.asPath;

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
  const getOneService = (serviceId) => {
    let params = {
      seller_id: sellerId,
      app_name: "pos",
      need_pos_users: true,
    };
    dispatch(
      getOneServiceById({
        params,
        serviceId,
        cb: (resp) => {
          router.push({ pathname: "/Retails/AddService" });
        },
      })
    );
  };
  const productData = () => {
    let params = {
      seller_id: sellerId,
    };
    dispatch(
      getMainProduct({
        ...params,
        cb(res) {},
      })
    );
  };
  const servicesData = () => {
    let params = {
      page: 1,
      limit: 25,
      app_name: "pos",
      need_pos_users: true,
      seller_id: sellerId,
    };
    dispatch(
      getMainServices({
        ...params,
        cb(res) {},
      })
    );
  };

  useEffect(() => {
    // if (completePathName === "/Retails" || "/Retails?parameter=product") {
    //   productData();
    // } else if (completePathName === "/Retails?parameter=services") {
    //   servicesData();
    // }
    productData();
    servicesData();
  }, [sellerId]);

  return (
    <>
      <div className="flexBox">
        <div className="commanOuter w-100">
          <ProductInnerNav
            productCount={productPagination?.total}
            ServicesCount={servicesCount?.total}
          />
          <div className="commanscrollBar">
            {parameter == "product" ? (
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
                          className="productsCard active"
                          onClick={() => productFun(item.id, index, item)}
                        >
                          <figure className="productImageBox">
                            <Image
                              src={item.image}
                              alt="image"
                              className="img-fluid ProductIcon"
                              width="100"
                              height="100"
                            />
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
            ) : (
              <>
                <div className="row">
                  {mainServicesArray?.length > 0 ? (
                    mainServicesArray?.map((services, index) => {
                      const cartMatchService = cartPosCart?.find(
                        (data) => data?.product_id == services?.id
                      );
                      console.log("cartMatchService", cartMatchService?.qty);

                      return (
                        <div
                          key={index}
                          className="col-xl-2 col-lg-3 col-md-4 mb-3"
                        >
                          <div
                            className={
                              cartMatchService?.qty > 0
                                ? "productsCard active"
                                : "productsCard"
                            }
                            onClick={() => getOneService(services?.id, index)}
                          >
                            <figure className="productImageBox">
                              <Image
                                src={services?.image}
                                alt="image"
                                // className="img-fluid ProductIcon"
                                width="100"
                                height="100"
                              />
                              <div className="overlay ">
                                <Image
                                  src={Images.Add}
                                  alt="image"
                                  className="img-fluid addIcon"
                                />
                              </div>
                            </figure>
                            <article className="productDetails">
                              <p className="productName">{services?.name}</p>
                              <p className="productserviceName">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: services?.description.slice(0, 200),
                                  }}
                                />
                              </p>

                              {services?.supplies?.[0]?.supply_prices?.[0]
                                ?.offer_price &&
                              services?.supplies?.[0]?.supply_prices?.[0]
                                ?.actual_price ? (
                                <p className="productPrice">
                                  {amountFormat(
                                    services?.supplies?.[0]?.supply_prices?.[0]
                                      ?.offer_price
                                  )}
                                </p>
                              ) : (
                                <p className="productPrice">
                                  {amountFormat(
                                    services?.supplies?.[0]?.supply_prices?.[0]
                                      ?.selling_price
                                  )}
                                </p>
                              )}

                              <figure className="appointmentDate">
                                <Image
                                  src={Images.afterSomeCalender}
                                  alt="image"
                                  className="img-fluid appointmentCalender"
                                />
                                <span className="Ontime">
                                  01/11/23 at 10:00hrs
                                </span>
                              </figure>
                              <figure className="Timezone">
                                <Image
                                  src={Images.Appointmenttime}
                                  alt="image"
                                  className="img-fluid AppointmenttimeIcon"
                                />
                                {services.supplies?.[0]?.approx_service_time ==
                                null ? (
                                  <span className="AppointmentEstTime">
                                    Estimated Time Not found
                                  </span>
                                ) : (
                                  <span className="AppointmentEstTime">
                                    Est:
                                    {
                                      services.supplies?.[0]
                                        ?.approx_service_time
                                    }
                                    min
                                  </span>
                                )}
                              </figure>
                              <figure className="Appointmentusers">
                                {
                                  <div
                                    style={{
                                      display: "flex",
                                      overflowX: "scroll",
                                      whiteSpace: "wrap",
                                    }}
                                  >
                                    {services?.pos_staff?.map((item, index) => (
                                      <Image
                                        key={index}
                                        src={
                                          item?.user?.user_profiles
                                            ?.profile_photo
                                        }
                                        alt="image"
                                        className="img-fluid CardIcons"
                                        width="100"
                                        height="100"
                                      />
                                    ))}
                                  </div>
                                }

                                {/* {services?.product_images?.map((productImg) => {
                                  return (
                                    <Image
                                      src={productImg?.url}
                                      alt="image"
                                      className="img-fluid CardIcons"
                                      width="100"
                                      height="100"
                                    />
                                  );
                                })} */}
                              </figure>
                            </article>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <>
                      {mainServicesArray?.length == 0 ? (
                        <h3 className="mt-3 mb-3">No services Found!</h3>
                      ) : (
                        <div className="loaderOuter">
                          <div className="spinner-grow loaderSpinner text-center my-5"></div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <RightSideBar />
      </div>
    </>
  );
};
export default Retails;
