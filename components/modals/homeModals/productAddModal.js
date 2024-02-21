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
import CustomModal from "../../customModal/CustomModal";
import DetailModal from "./service/detailModal";

const ProductAddModal = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const retailData = useSelector(selectRetailData);
    const authData = useSelector(selectLoginAuth);
    const productDetail = props?.selectedProduct;
    const sellerId = authData?.usersInfo?.payload?.uniqe_id;
    const attrsArr = productDetail?.supplies[0]?.attributes;
    const sizeAndColorArray = productDetail?.supplies?.[0]?.attributes;
    const [key, setKey] = useState(Math.random());
    const [modalDetail, setModalDetail] = useState({
        show: false,
        title: "",
        flag: "",
    });

    const handleOnCloseModal = async () => {
        setModalDetail({
            show: false,
            title: "",
            flag: "",
        });
        setKey(Math.random());
    };
    const handleUserProfile = (flag) => {
        setModalDetail({
            show: true,
            flag: flag,
            type: flag,
        });
        setKey(Math.random());
    };

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
                        handleOnCloseModal()
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
                                        handleOnCloseModal()
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
            <div className="addCustomerBtn  filterBtn productAddHeader">
                <button
                    className="serviceCancel "
                    type="button"
                    onClick={() => router.push('/Retails?parameter=product')} >
                    Back To Cart
                </button>
                <button
                    className="nextverifyBtn "
                    type="button" onClick={() => {
                        handleUserProfile("detailModal")
                    }}>
                    Details
                </button>
                <button
                    className="addBtnCart "
                    type="button"
                    onClick={() => addToCartHandler()}
                    disabled={
                        retailData?.addTocartLoad ||
                        retailData?.productCartLoad ||
                        retailData?.checkSuppliedVariantLoad
                    }>
                    Add To Cart
                    {
                        (retailData?.addTocartLoad ||
                            retailData?.productCartLoad ||
                            retailData?.checkSuppliedVariantLoad) &&
                        <span className="spinner-border spinner-border-sm mx-1"></span>
                    }
                </button>

                <p onClick={() => props?.close()} className="modal_cancel">
                    <Image
                        src={Images.modalCross}
                        alt="modalCross"
                        className="img-fluid"
                    />
                </p>
            </div>

            <div className="productViewDetail">
                <div className="flexContent productViewBx">
                    <div>
                        <h5 className="loginMain m-0 text-start">{productDetail?.name}</h5>
                        {/* <h5 className="loginSub text-start ">{productDetail?.description} </h5> */}
                        <div className='loginSub text-start' dangerouslySetInnerHTML={{ __html: (productDetail?.description.length > 30 ? `${productDetail?.description.slice(0, 30)}...` : productDetail?.description) }} />
                    </div>
                    <h5 className="cancelOrderText" >{amountFormat(
                        productDetail?.supplies?.[0]?.supply_prices?.[0]
                            ?.selling_price
                    )}</h5>
                </div>

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
                        value={count}
                        onChange={(e) => setCount(Number(e.target.value))}
                    />
                    <i
                        className="fa-solid fa-plus plusMinus"
                        onClick={() => setCount(count + 1)}
                    ></i>
                </div>

            </div>



            <CustomModal
                key={key}
                show={modalDetail.show}
                backdrop="static"
                showCloseBtn={false}
                isRightSideModal={true}
                mediumWidth={false}
                className={
                    modalDetail.flag === "trackingmodal"
                        ? "commonWidth customContent"
                        : ""
                }
                ids={modalDetail.flag === "trackingmodal" ? "trackingModal" : modalDetail.flag === "productadd" ? "productOverview" : modalDetail.flag === "detailModal" ? "detailModal" : ""}
                child={
                    modalDetail.flag === "detailModal" ? (
                        <DetailModal close={(e) => handleOnCloseModal(e)} productDetail={productDetail} />
                    ) :
                        (
                            ""
                        )
                }
                header={
                    modalDetail.flag === "trackingmodal" ? (
                        <>
                            <p onClick={() => closeModal()} className="modal_cancel">
                                <Image
                                    src={Images.modalCross}
                                    alt="modalCross"
                                    className="img-fluid"
                                />
                            </p>
                        </>
                    ) :
                        modalDetail.flag === "detailModal" ? (
                            <>
                                <h5 className="appointMain m-0 text-start">vitamin bottle </h5>
                                <div className="addCustomerBtn  filterBtn productAddHeader">
                                    <button
                                        className="serviceCancel "
                                        type="buton"
                                        onClick={() => handleOnCloseModal()}
                                    >
                                        Back
                                    </button>
                                    <button
                                        className="nextverifyBtn "
                                        type="button"
                                        onClick={() => addToCartHandler()}
                                        disabled={
                                            retailData?.addTocartLoad ||
                                            retailData?.productCartLoad ||
                                            retailData?.checkSuppliedVariantLoad
                                        }>
                                        Add To Cart
                                        {
                                            (retailData?.addTocartLoad ||
                                                retailData?.productCartLoad ||
                                                retailData?.checkSuppliedVariantLoad) &&
                                            <span className="spinner-border spinner-border-sm mx-1"></span>
                                        }
                                    </button>
                                </div>
                            </>
                        ) :
                            (
                                ""
                            )
                }
                onCloseModal={(e) => handleOnCloseModal(e)}
            />

        </>
    );
};

export default ProductAddModal;
