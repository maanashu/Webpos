import React from "react";
import DeliveryRightSidebar from "../../components/commanComonets/Delivery/deliveryRightSidebar";
import * as Images from "../../utilities/images";
import Image from "next/image";

const MapleOrder = () => {
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

      <div className="mapleOrderSection deliverMapSection">
        <Image src={Images.map} alt="map Image" className="mapImg" />
        <div className="deliverSubMap">
          <div className="row">
            <div className="col-lg-5">
              <div className="deliveryOuter me-0 mapleLeft">
                <div className="confirmRightSub confirmAddress">
                  <h2 className="mapleHeading text-center">Maple Inc.</h2>
                  <h4 className="mapleAddress text-center">
                    500 Rideau St. Ottawa, ON 5Z2 K1L
                  </h4>
                  <h4 className="mapleAddress text-center p-0">
                    +1 (438) 459-0226
                  </h4>
                </div>
                <div className="mapleProductDetails confirmRightSub">
                  <div className="flexBox mapleProductDetailsBox">
                    <div className="flexbase">
                      <p className="mapleProductcount">× 1</p>
                      <article className="ms-3">
                        <p className="mapleProductHeading">
                          Lightweight Stylish Casual Daypack
                        </p>
                        <span className="mapleProductcount">Yellow / M</span>
                      </article>
                    </div>
                    <article>
                      <p className="mapleProductPrice">$90.00</p>
                    </article>
                  </div>
                  <div className="flexBox mapleProductDetailsBox">
                    <div className="flexbase">
                      <p className="mapleProductcount">× 1</p>
                      <article className="ms-3">
                        <p className="mapleProductHeading">
                          Lightweight Stylish Casual Daypack
                        </p>
                        <span className="mapleProductcount">Yellow / M</span>
                      </article>
                    </div>
                    <article>
                      <p className="mapleProductPrice">$90.00</p>
                    </article>
                  </div>
                  <div className="flexBox mapleProductDetailsBox">
                    <div className="flexbase">
                      <p className="mapleProductcount">× 1</p>
                      <article className="ms-3">
                        <p className="mapleProductHeading">
                          Lightweight Stylish Casual Daypack
                        </p>
                        <span className="mapleProductcount">Yellow / M</span>
                      </article>
                    </div>
                    <article>
                      <p className="mapleProductPrice">$90.00</p>
                    </article>
                  </div>
                </div>
                <div className="flexBox mapleInvoiceBox confirmRightSub">
                  <article>
                    <p className="mapleProductPrice">Payment Option</p>
                    <p className="mapleProductHeading">Cash</p>
                    <p className="mapleProductPrice">Invoice</p>
                    <p className="mapleProductHeading"># 9836-1238</p>
                  </article>
                  <article>
                    <p className="mapleProductPrice">Date</p>
                    <p className="mapleProductHeading">Wed 10/10/23</p>
                    <p className="mapleProductPrice">POS No.</p>
                    <p className="mapleProductHeading">#Front-CC03</p>
                  </article>
                  <article>
                    <p className="mapleProductPrice">Mode</p>
                    <p className="mapleProductHeading">Walk-In</p>
                    <p className="mapleProductPrice">User UD</p>
                    <p className="mapleProductHeading">****331</p>
                  </article>
                </div>
                <div className="flexBox maplePriceBox">
                  <article>
                    <p className="productName">Subtotal</p>
                    <p className="productName">Discount</p>
                    <p className="productName">Shipping</p>
                    <p className="productName fw-bold">Total</p>
                  </article>
                  <article>
                    <p className="productName">$933.50</p>
                    <p className="productName">15% ($13.50)</p>
                    <p className="productName">$29.00</p>
                    <p className="totalBtn">$304.75</p>
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
            </div>
            <div className="col-lg-7">
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
            </div>
          </div>
        </div>
        <DeliveryRightSidebar />
      </div>
    </>
  );
};

export default MapleOrder;
