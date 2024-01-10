import React, { useEffect, useState, Suspense } from "react";
import DeliveryRightSidebar from "../../components/commanComonets/Delivery/deliveryRightSidebar";
import * as Images from "../../utilities/images";
import Image from "next/image";
import {
  deliveryData,
  getCurrentOrderStatus,
  getOrdersList,
  getOrderStat,
  getTodayOrderCount,
} from "../../redux/slices/delivery";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";
import OrderListItem from "./Component/OrderListItem";
import NoOrderFound from "../../components/NoOrderFound";

const DeliverDashboard = () => {
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const { orderListLoading, orderList } = useSelector(deliveryData);

  const uniqueId = authData?.usersInfo?.payload?.uniqe_id;
  console.log("authDataaa", JSON.stringify(authData));
  const [todayOrdersCount, setTodayOrdersCount] = useState(null);
  const [currentOrderCount, setcurrentOrderCount] = useState(null);
  const [orderStatData, setOrderStatData] = useState(null);

  useEffect(() => {
    let params = {
      seller_id: uniqueId,
    };
    let orderStatParam = {
      seller_id: uniqueId,
      requestType: "1,3",
    };
    let orderListParam = {
      seller_id: "b169ed4d-be27-44eb-9a08-74f997bc6a2i",
      requestType: "1,3",
      status: "5",
      needWalkin: false,
    };

    dispatch(
      getTodayOrderCount({
        params,
        cb(res) {
          if (res) {
            setTodayOrdersCount(res?.data?.payload);
          }
        },
      })
    );
    dispatch(
      getCurrentOrderStatus({
        params,
        cb(res) {
          if (res) {
            setcurrentOrderCount(res?.data?.payload);
          }
        },
      })
    );
    dispatch(
      getOrderStat({
        orderStatParam,
        cb(res) {
          if (res) {
            setOrderStatData(res?.data?.payload);
          }
        },
      })
    );

    dispatch(
      getOrdersList({
        ...orderListParam,
      })
    );
  }, []);
  function Loading() {
    return <h2 style={{ textAlign: "center" }}>🌀 Loading...</h2>;
  }
  console.log("orderList", JSON.stringify(orderList));
  return (
    <>
      <div className="deliverySection ">
        <div className="deliverMain w-100">
          <div className="row ">
            <div className="col-lg-4">
              <div className="deliverLeft deliveryOuter me-0">
                <div className="deliverOrderStatus">
                  <h4 className="customerLink text-start">
                    Today Order Status
                  </h4>

                  <div className="flexDiv mt-4">
                    <h4 className="deliverMainText">Delivery Order</h4>
                    <h4 className="deliverMainText">
                      {todayOrdersCount?.length > 0
                        ? todayOrdersCount?.[0]?.count
                        : 0}
                    </h4>
                  </div>
                  <div className="flexDiv mt-3">
                    <h4 className="deliverMainText">Pickup Orders</h4>
                    <h4 className="deliverMainText">
                      {todayOrdersCount?.length > 0
                        ? todayOrdersCount?.[1]?.count
                        : 0}
                    </h4>
                  </div>
                </div>
                <div className="currentStatus">
                  <h4 className="customerLink text-start">Current Status</h4>
                  <div className="currentSubStatus">
                    <div className="expressDeliver">
                      <figure className="expressImg">
                        <Image
                          src={Images.deliverSuperFast}
                          alt="deliverSuperFast image"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="expressMain">
                        <h4 className="expessText">Express Delivery</h4>
                        <h4 className="providerSubText text-start mt-2">
                          {currentOrderCount?.length > 0
                            ? currentOrderCount?.[0]?.count
                            : 0}
                        </h4>
                      </div>
                    </div>
                    <div className="oneHrDeliver">
                      <figure className="expressImg">
                        <Image
                          src={Images.deliverFast}
                          alt="deliverFast image"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="expressMain">
                        <h4 className="expessText">1 Hour Delivery</h4>
                        <h4 className="providerSubText text-start mt-2">
                          {currentOrderCount?.length > 0
                            ? currentOrderCount?.[1]?.count
                            : 0}
                        </h4>
                      </div>
                    </div>
                    <div className="twoHrDelivery">
                      <figure className="expressImg">
                        <Image
                          src={Images.deliveryLate}
                          alt="deliveryLate image"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="expressMain">
                        <h4 className="expessText">2 Hrs Delivery</h4>
                        <h4 className="providerSubText text-start mt-2">
                          {currentOrderCount?.length > 0
                            ? currentOrderCount?.[2]?.count
                            : 0}
                        </h4>
                      </div>
                    </div>
                    <div className="pickupDeliver">
                      <figure className="expressImg">
                        <Image
                          src={Images.pickupImg}
                          alt="pickupImg image"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="expressMain">
                        <h4 className="amountText ms-0">Customer Pickups</h4>
                        <h4 className="providerSubText text-start mt-2">
                          {currentOrderCount?.length > 0
                            ? currentOrderCount?.[2]?.count
                            : 0}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="deliverOrder">
                  <h4 className="customerLink text-start">Orders</h4>
                  <div className="deliverGraph">
                    <Image
                      src={Images.garphCircle}
                      alt="pickupImg image"
                      className="img-fluid graphCircleImg"
                    />
                  </div>
                  <div className="flexDiv mt-3">
                    <h4 className="orderDeliverText">Delivery Order</h4>
                    <div className="deliverPercent">
                      {orderStatData?.length > 0
                        ? orderStatData?.[0]?.count
                        : "0%"}
                    </div>
                  </div>
                  <div className="flexDiv returnOrder mt-3">
                    <h4 className="orderDeliverText">Returned</h4>
                    <div className="deliverPercent">
                      {orderStatData?.length > 0
                        ? orderStatData?.[1]?.count
                        : "0%"}
                    </div>
                  </div>
                  <div className="flexDiv cancelOrder mt-3">
                    <h4 className="orderDeliverText">Cancelled</h4>
                    <div className="deliverPercent">
                      {orderStatData?.length > 0
                        ? orderStatData?.[2]?.count
                        : "0%"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className=" deliveryOuter deliverRight ms-0">
                <div className="deliverGraphSection">
                  <form className="deliverCheck">
                    <div className="form-group checkBlue">
                      <input type="checkbox" id="Incoming Orders" />
                      <label for="Incoming Orders" className="appointSub  m-0">
                        Incoming Orders
                      </label>
                    </div>
                    <div className="form-group checkBlue checkPurple">
                      <input type="checkbox" id="Delivery Orders" />
                      <label for="Delivery Orders" className="appointSub  m-0">
                        Delivery Orders
                      </label>
                    </div>
                    <div className="form-group checkBlue checkYellow">
                      <input type="checkbox" id="Returned Orders" />
                      <label for="Returned Orders" className="appointSub  m-0">
                        Returned Orders
                      </label>
                    </div>
                    <div className="form-group checkBlue checkRed">
                      <input type="checkbox" id="Cancelled Orders" />
                      <label for="Cancelled Orders" className="appointSub  m-0">
                        Cancelled Orders
                      </label>
                    </div>
                  </form>
                  <div className="barChartGraph">
                    <Image
                      src={Images.barChart}
                      alt="barChart image"
                      className="barChartImg"
                    />
                  </div>
                </div>
                <div className="deliverOrderData">
                  <div className="flexDiv">
                    <h4 className="loginMain">Order Deliveries</h4>
                    {orderList?.length > 0 && (
                      <div className="flexTable pointHand">
                        <h4 className="confirmBack ">See All</h4>
                        <Image
                          src={Images.lightArrowRight}
                          alt="lightArrowRight image"
                          className="img-fluid ms-1"
                        />
                      </div>
                    )}
                  </div>
                  {orderListLoading ? (
                    <Loading />
                  ) : (
                    <div className="table-responsive deliverTable">
                      {orderList?.length == 0 ? (
                        <NoOrderFound />
                      ) : (
                        <OrderListItem
                          screen={"DashBoard"}
                          orderList={orderList}
                        />
                      )}
                    </div>
                  )}
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

export default DeliverDashboard;
