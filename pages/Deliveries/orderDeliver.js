import React, { useState } from "react";
import DeliveryRightSidebar, {
  deliveryDrawerStatus,
} from "../../components/commanComonets/Delivery/deliveryRightSidebar";
import * as Images from "../../utilities/images";
import Image from "next/image";
import moment from "moment-timezone";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";
import {
  acceptOrder,
  deliveryData,
  getDrawerOrdersCount,
  getOrdersList,
} from "../../redux/slices/delivery";
import OrderListSeeAll from "./Component/OrderListSeeAll";
import Link from "next/link";
import OrderDetail from "./Component/OrderDetails";
import OrderListItem from "./Component/OrderListItem";

const OrderDeliver = ({ orderDetail }) => {
  const orderStatus = orderDetail?.status;
  const shopName = orderDetail?.seller_details?.organization_name;
  const shopAddress =
    orderDetail?.seller_details?.current_address?.street_address;
  const { acceptOrderLoading } = useSelector(deliveryData);

  const router = useRouter();
  const selectedIndex = router?.query?.["index"];
  const item = router?.query?.["item"];
  const listType = router?.query?.["listType"] ?JSON.parse(router?.query?.["listType"]):"";

  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const { orderListLoading, orderList, drawerOrderCount } =
    useSelector(deliveryData);
  const uniqueId = authData?.usersInfo?.payload?.uniqe_id;
  const [orderListType, setOrderListType] = useState({
    status: listType !== undefined ? listType?.status : "0",
    title: listType !== undefined ? listType?.title : "Orders to review",
  });

  const [selectedOrderData, setSelectedOrderData] = useState(null);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(
    selectedIndex ?? 0
  );

  const itemPressHandler = async (item, index) => {
    setSelectedOrderData(item);

    setSelectedOrderIndex(index);
    // let params = {
    //   order_id: data?.id,
    // };
    // dispatch(
    //   getOrderDetailById({
    //     ...params,
    //     cb(res) {
    //       if (res.status) {
    //         setSelectedOrderData(res?.data.payload);
    //       }
    //     },
    //   })
    // );
  };

  const checkOtherOrder = () => {
    const statusData = shipingCount;
    var index = 0;
    if (statusData[0].count > 0) {
      if (statusData[0].count == 1) {
        index = 3;
      } else {
        index = 0;
      }
    } else if (statusData[3].count > 0) {
      if (statusData[3].count == 1) {
        index = 4;
      } else {
        index = 3;
      }
    } else if (statusData[4].count > 0) {
      if (statusData[4].count == 1) {
        index = 5;
      } else {
        index = 4;
      }
    } else if (statusData[5].count > 0) {
      if (statusData[5].count == 1) {
        index = 6;
      } else {
        index = 5;
      }
    } else if (statusData[7].count > 0) {
      if (statusData[6].count == 1) {
        index = 8;
      } else {
        index = 7;
      }
    }
    getLatestdata(index);
  };
  const acceptHandler = (id) => {
    let params = {
      sellerID: uniqueId,
      status: parseInt(orderListType?.status) + 1,
      orderId: id,
    };
    dispatch(
      acceptOrder({
        ...params,
        cb(res) {
          if (res) {
            console.log("screeen response", JSON.stringify(res));
            checkOtherOrder();
          }
        },
      })
    );

    // if (userDetail?.delivery_option == '3' && openShippingOrders == '2') {
    //   setPickupModalVisible(true);
    // } else {
    //   const data = {
    //     orderId: id,
    //     status: parseInt(openShippingOrders) + 1,
    //     sellerID: sellerID,
    //   };
    //   dispatch(
    //     acceptOrder(data, openShippingOrders, 1, (res) => {
    //       if (res?.msg) {
    //         if (
    //           getDeliveryData?.getReviewDef?.length > 0 &&
    //           getDeliveryData?.getReviewDef?.length === 1
    //         ) {
    //           dispatch(getOrderCount(getUpdatedCount));
    //         } else {
    //           dispatch(getReviewDefault(openShippingOrders));
    //           dispatch(orderStatusCount());
    //           dispatch(todayOrders());
    //           dispatch(getOrderstatistics(1));
    //           dispatch(getGraphOrders(1));
    //           setGetOrderDetail('ViewAllScreen');
    //           setUserDetail(ordersList?.[0] ?? []);
    //           setViewAllOrder(true);
    //           setOrderDetail(ordersList?.[0]?.order_details ?? []);
    //         }
    //       }
    //     })
    //   );
    // }
  };

  const changeOrderStatusAfterPickup = (id) => {
    alert("decline");

    // setPickupModalVisible(false);
    // const data = {
    //   orderId: id,
    //   status: 5,
    //   sellerID: sellerID,
    // };
    // dispatch(
    //   acceptOrder(data, openShippingOrders, 1, (res) => {
    //     if (res?.msg) {
    //       if (
    //         getDeliveryData?.getReviewDef?.length > 0 &&
    //         getDeliveryData?.getReviewDef?.length === 1
    //       ) {
    //         dispatch(getOrderCount(getUpdatedCount));
    //       } else {
    //         dispatch(getReviewDefault(openShippingOrders));
    //         dispatch(orderStatusCount());
    //         dispatch(todayOrders());
    //         dispatch(getOrderstatistics('1,3'));
    //         dispatch(getGraphOrders('1,3'));
    //         setGetOrderDetail('ViewAllScreen');
    //         setUserDetail(ordersList?.[0] ?? []);
    //         setViewAllOrder(true);
    //         setOrderDetail(ordersList?.[0]?.order_details ?? []);
    //       }
    //     }
    //   })
    // );
  };
  const declineHandler = (id) => {
    alert("decline");

    // const data = {
    //   orderId: id,
    //   status: 8,
    //   sellerID: sellerID,
    // };
    // dispatch(
    //   acceptOrder(data, openShippingOrders, 1, (res) => {
    //     if (res?.msg) {
    //       setViewAllOrder(true);
    //       dispatch(getReviewDefault(openShippingOrders));
    //       dispatch(orderStatusCount());
    //       dispatch(todayOrders());
    //       dispatch(getOrderstatistics('1,3'));
    //       dispatch(getGraphOrders(1));
    //       setGetOrderDetail('ViewAllScreen');
    //       setUserDetail(ordersList?.[0] ?? []);
    //       setOrderDetail(ordersList?.[0]?.order_details ?? []);
    //     }
    //   })
    // );
  };
  const trackHandler = () => {
    alert("Track");
  };


  const getLatestdata = () => {
    let orderCountparams = {
      seller_id: uniqueId,
      delivery_option: "1,3",
    };
    let orderListParam = {
      status: index,
      seller_id: uniqueId,
      delivery_option: "1,3",
      need_walkin: false,
    };
    setTimeout(() => {
      setOpenShippingOrders({
        status: index,
        title: deliveryDrawerStatus[index],
      });
      dispatch(
        getDrawerOrdersCount({
          ...orderCountparams,
        })
      );
      dispatch(
        getOrdersList({
          ...orderListParam,
        })
      );
    }, 500);
  };
  return (
    <>
      <div className=" orderDeliverSection deliverySection">
        <div className="deliverMain w-100">
          <div className="row ">
            <div className="col-lg-6">
              <div className="assignLeft deliveryOuter me-0">
                <Link href="/Deliveries">
                  <div className="flexTable">
                    <Image
                      src={Images.boldLeftArrow}
                      alt="MoneyItemImage "
                      className="img-fluid me-2 "
                    />
                    <h4 className="loginMain text-start m-0">
                      {orderListType?.title}
                    </h4>
                  </div>
                </Link>
                {/* <div className="table-responsive mt-3">
                  <table id="" className="orderDeliverTable">
                    <thead className="invoiceHeadingBox">
                      <tr>
                        <th className="invoiceHeading">#</th>
                        <th className="invoiceHeading">Client/Items</th>
                        <th className="invoiceHeading">Driver/Timing</th>
                        <th className="invoiceHeading"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="product_invoice active">
                        <td className="invoice_subhead verticalBase">
                          <h4 className="assignId">#7869YZ</h4>
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
                              <span className="locateDistance">$500.50</span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className="flexTable">
                              <Image
                                src={Images.driverProfile}
                                alt="driverProfile image "
                                className="driverImg"
                              />
                              <h4 className="assignId">
                                1 hour delivery window
                              </h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">
                                Immediately
                              </span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Delivered at:</h4>
                            <div className="orderDeliverTime">
                              <Image
                                src={Images.deliverTime}
                                alt="deliverTime image "
                                className="img-fluid mb-1"
                              />
                              <span className="immediateText ">
                                21 Oct 23 | 00:10:35
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead verticalBase">
                          <div className="deliverArrow ">
                            <Image
                              src={Images.RightArrow}
                              alt="RightArrow image"
                              className="img-fluid "
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}

                <OrderListItem
                  screen={"SeeAll"}
                  orderList={orderList?.data}
                  itemPressHandler={itemPressHandler}
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/* <div className=" deliveryOuter assignMapRight ms-0">
                <Image src={Images.map} alt="map Image" className="mapImg" />
                <div className="orderStatusBox">
                  <div className="orderFlex">
                    <Image
                      src={Images.orderDriver}
                      alt="orderDriver Image"
                      className="img-fluid"
                    />
                    <h4 className="customerLink ">Order Status</h4>
                  </div>
                  {isMaximize ? (
                    <div className="orderTrackStatus">
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.pickupStep}
                            alt="pickupStep Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Verify Code</h4>
                          <h4 className="orderPara">
                            {orderDetail?.status_desc?.status_5_updated_at
                              ? moment
                                  .utc(
                                    orderDetail?.status_desc
                                      ?.status_5_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.deliverDot}
                            alt="deliverDot Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Delivered</h4>
                          <h4 className="orderPara">
                            {orderDetail?.status_desc?.status_5_updated_at
                              ? moment
                                  .utc(
                                    orderDetail?.status_desc
                                      ?.status_5_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.deliverDot}
                            alt="deliverDot Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Product Pickup</h4>
                          <h4 className="orderPara">
                            {orderDetail?.status_desc?.status_4_updated_at
                              ? moment
                                  .utc(
                                    orderDetail?.status_desc
                                      ?.status_4_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                        <div className="jobrPickUp">
                          <Image
                            src={Images.deliverBox}
                            alt="deliverBox Image"
                            className="img-fluid"
                          />
                          <h4 className="locateDistance ">JOBR-899</h4>
                        </div>
                      </div>
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.readyStep}
                            alt="readyStep Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Assign Driver</h4>
                          <h4 className="orderPara">
                            {orderDetail?.status_desc?.status_3_updated_at
                              ? moment
                                  .utc(
                                    orderDetail?.status_desc
                                      ?.status_3_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.readyStep}
                            alt="readyStep Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Ready to Pickup</h4>
                          <h4 className="orderPara">
                            {orderDetail?.status_desc?.status_2_updated_at
                              ? moment
                                  .utc(
                                    orderDetail?.status_desc
                                      ?.status_2_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.acceptStep}
                            alt="acceptStep Image"
                            className="img-fluid dotStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Order Accepted</h4>
                          <h4 className="orderPara">
                            {orderDetail?.status_desc?.status_1_updated_at
                              ? moment
                                  .utc(
                                    orderDetail?.status_desc
                                      ?.status_1_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="orderTrackStatus">
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.acceptStep}
                            alt="acceptStep Image"
                            className="img-fluid dotStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Order Accepted</h4>
                          <h4 className="orderPara">21 Jun, 2022 | 02:10 am</h4>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setIsMaximize(!isMaximize)}
                  className="maximizeImg"
                >
                  <Image
                    src={Images.maximize}
                    alt="maximize Image"
                    className="img-fluid"
                  />
                </div>
              </div> */}
              <OrderDetail
                orderDetails={selectedOrderData}
                selectedOrderIndex={selectedOrderIndex}
                acceptHandler={acceptHandler}
                declineHandler={declineHandler}
                trackHandler={trackHandler}
                orderListType={orderListType}
                isLoading={acceptOrderLoading}
              />
            </div>
          </div>
        </div>
        <DeliveryRightSidebar setOrderListType={setOrderListType} />
      </div>

      {/* Whole screen map */}
      {/* <div className="orderDeliverSection deliverMapSection">
        <Image src={Images.map} alt="map Image" className="mapImg" />
        <div className="deliverSubMap">
          <div className="row">
            <div className="col-lg-6">
              <div className="assignLeft deliveryOuter me-0">
                <div className="flexTable">
                  <Image
                    src={Images.boldLeftArrow}
                    alt="MoneyItemImage "
                    className="img-fluid me-2"
                  />
                  <h4 className="loginMain text-start m-0">Orders Delivered</h4>
                </div>
                <div className="table-responsive mt-3">
                  <table id="" className="orderDeliverTable">
                    <thead className="invoiceHeadingBox">
                      <tr>
                        <th className="invoiceHeading">#</th>
                        <th className="invoiceHeading">Client/Items</th>
                        <th className="invoiceHeading">Driver/Timing</th>
                        <th className="invoiceHeading"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="product_invoice active">
                        <td className="invoice_subhead verticalBase">
                          <h4 className="assignId">#7869YZ</h4>
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
                              <span className="locateDistance">$500.50</span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className="flexTable">
                              <Image
                                src={Images.driverProfile}
                                alt="driverProfile image "
                                className="driverImg"
                              />
                              <h4 className="assignId">
                                1 hour delivery window
                              </h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">
                                Immediately
                              </span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Delivered at:</h4>
                            <div className="orderDeliverTime">
                              <Image
                                src={Images.deliverTime}
                                alt="deliverTime image "
                                className="img-fluid mb-1"
                              />
                              <span className="immediateText ">
                                21 Oct 23 | 00:10:35
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead verticalBase">
                          <div className="deliverArrow ">
                            <Image
                              src={Images.RightArrow}
                              alt="RightArrow image"
                              className="img-fluid "
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="product_invoice">
                        <td className="invoice_subhead verticalBase">
                          <h4 className="assignId">#7869YZ</h4>
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
                              <span className="locateDistance">$500.50</span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className="flexTable">
                              <Image
                                src={Images.driverProfile}
                                alt="driverProfile image "
                                className="driverImg"
                              />
                              <h4 className="assignId">
                                1 hour delivery window
                              </h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">
                                Immediately
                              </span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Delivered at:</h4>
                            <div className="orderDeliverTime">
                              <Image
                                src={Images.deliverTime}
                                alt="deliverTime image "
                                className="img-fluid mb-1"
                              />
                              <span className="immediateText ">
                                21 Oct 23 | 00:10:35
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead verticalBase">
                          <div className="deliverArrow ">
                            <Image
                              src={Images.RightArrow}
                              alt="RightArrow image"
                              className="img-fluid "
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="product_invoice">
                        <td className="invoice_subhead verticalBase">
                          <h4 className="assignId">#7869YZ</h4>
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
                              <span className="locateDistance">$500.50</span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className="flexTable">
                              <Image
                                src={Images.driverProfile}
                                alt="driverProfile image "
                                className="driverImg"
                              />
                              <h4 className="assignId">
                                1 hour delivery window
                              </h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">
                                Immediately
                              </span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Delivered at:</h4>
                            <div className="orderDeliverTime">
                              <Image
                                src={Images.deliverTime}
                                alt="deliverTime image "
                                className="img-fluid mb-1"
                              />
                              <span className="immediateText ">
                                21 Oct 23 | 00:10:35
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead verticalBase">
                          <div className="deliverArrow ">
                            <Image
                              src={Images.RightArrow}
                              alt="RightArrow image"
                              className="img-fluid "
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="product_invoice">
                        <td className="invoice_subhead verticalBase">
                          <h4 className="assignId">#7869YZ</h4>
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
                              <span className="locateDistance">$500.50</span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className="flexTable">
                              <Image
                                src={Images.driverProfile}
                                alt="driverProfile image "
                                className="driverImg"
                              />
                              <h4 className="assignId">
                                1 hour delivery window
                              </h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">
                                Immediately
                              </span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Delivered at:</h4>
                            <div className="orderDeliverTime">
                              <Image
                                src={Images.deliverTime}
                                alt="deliverTime image "
                                className="img-fluid mb-1"
                              />
                              <span className="immediateText ">
                                21 Oct 23 | 00:10:35
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead verticalBase">
                          <div className="deliverArrow ">
                            <Image
                              src={Images.RightArrow}
                              alt="RightArrow image"
                              className="img-fluid "
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="product_invoice">
                        <td className="invoice_subhead verticalBase">
                          <h4 className="assignId">#7869YZ</h4>
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
                              <span className="locateDistance">$500.50</span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemTime">
                            <div className="flexTable">
                              <Image
                                src={Images.driverProfile}
                                alt="driverProfile image "
                                className="driverImg"
                              />
                              <h4 className="assignId">
                                1 hour delivery window
                              </h4>
                            </div>
                            <div className="deliverTableBx">
                              <Image
                                src={Images.Time}
                                alt="MoneyItemImage "
                                className="img-fluid ms-1"
                              />
                              <span className="locateDistance">
                                Immediately
                              </span>
                            </div>
                          </div>
                          <div className="itemTime mt-3">
                            <h4 className="assignId">Delivered at:</h4>
                            <div className="orderDeliverTime">
                              <Image
                                src={Images.deliverTime}
                                alt="deliverTime image "
                                className="img-fluid mb-1"
                              />
                              <span className="immediateText ">
                                21 Oct 23 | 00:10:35
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="invoice_subhead verticalBase">
                          <div className="deliverArrow ">
                            <Image
                              src={Images.RightArrow}
                              alt="RightArrow image"
                              className="img-fluid "
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" deliveryOuter assignMapRight ms-0">
                <Image src={Images.map} alt="map Image" className="mapImg" />
                <div className="orderStatusBox">
                  <div className="orderFlex">
                    <Image
                      src={Images.orderDriver}
                      alt="orderDriver Image"
                      className="img-fluid"
                    />
                    <h4 className="customerLink ">Order Status</h4>
                  </div>

                  {isMaximize ? (
                    <div className="orderTrackStatus">
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.pickupStep}
                            alt="pickupStep Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Verified</h4>
                          <h4 className="orderPara">
                            {orderDetail?.status_desc?.status_5_updated_at
                              ? moment
                                  .utc(
                                    orderDetail?.status_desc
                                      ?.status_5_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.deliverDot}
                            alt="deliverDot Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Delivered</h4>
                          <h4 className="orderPara">
                            {orderDetail?.status_desc?.status_5_updated_at
                              ? moment
                                  .utc(
                                    orderDetail?.status_desc
                                      ?.status_5_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.deliverDot}
                            alt="deliverDot Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Product Pickup</h4>
                          <h4 className="orderPara">
                            {orderDetail?.status_desc?.status_4_updated_at
                              ? moment
                                  .utc(
                                    orderDetail?.status_desc
                                      ?.status_4_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                        <div className="jobrPickUp">
                          <Image
                            src={Images.deliverBox}
                            alt="deliverBox Image"
                            className="img-fluid"
                          />
                          <h4 className="locateDistance ">JOBR-899</h4>
                        </div>
                      </div>
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.readyStep}
                            alt="readyStep Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>

                        {orderDetail?.delivery_option !== "3" && (
                          <div className="positionText">
                            <h4 className="appointSub mt-0">Assign Driver</h4>
                            <h4 className="orderPara">
                              {orderDetail?.status_desc?.status_3_updated_at
                                ? moment
                                    .utc(
                                      orderDetail?.status_desc
                                        ?.status_3_updated_at
                                    )
                                    .format("DD MMM YYYY | HH:mm A")
                                : ""}
                            </h4>
                          </div>
                        )}
                      </div>
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.readyStep}
                            alt="readyStep Image"
                            className="img-fluid dotStepImg"
                          />
                          <Image
                            src={Images.lineStep}
                            alt="lineStep Image"
                            className="img-fluid lineStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Ready to Pickup</h4>
                          <h4 className="orderPara">
                            {orderDetail?.status_desc?.status_2_updated_at
                              ? moment
                                  .utc(
                                    orderDetail?.status_desc
                                      ?.status_2_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                      <div className="subOrderTime">
                        <div className="positionImg">
                          <Image
                            src={Images.acceptStep}
                            alt="acceptStep Image"
                            className="img-fluid dotStepImg"
                          />
                        </div>
                        <div className="positionText">
                          <h4 className="appointSub mt-0">Order Accepted</h4>
                          <h4 className="orderPara">
                            {orderDetail?.status_desc?.status_1_updated_at
                              ? moment
                                  .utc(
                                    orderDetail?.status_desc
                                      ?.status_1_updated_at
                                  )
                                  .format("DD MMM YYYY | HH:mm A")
                              : ""}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="orderTrackStatus"></div>
                  )}
                </div>
                <div onClick={() => alert("ff")} className="maximizeImg">
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
      </div> */}
      {/* </div>
        </div>
      </div> */}
    </>
  );
};

export default OrderDeliver;
