import React, { useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addTocart,
  checkSuppliedVariant,
  productCart,
  selectRetailData,
} from "../../redux/slices/retails";
import { selectLoginAuth } from "../../redux/slices/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { amountFormat } from "../../utilities/globalMethods";

const AddProduct = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const retailData = useSelector(selectRetailData);
  const authData = useSelector(selectLoginAuth);
  const oneProductData = retailData?.oneProductData;
  const productDetail = oneProductData?.product_detail;
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const attrsArr = productDetail?.supplies[0]?.attributes;
  const sizeAndColorArray = productDetail?.supplies?.[0]?.attributes;
  const sizeArray = sizeAndColorArray?.filter(
    (item) => item.name?.toLowerCase() == "size"
  );
  const colorArray = sizeAndColorArray?.filter(
    (item) => item.name?.toLowerCase() == "color"
  );
  const [count, setCount] = useState(1);
  const [colorId, setColorId] = useState(null);
  const [sizeId, setSizeId] = useState(null);

  const stockHandArray = productDetail?.supplies?.[0]?.supply_variants;

  // avaiblity option
  let deliveryOption =
    retailData?.oneProductData?.product_detail?.supplies?.[0]?.delivery_options?.split(
      ","
    );

  let deliveryOptionImage = deliveryOption?.find((item) => {
    return item == "1";
  });
  let inStoreImage = deliveryOption?.find((item) => {
    return item == "3";
  });
  let shippingImage = deliveryOption?.find((item) => {
    return item == "4";
  });

  const productDetailArray = [
    {
      id: 1,
      key: "SKU",
      value: productDetail?.sku,
    },
    {
      id: 2,
      key: "Barcode",
      value: productDetail?.barcode,
    },
    {
      id: 3,
      key: "Unit Type",
      value: productDetail?.type,
    },
    {
      id: 4,
      key: "Unit Weight",
      value: productDetail?.weight + " " + productDetail?.weight_unit,
    },
    {
      id: 5,
      key: "Other Locations",
      value: "NA",
    },
  ];
  const availblityArray = [
    {
      id: 1,
      image: Images.storeDark,
      toggle: inStoreImage == "3" ? true : false,
      name: "Store",
    },
    {
      id: 2,
      image: Images.deliverDark,
      toggle: deliveryOptionImage == "1" ? true : false,
      name: "Delivery",
    },
    {
      id: 3,
      image: Images.PlaneDark,
      toggle: shippingImage == "4" ? true : false,
      name: "Shipping",
    },
  ];

  const addToCartHandler = () => {
    if (productDetail?.supplies?.[0]?.attributes?.length === 0) {
      let params = {
        product_type: "product",
        seller_id: sellerId,
        product_id: productDetail?.id,
        qty: count,
        supply_id: productDetail?.supplies?.[0]?.id?.toString(),
        supply_price_id:
          productDetail?.supplies?.[0]?.supply_prices[0]?.id?.toString(),
      };
      dispatch(
        addTocart({
          ...params,
          cb: (res) => {
            // router.back();

            dispatch(productCart());
            router.push("/Retails?parameter=product");
          },
        })
      );
    } else {
      if (colorArray?.length >= 1 && colorId === null) {
        toast.error("Please select the Color");
      } else if (sizeArray?.length >= 1 && sizeId === null) {
        toast.error("Please select the Size");
      } else {
        const attrIds = [
          {
            order: attrsArr.findIndex(
              (attr) => attr?.name?.toLowerCase() === "size"
            ),
            id: sizeId,
          },
          {
            order: attrsArr.findIndex(
              (attr) => attr?.name?.toLowerCase() === "color"
            ),
            id: colorId,
          },
        ];
        let params = {
          colorAndSizeId: attrIds
            .sort((a, b) => a.order - b.order)
            .filter((ele) => ele.order != -1)
            .map((el) => el.id)
            .join(),
          supplyId: productDetail?.supplies?.[0]?.id,
        };
        dispatch(
          checkSuppliedVariant({
            ...params,
            cb(res) {
              let params = {
                product_type: "product",
                seller_id: sellerId,
                product_id: productDetail?.id,
                qty: count,
                supply_id: productDetail?.supplies?.[0]?.id?.toString(),
                supply_price_id:
                  productDetail?.supplies?.[0]?.supply_prices[0]?.id?.toString(),
                supply_variant_id: res?.id?.toString(),
              };
              dispatch(
                addTocart({
                  ...params,
                  cb: (res) => {
                    router.back();

                    dispatch(productCart());
                    // router.push("/Retails?parameter=product");
                  },
                })
              );
            },
          })
        );
      }
    }
  };
  return (
    <>
      <div className="productDetailSection" style={{ border: 1 }}>
        <div className="row">
          <div className="col-xl-5 col-lg-12">
            <div className="commanOuter me-0 commonSubOuter productDetailLeft">
              <div className="newServiceDetail">
                <div
                  onClick={() => {
                    router.back();
                  }}
                >
                  <Image
                    src={Images.boldLeftArrow}
                    alt="leftarrow image"
                    className="img-fluid"
                  />
                </div>

                <div className="addserviceInfo ms-3">
                  <h4 className="loginMain m-0 text-start">
                    Add a new product
                  </h4>
                  <p className="addServicePara">
                    Configure the service to add it to the cart
                  </p>
                </div>
              </div>
              <div className="productInfo">
                <figure className="productRefresh">
                  <Image
                    src={productDetail?.image}
                    alt="leftarrow image"
                    className="productBag"
                    width="100"
                    height="100"
                  />
                  <figure className="rotateImage">
                    <Image
                      src={Images.rotateArrow}
                      alt="rotateImage"
                      className="img-fluid  "
                    />
                  </figure>
                </figure>
                <h4 className="loginMain mt-4">{productDetail?.name}</h4>
                {productDetail?.sku && (
                  <div className="productId">
                    <span className="productDot"></span>
                    {productDetail?.sku}
                  </div>
                )}

                <p className="linkHeading">
                  {amountFormat(
                    productDetail?.supplies?.[0]?.supply_prices?.[0]
                      ?.selling_price
                  )}
                </p>
                {productDetail?.supplies?.[0]?.supply_prices?.[0]
                  ?.offer_applicable_qty && (
                  <p className="linkHeading">
                    {" "}
                    Offer qty :{" "}
                    {
                      productDetail?.supplies?.[0]?.supply_prices?.[0]
                        ?.offer_applicable_qty
                    }
                    (
                    {amountFormat(
                      productDetail?.supplies?.[0]?.supply_prices?.[0]
                        ?.offer_price
                    )}
                    )
                  </p>
                )}
              </div>
              {colorArray?.length > 0 && (
                <div className="colorChart">
                  <p className="priceHeading">Color</p>
                  <article className="manual-entryColor">
                    <div
                      style={{
                        display: "flex",
                        overflowX: "scroll",
                      }}
                    >
                      {colorArray?.[0]?.values?.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => setColorId(item?.id)}
                          className=""
                          style={{
                            width: colorId == item?.id ? "70px" : "30px",
                            height: "25px",
                            borderRadius: "35%",
                            backgroundColor: item?.name,
                            border: "1px solid black",
                            marginRight: "10px",
                          }}
                        ></div>
                      ))}
                    </div>
                  </article>
                </div>
              )}
              {sizeArray?.length > 0 && (
                <div className="sizeChart">
                  <p className="priceHeading">Size</p>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {sizeArray?.[0]?.values?.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => setSizeId(item?.id)}
                        style={{
                          width: "85px",
                          height: "45px",
                          border: "1px solid black",
                          borderRadius: "15%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          background:
                            sizeId == item?.id ? "#263682" : "transparent",
                          marginRight: "10px",
                        }}
                      >
                        <p
                          style={{
                            color: sizeId == item?.id ? "white" : "#263682",
                          }}
                        >
                          {item?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* <article className="productSizeBtnBox"> */}

                  {/* </article> */}
                </div>
              )}
              <div className="incrementBtn productIncrement">
                <i
                  className="fa-solid fa-minus plusMinus"
                  onClick={() => (count == 1 ? void 0 : setCount(count - 1))}
                  isclickEnabled={false}
                ></i>
                {/* <input
                  className="form-control addBtnControl"
                  type="number"
                  placeholder="1"
                /> */}
                <h1 className="form-control addBtnControl">{count}</h1>
                <i
                  className="fa-solid fa-plus plusMinus"
                  onClick={() => setCount(count + 1)}
                ></i>
              </div>
              {/* {retailData?.checkSuppliedVariantLoad ||
              retailData?.addTocartLoad ? ( */}

              {retailData?.addTocartLoad ||
              retailData?.productCartLoad ||
              retailData?.checkSuppliedVariantLoad ? (
                <button
                  className="nextverifyBtn w-100 mt-3"
                  type="submit"
                  onClick={() => addToCartHandler()}
                  disabled={true}
                >
                  Add Item
                  <span className="spinner-border spinner-border-sm mx-1"></span>
                </button>
              ) : (
                <button
                  className="nextverifyBtn w-100 mt-3"
                  type="submit"
                  onClick={() => addToCartHandler()}
                >
                  Add Item
                  <Image
                    src={Images.serviceCart}
                    alt="rightArrow"
                    className="img-fluid rightImg ms-2"
                  />
                </button>
              )}
            </div>
          </div>
          <div className="col-xl-7 col-lg-12">
            <div className="commanOuter  ms-0 commonSubOuter productDetailRight">
              <h2 className="appointMain">Product details</h2>
              <div className="productData">
                {productDetailArray?.map((item, index) => (
                  <div className="productSubData mb-2" key={index}>
                    <h4 className="detailText">{item?.key}</h4>
                    <h4 className="detailText">{item?.value}</h4>
                  </div>
                ))}
              </div>
              {productDetail?.supplies?.[0]?.supply_variants?.length > 0 && (
                <div className="stockHandSetion">
                  <h4 className="payHeading text-start m-0">Stock on hand</h4>
                  <div className="stockSub">
                    <div className="stockMain">
                      <div className="stockEmpty"></div>
                      <div className="stockColumn">
                        <h4 className="appointSub m-0">Color/Size</h4>
                        <h4 className="appointSub m-0">Stock</h4>
                      </div>
                      <div className="stockEmpty"></div>
                    </div>
                    {stockHandArray?.map((item, index) => {
                      const variant = JSON.parse(
                        item?.attribute_variant?.variants
                      );
                      const productSize = variant?.filter(
                        (item) => item.attribute_name?.toLowerCase() == "size"
                      );
                      const productColor = variant?.filter(
                        (item) => item.attribute_name?.toLowerCase() == "color"
                      );
                      return (
                        <div className="stockMain mt-2" key={index}>
                          <div className="stockImageBox">
                            <Image
                              src={item?.image}
                              className="img-fluid stockImg"
                              width="100"
                              height="100"
                            />
                          </div>
                          <div className="stockColor">
                            <div className="colorSizeBox">
                              {colorArray?.length >= 1 && (
                                <div className="d-flex align-items-center">
                                  <h4 className="appointSub my-0 me-2">
                                    color :
                                  </h4>
                                  <span
                                    className="productColorBox"
                                    style={{
                                      backgroundColor:
                                        productColor?.[0]?.attribute_value_name,
                                    }}
                                  ></span>
                                </div>
                              )}

                              {sizeArray?.length >= 1 && (
                                <h4 className="appointSub mt-1">
                                  Size :{" "}
                                  {productSize?.[0]?.attribute_value_name}
                                </h4>
                              )}
                            </div>
                            <h4
                              className="cancelHeading"
                              style={{
                                color: item?.stock <= 10 ? "red" : "black",
                              }}
                            >
                              {item?.stock}
                            </h4>
                          </div>
                          <div
                            className="stockImageBox"
                            style={{ opacity: item?.stock <= 10 ? 0.5 : 1 }}
                            onClick={() =>
                              item?.stock <= 10 ? alert("coming soom") : void 0
                            }
                          >
                            <Image
                              src={Images.lightBell}
                              className="img-fluid smallImg"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="productAvailable">
                <h4 className="payHeading text-start m-0">Availability</h4>
                <div className="stockBox mt-3">
                  {availblityArray?.map((item, index) => (
                    <div className="storeAvailable" key={index}>
                      <Image
                        src={item?.image}
                        alt="rightArrow"
                        className="img-fluid"
                      />
                      <div className="roundCheck mb-0">
                        <input type="checkbox" defaultChecked={item?.toggle} />
                        <label className="amountText  ms-2">{item?.name}</label>
                      </div>
                    </div>
                  ))}

                  {/* <div className="storeAvailable">
                    <Image
                      src={Images.deliverDark}
                      alt="rightArrow"
                      className="img-fluid"
                    />
                    <div className="roundCheck mb-0">
                      <input type="checkbox" />
                      <label className="amountText  ms-2">Store</label>
                    </div>
                  </div>
                  <div className="storeAvailable">
                    <Image
                      src={Images.PlaneDark}
                      alt="rightArrow"
                      className="img-fluid"
                    />
                    <div className="roundCheck mb-0">
                      <input type="checkbox" />
                      <label className="amountText  ms-2">Store</label>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
