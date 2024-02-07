import moment from "moment-timezone";
import { toast } from "react-toastify";

var pSBCr = null;

export const createFullAddress = (address) => {
  if (address) {
    return `${address?.current_address?.street_address || " "} ${
      address?.current_address?.city || " "
    }${
      address?.current_address?.state_code ||
      address?.current_address?.state ||
      " "
    } ${address?.current_address?.zipcode || " "}`;
  }
};

export const getCurrentTimeZone = () => {
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Replace "Asia/Calcutta" with "Asia/Kolkata"
  if (timeZone === "Asia/Calcutta") {
    timeZone = "Asia/Kolkata";
  }

  return timeZone;
};

export const formattedReturnPrice = (price) => {
  // Convert price to a number, defaulting to 0 if it's falsy or not a number
  const numericPrice = parseFloat(price) || 0;

  // Format the numeric price with 2 decimal places
  const formattedPrice = numericPrice.toFixed(2);

  // Determine the sign and prepend accordingly
  const sign = numericPrice == 0 ? "" : "-";

  return `${sign}$${formattedPrice}`;
};
export const amountFormat = (price, notSign) => {
  const stringCheckAmount = typeof price === "string" ? Number(price) : price;
  const withLocalString = stringCheckAmount?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const dollarSign = notSign ? "" : "$";

  return `${dollarSign}${withLocalString || "0.00"}`;
};
export const getProductPrice = (
  supply_offers,
  selling_price,
  productQty = 1
) => {
  if (!productQty || productQty == 0) {
    productQty = 1;
  }

  var productOfferPrice = selling_price;

  if (supply_offers?.length > 0) {
    var applicableOffer = null;
    const supplyOffers = supply_offers;
    for (let index = 0; index < supplyOffers.length; index++) {
      const offer = supplyOffers[index];

      if (productQty >= offer?.offer?.quantity) {
        applicableOffer = offer;
      }
    }

    if (applicableOffer) {
      if (applicableOffer.offer.price_flag == "percentage") {
        productOfferPrice = Number(
          productOfferPrice -
            (productOfferPrice * applicableOffer.offer.offer_price) / 100
        );
      } else {
        productOfferPrice = applicableOffer.offer.offer_price;
      }

      if (applicableOffer.offer.offer_flag == "per_box") {
        productOfferPrice = productOfferPrice / applicableOffer.offer.quantity;
      }
    }
  }
  return productOfferPrice;
};
export const getProductFinalPrice = (item) => {
  var productPrice = 0;
  productPrice = getProductPrice(
    item.product_details?.supply?.supply_offers,
    item.product_details?.supply?.supply_prices?.selling_price,
    item?.qty
  );

  // var productPrice =
  //   item?.product_details?.supply?.supply_prices?.selling_price;
  var attributePrice = 0;

  const supplyVariants = item.product_details?.supply?.supply_variants;

  if (supplyVariants) {
    if (Array.isArray(supplyVariants)) {
      attributePrice = supplyVariants.reduce(function (a, b) {
        return a + b?.price;
      }, 0);
    } else if (typeof supplyVariants === "object" && supplyVariants !== null) {
      attributePrice = supplyVariants?.price;
    }
  }

  productPrice = productPrice + attributePrice;

  return productPrice * item?.qty;
};

export const formattedReturnPriceWithoutSign = (price) => {
  // Convert price to a number, defaulting to 0 if it's falsy or not a number
  const numericPrice =
    typeof price === "string" ? parseFloat(price) : price || 0;

  // Format the numeric price with 2 decimal places
  const formattedPrice = numericPrice?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const amountTwoDecimal = Number(formattedPrice)?.toFixed(2);

  // Determine the sign and prepend accordingly
  const sign = numericPrice == 0 ? "" : "-";

  return `${sign}${amountTwoDecimal}`;
};

export const noCartFun = () => {
  toast.error("NO Cart Found");
};

export const formattedPrice = (price) => {
  // Convert price to a number, defaulting to 0 if it's falsy or not a number
  const numericPrice = parseFloat(price) || 0;

  // Format the numeric price with 2 decimal places
  //  const formattedPrice = numericPrice.toFixed(2);

  const formattedPrice = Math.abs(numericPrice).toFixed(2);

  // Determine the sign and prepend accordingly
  const sign = numericPrice >= 0 ? "" : "-";

  return `${sign}$${formattedPrice}`;
};

export const getDaysAndDates = (
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1
) => {
  const timezone = getCurrentTimeZone();
  const currentDate = moment().tz(timezone);
  const daysInMonth = currentDate.daysInMonth();

  const daysAndDates = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = moment({ year, month: month - 1, day }).tz(timezone);

    if (date.isSameOrAfter(currentDate, "day")) {
      const dayOfWeek = date.format("ddd").toUpperCase();
      const completeDate = date.format("YYYY-MM-DD");
      daysAndDates.push({
        day: dayOfWeek,
        date: date.date(),
        completeDate: completeDate,
      });
    }
  }

  return daysAndDates;
};
export const getStartEndFormattedDate = (date) => {
  return `${moment(date).format("hh:mm A")}`;
};

export const calculateTimeDuration = (item) => {
  const startMoment = moment(item?.start_date_time);
  const endMoment = moment(item?.end_date_time);
  const duration = moment.duration(endMoment.diff(startMoment));

  const startFormattedTime = startMoment.format("h:mm A");
  const endFormattedTime = moment(item?.end_date_time).format("h:mm A");

  const hours = Math.floor(duration.asHours());
  const minutes = Math.floor(duration.asMinutes()) % 60;

  const newFormattedTime = `${startFormattedTime} - ${endFormattedTime} (${hours} hrs ${minutes} mins)`;
  return newFormattedTime;
};

export const pSBC = (p, c0, c1, l) => {
  let r,
    g,
    b,
    P,
    f,
    t,
    h,
    i = parseInt,
    m = Math.round,
    a = typeof c1 == "string";
  if (
    typeof p != "number" ||
    p < -1 ||
    p > 1 ||
    typeof c0 != "string" ||
    (c0[0] != "r" && c0[0] != "#") ||
    (c1 && !a)
  )
    return null;
  if (!pSBCr)
    pSBCr = (d) => {
      let n = d.length,
        x = {};
      if (n > 9) {
        ([r, g, b, a] = d = d.split(",")), (n = d.length);
        if (n < 3 || n > 4) return null;
        (x.r = i(r[3] == "a" ? r.slice(5) : r.slice(4))),
          (x.g = i(g)),
          (x.b = i(b)),
          (x.a = a ? parseFloat(a) : -1);
      } else {
        if (n == 8 || n == 6 || n < 4) return null;
        if (n < 6)
          d =
            "#" +
            d[1] +
            d[1] +
            d[2] +
            d[2] +
            d[3] +
            d[3] +
            (n > 4 ? d[4] + d[4] : "");
        d = i(d.slice(1), 16);
        if (n == 9 || n == 5)
          (x.r = (d >> 24) & 255),
            (x.g = (d >> 16) & 255),
            (x.b = (d >> 8) & 255),
            (x.a = m((d & 255) / 0.255) / 1000);
        else
          (x.r = d >> 16), (x.g = (d >> 8) & 255), (x.b = d & 255), (x.a = -1);
      }
      return x;
    };
  (h = c0.length > 9),
    (h = a ? (c1.length > 9 ? true : c1 == "c" ? !h : false) : h),
    (f = pSBCr(c0)),
    (P = p < 0),
    (t =
      c1 && c1 != "c"
        ? pSBCr(c1)
        : P
        ? { r: 0, g: 0, b: 0, a: -1 }
        : { r: 255, g: 255, b: 255, a: -1 }),
    (p = P ? p * -1 : p),
    (P = 1 - p);
  if (!f || !t) return null;
  if (l)
    (r = m(P * f.r + p * t.r)),
      (g = m(P * f.g + p * t.g)),
      (b = m(P * f.b + p * t.b));
  else
    (r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5)),
      (g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5)),
      (b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5));
  (a = f.a),
    (t = t.a),
    (f = a >= 0 || t >= 0),
    (a = f ? (a < 0 ? t : t < 0 ? a : a * P + t * p) : 0);
  if (h)
    return (
      "rgb" +
      (f ? "a(" : "(") +
      r +
      "," +
      g +
      "," +
      b +
      (f ? "," + m(a * 1000) / 1000 : "") +
      ")"
    );
  else
    return (
      "#" +
      (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0))
        .toString(16)
        .slice(1, f ? undefined : -2)
    );
};

export const getCalendarActionButtonTitle = (status) => {
  switch (status) {
    case 1:
      return "Check-in";
    case 2:
      return "Mark Completed";
    case 3:
      return "Completed";
    case 4:
      return "Declined";
    case 5:
      return "Cancelled";

    default:
      return "Status unknown";
  }
};
export function replaceDeliveryStatus(str) {
  const replacements = {
    "Orders to review": "orderReviewDeliver",
    "Order Accepted": "orderAcceptDeliver",
    "Orders Prepared": "orderPrepareDeliver",
    "Assign to Driver": "orderAssignDeliver",
    "Picked up": "orderPickupDeliver",
    Delivered: "deliverOrderTable",
    "Rejected/Cancelled": "cancelDeliver",
    Returned: "returnDeliver",
  };

  return replacements[str] || str;
}

export const getDateLabel = (dateString) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  const todayIndex = new Date().getDay();

  // Calculate the difference in days
  const diff = dayIndex - todayIndex;
  let label = "";

  switch (diff) {
    case 0:
      label = "Today";
      break;
    case 1:
      label = "Tomorrow";
      break;
    default:
      label = days[dayIndex];
      break;
  }

  return label;
};

export const getWeeklyDateLabel = (dateString) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);
  const today = new Date();
  const oneWeekLater = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // Add 7 days to current date

  if (date.getTime() >= oneWeekLater.getTime()) {
    // After one week, show the date in regular format
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  const diff = Math.floor(
    (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";

  return daysOfWeek[date.getDay()];
};
