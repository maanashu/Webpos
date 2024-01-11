import Link from "next/link";
import React, { useState } from "react";
import { ListGroupItem } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { deliveryData, getOrdersList } from "../../../redux/slices/delivery";
import { selectLoginAuth } from "../../../redux/slices/auth";

const DeliveryRightSidebar = ({ setOrderListType }) => {
  const dispatch = useDispatch();
  const [activeSidebar, setActiveSidebar] = useState(true);
  const authData = useSelector(selectLoginAuth);
  const uniqueId = authData?.usersInfo?.payload?.uniqe_id;
  const { drawerOrderCount } = useSelector(deliveryData);
  const statusDrawer = drawerOrderCount?.status_count ?? [];
  const deliveryDrawerStatus = [
    "Orders to review",
    "Order Accepted",
    "Orders Prepared",
    "Assign to Driver",
    "Picked up",
    "Delivered",
    "Rejected/Cancelled",
    "Returned",
  ];
  const getOrderList = (status) => {
    let orderListParam = {
      status: status,
      seller_id: uniqueId,
      delivery_option: "1,3",
      need_walkin: false,
    };
    dispatch(
      getOrdersList({
        ...orderListParam,
      })
    );
  };
  const onPressHandler = (status, count) => {
    if (!activeSidebar && count > 0) {
      if (setOrderListType) {
        setOrderListType(deliveryDrawerStatus[status]);
      }
      setActiveSidebar("hideDeliver");
      getOrderList(status);
    }
  };
  return (
    <>
      <div
        className={`deliverRightBar ${
          activeSidebar ? "hideDeliver" : "fullDeliver"
        }`}
      >
        <div onClick={() => setActiveSidebar((prev) => !prev)}>
          <div className="rightInnerToggle mb-3">
            <Image
              src={Images.sideArrow}
              alt="sideArrow image"
              className="img-fluid"
            />
          </div>
          <div className="collapseToggle mb-4">
            <Image
              src={Images.modalCross}
              alt="sideArrow image"
              className="img-fluid"
            />
            <div className="amountText ms-0">Collapse</div>
          </div>
        </div>
        <ListGroup>
          <ListGroupItem className="deliverRightItem p-0">
            <Link
              onClick={() =>
                onPressHandler(
                  0,
                  statusDrawer?.length > 0 ? statusDrawer[0]?.count : 0
                )
              }
              href="#"
              className="rightLinkBar"
            >
              <Image
                src={Images.ordersReview}
                alt="ordersReview image"
                className="img-fluid"
              />
              <div className="orderReview">
                <h4 className="loginSub text-start">Orders to Review</h4>
                <div className="deliverPercent ">
                  {statusDrawer?.length > 0 ? statusDrawer[0]?.count : 0}
                </div>
              </div>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="deliverRightItem p-0">
            <Link
              onClick={() =>
                onPressHandler(
                  1,
                  statusDrawer?.length > 0 ? statusDrawer[1]?.count : 0
                )
              }
              href="#"
              className="rightLinkBar"
            >
              <Image
                src={Images.deliveryCheck}
                alt="deliveryCheckimage"
                className="img-fluid"
              />
              <div className="orderReview">
                <h4 className="loginSub text-start">Order Accepted</h4>
                <div className="deliverPercent ">
                  {statusDrawer?.length > 0 ? statusDrawer[1]?.count : 0}
                </div>
              </div>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="deliverRightItem p-0">
            <Link
              onClick={() =>
                onPressHandler(
                  2,
                  statusDrawer?.length > 0 ? statusDrawer[2]?.count : 0
                )
              }
              href="#"
              className="rightLinkBar"
            >
              <Image
                src={Images.deliverClock}
                alt="deliverClock image"
                className="img-fluid"
              />
              <div className="orderReview">
                <h4 className="loginSub text-start">Orders Prepared</h4>
                <div className="deliverPercent ">
                  {statusDrawer?.length > 0 ? statusDrawer[2]?.count : 0}
                </div>
              </div>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="deliverRightItem p-0">
            <Link
              onClick={() =>
                onPressHandler(
                  3,
                  statusDrawer?.length > 0 ? statusDrawer[3]?.count : 0
                )
              }
              href="#"
              className="rightLinkBar"
            >
              <Image
                src={Images.assignDriver}
                alt="assignDriver image"
                className="img-fluid"
              />
              <div className="orderReview">
                <h4 className="loginSub text-start">Assign to Driver</h4>
                <div className="deliverPercent ">
                  {statusDrawer?.length > 0 ? statusDrawer[3]?.count : 0}
                </div>
              </div>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="deliverRightItem p-0">
            <Link
              onClick={() =>
                onPressHandler(
                  4,
                  statusDrawer?.length > 0 ? statusDrawer[4]?.count : 0
                )
              }
              href="#"
              className="rightLinkBar"
            >
              <Image
                src={Images.deliverHandDark}
                alt="assignDriver image"
                className="img-fluid"
              />
              <div className="orderReview">
                <h4 className="loginSub text-start">Picked up</h4>
                <div className="deliverPercent ">
                  {statusDrawer?.length > 0 ? statusDrawer[4]?.count : 0}
                </div>
              </div>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="deliverRightItem p-0">
            <Link
              onClick={() =>
                onPressHandler(
                  5,
                  statusDrawer?.length > 0 ? statusDrawer[5]?.count : 0
                )
              }
              href="#"
              className="rightLinkBar"
            >
              <Image
                src={Images.deliverSend}
                alt=" deliverSend image"
                className="img-fluid"
              />
              <div className="orderReview purpleOrder">
                <h4 className="loginSub text-start">Delivered</h4>
                <div className="deliverPercent ">
                  {statusDrawer?.length > 0 ? statusDrawer[5]?.count : 0}
                </div>
              </div>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="deliverRightItem p-0">
            <Link
              onClick={() =>
                onPressHandler(
                  "7,8",
                  parseInt(
                    statusDrawer?.length > 0 ? statusDrawer[7]?.count : 0
                  ) +
                    parseInt(
                      statusDrawer?.length > 0 ? statusDrawer[8]?.count : 0
                    )
                )
              }
              href="#"
              className="rightLinkBar"
            >
              <Image
                src={Images.deliveryClose}
                alt="deliveryClose image"
                className="img-fluid"
              />
              <div className="orderReview cancelOrder">
                <h4 className="loginSub text-start">Rejected/Cancelled</h4>
                <div className="deliverPercent ">
                  {parseInt(
                    statusDrawer?.length > 0 ? statusDrawer[7]?.count : 0
                  ) +
                    parseInt(
                      statusDrawer?.length > 0 ? statusDrawer[8]?.count : 0
                    )}
                </div>
              </div>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="deliverRightItem p-0">
            <Link
              onClick={() =>
                onPressHandler(
                  9,
                  statusDrawer?.length > 0 ? statusDrawer[9]?.count : 0
                )
              }
              href="#"
              className="rightLinkBar"
            >
              <Image
                src={Images.deliverBack}
                alt="deliverBack image"
                className="img-fluid"
              />
              <div className="orderReview returnOrder">
                <h4 className="loginSub text-start">Returned</h4>
                <div className="deliverPercent ">
                  {statusDrawer?.length > 0 ? statusDrawer[9]?.count : 0}
                </div>
              </div>
            </Link>
          </ListGroupItem>
        </ListGroup>
      </div>
    </>
  );
};

export default DeliveryRightSidebar;
