import React, { useState } from "react";
import DeliveryRightSidebar from "../../components/commanComonets/Delivery/deliveryRightSidebar";
import * as Images from "../../utilities/images";
import Image from "next/image";
import OrderListItem from "./Component/OrderListItem";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";
import { deliveryData, getOrderDetailById } from "../../redux/slices/delivery";
import { useRouter } from "next/router";
import OrderDetail from "./Component/OrderDetails";
import Link from "next/link";
const Order = () => {
  const router = useRouter();
  const index = router?.query?.["index"];
  const listType = router?.query?.["orderListType"];

  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const { orderListLoading, orderList, drawerOrderCount } =
    useSelector(deliveryData);
  const uniqueId = authData?.usersInfo?.payload?.uniqe_id;
  const [orderListType, setOrderListType] = useState(
    listType !== undefined ? listType : "Orders to review"
  );
  const [selectedOrderData, setSelectedOrderData] = useState(null);

  // const orderDetails = orderList?.data[0];
  // console.log("ORDER___SDEAA", JSON.stringify(orderDetails));

  const itemPressHandler = async (data) => {
    console.log("oooioio", JSON.stringify(data));
    setSelectedOrderData(data);
    // console.log("DATATAAAA", JSON.stringify(data));
    let params = {
      order_id: data?.id,
    };
    dispatch(
      getOrderDetailById({
        ...params,
        cb(res) {
          if (res.status) {
            setSelectedOrderData(res?.data.payload);
          }
        },
      })
    );
    // alert("click");
  };
  return (
    <>
      <div className="deliverySection deliverOrderSection">
        <div className="deliverMain w-100">
          <div className="row ">
            <div className="col-lg-6">
              <div className="deliverOrderLeft deliveryOuter me-0">
                <Link href="/Deliveries">
                  <div className="flexTable">
                    <Image
                      src={Images.boldLeftArrow}
                      alt="boldLeftArrow "
                      className="img-fluid me-2"
                    />
                    <h4 className="loginMain text-start m-0">
                      {orderListType}
                    </h4>
                  </div>
                </Link>
                <div className="table-responsive mt-3">
                  {/* <table id="" className="orderDeliverTable">
                    <tbody>
                      <tr className="product_invoice active">
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
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemMoney">
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
                            <h4 className="assignId">1 hour delivery window</h4>
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
                        </td>
                        <td className="invoice_subhead">
                          <div className="deliverArrow text-end">
                            <Image
                              src={Images.RightArrow}
                              alt="RightArrow image"
                              className="img-fluid ms-1"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="product_invoice">
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
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemMoney">
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
                            <h4 className="assignId">1 hour delivery window</h4>
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
                        </td>
                        <td className="invoice_subhead">
                          <div className="deliverArrow text-end">
                            <Image
                              src={Images.RightArrow}
                              alt="RightArrow image"
                              className="img-fluid ms-1"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="product_invoice">
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
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemMoney">
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
                            <h4 className="assignId">1 hour delivery window</h4>
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
                        </td>
                        <td className="invoice_subhead">
                          <div className="deliverArrow text-end">
                            <Image
                              src={Images.RightArrow}
                              alt="RightArrow image"
                              className="img-fluid ms-1"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="product_invoice">
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
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemMoney">
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
                            <h4 className="assignId">1 hour delivery window</h4>
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
                        </td>
                        <td className="invoice_subhead">
                          <div className="deliverArrow text-end">
                            <Image
                              src={Images.RightArrow}
                              alt="RightArrow image"
                              className="img-fluid ms-1"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="product_invoice">
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
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemMoney">
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
                            <h4 className="assignId">1 hour delivery window</h4>
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
                        </td>
                        <td className="invoice_subhead">
                          <div className="deliverArrow text-end">
                            <Image
                              src={Images.RightArrow}
                              alt="RightArrow image"
                              className="img-fluid ms-1"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="product_invoice">
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
                        </td>
                        <td className="invoice_subhead">
                          <div className="itemMoney">
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
                            <h4 className="assignId">1 hour delivery window</h4>
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
                        </td>
                        <td className="invoice_subhead">
                          <div className="deliverArrow text-end">
                            <Image
                              src={Images.RightArrow}
                              alt="RightArrow image"
                              className="img-fluid ms-1"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                  <OrderListItem
                    screen={"SeeAll"}
                    orderList={orderList?.data}
                    itemPressHandler={itemPressHandler}
                  />
                </div>
              </div>
            </div>
            <OrderDetail orderData={selectedOrderData} />
          </div>
        </div>
        <DeliveryRightSidebar setOrderListType={setOrderListType} />
      </div>
    </>
  );
};

export default Order;
