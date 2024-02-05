import React from "react";
import DeliveryRightSidebar from "../../components/commanComonets/Delivery/deliveryRightSidebar";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { useSelector } from "react-redux";
import { deliveryData } from "../../redux/slices/delivery";
import moment from "moment-timezone";
import { selectLoginAuth } from "../../redux/slices/auth";

const MapleOrder = ({
  orderDetail,
  selectedOrderIndex,
  acceptHandler,
  declineHandler,
  trackHandler,
  orderListType,
  isLoading,
  showInvoice,
  setShowInvoice,
}) => {
  const { orderList } = useSelector(deliveryData);
  const authData = useSelector(selectLoginAuth);

  const orderData =
    selectedOrderIndex !== null && selectedOrderIndex !== undefined
      ? (orderList?.data && orderList?.data[selectedOrderIndex]) || null
      : (orderList?.data && orderList?.data[0]) || null;
  console.log("authData-==--=", JSON.stringify(authData));
  return (
    <>
      {/* <div className='mapleOrderSection deliverySection'>
                <div className='deliverMain w-100'>
                    <div className='row '>
                        <div className='col-lg-5'>
                            <div className='deliveryOuter me-0 mapleLeft'>
                                <div className='confirmRightSub confirmAddress'>
                                    <h2 className='mapleHeading text-center'>Maple Inc.</h2>
                                    <h4 className='mapleAddress text-center'>500 Rideau St. Ottawa, ON 5Z2 K1L</h4>
                                    <h4 className='mapleAddress text-center p-0'>+1 (438) 459-0226</h4>
                                </div>
                                <div className='mapleProductDetails confirmRightSub'>
                                    <div className='flexBox mapleProductDetailsBox'>
                                        <div className='flexbase'>
                                            <p className='mapleProductcount'>× 1</p>
                                            <article className='ms-3'>
                                                <p className='mapleProductHeading'>Lightweight Stylish Casual Daypack</p>
                                                <span className='mapleProductcount'>Yellow / M</span>
                                            </article>
                                        </div>
                                        <article>
                                            <p className='mapleProductPrice'>$90.00</p>
                                        </article>
                                    </div>
                                    <div className='flexBox mapleProductDetailsBox'>
                                        <div className='flexbase'>
                                            <p className='mapleProductcount'>× 1</p>
                                            <article className='ms-3'>
                                                <p className='mapleProductHeading'>Lightweight Stylish Casual Daypack</p>
                                                <span className='mapleProductcount'>Yellow / M</span>
                                            </article>
                                        </div>
                                        <article>
                                            <p className='mapleProductPrice'>$90.00</p>
                                        </article>
                                    </div>
                                    <div className='flexBox mapleProductDetailsBox'>
                                        <div className='flexbase'>
                                            <p className='mapleProductcount'>× 1</p>
                                            <article className='ms-3'>
                                                <p className='mapleProductHeading'>Lightweight Stylish Casual Daypack</p>
                                                <span className='mapleProductcount'>Yellow / M</span>
                                            </article>
                                        </div>
                                        <article>
                                            <p className='mapleProductPrice'>$90.00</p>
                                        </article>
                                    </div>
                                </div>
                                <div className='flexBox mapleInvoiceBox confirmRightSub'>
                                    <article>
                                        <p className='mapleProductPrice'>Payment Option</p>
                                        <p className='mapleProductHeading'>Cash</p>
                                        <p className='mapleProductPrice'>Invoice</p>
                                        <p className='mapleProductHeading'># 9836-1238</p>
                                    </article>
                                    <article>
                                        <p className='mapleProductPrice'>Date</p>
                                        <p className='mapleProductHeading'>Wed 10/10/23</p>
                                        <p className='mapleProductPrice'>POS No.</p>
                                        <p className='mapleProductHeading'>#Front-CC03</p>
                                    </article>
                                    <article>
                                        <p className='mapleProductPrice'>Mode</p>
                                        <p className='mapleProductHeading'>Walk-In</p>
                                        <p className='mapleProductPrice'>User UD</p>
                                        <p className='mapleProductHeading'>****331</p>
                                    </article>
                                </div>
                                <div className='flexBox maplePriceBox'>
                                    <article>
                                        <p className='productName'>Subtotal</p>
                                        <p className='productName'>Discount</p>
                                        <p className='productName'>Shipping</p>
                                        <p className='productName fw-bold'>Total</p>
                                    </article>
                                    <article>
                                        <p className='productName'>$933.50</p>
                                        <p className='productName'>15% ($13.50)</p>
                                        <p className='productName'>$29.00</p>
                                        <p className='totalBtn'>$304.75</p>
                                    </article>
                                </div>
                                <div className='confirmFooter'>
                                    <Image src={Images.Logo} alt='logo' className='img-fluid logo' />
                                    <Image src={Images.barCodeScanImg} alt='barCodeScanImg' className='img-fluid barCodeScanImg' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className=' deliveryOuter assignMapRight ms-0'>
                                <Image src={Images.map} alt="map Image" className="mapImg" />
                                <div className='orderStatusBox'>
                                    <div className='orderFlex'>
                                        <Image src={Images.orderDriver} alt="map Image" className="img-fluid" />
                                        <h4 className='customerLink '>Order Status</h4>
                                    </div>
                                    <div className='orderTrackStatus'>
                                        <div className='subOrderTime'>
                                            <div className='positionImg'>
                                                <Image src={Images.dotStep} alt="map Image" className="img-fluid" />
                                                <Image src={Images.lineStep} alt="map Image" className="img-fluid lineStepImg" />
                                            </div>
                                            <div className='positionText'>
                                                <h4 className='appointSub mt-0'>Verify Code</h4>
                                                <h4 className='orderPara'>****</h4>
                                            </div>
                                        </div>
                                        <div className='subOrderTime'>
                                            <div className='positionImg'>
                                                <Image src={Images.dotStep} alt="map Image" className="img-fluid dotStepImg" />
                                                <Image src={Images.lineStep} alt="map Image" className="img-fluid lineStepImg" />
                                            </div>
                                            <div className='positionText'>
                                                <h4 className='appointSub mt-0'>Delivered</h4>
                                                <h4 className='orderPara'>Within 10 minutes</h4>
                                            </div>
                                        </div>
                                        <div className='subOrderTime'>
                                            <div className='positionImg'>
                                                <Image src={Images.dotStep} alt="map Image" className="img-fluid dotStepImg" />
                                                <Image src={Images.lineStep} alt="map Image" className="img-fluid lineStepImg" />
                                            </div>
                                            <div className='positionText'>
                                                <h4 className='appointSub mt-0'>Product Pickup</h4>
                                                <h4 className='orderPara'>Within 10 minutes</h4>
                                            </div>
                                            <div className='jobrPickUp'>
                                                <Image src={Images.deliverBox} alt="map Image" className="img-fluid" />
                                                <h4 className='locateDistance '>JOBR-899</h4>
                                            </div>
                                        </div>
                                        <div className='subOrderTime'>
                                            <div className='positionImg'>
                                                <Image src={Images.assignStep} alt="map Image" className="img-fluid dotStepImg" />
                                                <Image src={Images.lineStep} alt="map Image" className="img-fluid lineStepImg" />
                                            </div>
                                            <div className='positionText'>
                                                <h4 className='appointSub mt-0'>Assign Driver</h4>
                                                <h4 className='orderPara'>21 Jun, 2022 | 10:02 am</h4>
                                            </div>
                                        </div>
                                        <div className='subOrderTime'>
                                            <div className='positionImg'>
                                                <Image src={Images.readyStep} alt="map Image" className="img-fluid dotStepImg" />
                                                <Image src={Images.lineStep} alt="map Image" className="img-fluid lineStepImg" />
                                            </div>
                                            <div className='positionText'>
                                                <h4 className='appointSub mt-0'>Ready to Pickup</h4>
                                                <h4 className='orderPara'>21 Jun, 2022 | 12:09 am</h4>
                                            </div>
                                        </div>
                                        <div className='subOrderTime'>
                                            <div className='positionImg'>
                                                <Image src={Images.acceptStep} alt="map Image" className="img-fluid dotStepImg" />
                                            </div>
                                            <div className='positionText'>
                                                <h4 className='appointSub mt-0'>Order Accepted</h4>
                                                <h4 className='orderPara'>21 Jun, 2022 | 02:10 am</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='maximizeImg'>
                                    <Image src={Images.maximize} alt="maximize Image" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DeliveryRightSidebar />
            </div> */}

      {/* <div className="mapleOrderSection deliverMapSection"> */}
        {/* <Image src={Images.map} alt="map Image" className="mapImg" /> */}
        {/* <div className="deliverSubMap">
          <div className="row"> */}
            {/* <div className="col-lg-5"> */}
              <div className="deliveryOuter me-0 mapleLeft">
                <div className="confirmRightSub confirmAddress">
                  <h2 className="mapleHeading text-center">Maple Inc.</h2>
                  <h4 className="mapleAddress text-center">
                    {`${
                      orderData?.seller_details?.current_address
                        ?.street_address ?? "-"
                    }`}
                  </h4>
                  <h4 className="mapleAddress text-center p-0">
                    {`${orderData?.seller_details?.phone_number}` ?? "-"}
                  </h4>
                </div>
                <div className="mapleProductDetails confirmRightSub">
                  {orderData?.order_details.map((item, index) => {
                    return (
                      <div className="flexBox mapleProductDetailsBox">
                        <div className="flexbase">
                          <p className="mapleProductcount">× 1</p>
                          <article className="ms-3">
                            <p className="mapleProductHeading">
                              {item?.product_name ?? "-"}
                            </p>
                            <span className="mapleProductcount">
                              {`QTY : ${item?.qty}`}
                            </span>
                          </article>
                        </div>
                        <article>
                          <p className="mapleProductPrice">
                            {`$${item?.price}` ?? "-"}
                          </p>
                        </article>
                      </div>
                    );
                  })}
                </div>
                <div className="flexBox mapleInvoiceBox confirmRightSub">
                  <article>
                    <p className="mapleProductPrice">Payment Option</p>
                    <p className="mapleProductHeading">
                      {" "}
                      {orderData?.mode_of_payment?.toUpperCase() ?? "-"}
                    </p>
                    <p className="mapleProductPrice">Invoice</p>
                    <p className="mapleProductHeading">
                      #{" "}
                      {orderData?.status === 9
                        ? orderData?.returns?.invoices?.invoice_number
                        : orderData?.invoices?.invoice_number ?? "-"}
                    </p>
                  </article>
                  <article>
                    <p className="mapleProductPrice">Date</p>
                    <p className="mapleProductHeading">
                      {" "}
                      {moment
                        .utc(orderData?.created_at)
                        .format("ddd DD MMM, YYYY HH:mm A") ?? "-"}
                    </p>
                    <p className="mapleProductPrice">POS No.</p>
                    <p className="mapleProductHeading">
                      {authData?.posUserLoginDetails?.payload?.pos_number ??
                        "-"}
                    </p>
                  </article>
                  <article>
                    {/* <p className="mapleProductPrice">Mode</p>
                    <p className="mapleProductHeading">Walk-In</p> */}
                    <p className="mapleProductPrice">User UD</p>
                    <p className="mapleProductHeading">
                      {orderData?.user_details?.id ?? "-"}
                    </p>
                  </article>
                </div>
                <div className="flexBox maplePriceBox">
                  <article>
                    <p className="productName">Subtotal</p>
                    <p className="productName">Discount</p>
                    <p className="productName">Delivery</p>
                    <p className="productName">Tax</p>
                    <p className="productName fw-bold">Total</p>
                  </article>
                  <article>
                    <p className="productName">
                      {" "}
                      {`$${
                        orderData?.status === 9
                          ? Number(
                              orderData?.returns?.products_refunded_amount
                            )?.toFixed(2)
                          : Number(orderData?.actual_amount)?.toFixed(2)
                      }` ?? "-"}
                    </p>
                    <p className="productName">${orderData?.discount}</p>
                    <p className="productName">${orderData?.delivery_charge}</p>
                    <p className="productName">${orderData?.tax}</p>
                    <p className="totalBtn">
                      {" "}
                      {`$${
                        orderData?.status === 9
                          ? orderData?.returns?.refunded_amount
                          : orderData?.payable_amount
                      }` ?? "-"}
                    </p>
                  </article>
                </div>
                <div className="confirmFooter">
                  <Image
                    src={Images.Logo}
                    alt="logo"
                    className="img-fluid logo"
                  />
                  <Image
                    src={Images.barCodeScanImg}
                    alt="barCodeScanImg"
                    className="img-fluid barCodeScanImg"
                  />
                </div>
              </div>
            {/* </div> */}
            {/* <div className="col-lg-7">
              <div className=" deliveryOuter assignMapRight ms-0">
                <Image src={Images.map} alt="map Image" className="mapImg" />
                <div className="orderStatusBox">
                  <div className="orderFlex">
                    <Image
                      src={Images.orderDriver}
                      alt="map Image"
                      className="img-fluid"
                    />
                    <h4 className="customerLink ">Order Status</h4>
                  </div>
                  <div className="orderTrackStatus">
                    <div className="subOrderTime">
                      <div className="positionImg">
                        <Image
                          src={Images.dotStep}
                          alt="map Image"
                          className="img-fluid"
                        />
                        <Image
                          src={Images.lineStep}
                          alt="map Image"
                          className="img-fluid lineStepImg"
                        />
                      </div>
                      <div className="positionText">
                        <h4 className="appointSub mt-0">Verify Code</h4>
                        <h4 className="orderPara">****</h4>
                      </div>
                    </div>
                    <div className="subOrderTime">
                      <div className="positionImg">
                        <Image
                          src={Images.dotStep}
                          alt="map Image"
                          className="img-fluid dotStepImg"
                        />
                        <Image
                          src={Images.lineStep}
                          alt="map Image"
                          className="img-fluid lineStepImg"
                        />
                      </div>
                      <div className="positionText">
                        <h4 className="appointSub mt-0">Delivered</h4>
                        <h4 className="orderPara">Within 10 minutes</h4>
                      </div>
                    </div>
                    <div className="subOrderTime">
                      <div className="positionImg">
                        <Image
                          src={Images.dotStep}
                          alt="map Image"
                          className="img-fluid dotStepImg"
                        />
                        <Image
                          src={Images.lineStep}
                          alt="map Image"
                          className="img-fluid lineStepImg"
                        />
                      </div>
                      <div className="positionText">
                        <h4 className="appointSub mt-0">Product Pickup</h4>
                        <h4 className="orderPara">Within 10 minutes</h4>
                      </div>
                      <div className="jobrPickUp">
                        <Image
                          src={Images.deliverBox}
                          alt="map Image"
                          className="img-fluid"
                        />
                        <h4 className="locateDistance ">JOBR-899</h4>
                      </div>
                    </div>
                    <div className="subOrderTime">
                      <div className="positionImg">
                        <Image
                          src={Images.assignStep}
                          alt="map Image"
                          className="img-fluid dotStepImg"
                        />
                        <Image
                          src={Images.lineStep}
                          alt="map Image"
                          className="img-fluid lineStepImg"
                        />
                      </div>
                      <div className="positionText">
                        <h4 className="appointSub mt-0">Assign Driver</h4>
                        <h4 className="orderPara">21 Jun, 2022 | 10:02 am</h4>
                      </div>
                    </div>
                    <div className="subOrderTime">
                      <div className="positionImg">
                        <Image
                          src={Images.readyStep}
                          alt="map Image"
                          className="img-fluid dotStepImg"
                        />
                        <Image
                          src={Images.lineStep}
                          alt="map Image"
                          className="img-fluid lineStepImg"
                        />
                      </div>
                      <div className="positionText">
                        <h4 className="appointSub mt-0">Ready to Pickup</h4>
                        <h4 className="orderPara">21 Jun, 2022 | 12:09 am</h4>
                      </div>
                    </div>
                    <div className="subOrderTime">
                      <div className="positionImg">
                        <Image
                          src={Images.acceptStep}
                          alt="map Image"
                          className="img-fluid dotStepImg"
                        />
                      </div>
                      <div className="positionText">
                        <h4 className="appointSub mt-0">Order Accepted</h4>
                        <h4 className="orderPara">21 Jun, 2022 | 02:10 am</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="maximizeImg">
                  <Image
                    src={Images.maximize}
                    alt="maximize Image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div> */}
          {/* </div>
        </div> */}
        {/* <DeliveryRightSidebar />
      </div> */}
    </>
  );
};

export default MapleOrder;
