import React, { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import ShipRightSidebar from "../../components/commanComonets/Shipping/shipRightSidebar";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";
import {
  getShippingGraphData,
  getOrderStat,
  getOrdersList,
  getShippingsSidebarCount,
  getShippingsStatus,
  getShippingstodayStatus,
  selectsShippingData,
} from "../../redux/slices/shipping";
import NoOrderFound from "../../components/NoOrderFound";
import OrderListItem from "../Deliveries/Component/OrderListItem";
import { useRouter } from "next/router";
import ChartCommon from "../../components/commanComonets/ChartCommon";
import { Circle } from "rc-progress";

const Shipping = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const authData = useSelector(selectLoginAuth);
  const [orderLoading, setOrderLoading] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [orderCount, setOrderCount] = useState([]);
  const [checked, setChecked] = useState({
    Incoming: true,
    Delivery: true,
    Returned: true,
    Cancelled: true,
  });
  const [orderPercentageData, setOrderPercentageData] = useState({
    deliveredOrder: "",
    returnedOrder: "",
    cancelledOrder: "",
    total: 0,
  });
  const [todayOrdersCount, setTodayOrdersCount] = useState([]);
  const [currentOrderCount, setcurrentOrderCount] = useState([]);
  console.log(todayOrdersCount, "todayOrdersCount");
  const shippingData = useSelector(selectsShippingData);
  const [orderStatData, setOrderStatData] = useState([]);
  console.log(orderStatData, "orderstat data");
  const [graphData, setGraphData] = useState("");
  console.log(graphData, "graph data");
  const sellerUid = authData?.usersInfo?.payload?.uniqe_id;
  const customerSidebardata = shippingData?.sidebarCountData?.payload;
  const [orderListType, setOrderListType] = useState({
    status: "0",
    title: "Order to Review",
  });
  let [dataSets, setDataSets] = useState([]);
  console.log(dataSets, "data setssss");
  const itemPressHandler = (id) => {
    if (orderData?.length > 0) {
      let newId = id ? id : orderData[0]?.id;
      router.push({
        pathname: "/shipping/orderReview",
        query: {
          id: newId,
          status: orderListType?.status,
          title: orderListType?.title,
        },
      });
    }
  };
  const handelDataSetChange = (e, value, num, color) => {
    console.log(value, e.target.checked);
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
      console.log(dataSets);
    } else {
      setDataSets(dataSets.filter((item) => item.label !== value));
    }
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    ticks: {
      stepSize: 1, // This ensures ticks are displayed at intervals of 1
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

  const getAllShippingOrdeshandle = () => {
    let orderListParam = {
      seller_id: sellerUid,
      status: orderListType?.status,
      delivery_option: "4",
    };
    setOrderLoading(true);
    dispatch(
      getOrdersList({
        ...orderListParam,
        cb(res) {
          if (res) {
            setOrderLoading(false);
            setOrderData(res?.data?.payload?.data);
          }
        },
      })
    );
  };

  const getAllShippingOrdesCountHandle = () => {
    let orderParam = {
      seller_id: sellerUid,
      delivery_option: "4",
    };
    setOrderLoading(true);
    dispatch(
      getShippingsSidebarCount({
        ...orderParam,
        cb(res) {
          if (res) {
            setOrderLoading(false);
            setOrderCount(res?.data?.payload);
          }
        },
      })
    );
  };
  const todayOrdersHandle = () => {
    let countparams = {
      seller_id: sellerUid,
      type: "shipping",
    };
    setOrderLoading(true);
    dispatch(
      getShippingstodayStatus({
        ...countparams,
        cb(res) {
          if (res) {
            setOrderLoading(false);
            setTodayOrdersCount(res?.data?.payload);
          }
        },
      })
    );
  };
  const orderStatHandle = () => {
    let orderStatParam = {
      seller_id: sellerUid,
      filter: "week",
      delivery_option: "4",
    };
    setOrderLoading(true);
    dispatch(
      getOrderStat({
        ...orderStatParam,
        cb(res) {
          if (res) {
            setOrderLoading(false);
            setOrderStatData(res?.data?.payload?.data);
            const deliverdOrder = res?.data?.payload?.data?.find(
              (item) => item?.title === "Completed"
            );
            const returnedOrder = res?.data?.payload?.data?.find(
              (item) => item?.title === "Returned Order"
            );
            const cancelledOrder = res?.data?.payload?.data?.find(
              (item) => item?.title === "Cancelled Order"
            );
            const totalCount =
              cancelledOrder?.count +
                deliverdOrder?.count +
                returnedOrder?.count ?? 0;
            setOrderPercentageData({
              deliveredOrder: deliverdOrder,
              returnedOrder: returnedOrder,
              cancelledOrder: cancelledOrder,
              total: totalCount ?? 0,
            });
          }
        },
      })
    );
  };
  const currentStatusHandle = () => {
    let params = {
      seller_id: sellerUid,
      type: "current",
    };
    setOrderLoading(true);
    dispatch(
      getShippingsStatus({
        ...params,
        cb(res) {
          if (res) {
            setOrderLoading(false);
            setcurrentOrderCount(res?.data?.payload);
          }
        },
      })
    );
  };
  const ordersGraphHandle = () => {
    let params = {
      seller_id: sellerUid,
      filter: "year",
      delivery_option: "4",
    };
    setOrderLoading(true);
    dispatch(
      getShippingGraphData({
        ...params,
        cb(res) {
          if (res) {
            setOrderLoading(false);
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
                label: "Returned Orders",
                data: res?.data?.payload?.datasets
                  ? res?.data?.payload?.datasets[2]?.data
                  : "",
                borderColor: "#F0C01A",
                cubicInterpolationMode: "monotone",
              },
              {
                fill: false,
                label: "Cancelled Orders",
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
  };
  useEffect(() => {
    if (sellerUid) {
      getAllShippingOrdeshandle();
      getAllShippingOrdesCountHandle();
      todayOrdersHandle();
      currentStatusHandle();
      orderStatHandle();
      ordersGraphHandle();
    }
  }, [sellerUid, orderListType]);

  return (
    <div className="shippingSection afterViewOuter">
      {orderLoading ? (
        <div className="loaderOuter">
          <div className="spinner-grow loaderSpinner text-center my-5"></div>
        </div>
      ) : (
        <div className="row ">
          <div className="col-xl-4 col-lg-12">
            <div className="deliverLeft deliveryOuter me-0">
              <div className="deliverOrderStatus">
                <h4 className="customerLink text-start">
                  Today Shipping Status
                </h4>
                {todayOrdersCount?.length > 0 ? (
                  todayOrdersCount?.map((v, i) => {
                    return (
                      <div className="flexDiv mt-4">
                        <h4 className="deliverMainText">
                          {v?.type === "shipping_orders_count"
                            ? "Shipping Orders"
                            : "Shipped Orders"}
                        </h4>
                        <h4 className="deliverMainText">{v?.count}</h4>
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
              <div className="currentStatus">
                <h4 className="customerLink text-start">Current Status</h4>
                <div className="currentSubStatus">
                  {currentOrderCount?.length > 0 ? (
                    currentOrderCount?.map((v, i) => {
                      return (
                        <div key={i} className="pickupDeliver">
                          <Image
                            width={50}
                            height={50}
                            src={v?.shipping_image}
                            alt="pickupImg image"
                            className="img-fluid shipPickImg"
                          />
                          <div className="expressMain">
                            <h4 className="amountText ms-0">
                              {v?.shiping_name}
                            </h4>
                            <h4 className="providerSubText text-start mt-2">
                              {" "}
                              {v?.count}
                            </h4>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="deliverOrder">
                <h4 className="customerLink text-start">Orders</h4>
                {/* <div className="deliverGraph" >
                                        <Image src={Images.garphCircle} alt="pickupImg image" className="img-fluid graphCircleImg" />
                                    </div> */}
                <div className="deliverGraph order-all-progress">
                  <div className="order-all-progress-inner">
                    <div className="order-first-progress">
                      <Circle
                        trailWidth={5}
                        percent={
                          orderPercentageData?.deliveredOrder?.percentage
                        }
                        strokeWidth={5}
                        strokeColor="#914BEB"
                      />
                    </div>
                    <div className="order-second-progress">
                      <Circle
                        trailWidth={5}
                        percent={orderPercentageData?.returnedOrder?.percentage}
                        strokeWidth={5}
                        strokeColor="#F0C01A"
                      />
                    </div>
                    <div className="order-third-progress">
                      <Circle
                        trailWidth={5}
                        percent={
                          orderPercentageData?.cancelledOrder?.percentage
                        }
                        strokeWidth={5}
                        strokeColor="#F97066"
                      />
                    </div>
                    <div className="order-progress-value">
                      <p>{parseInt(orderPercentageData?.total)}</p>
                    </div>
                  </div>
                </div>
                {orderStatData?.length > 0 ? (
                  orderStatData
                    ?.filter(
                      (item) =>
                        item?.title === "Deliverd Order" ||
                        item?.title === "Returned Order" ||
                        item?.title === "Cancelled Order"
                    )
                    ?.map((v, i) => {
                      return (
                        <div
                          key={i}
                          className={`flexDiv ${
                            v?.title === "Returned Order"
                              ? "returnOrder"
                              : v?.title === "Cancelled Order"
                              ? "cancelOrder"
                              : ""
                          } mt-3`}
                        >
                          <h4 className="orderDeliverText">{v?.title}</h4>
                          <div className="deliverPercent">{v?.percentage}%</div>
                        </div>
                      );
                    })
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12">
            <div className=" deliveryOuter deliverRight ms-0">
              <div className="deliverGraphSection">
                <form className="deliverCheck">
                  <div className="form-group checkBlue">
                    <input
                      type="checkbox"
                      id="Incoming Orders"
                      checked={checked.Incoming}
                      onChange={(e) => {
                        handelDataSetChange(e, "Incoming Orders", 0, "#4659B5");
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
                      id="Order Processing"
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
                    <label for="Order Processing" className="appointSub  m-0">
                      Order Processing
                    </label>
                  </div>
                  <div className="form-group checkBlue checkYellow">
                    <input
                      type="checkbox"
                      id="Returned Orders"
                      checked={checked.Returned}
                      onChange={(e) => {
                        handelDataSetChange(e, "Returned Orders", 2, "#F0C01A");
                        setChecked({
                          ...checked,
                          Returned: checked.Returned === true ? false : true,
                        });
                      }}
                    />
                    <label for="Returned Orders" className="appointSub  m-0">
                      Returned Orders
                    </label>
                  </div>
                  <div className="form-group checkBlue checkRed">
                    <input
                      type="checkbox"
                      id="Cancelled Orders"
                      checked={checked.Cancelled}
                      onChange={(e) => {
                        handelDataSetChange(
                          e,
                          "Cancelled Orders",
                          3,
                          "#F04438"
                        );
                        setChecked({
                          ...checked,
                          Cancelled: checked.Cancelled === true ? false : true,
                        });
                      }}
                    />
                    <label for="Cancelled Orders" className="appointSub  m-0">
                      Cancelled Orders
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
                  <div
                    onClick={() => itemPressHandler()}
                    className="flexTable pointHand"
                  >
                    <h4 className="confirmBack ">See All</h4>
                    <Image
                      src={Images.lightArrowRight}
                      alt="lightArrowRight image"
                      className="img-fluid ms-1"
                    />
                  </div>
                </div>
                <div className="table-responsive deliverTable">
                  <table
                    id="DeliverDashboard"
                    className="deliverDashboardTable shippingMainTable"
                  >
                    <tbody>
                      {orderData?.length > 0 ? (
                        orderData?.map((item, i) => {
                          return (
                            <tr key={i} className="product_invoice">
                              <td className="invoice_subhead verticalBase">
                                <h4 className="orderId">
                                  #{item?.invoices?.invoice_number}
                                </h4>
                              </td>
                              <td className="invoice_subhead">
                                <div className="nameLocation">
                                  <h4 className="assignId">
                                    {item?.user_details?.firstname +
                                      " " +
                                      item?.user_details?.lastname}
                                  </h4>
                                  <div className="deliverTableBx">
                                    <Image
                                      src={Images.OrderLocation}
                                      alt="location Image"
                                      className="img-fluid ms-1"
                                    />
                                    <span className="locateDistance">
                                      {item?.distance
                                        ? `${item.distance} miles`
                                        : "0"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="invoice_subhead">
                                <div className="itemMoney">
                                  <h4 className="assignId">
                                    {item?.total_items} items
                                  </h4>
                                  <div className="deliverTableBx">
                                    <Image
                                      src={Images.MoneyItem}
                                      alt="MoneyItemImage "
                                      className="img-fluid ms-1"
                                    />
                                    <span className="locateDistance">
                                      $
                                      {Number(item?.payable_amount)?.toFixed(
                                        2
                                      ) || "0.00"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="invoice_subhead">
                                {item?.shipping_details && (
                                  <div className="expresSaver">
                                    <Image
                                      width={50}
                                      height={50}
                                      src={item?.shipping_details?.image}
                                      alt="pickupImg image"
                                      className="img-fluid shipPickImg m-0"
                                    />
                                    <div className="subSaver">
                                      <h4 className="assignId">
                                        {item?.shipping_details?.title}
                                      </h4>
                                      {/* <div className='immediateBox mt-1'>
                                                                                        <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                                                        <h4 className='immediateText'>3 Days Shipping</h4>
                                                                                    </div> */}
                                    </div>
                                  </div>
                                )}
                              </td>
                              <td className="invoice_subhead verticalBase">
                                <div className="deliverArrow text-end">
                                  <Image
                                    onClick={() => itemPressHandler(item?.id)}
                                    src={Images.RightArrow}
                                    alt="RightArrow image"
                                    className="img-fluid ms-1"
                                  />
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <NoOrderFound />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ShipRightSidebar data={orderCount} setOrderListType={setOrderListType} />
    </div>
  );
};

export default Shipping;
