import React, { useEffect, useRef, useState } from "react";
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
  setCartLength,
  createBulkCart,
  setProductCart,
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
import PaginationFooter from "../../components/commanComonets/customers/PaginationFooter";
import CustomModal from "../../components/customModal/CustomModal";

const Retails = () => {
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const retailData = useSelector(selectRetailData);
  const holdProuctCartArray = retailData?.holdProductData || [];
  const [showSidebar, setShowSidebar] = useState(false);
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const router = useRouter();
  const { parameter } = router.query;
  const cartData = retailData?.productCart;
  const CART_LENGTH = retailData?.cartLength;
  // const cartLength = cartData?.poscart_products?.length;
  const cartPosCart = cartData?.poscart_products || [];
  const mainProductArray = retailData?.mainProductData?.data || [];
  const mainServicesArray = retailData?.mainServicesData?.data || [];
  const [cartAlert, setCartAlert] = useState(false);
  const [selectedCartItem, setSelectedCartItems] = useState([]);
  // const CART_LENGTH = useSelector(getCartLength);
  const cartLength = CART_LENGTH;
  const LOCAL_CART_ARRAY = retailData?.localCartArray;
  const [localCartArray, setLocalCartArray] = useState(LOCAL_CART_ARRAY);
  console.log("LOADTTDTDT--reatil", JSON.stringify(LOCAL_CART_ARRAY));
  const listInnerRef = useRef();

  // product pagination
  const [pageNumber, setPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(18);
  const [totalItems, setTotalItems] = useState(
    retailData?.mainProductData?.total || 0
  );

  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    setLocalCartArray(LOCAL_CART_ARRAY);
  }, [LOCAL_CART_ARRAY]);
  useEffect(() => {
    setTotalItems(retailData?.mainProductData?.total || 0);
  }, [totalItems]);

  // service pagination
  const [serPageNumber, setSerPageNumber] = useState(1);
  const [recordsSerPerPage, setRecordSerPerPage] = useState(18);
  const [serTotalItems, setSerTotalItems] = useState(
    retailData?.mainServicesData?.total || 0
  );
  const productCarts = cartData?.poscart_products?.filter(
    (item) => item?.product_type == "product"
  );

  const [key, setKey] = useState(Math.random());
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });
  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };

  const productData = () => {
    let params = {
      seller_id: sellerId,
      page: pageNumber,
      limit: recordsPerPage,
    };
    dispatch(
      getMainProduct({
        ...params,
        cb(res) {
          if (res.status && res?.data?.payload?.data?.length) {
            setTotalItems(res?.data?.payload?.total);
          } else {
            setTotalItems(0);
          }
        },
      })
    );
  };

  const servicesData = () => {
    let params = {
      seller_id: sellerId,
      page: serPageNumber,
      limit: recordsSerPerPage,
    };
    dispatch(
      getMainServices({
        ...params,
        cb(res) {
          if (res.status && res?.data?.payload?.data?.length) {
            setSerTotalItems(res?.data?.payload?.total);
          } else {
            setSerTotalItems(0);
          }
        },
      })
    );
  };

  useEffect(() => {
    if (sellerId) {
      productData();
      servicesData();
    }
  }, [sellerId, pageNumber]);

  useEffect(() => {
    dispatch(getHoldProductCart());
  }, []);

  useEffect(() => {
    if (retailData?.productCart?.poscart_products?.length > 0) {
      const cartmatchId = retailData?.productCart?.poscart_products?.map(
        (obj) => ({
          product_type: obj.product_type,
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
    bulkCart();
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

  useEffect(() => {
    dispatch(getProductFilterCategory());
    dispatch(getProductFilterSubCategory());
    dispatch(getProductFilterBrands());
    dispatch(getServiceFilterCategory());
    dispatch(getServiceFilterSubCategory());
    dispatch(getAllPosUser({ seller_id: sellerId }));
  }, [sellerId]);

  const checkAttributes = (item, index, cartQty) => {
    if (onlyServiceCartArray?.length > 0) {
      setCartAlert(true);
    } else {
      if (item?.supplies?.[0]?.attributes?.length !== 0) {
        productFun(item.id, index, item);
      } else {
        onClickAddCart(item, index, cartQty);
      }
    }
  };

  const bulkCart = async () => {
    if (localCartArray.length > 0) {
      if (localCartArray[0]?.product_type == "product") {
        const dataToSend = {
          seller_id: sellerId,
          products: localCartArray,
        };
        try {
          dispatch(createBulkCart(dataToSend));
        } catch (error) {}
      }
    }
  };
  const onClickAddCart = (item, index, cartQty, supplyVarientId) => {
    const mainProductArray = { ...retailData?.mainProductData };
    let mainProduct = [...mainProductArray?.data];
    const product = { ...mainProductArray?.data[index] };
    const cartArray = [...selectedCartItem];

    const existingItemIndex = cartArray.findIndex(
      (cartItem) => cartItem.product_id === item?.id
    );
    const cartArrayProduct = { ...cartArray[existingItemIndex] };
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

      dispatch(setCartLength(cartLength + 1));
    } else {
      const restProductQty =
        mainProductArray.data[index].supplies[0]?.rest_quantity;
      if (restProductQty > cartArray[existingItemIndex].qty) {
        cartArrayProduct.qty = cartQty + 1;
        cartArray[existingItemIndex] = cartArrayProduct;
      } else {
        alert("There are no more quantity left to add");
      }
    }
    dispatch(setLocalCart(cartArray));
    setSelectedCartItems(cartArray);
    product.cart_qty += 1;
    mainProduct[index] = product;
    mainProductArray.mainProductData = mainProduct;
    const data = {
      payload: mainProductArray,
    };

    dispatch(setMainProduct(data));
  };

  const paginationData = {
    total: retailData?.mainProductData?.total,
    totalPages: retailData?.mainProductData?.total_pages,
    perPage: retailData?.mainProductData?.per_page,
    currentPage: retailData?.mainProductData?.current_page,
  };

  return (
    <>
      <div className="flexBox ">
        <div className="commanOuter w-100  position-relative">
          <ProductInnerNav
            productCount={productPagination?.total}
            ServicesCount={servicesCount?.total}
            bulkCartFunction={bulkCart}
          />

          <div className="commanscrollBar productScrollBar">
            {parameter == "product" ? (
              <>
                <div className="row">
                  {retailData?.getMainProductLoad &&
                  mainProductArray?.length == 0 ? (
                    // <div className="loaderOuter">
                    //   <span className="spinner-border spinner-border-sm mx-1"></span>
                    // </div>
                    <div className="text-center mt-5">
                      <h3>Loading...</h3>
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
                      const isProductMatchArray = localCartArray?.find(
                        (data) => data.product_id === item.id
                      );
                      const cartAddQty = isProductMatchArray?.qty;

                      const updatedItem = { ...item };
                      if (cartAddQty !== undefined) {
                        updatedItem.cart_qty = cartAddQty;
                      }
                      return (
                        <div
                          className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 mb-3"
                          key={index}
                        >
                          {/* <Link href='/Retails/AddProduct'>  */}
                          <div
                            // className={
                            //   cartMatchProduct?.qty > 0
                            //     ? "productsCard active"
                            //     : "productsCard"
                            // }
                            // onClick={() => {
                            //   onlyServiceCartArray?.length > 0
                            //     ? setCartAlert(true)
                            //     : productFun(item.id, index, item);
                            // }}
                            className={
                              updatedItem?.cart_qty > 0
                                ? "productsCard active"
                                : "productsCard"
                            }
                            onClick={(e) => {
                              e.stopPropagation();
                              onlyServiceCartArray?.length > 0
                                ? (setModalDetail({
                                    show: true,
                                    flag: "ClearCart",
                                  }),
                                  setKey(Math.random()))
                                : productFun(item.id, index, item);
                            }}
                          >
                            <figure className="productImageBox">
                              <Image
                                src={item.image}
                                alt="image"
                                className="img-fluid ProductIcon"
                                width="500"
                                height="500"
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
                              <p className="productGender description-container">
                                {item.sub_category?.name}
                                <p className="productserviceName">
                                  {/* <div
                                  dangerouslySetInnerHTML={{
                                    __html: services?.description?.slice(
                                      0,
                                      200
                                    ),
                                  }}
                                /> */}
                                  <div className="description-container">
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: item?.description,
                                      }}
                                    />
                                  </div>
                                </p>
                              </p>

                              <div className="productCartPrice mt-2">
                                {item?.supplies?.[0]?.supply_prices?.[0]
                                  ?.offer_price &&
                                item?.supplies?.[0]?.supply_prices?.[0]
                                  ?.actual_price ? (
                                  <p className="productPrice">
                                    {amountFormat(
                                      item?.supplies?.[0]?.supply_prices?.[0]
                                        ?.offer_price
                                    )}
                                  </p>
                                ) : (
                                  <p className="productPrice">
                                    {amountFormat(
                                      item?.supplies?.[0]?.supply_prices?.[0]
                                        ?.selling_price
                                    )}
                                  </p>
                                )}
                                <div
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    checkAttributes(item, index, cartAddQty);
                                  }}
                                  className="cartProductImg"
                                >
                                  <Image
                                    src={Images.ShoppingOutline}
                                    alt="image"
                                    className="imgSize"
                                  />
                                  {updatedItem?.cart_qty > 0 && (
                                    <span className="productNum">
                                      {updatedItem?.cart_qty}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </article>
                          </div>
                          {/* {/ </Link> /} */}
                        </div>
                      );
                    })
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="row">
                  {/* {retailData?.getMainServicesLoad ? (
                    <div className="loaderOuter">
                      <span className="spinner-border spinner-border-sm mx-1"></span>
                    </div>
                  ) : */}
                  {mainServicesArray?.length == 0 ? (
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
                          className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 mb-3"
                        >
                          <div
                            className={
                              cartMatchService?.qty > 0
                                ? "productsCard active"
                                : "productsCard"
                            }
                            onClick={() => {
                              onlyProductCartArray?.length > 0
                                ? // ||
                                  // LOCAL_CART_ARRAY.length > 0
                                  (setModalDetail({
                                    show: true,
                                    flag: "ClearCart",
                                  }),
                                  setKey(Math.random()))
                                : getOneService(services?.id, index);
                            }}
                          >
                            <figure className="productImageBox">
                              <Image
                                src={services?.image}
                                alt="image"
                                className="img-fluid ProductIcon"
                                width="500"
                                height="500"
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
                                {/* <div
                                  dangerouslySetInnerHTML={{
                                    __html: services?.description?.slice(
                                      0,
                                      200
                                    ),
                                  }}
                                /> */}
                                <div className="description-container">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: services?.description,
                                    }}
                                  />
                                </div>
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
                                    " - " +
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
                                    {services?.pos_staff?.map((item, index) => {
                                      return (
                                        <Image
                                          key={index}
                                          src={
                                            item?.user?.user_profiles
                                              ?.profile_photo
                                              ? item?.user?.user_profiles
                                                  ?.profile_photo
                                              : Images.defaultUser
                                          }
                                          alt="image"
                                          className="img-fluid CardIcons"
                                          width="100"
                                          height="100"
                                          style={{
                                            borderColor: item?.color_code,
                                          }}
                                        />
                                      );
                                    })}
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
            <div className="productPagination">
              {parameter == "product"
                ? totalItems > recordsPerPage &&
                  mainProductArray?.length > 0 && (
                    <PaginationFooter
                      page={pageNumber}
                      limit={recordsPerPage}
                      setPage={(newPageNumber) => setPageNumber(newPageNumber)}
                      totalItems={totalItems}
                    />
                  )
                : serTotalItems > recordsSerPerPage &&
                  mainServicesArray?.length > 0 && (
                    <PaginationFooter
                      page={serPageNumber}
                      limit={recordsSerPerPage}
                      setPage={(newPageNumber) =>
                        setSerPageNumber(newPageNumber)
                      }
                      totalItems={serTotalItems}
                    />
                  )}
            </div>
          </div>
        </div>

        <RightSideBar
          showSidebar={showSidebar}
          parameter={parameter}
          setSelectedCartItems={setSelectedCartItems}
          bulkCartFunction={() => bulkCart()}
        />
      </div>
      {/* <Modal show={cartAlert} centered keyboard={false}>
        <CartAlert crossHandler={() => setCartAlert(false)} />
      </Modal> */}

      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={false}
        mediumWidth={false}
        ids={modalDetail.flag === "ClearCart" ? "ClearCart" : ""}
        child={
          modalDetail.flag === "ClearCart" ? (
            // <CustomProductAdd crosshandler={() => handleOnCloseModal()} />
            <CartAlert crossHandler={() => handleOnCloseModal()} />
          ) : (
            " "
          )
        }
        header={
          <>
            {modalDetail.flag === "ClearCart" ? (
              <h5 className="appointMain mb-0">
                Please clear {productCarts?.length > 0 ? "product" : "service"}{" "}
                cart
              </h5>
            ) : (
              ""
            )}
          </>
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};
export default Retails;
