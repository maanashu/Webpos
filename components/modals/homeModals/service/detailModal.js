import React from 'react'
import * as Images from "../../../../utilities/images";
import Image from "next/image";
import { selectRetailData } from '../../../../redux/slices/retails';
import { useSelector } from 'react-redux';
import { amountFormat } from '../../../../utilities/globalMethods';

const DetailModal = (props) => {

    const stockHandArray = props?.productDetail?.supplies?.[0]?.supply_variants;
    const retailData = useSelector(selectRetailData);
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
            value: props?.productDetail?.sku,
        },
        {
            id: 2,
            key: "Barcode",
            value: props?.productDetail?.barcode,
        },
        {
            id: 3,
            key: "Unit Type",
            value: props?.productDetail?.type,
        },
        {
            id: 4,
            key: "Unit Weight",
            value: props?.productDetail?.weight + " " + props?.productDetail?.weight_unit,
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


    console.log(props?.productDetail, "dddddddddddddddddddddddd");
    return (
        <>
            <div className='detailModalSection'>
                <div className="detailSubBox">
                    <Image
                        src={props?.productDetail?.image}
                        alt="image"
                        className="img-fluid productOverImg"
                        width="100" height="100"
                    />
                    <div className='detailSubRight'>

                    <h5 className="loginMain m-0 text-start">{props?.productDetail?.name}</h5>
                        <div className='loginSub text-start' dangerouslySetInnerHTML={{ __html: (props?.productDetail?.description.length > 30 ? `${props?.productDetail?.description.slice(0, 30)}...` : props?.productDetail?.description) }} />
                        {/* <h5 className="linkHeading m-0 text-start">vitamin products</h5>
                        <h5 className="loginSub text-start ">vitamin Product Descriptions value </h5> */}
                    </div>
                </div>

                
                <div className='priceBox flexContent'>
                    <h5 className='linkHeading m-0'>Price</h5>
                    <h5 className='appointSub m-0'>{amountFormat(
                        props?.productDetail?.supplies?.[0]?.supply_prices?.[0]
                            ?.selling_price
                    )}</h5>
                </div>
                <div className='availableScroll'>
                    <div className="deviceInfo">
                        {productDetailArray?.map((item, index) => (
                            <>
                                <div className={"flexDiv"} key={index}>
                                    <h4 className="appointSub m-0">{item?.key}</h4>
                                    <h4 className="appointSub m-0">{item?.value}</h4>
                                </div>
                                {!(productDetailArray?.length == index + 1) && <hr className="cartDivide my-2" />}
                            </>

                        ))}
                    </div>

                    <div className="deviceInfo">
                        <h5 className='appointSub'>Available For Selling</h5>


                        {availblityArray?.map((item, index) => (
                            <div className="detailAvailable" key={index}>
                                <h4 className="linkHeading">{item?.name}</h4>
                                <div className="roundCheck mb-0 darkCheck">
                                    <input
                                        type="checkbox"
                                        checked={item?.toggle}
                                        disabled
                                    />
                                    <label className="amountText d-none "></label>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailModal