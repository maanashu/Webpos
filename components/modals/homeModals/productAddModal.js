import React, { useState } from "react";
import * as Images from "../../../utilities/images"
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
    addTocart,
    checkSuppliedVariant,
    productCart,
    selectRetailData,
} from "../../../redux/slices/retails";
import { selectLoginAuth } from "../../../redux/slices/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { amountFormat } from "../../../utilities/globalMethods";

const ProductAddModal = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const retailData = useSelector(selectRetailData);
    const authData = useSelector(selectLoginAuth);
    const productDetail = props?.selectedProduct;
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
                        props?.close()
                        dispatch(productCart());
                        // router.push("/Retails?parameter=product");
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
                                        // router.back();
                                        dispatch(productCart());
                                        props?.close()
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
            {/* <div className="productDetailSection" style={{ border: 1 }}>
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
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
                                        width="500"
                                        height="500"
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
                                                    style={{
                                                        width: "35px",
                                                        height: "35px",
                                                        borderRadius: "100%",
                                                        ...(colorId == item?.id && {
                                                            border: "1px solid black",
                                                        }),
                                                        marginRight: "10px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <div
                                                        onClick={() => setColorId(item?.id)}
                                                        className="border border-dark"
                                                        style={{
                                                            width: "25px",
                                                            height: "25px",
                                                            borderRadius: "100%",
                                                            backgroundColor: item?.name,
                                                        }}
                                                    ></div>
                                                </div>
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
                                    <article className="productSizeBtnBox">

                                    </article>
                                </div>
                            )}
                            <div className="incrementBtn productIncrement">
                                <i
                                    className="fa-solid fa-minus plusMinus"
                                    onClick={() => (count == 1 ? void 0 : setCount(count - 1))}
                                    isclickEnabled={false}
                                ></i>
                                <input
                                    className="form-control addBtnControl"
                                    type="number"
                                    placeholder="1"
                                />
                                <h1 className="form-control addBtnControl">{count}</h1>
                                <i
                                    className="fa-solid fa-plus plusMinus"
                                    onClick={() => setCount(count + 1)}
                                ></i>
                            </div>
                            {retailData?.checkSuppliedVariantLoad ||
                                retailData?.addTocartLoad ? (

                                { retailData?.addTocartLoad ||
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
                </div>
            </div> */}
            <div className="productViewDetail">
                <div className="flexContent productViewBx">
                    <div>
                        <h5 className="loginMain m-0 text-start">vitamin products</h5>
                        <h5 className="loginSub text-start ">vitamin Product Descriptions value </h5>
                    </div>
                    <h5 className="cancelOrderText" >54</h5>
                </div>
                <div className='incrementBtn productIncrement'>
                    <i className="fa-solid fa-minus plusMinus"></i>
                    <input className="form-control addBtnControl" type="number" placeholder="1" />
                    <i className="fa-solid fa-plus plusMinus"></i>
                </div>
            </div>
        </>
    );
};

export default ProductAddModal;
