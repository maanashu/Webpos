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
  getProductFilterCategory,
  selectRetailData,
  getProductFilterSubCategory,
  getProductFilterBrands,
  getServiceFilterCategory,
  getServiceFilterSubCategory,
  getHoldProductCart,
  addLocalCart,
  setLocalCart,
  setMainProduct,
} from "../../redux/slices/retails";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosUser, selectLoginAuth } from "../../redux/slices/auth";
import RightSideBar from "./RightSideBar";
import {
  amountFormat,
  getDateLabel,
  getWeeklyDateLabel,
} from "../../utilities/globalMethods";
import { Modal } from "react-bootstrap";
import CartAlert from "./CartAlert";
import { set } from "react-ga";

const Retails = () => {
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const retailData = useSelector(selectRetailData);
  const holdProuctCartArray = retailData?.holdProductData || [];
  console.log("holdProuctCartArray", holdProuctCartArray);
  const [showSidebar, setShowSidebar] = useState(false);
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const router = useRouter();
  const { parameter } = router.query;
  const cartData = retailData?.productCart;
  // const cartLength = cartData?.poscart_products?.length;
  const cartPosCart = cartData?.poscart_products || [];
  const mainProductArray = retailData?.mainProductData?.data || [];
  const mainServicesArray = retailData?.mainServicesData?.data || [];
  const [cartAlert, setCartAlert] = useState(false);
  const [selectedCartItem, setSelectedCartItems] = useState([]);
  // const CART_LENGTH = useSelector(getCartLength);
  // const cartLength = CART_LENGTH;
  const LOCAL_CART_ARRAY = retailData?.localCartArray;

  console.log("LOCAL_CART_ARRAY", LOCAL_CART_ARRAY);

  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    dispatch(getHoldProductCart());
  }, []);

  useEffect(() => {
    if (retailData?.productCart?.poscart_products?.length > 0) {
      const cartmatchId = retailData?.productCart?.poscart_products?.map(
        (obj) => ({
          product_type: "product",
          product_id: obj.product_id,
          qty: obj.qty,
          supply_id: obj.supply_id,
          supply_price_id: obj.supply_price_id,
          ...(obj.supply_variant_id && {
            supply_variant_id: obj.supply_variant_id,
          }),
        })
      );
      dispatch(setLocalCart(cartmatchId));
      setSelectedCartItems(cartmatchId);
    } else {
    }
  }, [cartData]);

  const productPagination = {
    total: retailData?.mainProductData?.total || "0",
  };
  const servicesCount = {
    total: retailData?.mainServicesData?.total || "0",
  };
  const onlyProductCartArray = cartData?.poscart_products?.filter(
    (item) => item?.product_type == "product"
  );
  const onlyServiceCartArray = cartData?.poscart_products?.filter(
    (item) => item?.product_type == "service"
  );

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

    /**
     * Product Filter APIS
     * Add {search:''} param if needed for searched results
     */
    dispatch(getProductFilterCategory());
    dispatch(getProductFilterSubCategory());
    dispatch(getProductFilterBrands());

    /**
     * Service Filter APIS
     * Add {search:''} param if needed for searched results
     */
    dispatch(getServiceFilterCategory());
    dispatch(getServiceFilterSubCategory());
    dispatch(getAllPosUser({ seller_id: sellerId }));
  }, [sellerId]);

  const checkAttributes = (item, index) => {
    if (onlyServiceCartArray?.length > 0) {
      setCartAlert(true);
    } else {
      if (item?.supplies?.[0]?.attributes?.length !== 0) {
        productFun(item.id, index, item);
      } else {
        onClickAddCart(item, index);
      }
    }
  };

  const onClickAddCart = (item, index, supplyVarientId) => {
    const mainProductArray = { ...retailData?.mainProductData };
    console.log("mainProductArray", mainProductArray);
    // return;
    let mainProductData = { ...mainProductArray?.data[index] };
    const product = { ...mainProductArray?.data[index] };
    const cartArray = [...selectedCartItem];
    const existingItemIndex = cartArray.findIndex(
      (cartItem) => cartItem.product_id === item?.id
    );
    const params = {
      product_type: "product",
      product_id: item?.id,
      qty: 1,
      supply_id: item?.supplies?.[0]?.id,
      supply_price_id: item?.supplies?.[0]?.supply_prices[0]?.id,
    };
    if (supplyVarientId) {
      params.supply_variant_id = supplyVarientId;
    }
    if (existingItemIndex === -1) {
      cartArray.push(params);
      // dispatch(updateCartLength(cartLength + 1));
    } else {
      const restProductQty =
        mainProductArray.data[index].supplies[0]?.rest_quantity;
      if (restProductQty > cartArray[existingItemIndex].qty) {
        cartArray[existingItemIndex].qty = cartQty + 1;
      } else {
        alert("There are no more quantity left to add");
      }
    }
    dispatch(setLocalCart(cartArray));
    setSelectedCartItems(cartArray);
    product.cart_qty += 1;
    console.log("mainProductArray", mainProductArray);
    mainProductData = product;
    // mainProductArray.data[index].cart_qty += 1;
    dispatch(setMainProduct(mainProductArray));
  };

  return (
    <>
      <div className="flexBox">
        <div className="commanOuter w-100">
          <ProductInnerNav
            productCount={productPagination?.total}
            ServicesCount={servicesCount?.total}
          />
          <div className="commanscrollBar productScrollBar">
            {parameter == "product" ? (
              <div className="row">
                {retailData?.getMainProductLoad ? (
                  <div className="loaderOuter">
                    <span className="spinner-border spinner-border-sm mx-1"></span>
                  </div>
                ) : mainProductArray?.length == 0 ? (
                  <div className="text-center mt-5">
                    <h3>No Product Found!</h3>
                  </div>
                ) : (
                  mainProductArray?.map((item, index) => {
                    const cartMatchProduct = cartPosCart?.find(
                      (data) => data?.product_id == item?.id
                    );
                    return (
                      <div
                        className="col-xl-2 col-lg-3 col-md-4 mb-3"
                        key={index}
                      >
                        {/* <Link href='/Retails/AddProduct'> */}
                        <div
                          className={
                            cartMatchProduct?.qty > 0
                              ? "productsCard active"
                              : "productsCard"
                          }
                          onClick={() => {
                            onlyServiceCartArray?.length > 0
                              ? setCartAlert(true)
                              : productFun(item.id, index, item);
                          }}
                        >
                          <figure className="productImageBox">
                            <Image
                              src={item.image}
                              alt="image"
                              className="img-fluid ProductIcon"
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
                            <p className="productName">{item.name}</p>
                            <p className="productGender">
                              {item.sub_category?.name}
                            </p>
                            <div className="productCartPrice">
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
                              <div className="cartProductImg">
                                <Image
                                  src={Images.ShoppingOutline}
                                  alt="image"
                                  className="imgSize"
                                />
                                {/* <span className="productNum">2</span> */}
                              </div>
                            </div>
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
                  {retailData?.getMainServicesLoad ? (
                    <div className="loaderOuter">
                      <span className="spinner-border spinner-border-sm mx-1"></span>
                    </div>
                  ) : mainServicesArray?.length == 0 ? (
                    <div className="text-center mt-5">
                      <h3>No Service Found!</h3>
                    </div>
                  ) : (
                    mainServicesArray?.map((services, index) => {
                      const cartMatchService = cartPosCart?.find(
                        (data) => data?.product_id == services?.id
                      );

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
                            onClick={() => {
                              onlyProductCartArray?.length > 0
                                ? setCartAlert(true)
                                : getOneService(services?.id, index);
                            }}
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
                                    __html: services?.description?.slice(
                                      0,
                                      200
                                    ),
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
                                  {getWeeklyDateLabel(
                                    services?.supplies?.[0]?.next_available_slot
                                      ?.date
                                  ) +
                                    " " +
                                    "-" +
                                    services?.supplies?.[0]?.next_available_slot
                                      ?.start_time +
                                    "-" +
                                    services?.supplies?.[0]?.next_available_slot
                                      ?.end_time}
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
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <RightSideBar showSidebar={showSidebar} parameter={parameter} />
      </div>
      <Modal show={cartAlert} centered keyboard={false}>
        <CartAlert crossHandler={() => setCartAlert(false)} />
      </Modal>
    </>
  );
};
export default Retails;
