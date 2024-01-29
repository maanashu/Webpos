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
export const deliveryDrawerStatus = [
    "Orders to review",
    "Order Accepted",
    "Orders Prepared",
    "Assign to Driver",
    "Picked up",
    "Delivered",
    "Rejected/Cancelled",
    "Returned",
];
const AnalyticsRightsidebar = ({ setOrderListType }) => {
    const router = useRouter()
    const dispatch = useDispatch();
    const [activeSidebar, setActiveSidebar] = useState(true);
    const authData = useSelector(selectLoginAuth);
    const uniqueId = authData?.usersInfo?.payload?.uniqe_id;
    const { drawerOrderCount } = useSelector(deliveryData);
    const statusDrawer = drawerOrderCount?.status_count ?? [];

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
    const onPressHandler = (titleIndex, status, count) => {
        if (!activeSidebar && count > 0) {
            if (setOrderListType) {
                setOrderListType({
                    title: deliveryDrawerStatus[titleIndex],
                    status: status,
                });
            }
            setActiveSidebar("hideDeliver");
            getOrderList(status);
        }
    };
    return (
        <>
            <div
                className={`deliverRightBar ${activeSidebar ? "hideDeliver" : "fullDeliver"
                    }`}
            >
                <div className="mainanalyticsside_">
                    <div onClick={() => {
                        router.back()
                        // setActiveSidebar((prev) => !prev)
                    }}>
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
                                href="/analytics/grossProfit"
                                className="rightLinkBar"
                            >
                                <Image
                                    src={Images.grossprofit}
                                    alt="ordersReview image"
                                    className="img-fluid"
                                />
                                <div className="orderReview">
                                    <h4 className="loginSub text-start">Gross Profits</h4>
                                    <div className="deliverPercent ">
                                        $20,990
                                    </div>
                                </div>
                            </Link>
                        </ListGroupItem>
                        <ListGroupItem className="deliverRightItem p-0">
                            <Link
                                href="/analytics/totalRevenue"
                                className="rightLinkBar"
                            >
                                <Image
                                    src={Images.totalrevenue}
                                    alt="deliveryCheckimage"
                                    className="img-fluid"
                                />
                                <div className="orderReview">
                                    <h4 className="loginSub text-start">Total Revenue</h4>
                                    <div className="deliverPercent ">
                                    $20,990
                                    </div>
                                </div>
                            </Link>
                        </ListGroupItem>
                        <ListGroupItem className="deliverRightItem p-0">
                            <Link
                                href="/analytics/totalCosts"
                                className="rightLinkBar"
                            >
                                <Image
                                    src={Images.totalsale}
                                    alt="deliverClock image"
                                    className="img-fluid"
                                />
                                <div className="orderReview">
                                    <h4 className="loginSub text-start">Total Sale</h4>
                                    <div className="deliverPercent ">
                                    $20,990
                                    </div>
                                </div>
                            </Link>
                        </ListGroupItem>
                        <ListGroupItem className="deliverRightItem p-0">
                            <Link
                                href="/analytics/totalPosOrder"
                                className="rightLinkBar"
                            >
                                <Image
                                    src={Images.salebychannel}
                                    alt="assignDriver image"
                                    className="img-fluid"
                                />
                                <div className="orderReview">
                                    <h4 className="loginSub text-start">Sales by channel</h4>
                                    <div className="deliverPercent ">
                                    $20,990
                                    </div>
                                </div>
                            </Link>
                        </ListGroupItem>
                        <ListGroupItem className="deliverRightItem p-0">
                            <Link
                                href="/analytics/totalDeliveryOrder"
                                className="rightLinkBar"
                            >
                                <Image
                                    src={Images.averageorder}
                                    alt="assignDriver image"
                                    className="img-fluid"
                                />
                                <div className="orderReview">
                                    <h4 className="loginSub text-start">Average Order Value</h4>
                                    <div className="deliverPercent ">
                                    $20,990
                                    </div>
                                </div>
                            </Link>
                        </ListGroupItem>
                        <ListGroupItem className="deliverRightItem p-0">
                            <Link
                                href="/analytics/totalShippingOrder"
                                className="rightLinkBar"
                            >
                                <Image
                                    src={Images.topsales}
                                    alt=" deliverSend image"
                                    className="img-fluid"
                                />
                                <div className="orderReview">
                                    <h4 className="loginSub text-start">Top Selling Products</h4>
                                    <div className="deliverPercent ">
                                    $20,990
                                    </div>
                                </div>
                            </Link>
                        </ListGroupItem>
                        <ListGroupItem className="deliverRightItem p-0">
                            <Link
                                href="/analytics/totalOrder"
                                className="rightLinkBar"
                            >
                                <Image
                                    src={Images.saleLocation}
                                    alt="deliveryClose image"
                                    className="img-fluid"
                                />
                                <div className="orderReview ">
                                    <h4 className="loginSub text-start">Sales by Location</h4>
                                    <div className="deliverPercent ">
                                    $20,990
                                    </div>
                                </div>
                            </Link>
                        </ListGroupItem>
                        <ListGroupItem className="deliverRightItem p-0">
                            <Link
                              
                                href="/analytics/totalInventory"
                                className="rightLinkBar"
                            >
                                <Image
                                    src={Images.totalOrders}
                                    alt="deliverBack image"
                                    className="img-fluid"
                                />
                                <div className="orderReview ">
                                    <h4 className="loginSub text-start">Total Orders</h4>
                                    <div className="deliverPercent ">
                                    $20,990
                                    </div>
                                </div>
                            </Link>
                        </ListGroupItem>
                        <ListGroupItem className="deliverRightItem p-0">
                            <Link
                              
                                href="/analytics/totalProductSold"
                                className="rightLinkBar"
                            >
                                <Image
                                    src={Images.totalCost}
                                    alt="deliverBack image"
                                    className="img-fluid"
                                />
                                <div className="orderReview ">
                                    <h4 className="loginSub text-start">Total Cost</h4>
                                    <div className="deliverPercent ">
                                    $20,990
                                    </div>
                                </div>
                            </Link>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </div>
        </>
    );
};

export default AnalyticsRightsidebar;
