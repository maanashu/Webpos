import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  rightArrow,
  salesTracking
} from "../../utilities/images";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import Link from "next/link";
import Header from "../../components/commanComonets/cashdrawer/Header";
import { PaginationFooter } from "../../components/commanComonets/customers/PaginationFooter";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";
import {
  getDrawerSession,
  selectCashDrawerData,
} from "../../redux/slices/cashDrawer";

const CashDrawer = () => {
  ChartJS.register(...registerables);

  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const sessionData = useSelector(selectCashDrawerData);
  const drawerSessionDetail = sessionData?.drawerSession?.payload;

  const UniqueId = authData?.usersInfo?.payload?.uniqe_id
    ? authData?.usersInfo?.payload?.uniqe_id
    : "";
  // API for get Drawer Session Info...............................
  const drawerSessionInfo = () => {
    const sellerId = {
      seller_id: UniqueId,
    };
    dispatch(
      getDrawerSession({
        ...sellerId,
      })
    );
  };
  useEffect(() => {
    drawerSessionInfo();
  }, []);

  return (
    <>
      <div className="cashDrawOuter cashDrawMain">
        <Header mainIcon={salesTracking} title="Sales Tracking" />
        <div className="cashDrawSub">
          <div className="batchData">
            <div className="batchDataSub">
              <h5 className="textNeavyBlue">Batch</h5>
              <div className="flexBox">
                <h4 className="locateDistance">
                  Drawer ID: {drawerSessionDetail?.id}
                </h4>
              </div>
            </div>
            <Link href="cashDrawer/viewSession">
              <button className="viewSessionBtn" type="submit">
                <b>View Session</b>
              </button>
            </Link>
          </div>
          {/* <div className="batchData">
            <div className="batchDataSub">
              <h4 className="cartText">Batch</h4>
              <div className="flexBox">
                <Image src={DrawerID} className="img-fluid" alt="mainIcon Image" />
                <h4 className="locateDistance">Drawer ID 1</h4>
              </div>
            </div>
            <button className="trackBtn" type="submit">
              Start Tracking Session
              <Image src={searchMoney} className="img-fluid" alt="searchMoney Image" />
            </button>
          </div> */}
          <Link href="cashDrawer/sessionHistory">
            <div className="cashSession">
              <h4 className="activateText text-start">Session History</h4>
              <Image src={rightArrow} className="img-fluid" alt="arrow image" />
            </div>
          </Link>
        </div>
        {/* <div className="paginatePosition">
          <PaginationFooter />
        </div> */}
      </div>
    </>
  );
};

export default CashDrawer;
