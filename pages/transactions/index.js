import React, { useEffect, useState } from "react";
import TCRHeader from "../../components/commanComonets/TCRHeader";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";
import {
  getTotalTra,
  selectTransactionData,
} from "../../redux/slices/transactions";
import ChartCommon from "../../components/commanComonets/ChartCommon";
import Link from "next/link";
import moment from "moment-timezone";
import { useRouter } from "next/router";
import { amountFormat } from "../../utilities/globalMethods";
import CustomModal from "../../components/customModal/CustomModal";
import CustomerSearchModal from "../../components/modals/searchModal/customerSearchModal";
import TransactionSearchModal from "../../components/modals/searchModal/transactionSearchModal";

const Transactions = () => {
  const router = useRouter();

  const [timeSpan, setTimeSpan] = useState("month");
  const [selectedLines, setSelectedLines] = useState([1, 2, 3]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const getWalletData = useSelector(selectTransactionData);

  const sellerID = authData?.usersInfo?.payload?.uniqe_id;

  const getTotalTraData = getWalletData?.totalTra?.payload;
  const graphData = getWalletData?.totalTra?.payload?.graphData;

  const [key, setKey] = useState(Math.random());
  const [modalDetail, setModalDetail] = useState({
    show: false,
    flag: "transactionSearchModal",
  });

  const handleShowModal = () => {
    setModalDetail({
      show: true,
      flag: "transactionSearchModal",
    });
    setKey(Math.random());
  };

  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      flag: "",
    });
    setKey(Math.random());
  };
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setTimeSpan("");
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
    if (sellerID && data) {
      let params = {
        seller_id: sellerID,
        ...data,
      };
      dispatch(getTotalTra(params));
    }
  }, [sellerID, timeSpan, startDate, endDate]);

  const STATS = [
    {
      icon: Images.analticsImg,
      title: "Total",
      count: getTotalTraData?.data?.total
        ? getTotalTraData?.data?.total < 0
          ? "-$" +
            amountFormat(Math.abs(getTotalTraData?.data?.total), "notSign")
          : amountFormat(getTotalTraData?.data?.total)
        : "$0",
      bgColor: "#FFEEB3",
      textColor: "#93370D",
      type: "all",
    },
    {
      icon: Images.coinImg,
      title: "JBR Coin",
      count: amountFormat(getTotalTraData?.data?.jbr, "noSign"),
      bgColor: "#D7DEFF",
      textColor: "#172461",
      type: "jbr",
    },
    {
      icon: Images.MoneyOutline,
      title: "Cash",
      count: getTotalTraData?.data?.cash
        ? getTotalTraData?.data?.cash < 0
          ? "-$" +
            amountFormat(Math.abs(getTotalTraData?.data?.cash), "notSign")
          : amountFormat(getTotalTraData?.data?.cash)
        : "$0",
      bgColor: "#D1FADF",
      textColor: "#003921",
      type: "cash",
    },
    {
      icon: Images.visaGreen,
      title: "Card",
      count: getTotalTraData?.data?.card
        ? getTotalTraData?.data?.card < 0
          ? "-$" +
            amountFormat(Math.abs(getTotalTraData?.data?.card), "notSign")
          : amountFormat(getTotalTraData?.data?.card)
        : "$0",

      bgColor: "#BFEEFF",
      textColor: "#1F6A84",
      type: "card",
    },
  ];

  const options = {
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

  const handleNotification = () => {
    router.push("/transactions/notification");
  };

  return (
    <div className="main-container-customers fullheightBox_ transBox_">
      <br />
      <TCRHeader
        timeSpan={timeSpan}
        onTimeSpanSelect={setTimeSpan}
        mainIcon={Images.customerWallet}
        title="Total Transactions"
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        onDateChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        notificationHandler={handleNotification}
        searchHandler={() => handleShowModal()}
      />

      {/* stats */}
      <div className="stats flex-row-space-between">
        {STATS.map(({ bgColor, icon, title, count, textColor, type }, idx) => (
          <div
            key={idx + "stats"}
            className="stat-box"
            style={{ backgroundColor: bgColor }}
          >
            <Link
              href={{
                pathname: "/transactions/transactionList",
                query: { "time-span": timeSpan, transaction_type: type },
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
        ))}
      </div>
      <div
        style={{ margin: "12px 16px" }}
        className=" flex-row-space-between justify-content-end"
      >
        <div style={{ gap: "24px" }} className="flex-row-space-between ">
          {[
            {
              textColor: "#4659B5",
              text: "JBR Coin",
              id: "jbrCoin",
            },
            {
              textColor: "#039855",
              text: "Cash",
              id: "cash",
            },
            {
              textColor: "#47B0D6",
              text: "Card",
              id: "cc",
            },
          ]?.map(({ text, textColor, id }, idx) => (
            <div
              key={text + id + idx}
              style={{
                gap: "6px",
                alignItems: "center",
                position: "relative",
              }}
              className="checkbox-cnt flex-row-space-between"
            >
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
                className={"checkbox-" + id}
              />
              <label
                htmlFor={id}
                className="checkbox-label"
                style={{ color: textColor }}
              >
                {text}
              </label>
            </div>
          ))}
        </div>
      </div>

      {graphData?.datasets && (
        <ChartCommon
          style={{ cursor: "pointer" }}
          className="col-md-12"
          header=""
          options={options}
          data={{
            labels: [...graphData?.labels] || [],
            datasets: [
              {
                backgroundColor: "#4659B5",
                data: [...graphData?.datasets?.[0]],
                borderRadius: 10,
              },
              {
                backgroundColor: "#12B76A",
                data: [...graphData?.datasets?.[1]],
                borderRadius: 10,
              },
              {
                backgroundColor: "#47B0D6",
                data: [...graphData?.datasets?.[2]],
                borderRadius: 10,
              },
            ]
              .map((el) => ({
                id: 1,
                data: el.data,
                backgroundColor: el.backgroundColor,
                borderWidth: 2,
                pointRadius: 0,
                lineTension: 0.3,
              }))
              .filter((el, idx) => selectedLines.includes(idx + 1)),
          }}
          chartType="Bar"
        />
      )}

      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        ids={
          modalDetail.flag === "transactionSearchModal"
            ? "transactionSearchModal"
            : ""
        }
        child={
          modalDetail.flag === "transactionSearchModal" ? (
            <TransactionSearchModal />
          ) : (
            ""
          )
        }
        header={
          modalDetail.flag === "transactionSearchModal" ? (
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
    </div>
  );
};

export default Transactions;
