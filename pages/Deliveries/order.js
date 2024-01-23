import React, { useState } from "react";
import DeliveryRightSidebar from "../../components/commanComonets/Delivery/deliveryRightSidebar";
import * as Images from "../../utilities/images";
import Image from "next/image";
import OrderListItem from "./Component/OrderListItem";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";
import {
  acceptOrder,
  deliveryData,
  getOrderDetailById,
} from "../../redux/slices/delivery";
import { useRouter } from "next/router";
import OrderDetail from "./Component/OrderDetails";
import Link from "next/link";
import OrderDeliver from "./orderDeliver";
const Order = () => {
  const router = useRouter();
  const selectedIndex = router?.query?.["index"];
  const item = router?.query?.["item"];
  const listType = router?.query?.["orderListType"];

  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const { orderListLoading, orderList, drawerOrderCount } =
    useSelector(deliveryData);
  const uniqueId = authData?.usersInfo?.payload?.uniqe_id;
  const [orderListType, setOrderListType] = useState({
    status: "0",
    title: listType !== undefined ? listType : "Orders to review",
  });
  const [orderListStatus, setOrderListStatus] = useState(
    listType !== undefined ? listType : "Orders to review"
  );
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

  // const changeOrderStatusAfterPickup = (id) => {
  //   alert("decline");

  //   // setPickupModalVisible(false);
  //   // const data = {
  //   //   orderId: id,
  //   //   status: 5,
  //   //   sellerID: sellerID,
  //   // };
  //   // dispatch(
  //   //   acceptOrder(data, openShippingOrders, 1, (res) => {
  //   //     if (res?.msg) {
  //   //       if (
  //   //         getDeliveryData?.getReviewDef?.length > 0 &&
  //   //         getDeliveryData?.getReviewDef?.length === 1
  //   //       ) {
  //   //         dispatch(getOrderCount(getUpdatedCount));
  //   //       } else {
  //   //         dispatch(getReviewDefault(openShippingOrders));
  //   //         dispatch(orderStatusCount());
  //   //         dispatch(todayOrders());
  //   //         dispatch(getOrderstatistics('1,3'));
  //   //         dispatch(getGraphOrders('1,3'));
  //   //         setGetOrderDetail('ViewAllScreen');
  //   //         setUserDetail(ordersList?.[0] ?? []);
  //   //         setViewAllOrder(true);
  //   //         setOrderDetail(ordersList?.[0]?.order_details ?? []);
  //   //       }
  //   //     }
  //   //   })
  //   // );
  // };
  // const declineHandler = (id) => {
  //   alert("decline");

  //   // const data = {
  //   //   orderId: id,
  //   //   status: 8,
  //   //   sellerID: sellerID,
  //   // };
  //   // dispatch(
  //   //   acceptOrder(data, openShippingOrders, 1, (res) => {
  //   //     if (res?.msg) {
  //   //       setViewAllOrder(true);
  //   //       dispatch(getReviewDefault(openShippingOrders));
  //   //       dispatch(orderStatusCount());
  //   //       dispatch(todayOrders());
  //   //       dispatch(getOrderstatistics('1,3'));
  //   //       dispatch(getGraphOrders(1));
  //   //       setGetOrderDetail('ViewAllScreen');
  //   //       setUserDetail(ordersList?.[0] ?? []);
  //   //       setOrderDetail(ordersList?.[0]?.order_details ?? []);
  //   //     }
  //   //   })
  //   // );
  // };
  // const trackHandler = () => {
  //   alert("Track");
  // };
  return (
    <></>
    // <>
    //   <div className="deliverySection deliverOrderSection">
    //     <div className="deliverMain w-100">
    //       <div className="row ">
    //         <div className="col-lg-6">
    //           <div className="deliverOrderLeft deliveryOuter me-0">
    //             <Link href="/Deliveries">
    //               <div className="flexTable">
    //                 <Image
    //                   src={Images.boldLeftArrow}
    //                   alt="boldLeftArrow "
    //                   className="img-fluid me-2"
    //                 />
    //                 <h4 className="loginMain text-start m-0">
    //                   {orderListType?.title}
    //                 </h4>
    //               </div>
    //             </Link>
    //             <div className="table-responsive mt-3">
    //               {/* <table id="" className="orderDeliverTable">
    //                 <tbody>
    //                   <tr className="product_invoice active">
    //                     <td className="invoice_subhead">
    //                       <div className="nameLocation">
    //                         <h4 className="assignId">Samara Schwansteiger</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.OrderLocation}
    //                             alt="location Image"
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">2.5 miles</span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="itemMoney">
    //                         <h4 className="assignId">3 items</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.MoneyItem}
    //                             alt="MoneyItemImage "
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">$500.50</span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="itemTime">
    //                         <h4 className="assignId">1 hour delivery window</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.Time}
    //                             alt="MoneyItemImage "
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">
    //                             Immediately
    //                           </span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="deliverArrow text-end">
    //                         <Image
    //                           src={Images.RightArrow}
    //                           alt="RightArrow image"
    //                           className="img-fluid ms-1"
    //                         />
    //                       </div>
    //                     </td>
    //                   </tr>
    //                   <tr className="product_invoice">
    //                     <td className="invoice_subhead">
    //                       <div className="nameLocation">
    //                         <h4 className="assignId">Samara Schwansteiger</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.OrderLocation}
    //                             alt="location Image"
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">2.5 miles</span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="itemMoney">
    //                         <h4 className="assignId">3 items</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.MoneyItem}
    //                             alt="MoneyItemImage "
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">$500.50</span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="itemTime">
    //                         <h4 className="assignId">1 hour delivery window</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.Time}
    //                             alt="MoneyItemImage "
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">
    //                             Immediately
    //                           </span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="deliverArrow text-end">
    //                         <Image
    //                           src={Images.RightArrow}
    //                           alt="RightArrow image"
    //                           className="img-fluid ms-1"
    //                         />
    //                       </div>
    //                     </td>
    //                   </tr>
    //                   <tr className="product_invoice">
    //                     <td className="invoice_subhead">
    //                       <div className="nameLocation">
    //                         <h4 className="assignId">Samara Schwansteiger</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.OrderLocation}
    //                             alt="location Image"
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">2.5 miles</span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="itemMoney">
    //                         <h4 className="assignId">3 items</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.MoneyItem}
    //                             alt="MoneyItemImage "
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">$500.50</span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="itemTime">
    //                         <h4 className="assignId">1 hour delivery window</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.Time}
    //                             alt="MoneyItemImage "
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">
    //                             Immediately
    //                           </span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="deliverArrow text-end">
    //                         <Image
    //                           src={Images.RightArrow}
    //                           alt="RightArrow image"
    //                           className="img-fluid ms-1"
    //                         />
    //                       </div>
    //                     </td>
    //                   </tr>
    //                   <tr className="product_invoice">
    //                     <td className="invoice_subhead">
    //                       <div className="nameLocation">
    //                         <h4 className="assignId">Samara Schwansteiger</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.OrderLocation}
    //                             alt="location Image"
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">2.5 miles</span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="itemMoney">
    //                         <h4 className="assignId">3 items</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.MoneyItem}
    //                             alt="MoneyItemImage "
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">$500.50</span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="itemTime">
    //                         <h4 className="assignId">1 hour delivery window</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.Time}
    //                             alt="MoneyItemImage "
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">
    //                             Immediately
    //                           </span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="deliverArrow text-end">
    //                         <Image
    //                           src={Images.RightArrow}
    //                           alt="RightArrow image"
    //                           className="img-fluid ms-1"
    //                         />
    //                       </div>
    //                     </td>
    //                   </tr>
    //                   <tr className="product_invoice">
    //                     <td className="invoice_subhead">
    //                       <div className="nameLocation">
    //                         <h4 className="assignId">Samara Schwansteiger</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.OrderLocation}
    //                             alt="location Image"
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">2.5 miles</span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="itemMoney">
    //                         <h4 className="assignId">3 items</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.MoneyItem}
    //                             alt="MoneyItemImage "
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">$500.50</span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="itemTime">
    //                         <h4 className="assignId">1 hour delivery window</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.Time}
    //                             alt="MoneyItemImage "
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">
    //                             Immediately
    //                           </span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="deliverArrow text-end">
    //                         <Image
    //                           src={Images.RightArrow}
    //                           alt="RightArrow image"
    //                           className="img-fluid ms-1"
    //                         />
    //                       </div>
    //                     </td>
    //                   </tr>
    //                   <tr className="product_invoice">
    //                     <td className="invoice_subhead">
    //                       <div className="nameLocation">
    //                         <h4 className="assignId">Samara Schwansteiger</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.OrderLocation}
    //                             alt="location Image"
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">2.5 miles</span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="itemMoney">
    //                         <h4 className="assignId">3 items</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.MoneyItem}
    //                             alt="MoneyItemImage "
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">$500.50</span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="itemTime">
    //                         <h4 className="assignId">1 hour delivery window</h4>
    //                         <div className="deliverTableBx">
    //                           <Image
    //                             src={Images.Time}
    //                             alt="MoneyItemImage "
    //                             className="img-fluid ms-1"
    //                           />
    //                           <span className="locateDistance">
    //                             Immediately
    //                           </span>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     <td className="invoice_subhead">
    //                       <div className="deliverArrow text-end">
    //                         <Image
    //                           src={Images.RightArrow}
    //                           alt="RightArrow image"
    //                           className="img-fluid ms-1"
    //                         />
    //                       </div>
    //                     </td>
    //                   </tr>
    //                 </tbody>
    //               </table> */}
    //               <OrderListItem
    //                 screen={"SeeAll"}
    //                 orderList={orderList?.data}
    //                 itemPressHandler={itemPressHandler}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         <OrderDetail
    //           orderData={selectedOrderData}
    //           selectedOrderIndex={selectedOrderIndex}
    //           acceptHandler={acceptHandler}
    //           declineHandler={declineHandler}
    //           trackHandler={trackHandler}
    //           orderListType={orderListType}
    //         />
    //       </div>
    //     </div>
    //     <DeliveryRightSidebar setOrderListType={setOrderListType} />
    //   </div>
    // </>
    // <OrderDeliver />
  );
};

export default Order;
