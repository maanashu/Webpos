import React, { useEffect, useState } from "react";
import GoogleMap from "../../../../../components/commanComonets/GoogleMap/GoogleMap";
import Invoice from "../../../../../components/commanComonets/Invoice";
import FlowDiagramOrderStatus from "../../../../../components/commanComonets/FlowDiagramOrderStatus";
import { createFullAddress } from "../../../../../utilities/globalMethods";
import { ApiClient } from "../../../../../utilities/api";
import { ORDER_API_URL } from "../../../../../utilities/config";
import { useRouter } from "next/router";
import ExpandOrderFlowBtn from "../../../../../components/commanComonets/ExpandOrderFlowBtn";
import { selectLoginAuth } from "../../../../../redux/slices/auth";
import { useSelector } from "react-redux";

const TrackStatus = () => {
  const router = useRouter();
  const userId = router?.query?.["order-id"];

  const authData = useSelector(selectLoginAuth);

  const [orderDetails, setOrderDetails] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    if (userId)
      ApiClient.get(ORDER_API_URL + "/api/v1/orders/pos/" + userId)
        .then((res) => {
          setOrderDetails(res?.data?.payload);
        })
        .catch((err) => {});
  }, [userId]);
  console.log("khkfshsd", orderDetails);
  return (
    <>
      <GoogleMap></GoogleMap>
      <div style={{ position: "absolute", bottom: "15px" }}>
        <Invoice
          isLoading={!orderDetails}
          tax={orderDetails?.tax}
          date={orderDetails?.date}
          discount={orderDetails?.discount}
          total={orderDetails?.payable_amount}
          subtotal={orderDetails?.total_sale_price}
          shipping={
            orderDetails?.delivery_charge || orderDetails?.shipping_charge
          }
          posUserId={authData?.posUserLoginDetails?.payload?.pos_number}
          userId={
            orderDetails?.is_returned_order
              ? orderDetails?.return_detail?.id
              : orderDetails?.user_details?.id
          }
          ordersList={
            orderDetails?.is_returned_order
              ? orderDetails?.return_detail?.return_details
              : orderDetails?.order_details
          }
          paymentMode={orderDetails?.mode_of_payment}
          barcodeImg={
            orderDetails?.is_returned_order
              ? orderDetails?.return_detail?.invoices?.barcode
              : orderDetails?.invoices?.barcode
          }
          invoiceNumber={
            orderDetails?.is_returned_order
              ? orderDetails?.return_detail?.invoices?.invoice_number
              : orderDetails?.invoices?.invoice_number
          }
          phoneNumber={orderDetails?.seller_details?.phone_number}
          sellerName={orderDetails?.seller_details?.organization_name}
          sellerAddress={createFullAddress(orderDetails?.seller_details)}
          orderDetails={orderDetails}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          left: "50%",
        }}
      >
        <FlowDiagramOrderStatus
          isExpanded={isExpanded}
          // deliveryOTPVerified={true}
          // orderStatus={"3"}
          orderStatus={orderDetails?.status?.toString()}
          sellerOTP={orderDetails?.order_delivery?.seller_otp || "1234"}
        />
      </div>
      <ExpandOrderFlowBtn
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
    </>
  );
};

export default TrackStatus;
