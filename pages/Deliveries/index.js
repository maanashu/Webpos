import React, { useEffect, useState, Suspense } from "react";
import DeliveryRightSidebar from "../../components/commanComonets/Delivery/deliveryRightSidebar";
import * as Images from "../../utilities/images";
import Image from "next/image";
import {
  deliveryData,
  getCurrentOrderStatus,
  getDrawerOrdersCount,
  getOrdersList,
  getOrderStat,
  getTodayOrderCount,
} from "../../redux/slices/delivery";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";
import OrderListItem from "./Component/OrderListItem";
import NoOrderFound from "../../components/NoOrderFound";
import ChartCommon from "../../components/commanComonets/ChartCommon";
import Link from "next/link";
import { useRouter } from "next/router";
import { getShippingGraphData } from "../../redux/slices/shipping";
import { Circle } from "rc-progress";
const DeliverDashboard = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const { orderListLoading, orderList, drawerOrderCount } =
    useSelector(deliveryData);
  const uniqueId = authData?.usersInfo?.payload?.uniqe_id;
  const [todayOrdersCount, setTodayOrdersCount] = useState(null);
  const [currentOrderCount, setcurrentOrderCount] = useState(null);
  const [orderStatData, setOrderStatData] = useState(null);
  const [graphData, setGraphData] = useState(null);
  let [dataSets, setDataSets] = useState([]);
  const [checked, setChecked] = useState({
    Incoming: true,
    Delivery: true,
    Returned: true,
    Cancelled: true,
  });
  const [orderListType, setOrderListType] = useState({
    title: "Orders to review",
    status: "0",
  });
  console.log("Selellele", JSON.stringify(uniqueId));

  useEffect(() => {
    let params = {
      seller_id: uniqueId,
    };
    let orderStatParam = {
      seller_id: uniqueId,
      filter: "year",
      delivery_option: "1,3",
    };
    let orderListParam = {
      status: 0,
      seller_id: uniqueId,
      delivery_option: "1,3",
      need_walkin: false,
      need_returned: false,
    };

    let orderCountparams = {
      seller_id: uniqueId,
      delivery_option: "1,3",
    };
    let graphParams = {
      seller_id: uniqueId,
      filter: "year",
      delivery_option: "1,3",
    };
    dispatch(
      getTodayOrderCount({
        ...params,
        cb(res) {
          if (res) {
            setTodayOrdersCount(res?.data?.payload);
          }
        },
      })
    );
    dispatch(
      getCurrentOrderStatus({
        ...params,
        cb(res) {
          if (res) {
            setcurrentOrderCount(res?.data?.payload);
          }
        },
      })
    );
    dispatch(
      getOrderStat({
        ...orderStatParam,
        cb(res) {
          if (res) {
            console.log("responeee", JSON.stringify(res));
            setOrderStatData(res?.data?.payload?.data);
          }
        },
      })
    );

    dispatch(
      getShippingGraphData({
        ...graphParams,
        cb(res) {
          if (res) {
            console.log("Data-=-=-=", JSON.stringify(res));
            setGraphData(res?.data?.payload);
            setDataSets([
              {
                fill: false,
                label: "Incoming Orders",
                data: res?.data?.payload?.datasets
                  ? res?.data?.payload?.datasets[0]?.data
                  : "",
                borderColor: "#4659B5",
                cubicInterpolationMode: "monotone",
              },
              {
                fill: false,
                label: "Order Processing",
                data: res?.data?.payload?.datasets
                  ? res?.data?.payload?.datasets[1]?.data
                  : "",
                borderColor: "#7233C2",
                cubicInterpolationMode: "monotone",
              },
              {
                fill: false,
                label: "Ready for pickup",
                data: res?.data?.payload?.datasets
                  ? res?.data?.payload?.datasets[2]?.data
                  : "",
                borderColor: "#F0C01A",
                cubicInterpolationMode: "monotone",
              },
              {
                fill: false,
                label: "Completed",
                data: res?.data?.payload?.datasets
                  ? res?.data?.payload?.datasets[3]?.data
                  : "",
                borderColor: "#F04438",
                cubicInterpolationMode: "monotone",
              },
            ]);
          }
        },
      })
    );

    dispatch(
      getOrdersList({
        ...orderListParam,
      })
    );
    dispatch(
      getDrawerOrdersCount({
        ...orderCountparams,
      })
    );
  }, []);

  function sumPercentage(data) {
    const relevantStatuses = [
      "Deliverd Order",
      "Returned Order",
      "Cancelled Order",
    ];

    // Filter the array to include only relevant statuses
    const relevantData = data?.filter((item) =>
      relevantStatuses.includes(item.title)
    );

    // Calculate the sum of percentages
    const totalPercentage = relevantData?.reduce(
      (sum, item) => sum + parseFloat(item.percentage),
      0
    );

    return totalPercentage?.toFixed(2) ?? 0; // Round to two decimal places
  }

  function Loading() {
    return (
      <div className="table-responsive deliverTable">
        <h2
          className="customerLink text-center"
          style={{ textAlign: "center", marginTop: 100 }}
        >
          🌀 Loading...
        </h2>
      </div>
    );
  }
  // const itemPressHandler = (item, index) => {
  //   router.push(`/Deliveries/order`);
  // };
  const itemPressHandler = (item, index) => {
    router.push({
      pathname: "/Deliveries/orderDeliver",
      query: {
        item: JSON.stringify(item),
        index: index,
        listType: JSON.stringify(orderListType),

        // Add more properties as needed
      },
    });
  };
  const handelDataSetChange = (e, value, num, color) => {
    if (e.target.checked) {
      setDataSets([
        ...dataSets,
        {
          fill: false,
          label: value,
          data: graphData?.datasets ? graphData.datasets[num]?.data : "",
          borderColor: color,
          cubicInterpolationMode: "monotone",
        },
      ]);
    } else {
      setDataSets(dataSets.filter((item) => item.label !== value));
    }
  };

  const options = {
    ticks: {
      stepSize: 1, // This ensures ticks are displayed at intervals of 1
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        border: {
          dash: [2, 2],
          display: false,
          color: "rgba(180, 190, 235, 1)",
        }, // for the grid lines
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#7E8AC1",
        },
      },
    },
  };

  return (
    <>
      <div className="deliverySection afterViewOuter">
        <div className="deliverMain w-100">
          <div className="row ">
            <div className="col-xl-4 col-lg-12">
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
                            ? currentOrderCount?.[3]?.count
                            : 0}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="deliverOrder">
                  <h4 className="customerLink text-start">Orders</h4>
                  {/* <div className="deliverGraph"> */}
                  {/* <Image
                      src={Images.garphCircle}
                      alt="pickupImg image"
                      className="img-fluid graphCircleImg"
                    /> */}
                  <div className="deliverGraph order-all-progress">
                    <div className="order-all-progress-inner">
                      <div className="order-first-progress">
                        <Circle
                          trailWidth={5}
                          percent={parseInt(orderStatData?.[0]?.percentage)}
                          strokeWidth={5}
                          strokeColor="#914BEB"
                        />
                      </div>
                      <div className="order-second-progress">
                        <Circle
                          trailWidth={5}
                          percent={parseInt(orderStatData?.[1]?.percentage)}
                          strokeWidth={5}
                          strokeColor="#F0C01A"
                        />
                      </div>
                      <div className="order-third-progress">
                        <Circle
                          trailWidth={5}
                          percent={parseInt(orderStatData?.[2]?.percentage)}
                          strokeWidth={5}
                          strokeColor="#F97066"
                        />
                      </div>
                      <div className="order-progress-value">
                        <p>{sumPercentage(orderStatData) + "%" ?? +"0%"}</p>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                  <div className="flexDiv mt-3">
                    <h4 className="orderDeliverText">Delivery Order</h4>
                    <div className="deliverPercent">
                      {orderStatData?.length > 0
                        ? ` ${parseInt(orderStatData?.[0]?.percentage)} %`
                        : "0%"}
                    </div>
                  </div>
                  <div className="flexDiv returnOrder mt-3">
                    <h4 className="orderDeliverText">Returned</h4>
                    <div className="deliverPercent">
                      {orderStatData?.length > 0
                        ? ` ${parseInt(orderStatData?.[1]?.percentage)} %`
                        : "0%"}
                    </div>
                  </div>
                  <div className="flexDiv cancelOrder mt-3">
                    <h4 className="orderDeliverText">Cancelled</h4>
                    <div className="deliverPercent">
                      {orderStatData?.length > 0
                        ? ` ${parseInt(orderStatData?.[2]?.percentage)} %`
                        : "0%"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12">
              <div className=" deliveryOuter deliverRight ms-0">
                <div className="deliverGraphSection">
                  {/* <form className="deliverCheck">
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
                  </form> */}
                  <form className="deliverCheck">
                    <div className="form-group checkBlue">
                      <input
                        type="checkbox"
                        id="Incoming Orders"
                        checked={checked.Incoming}
                        onChange={(e) => {
                          handelDataSetChange(
                            e,
                            "Incoming Orders",
                            0,
                            "#4659B5"
                          );
                          setChecked({
                            ...checked,
                            Incoming: checked.Incoming === true ? false : true,
                          });
                        }}
                      />
                      <label for="Incoming Orders" className="appointSub  m-0">
                        Incoming Orders
                      </label>
                    </div>
                    <div className="form-group checkBlue checkPurple">
                      <input
                        type="checkbox"
                        id="Delivery Orders"
                        checked={checked.Delivery}
                        onChange={(e) => {
                          handelDataSetChange(
                            e,
                            "Order Processing",
                            1,
                            "#7233C2"
                          );
                          setChecked({
                            ...checked,
                            Delivery: checked.Delivery === true ? false : true,
                          });
                        }}
                      />
                      <label for="Delivery Orders" className="appointSub  m-0">
                        Order Processing
                      </label>
                    </div>
                    <div className="form-group checkBlue checkYellow">
                      <input
                        type="checkbox"
                        id="Returned Orders"
                        checked={checked.Returned}
                        onChange={(e) => {
                          handelDataSetChange(
                            e,
                            "Ready for pickup",
                            2,
                            "#F0C01A"
                          );
                          setChecked({
                            ...checked,
                            Returned: checked.Returned === true ? false : true,
                          });
                        }}
                      />
                      <label for="Returned Orders" className="appointSub  m-0">
                        Ready for pickup
                      </label>
                    </div>
                    <div className="form-group checkBlue checkRed">
                      <input
                        type="checkbox"
                        id="Cancelled Orders"
                        checked={checked.Cancelled}
                        onChange={(e) => {
                          handelDataSetChange(e, "Completed", 3, "#F04438");
                          setChecked({
                            ...checked,
                            Cancelled:
                              checked.Cancelled === true ? false : true,
                          });
                        }}
                      />
                      <label for="Cancelled Orders" className="appointSub  m-0">
                        Completed
                      </label>
                    </div>
                  </form>
                  <div className="barChartGraph">
                    <ChartCommon
                      className="col-md-12"
                      header=""
                      options={options}
                      data={{ labels: graphData?.labels, datasets: dataSets }}
                      chartType="Line"
                    />
                  </div>
                </div>
                <div className="deliverOrderData">
                  <div className="flexDiv">
                    <h4 className="loginMain">{orderListType?.title}</h4>
                    {orderList?.data?.length > 0 && (
                      <Link
                        href={{
                          pathname: "Deliveries/orderDeliver",

                          query: {
                            index: 0,
                            listType: JSON.stringify(orderListType),
                          },
                        }}
                      >
                        <div className="flexTable pointHand">
                          <h4 className="confirmBack ">See All</h4>
                          <Image
                            src={Images.lightArrowRight}
                            alt="lightArrowRight image"
                            className="img-fluid ms-1"
                          />
                        </div>
                      </Link>
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
                          id={"deliveryDashBoardList"}
                          screen={"DashBoard"}
                          orderList={orderList?.data}
                          itemPressHandler={itemPressHandler}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <DeliveryRightSidebar setOrderListType={setOrderListType} />
      </div>
    </>
  );
};

export default DeliverDashboard;
