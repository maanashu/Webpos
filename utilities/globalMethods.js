export const createFullAddress = (address) => {
  return `${address?.current_address?.street_address || " "}, ${
    address?.current_address?.city || " "
  }(${
    address?.current_address?.state_code ||
    address?.current_address?.state ||
    " "
  }), ${address?.current_address?.zipcode || " "}`;
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
