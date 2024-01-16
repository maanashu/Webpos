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
