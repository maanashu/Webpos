import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  customerWallet,
  newCustomers,
  returningCustomers,
  onlineCustomers,
  walkInCustomers,
} from "../../utilities/images";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import Link from "next/link";
import TCRHeader from "../../components/commanComonets/TCRHeader";
import { selectLoginAuth } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  getAllCustomers,
  selectCustomersData,
} from "../../redux/slices/customers";
import CustomModal from "../../components/customModal/CustomModal";
import CashSummary from "../../components/modals/cashDrawerModals/cashSummary";
import * as Images from "../../utilities/images";
import CustomerSearchModal from "../../components/modals/searchModal/customerSearchModal";
import { Form } from "react-bootstrap";
import moment from "moment-timezone";

const Customers = () => {
  ChartJS.register(...registerables);
  const router = useRouter();

  const [timeSpan, setTimeSpan] = useState("week");
  const [selectedLines, setSelectedLines] = useState([1, 2, 3]);

  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const customersData = useSelector(selectCustomersData);
  const graphData = customersData?.allCustomersData?.payload?.graphData;
  const totalCustomers =
    customersData?.allCustomersData?.payload?.total_customers;

  const uniqueId = authData?.usersInfo?.payload?.uniqe_id;

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setTimeSpan("");
  };

  const STATS = [
    {
      icon: newCustomers,
      title: "New Customers",
      count: totalCustomers?.newCustomer,
      bgColor: "#FFEEB3",
      textColor: "#93370D",
      type: "new_customers",
    },
    {
      icon: returningCustomers,
      title: "Returning Customers",
      count: totalCustomers?.onlineCustomers,
      bgColor: "#D7DEFF",
      textColor: "#172461",
      type: "returning_customers",
    },
    {
      icon: onlineCustomers,
      title: "Online Customers",
      count: totalCustomers?.returningCustomer,
      bgColor: "#D1FADF",
      textColor: "#003921",
      type: "online_customers",
    },
    {
      icon: walkInCustomers,
      title: "Walk-in Customers",
      count: totalCustomers?.walkingCustomers,
      bgColor: "#BFEEFF",
      textColor: "#1F6A84",
      type: "walkin_customers",
    },
  ];

  const [key, setKey] = useState(Math.random());

  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "Add Cash",
    type: "add",
    flag: "customerSearchModal",
  });

  const handleShowModal = (title, type) => {
    setModalDetail({
      show: true,
      title: title,
      type: type,
      flag: "customerSearchModal",
    });
    setKey(Math.random());
  };

  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };

  const filterHandler = () => {
    if (startDate && endDate) {
      return {
        start_date: moment(startDate).format("YYYY-MM-DD"),
        end_date: moment(endDate).format("YYYY-MM-DD"),
      };
    } else if (timeSpan) {
      return {
        filter: timeSpan,
      };
    }
  };
  const data = filterHandler();

  useEffect(() => {
    if (uniqueId && data) {
      let params = {
        seller_id: uniqueId,
        ...data,
      };
      dispatch(getAllCustomers(params));
    }
  }, [uniqueId, timeSpan, startDate, endDate]);

  const handleNotification = () => {
    router.push("/transactions/notification", `/customers/notification`);
  };

  return (
    <>
      <div className="main-container-customers fullheightBox_ customerSection">
        {/* headers */}
        <TCRHeader
          timeSpan={timeSpan}
          onTimeSpanSelect={setTimeSpan}
          mainIcon={customerWallet}
          title="Total Customers"
          searchHandler={() => handleShowModal("End Cash", "remove")}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          onDateChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          notificationHandler={handleNotification}
        />

        {/* stats */}
        <div className="stats flex-row-space-between">
          {STATS.map(
            ({ bgColor, icon, title, count, textColor, type }, idx) => (
              <div
                key={idx + "stats"}
                className="stat-box"
                style={{ backgroundColor: bgColor }}
              >
                <Link
                  href={{
                    pathname: "/customers/users",
                    query: { "time-span": timeSpan, customer_type: type },
                  }}
                >
                  <Image
                    objectFit="center"
                    width={30}
                    height={30}
                    src={icon}
                    style={{ marginBottom: "35px" }}
                  />
                  <div>
                    <h4 className="stat-box-title" style={{ color: textColor }}>
                      {title}
                    </h4>
                    <p className="stat-box-count" style={{ color: textColor }}>
                      {count}
                    </p>
                  </div>
                </Link>
              </div>
            )
          )}
        </div>

        {/* stats on chart */}
        <div>
          <div style={{ margin: "12px 16px" }} className="row">
            <div className="col-lg-6">
              <div className="customerGraphLeft">
                <p className="chart-header-title">Total Customers</p>
                <p className="chart-header-count">
                  {totalCustomers?.totalCustomer}
                </p>
                <div className="chart-header-btn">
                  <Link
                    href={{
                      pathname: "customers/users",
                      query: { "time-span": timeSpan },
                    }}
                  >
                    <p className="chart-header-btn-text">View All</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="deliverCheck">
                {[
                  {
                    textColor: "form-group checkBlue checkYellow",
                    text: "New Customers",
                    id: "Incoming Orders",
                  },
                  {
                    textColor: "form-group checkBlue checkGreen",
                    text: "Online Customers",
                    id: "Delivery Orders",
                  },
                  {
                    textColor: "form-group checkBlue checkSky",
                    text: "Walking Customers",
                    id: "Returned Orders",
                  },
                ]?.map(({ text, textColor, id }, idx) => (
                  <div key={text + id + idx} className={textColor}>
                    <input
                      checked={selectedLines.includes(idx + 1)}
                      value={selectedLines.includes(idx + 1)}
                      id={id}
                      onChange={() => {
                        setSelectedLines((prev) => {
                          if (prev?.includes(idx + 1)) {
                            const filterd = prev.filter((el) => el !== idx + 1);
                            return filterd;
                          } else {
                            return [...prev, idx + 1];
                          }
                        });
                      }}
                      type="checkbox"
                    />
                    <label for={id} className="appointSub  m-0">
                      {text}
                    </label>
                  </div>
                ))}
              </form>
              {/* <form className="deliverCheck">
                <div className="form-group checkBlue">
                  <input type="checkbox" id="Incoming Orders" />
                  <label for="Incoming Orders" className="appointSub  m-0">
                    Incoming Orders
                  </label>
                </div>
                <div className="form-group checkBlue checkGreen">
                  <input type="checkbox" id="Delivery Orders" />
                  <label for="Delivery Orders" className="appointSub  m-0">
                    Delivery Orders
                  </label>
                </div>
                <div className="form-group checkBlue checkSky">
                  <input type="checkbox" id="Returned Orders" />
                  <label for="Returned Orders" className="appointSub  m-0">
                    Returned Orders
                  </label>
                </div>
              </form> */}
            </div>
          </div>

          <div style={{ margin: "0px 16px", padding: "12px 0" }}>
            {graphData?.datasets && (
              <Line
                datasetIdKey="id"
                options={{
                  scales: {
                    y: {
                      title: {
                        display: true,
                        text: "Customer Numbers",
                        color: "#7E8AC1",
                      },
                      border: {
                        dash: [2, 2],
                        display: false,
                        color: "rgba(180, 190, 235, 1)",
                      }, // for the grid lines
                      beginAtZero: true,
                      ticks: {
                        color: "#7E8AC1",
                        callback: (value) => `${(value * 10).toFixed()}%`,
                      },
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
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                data={{
                  labels: [...graphData?.labels] || [],
                  datasets: [
                    {
                      color: "#F0C01A",
                      data: [...graphData?.datasets?.[0]?.data],
                    },
                    {
                      color: "#12B76A",
                      data: [...graphData?.datasets?.[1]?.data],
                    },
                    {
                      color: "#47B0D6",
                      data: [...graphData?.datasets?.[2]?.data],
                    },
                  ]
                    .map((el) => ({
                      id: 1,
                      data: el.data,
                      borderColor: el.color,
                      borderWidth: 2,
                      pointRadius: 0,
                      lineTension: 0.3,
                    }))
                    .filter((el, idx) => selectedLines.includes(idx + 1)),
                }}
              />
            )}
          </div>
        </div>
      </div>

      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        ids={
          modalDetail.flag === "customerSearchModal"
            ? "customerSearchModal"
            : ""
        }
        child={
          modalDetail.flag === "customerSearchModal" ? (
            <CustomerSearchModal
              title={modalDetail.title}
              modalType={modalDetail.type}
              close={() => handleOnCloseModal()}
              time={timeSpan}
            />
          ) : (
            ""
          )
        }
        header={
          modalDetail.flag === "customerSearchModal" ? (
            <>
              <p onClick={handleOnCloseModal} className="modal_cancel">
                <Image
                  src={Images.modalCross}
                  alt="modalCross"
                  className="img-fluid"
                />
              </p>
            </>
          ) : (
            ""
          )
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};

export default Customers;
