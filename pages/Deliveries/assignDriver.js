import React from 'react'
import DeliveryRightSidebar from '../../components/commanComonets/Delivery/deliveryRightSidebar'
import * as Images from "../../utilities/images"
import Image from "next/image";

const AssignDriver = () => {
  return (
    <>
      {/* <div className='assignDriveSection deliverySection'>
        <div className='deliverMain w-100'>
          <div className='row '>
            <div className='col-lg-6'>
              <div className='assignLeft deliveryOuter me-0'>
                <div className='flexTable'>
                  <Image src={Images.boldLeftArrow} alt="boldLeftArrow " className="img-fluid me-2" />
                  <h4 className='loginMain text-start m-0'>Assign Drivers</h4>
                </div>
                <div className='table-responsive mt-3'>
                  <table id="" className="orderDeliverTable">
                    <thead className='invoiceHeadingBox'>
                      <tr>
                        <th className='invoiceHeading'>#</th>
                        <th className='invoiceHeading'>Client/Items</th>
                        <th className='invoiceHeading'>Driver/Timing</th>
                        <th className='invoiceHeading'></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='product_invoice active'>
                        <td className='invoice_subhead verticalBase'>
                          <h4 className='assignId'>#7869YZ</h4>
                        </td>
                        <td className="invoice_subhead">
                          <div className="nameLocation">
                            <h4 className="assignId">Samara Schwansteiger</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.OrderLocation}
                                alt="location Image"
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">2.5 miles</span>
                            </div>
                          </div>
                          <div className="itemMoney mt-4">
                            <h4 className="assignId">3 items</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.MoneyItem}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">$500.50
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className='flexTable'>
                              <Image src={Images.driverProfile} alt="driverProfile image " className="driverImg" />
                              <h4 className="assignId">1 hour delivery window</h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">Immediately</span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Driver Arrives in:</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">00:15:35</span>
                            </div>
                          </div>
                        </td>
                        <td className='invoice_subhead verticalBase'>
                          <div className='deliverArrow '>
                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                          </div>
                        </td>
                      </tr>
                      <tr className='product_invoice'>
                        <td className='invoice_subhead verticalBase'>
                          <h4 className='assignId'>#7869YZ</h4>
                        </td>
                        <td className="invoice_subhead">
                          <div className="nameLocation">
                            <h4 className="assignId">Samara Schwansteiger</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.OrderLocation}
                                alt="location Image"
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">2.5 miles</span>
                            </div>
                          </div>
                          <div className="itemMoney mt-4">
                            <h4 className="assignId">3 items</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.MoneyItem}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">$500.50
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className='flexTable'>
                              <Image src={Images.driverProfile} alt="driverProfile image " className="driverImg" />
                              <h4 className="assignId">1 hour delivery window</h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">Immediately</span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Driver Arrives in:</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">00:15:35</span>
                            </div>
                          </div>
                        </td>
                        <td className='invoice_subhead verticalBase'>
                          <div className='deliverArrow '>
                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                          </div>
                        </td>
                      </tr>
                      <tr className='product_invoice'>
                        <td className='invoice_subhead verticalBase'>
                          <h4 className='assignId'>#7869YZ</h4>
                        </td>
                        <td className="invoice_subhead">
                          <div className="nameLocation">
                            <h4 className="assignId">Samara Schwansteiger</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.OrderLocation}
                                alt="location Image"
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">2.5 miles</span>
                            </div>
                          </div>
                          <div className="itemMoney mt-4">
                            <h4 className="assignId">3 items</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.MoneyItem}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">$500.50
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className='flexTable'>
                              <Image src={Images.driverProfile} alt="driverProfile image " className="driverImg" />
                              <h4 className="assignId">1 hour delivery window</h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">Immediately</span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Driver Arrives in:</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">00:15:35</span>
                            </div>
                          </div>
                        </td>
                        <td className='invoice_subhead verticalBase'>
                          <div className='deliverArrow '>
                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                          </div>
                        </td>
                      </tr>
                      <tr className='product_invoice'>
                        <td className='invoice_subhead verticalBase'>
                          <h4 className='assignId'>#7869YZ</h4>
                        </td>
                        <td className="invoice_subhead">
                          <div className="nameLocation">
                            <h4 className="assignId">Samara Schwansteiger</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.OrderLocation}
                                alt="location Image"
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">2.5 miles</span>
                            </div>
                          </div>
                          <div className="itemMoney mt-4">
                            <h4 className="assignId">3 items</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.MoneyItem}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">$500.50
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className='flexTable'>
                              <Image src={Images.driverProfile} alt="driverProfile image " className="driverImg" />
                              <h4 className="assignId">1 hour delivery window</h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">Immediately</span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Driver Arrives in:</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">00:15:35</span>
                            </div>
                          </div>
                        </td>
                        <td className='invoice_subhead verticalBase'>
                          <div className='deliverArrow '>
                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                          </div>
                        </td>
                      </tr>
                      <tr className='product_invoice'>
                        <td className='invoice_subhead verticalBase'>
                          <h4 className='assignId'>#7869YZ</h4>
                        </td>
                        <td className="invoice_subhead">
                          <div className="nameLocation">
                            <h4 className="assignId">Samara Schwansteiger</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.OrderLocation}
                                alt="location Image"
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">2.5 miles</span>
                            </div>
                          </div>
                          <div className="itemMoney mt-4">
                            <h4 className="assignId">3 items</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.MoneyItem}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">$500.50
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className='flexTable'>
                              <Image src={Images.driverProfile} alt="driverProfile image " className="driverImg" />
                              <h4 className="assignId">1 hour delivery window</h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">Immediately</span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Driver Arrives in:</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">00:15:35</span>
                            </div>
                          </div>
                        </td>
                        <td className='invoice_subhead verticalBase'>
                          <div className='deliverArrow '>
                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
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
                        <Image src={Images.dotStep} alt="dotStep Image" className="img-fluid" />
                        <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                      </div>
                      <div className='positionText'>
                        <h4 className='appointSub mt-0'>Verify Code</h4>
                        <h4 className='orderPara'>****</h4>
                      </div>
                    </div>
                    <div className='subOrderTime'>
                      <div className='positionImg'>
                        <Image src={Images.dotStep} alt="dotStep Image" className="img-fluid dotStepImg" />
                        <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                      </div>
                      <div className='positionText'>
                        <h4 className='appointSub mt-0'>Delivered</h4>
                        <h4 className='orderPara'>Within 10 minutes</h4>
                      </div>
                    </div>
                    <div className='subOrderTime'>
                      <div className='positionImg'>
                        <Image src={Images.dotStep} alt="dotStep Image" className="img-fluid dotStepImg" />
                        <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                      </div>
                      <div className='positionText'>
                        <h4 className='appointSub mt-0'>Product Pickup</h4>
                        <h4 className='orderPara'>Within 10 minutes</h4>
                      </div>
                      <div className='jobrPickUp'>
                        <Image src={Images.deliverBox} alt="deliverBox Image" className="img-fluid" />
                        <h4 className='locateDistance '>JOBR-899</h4>
                      </div>
                    </div>
                    <div className='subOrderTime'>
                      <div className='positionImg'>
                        <Image src={Images.assignStep} alt="assignStep Image" className="img-fluid dotStepImg" />
                        <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                      </div>
                      <div className='positionText'>
                        <h4 className='appointSub mt-0'>Assign Driver</h4>
                        <h4 className='orderPara'>21 Jun, 2022 | 10:02 am</h4>
                      </div>
                    </div>
                    <div className='subOrderTime'>
                      <div className='positionImg'>
                        <Image src={Images.readyStep} alt="readyStep Image" className="img-fluid dotStepImg" />
                        <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                      </div>
                      <div className='positionText'>
                        <h4 className='appointSub mt-0'>Ready to Pickup</h4>
                        <h4 className='orderPara'>21 Jun, 2022 | 12:09 am</h4>
                      </div>
                    </div>
                    <div className='subOrderTime'>
                      <div className='positionImg'>
                        <Image src={Images.acceptStep} alt="acceptStep Image" className="img-fluid dotStepImg" />
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
      <div className='assignDriveSection deliverMapSection'>
        <Image src={Images.map} alt="map Image" className="mapImg" />
        <div className='deliverSubMap'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='assignLeft deliveryOuter me-0'>
                <div className='flexTable'>
                  <Image src={Images.boldLeftArrow} alt="boldLeftArrow " className="img-fluid me-2" />
                  <h4 className='loginMain text-start m-0'>Assign Drivers</h4>
                </div>
                <div className='table-responsive mt-3'>
                  <table id="" className="orderDeliverTable">
                    <thead className='invoiceHeadingBox'>
                      <tr>
                        <th className='invoiceHeading'>#</th>
                        <th className='invoiceHeading'>Client/Items</th>
                        <th className='invoiceHeading'>Driver/Timing</th>
                        <th className='invoiceHeading'></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='product_invoice active'>
                        <td className='invoice_subhead verticalBase'>
                          <h4 className='assignId'>#7869YZ</h4>
                        </td>
                        <td className="invoice_subhead">
                          <div className="nameLocation">
                            <h4 className="assignId">Samara Schwansteiger</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.OrderLocation}
                                alt="location Image"
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">2.5 miles</span>
                            </div>
                          </div>
                          <div className="itemMoney mt-4">
                            <h4 className="assignId">3 items</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.MoneyItem}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">$500.50
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className='flexTable'>
                              <Image src={Images.driverProfile} alt="driverProfile image " className="driverImg" />
                              <h4 className="assignId">1 hour delivery window</h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">Immediately</span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Driver Arrives in:</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">00:15:35</span>
                            </div>
                          </div>
                        </td>
                        <td className='invoice_subhead verticalBase'>
                          <div className='deliverArrow '>
                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                          </div>
                        </td>
                      </tr>
                      <tr className='product_invoice'>
                        <td className='invoice_subhead verticalBase'>
                          <h4 className='assignId'>#7869YZ</h4>
                        </td>
                        <td className="invoice_subhead">
                          <div className="nameLocation">
                            <h4 className="assignId">Samara Schwansteiger</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.OrderLocation}
                                alt="location Image"
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">2.5 miles</span>
                            </div>
                          </div>
                          <div className="itemMoney mt-4">
                            <h4 className="assignId">3 items</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.MoneyItem}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">$500.50
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className='flexTable'>
                              <Image src={Images.driverProfile} alt="driverProfile image " className="driverImg" />
                              <h4 className="assignId">1 hour delivery window</h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">Immediately</span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Driver Arrives in:</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">00:15:35</span>
                            </div>
                          </div>
                        </td>
                        <td className='invoice_subhead verticalBase'>
                          <div className='deliverArrow '>
                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                          </div>
                        </td>
                      </tr>
                      <tr className='product_invoice'>
                        <td className='invoice_subhead verticalBase'>
                          <h4 className='assignId'>#7869YZ</h4>
                        </td>
                        <td className="invoice_subhead">
                          <div className="nameLocation">
                            <h4 className="assignId">Samara Schwansteiger</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.OrderLocation}
                                alt="location Image"
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">2.5 miles</span>
                            </div>
                          </div>
                          <div className="itemMoney mt-4">
                            <h4 className="assignId">3 items</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.MoneyItem}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">$500.50
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className='flexTable'>
                              <Image src={Images.driverProfile} alt="driverProfile image " className="driverImg" />
                              <h4 className="assignId">1 hour delivery window</h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">Immediately</span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Driver Arrives in:</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">00:15:35</span>
                            </div>
                          </div>
                        </td>
                        <td className='invoice_subhead verticalBase'>
                          <div className='deliverArrow '>
                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                          </div>
                        </td>
                      </tr>
                      <tr className='product_invoice'>
                        <td className='invoice_subhead verticalBase'>
                          <h4 className='assignId'>#7869YZ</h4>
                        </td>
                        <td className="invoice_subhead">
                          <div className="nameLocation">
                            <h4 className="assignId">Samara Schwansteiger</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.OrderLocation}
                                alt="location Image"
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">2.5 miles</span>
                            </div>
                          </div>
                          <div className="itemMoney mt-4">
                            <h4 className="assignId">3 items</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.MoneyItem}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">$500.50
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className='flexTable'>
                              <Image src={Images.driverProfile} alt="driverProfile image " className="driverImg" />
                              <h4 className="assignId">1 hour delivery window</h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">Immediately</span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Driver Arrives in:</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">00:15:35</span>
                            </div>
                          </div>
                        </td>
                        <td className='invoice_subhead verticalBase'>
                          <div className='deliverArrow '>
                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                          </div>
                        </td>
                      </tr>
                      <tr className='product_invoice'>
                        <td className='invoice_subhead verticalBase'>
                          <h4 className='assignId'>#7869YZ</h4>
                        </td>
                        <td className="invoice_subhead">
                          <div className="nameLocation">
                            <h4 className="assignId">Samara Schwansteiger</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.OrderLocation}
                                alt="location Image"
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">2.5 miles</span>
                            </div>
                          </div>
                          <div className="itemMoney mt-4">
                            <h4 className="assignId">3 items</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.MoneyItem}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">$500.50
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className='flexTable'>
                              <Image src={Images.driverProfile} alt="driverProfile image " className="driverImg" />
                              <h4 className="assignId">1 hour delivery window</h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">Immediately</span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Driver Arrives in:</h4>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">00:15:35</span>
                            </div>
                          </div>
                        </td>
                        <td className='invoice_subhead verticalBase'>
                          <div className='deliverArrow '>
                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className=' deliveryOuter assignMapRight ms-0'>
                <div className='orderStatusBox'>
                  <div className='orderFlex'>
                    <Image src={Images.orderDriver} alt="map Image" className="img-fluid" />
                    <h4 className='customerLink '>Order Status</h4>
                  </div>
                  <div className='orderTrackStatus'>
                    <div className='subOrderTime'>
                      <div className='positionImg'>
                        <Image src={Images.dotStep} alt="dotStep Image" className="img-fluid" />
                        <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                      </div>
                      <div className='positionText'>
                        <h4 className='appointSub mt-0'>Verify Code</h4>
                        <h4 className='orderPara'>****</h4>
                      </div>
                    </div>
                    <div className='subOrderTime'>
                      <div className='positionImg'>
                        <Image src={Images.dotStep} alt="dotStep Image" className="img-fluid dotStepImg" />
                        <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                      </div>
                      <div className='positionText'>
                        <h4 className='appointSub mt-0'>Delivered</h4>
                        <h4 className='orderPara'>Within 10 minutes</h4>
                      </div>
                    </div>
                    <div className='subOrderTime'>
                      <div className='positionImg'>
                        <Image src={Images.dotStep} alt="dotStep Image" className="img-fluid dotStepImg" />
                        <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                      </div>
                      <div className='positionText'>
                        <h4 className='appointSub mt-0'>Product Pickup</h4>
                        <h4 className='orderPara'>Within 10 minutes</h4>
                      </div>
                      <div className='jobrPickUp'>
                        <Image src={Images.deliverBox} alt="deliverBox Image" className="img-fluid" />
                        <h4 className='locateDistance '>JOBR-899</h4>
                      </div>
                    </div>
                    <div className='subOrderTime'>
                      <div className='positionImg'>
                        <Image src={Images.assignStep} alt="assignStep Image" className="img-fluid dotStepImg" />
                        <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                      </div>
                      <div className='positionText'>
                        <h4 className='appointSub mt-0'>Assign Driver</h4>
                        <h4 className='orderPara'>21 Jun, 2022 | 10:02 am</h4>
                      </div>
                    </div>
                    <div className='subOrderTime'>
                      <div className='positionImg'>
                        <Image src={Images.readyStep} alt="readyStep Image" className="img-fluid dotStepImg" />
                        <Image src={Images.lineStep} alt="lineStep Image" className="img-fluid lineStepImg" />
                      </div>
                      <div className='positionText'>
                        <h4 className='appointSub mt-0'>Ready to Pickup</h4>
                        <h4 className='orderPara'>21 Jun, 2022 | 12:09 am</h4>
                      </div>
                    </div>
                    <div className='subOrderTime'>
                      <div className='positionImg'>
                        <Image src={Images.acceptStep} alt="acceptStep Image" className="img-fluid dotStepImg" />
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
      </div>
    </>
  )
}

export default AssignDriver