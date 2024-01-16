import React, { useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addTocart,
  productCart,
  selectRetailData,
} from "../../redux/slices/retails";
import { selectLoginAuth } from "../../redux/slices/auth";
import { Router, useRouter } from "next/router";

const AddProduct = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const retailData = useSelector(selectRetailData);
  const authData = useSelector(selectLoginAuth);
  const oneProductData = retailData?.oneProductData;
  const productDetail = oneProductData?.product_detail;
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const sizeAndColorArray = productDetail?.supplies?.[0]?.attributes;
  const sizeArray = sizeAndColorArray?.filter((item) => item.name == "Size");
  const colorArray = sizeAndColorArray?.filter((item) => item.name == "Color");
  const [count, setCount] = useState(1);

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
          cb(res) {
            dispatch(productCart());
          },
        })
      );
      router.push("/Retails?parameter=product");
    } else {
      alert("no");
    }
  };
  return (
    <>
      <div className="productDetailSection">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="commanOuter me-0 commonSubOuter productDetailLeft">
              <div className="newServiceDetail">
                <Link
                  //  href="/Retails"
                  href="/Retails?parameter=product"
                >
                  <Image
                    src={Images.boldLeftArrow}
                    alt="leftarrow image"
                    className="img-fluid"
                  />
                </Link>

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
                <button type="button" className="productId">
                  <span className="productDot"></span>
                  {productDetail?.sku}
                </button>
                <p className="linkHeading">
                  $
                  {
                    productDetail?.supplies?.[0]?.supply_prices?.[0]
                      ?.selling_price
                  }
                </p>
              </div>
              {colorArray?.length > 0 && (
                <div className="colorChart">
                  <p className="priceHeading">Color</p>
                  <article className="manual-entryColor">
                    <span className="Pink"></span>
                    <span className="Red"></span>
                    <span className="Yellow active"></span>
                    <span className="Blue"></span>
                    <span className="Black"></span>
                    <span className="White"></span>
                  </article>
                </div>
              )}
              {sizeArray?.length > 0 && (
                <div className="sizeChart">
                  <p className="priceHeading">Size</p>
                  <article className="productSizeBtnBox">
                    <button className="productSizeBtn">S</button>
                    <button className="productSizeBtn active">M</button>
                    <button className="productSizeBtn">L</button>
                    <button className="productSizeBtn">XL</button>
                    <button className="productSizeBtn ">XXL</button>
                  </article>
                </div>
              )}

              <div className="incrementBtn productIncrement">
                <i
                  className="fa-solid fa-minus plusMinus"
                  onClick={() => (count == 1 ? void 0 : setCount(count - 1))}
                  isClickEnabled={false}
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
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <div className="commanOuter  ms-0 commonSubOuter productDetailRight">
              <h2 className="appointMain">Product details</h2>
              <div className="productData">
                {productDetailArray?.map((item, index) => (
                  <div className="productSubData mb-2">
                    <h4 className="detailText">{item?.key}</h4>
                    <h4 className="detailText">{item?.value}</h4>
                  </div>
                ))}
              </div>
              <div className="stockHandSetion">
                <h4 className="payHeading text-start m-0">Stock on hand</h4>
                <div className="stockSub">
                  <div className="stockSlider"></div>
                  <div className="stockBox">
                    <div className="stockSubBox">
                      <div className="flexDiv">
                        <h4 className="dayTimeText">Sizes</h4>
                        <h4 className="dayTimeText">Stock</h4>
                        <h4 className="dayTimeText">Notify</h4>
                      </div>
                      <div className="flexDiv mt-1">
                        <div className="blueSize">
                          <h6 className="sizeText">S</h6>
                        </div>
                        <h6 className="sizeText">15</h6>
                        <figure className="noNotify">
                          <Image
                            src={Images.lightBell}
                            alt="leftarrow image"
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                      <div className="flexDiv mt-1">
                        <div className="redSize">
                          <h6 className="sizeText">S</h6>
                        </div>
                        <div className="redStock">
                          <h6 className="sizeText">15</h6>
                        </div>
                        <figure className="Notify">
                          <Image
                            src={Images.darkBell}
                            alt="leftarrow image"
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                      <div className="flexDiv mt-1">
                        <div className="yellowSize">
                          <h6 className="sizeText">S</h6>
                        </div>
                        <div className="yellowStock">
                          <h6 className="sizeText">15</h6>
                        </div>
                        <figure className="Notify">
                          <Image
                            src={Images.darkBell}
                            alt="leftarrow image"
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                      <div className="flexDiv mt-1">
                        <div className="blueSize">
                          <h6 className="sizeText">S</h6>
                        </div>
                        <h6 className="sizeText">15</h6>
                        <figure className="noNotify">
                          <Image
                            src={Images.lightBell}
                            alt="leftarrow image"
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="stockSubBox">
                      <div className="flexDiv">
                        <h4 className="dayTimeText">Sizes</h4>
                        <h4 className="dayTimeText">Stock</h4>
                        <h4 className="dayTimeText">Notify</h4>
                      </div>
                      <div className="flexDiv mt-1">
                        <div className="blueSize">
                          <h6 className="sizeText">S</h6>
                        </div>
                        <h6 className="sizeText">15</h6>
                        <figure className="noNotify">
                          <Image
                            src={Images.lightBell}
                            alt="leftarrow image"
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                      <div className="flexDiv mt-1">
                        <div className="redSize">
                          <h6 className="sizeText">S</h6>
                        </div>
                        <div className="redStock">
                          <h6 className="sizeText">15</h6>
                        </div>
                        <figure className="Notify">
                          <Image
                            src={Images.darkBell}
                            alt="leftarrow image"
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                      <div className="flexDiv mt-1">
                        <div className="yellowSize">
                          <h6 className="sizeText">S</h6>
                        </div>
                        <div className="yellowStock">
                          <h6 className="sizeText">15</h6>
                        </div>
                        <figure className="Notify">
                          <Image
                            src={Images.darkBell}
                            alt="leftarrow image"
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                      <div className="flexDiv mt-1">
                        <div className="blueSize">
                          <h6 className="sizeText">S</h6>
                        </div>
                        <h6 className="sizeText">15</h6>
                        <figure className="noNotify">
                          <Image
                            src={Images.lightBell}
                            alt="leftarrow image"
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="stockSubBox">
                      <div className="flexDiv">
                        <h4 className="dayTimeText">Sizes</h4>
                        <h4 className="dayTimeText">Stock</h4>
                        <h4 className="dayTimeText">Notify</h4>
                      </div>
                      <div className="flexDiv mt-1">
                        <div className="blueSize">
                          <h6 className="sizeText">S</h6>
                        </div>
                        <h6 className="sizeText">15</h6>
                        <figure className="noNotify">
                          <Image
                            src={Images.lightBell}
                            alt="leftarrow image"
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                      <div className="flexDiv mt-1">
                        <div className="redSize">
                          <h6 className="sizeText">S</h6>
                        </div>
                        <div className="redStock">
                          <h6 className="sizeText">15</h6>
                        </div>
                        <figure className="Notify">
                          <Image
                            src={Images.darkBell}
                            alt="leftarrow image"
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                      <div className="flexDiv mt-1">
                        <div className="yellowSize">
                          <h6 className="sizeText">S</h6>
                        </div>
                        <div className="yellowStock">
                          <h6 className="sizeText">15</h6>
                        </div>
                        <figure className="Notify">
                          <Image
                            src={Images.darkBell}
                            alt="leftarrow image"
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                      <div className="flexDiv mt-1">
                        <div className="blueSize">
                          <h6 className="sizeText">S</h6>
                        </div>
                        <h6 className="sizeText">15</h6>
                        <figure className="noNotify">
                          <Image
                            src={Images.lightBell}
                            alt="leftarrow image"
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="productAvailable">
                <h4 className="payHeading text-start m-0">Availability</h4>
                <div className="stockBox mt-3">
                  {availblityArray?.map((item, index) => (
                    <div className="storeAvailable">
                      <Image
                        src={item?.image}
                        alt="rightArrow"
                        className="img-fluid"
                      />
                      <div className="roundCheck mb-0">
                        <input type="checkbox" checked={item?.toggle} />
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
