import {
  dotOrderPickup,
  dotAssignDriver,
  dotOrderAccepted,
  dotOrderDelivered,
} from "../utilities/images";

export const DELIVERY_MODE = {
  1: "Delivery",
  2: "Reservation",
  3: "Walkin",
  4: "Shipping",
};

export const orderStatusCode = {
  ACCEPTED: 1,
  READY_TO_PICKUP: 2,
  DRIVER_ASSIGNED: 3,
  PICKED_UP: 4,
  DELIVERED: 5,
};

export const ORDER_STATUS_FLOW_ICONS = [
  { icon: dotAssignDriver },
  { icon: dotOrderDelivered, code: orderStatusCode.DELIVERED },
  { icon: dotOrderPickup, code: orderStatusCode.PICKED_UP },
  { icon: dotAssignDriver, code: orderStatusCode.DRIVER_ASSIGNED },
  { icon: dotOrderDelivered, code: orderStatusCode.READY_TO_PICKUP },
  { icon: dotOrderAccepted, code: orderStatusCode.ACCEPTED },
];
