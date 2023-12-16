export const createFullAddress = (address) => {
  return `${address?.current_address?.street_address || " "}, ${
    address?.current_address?.city || " "
  }(${
    address?.current_address?.state_code ||
    address?.current_address?.state ||
    " "
  }), ${address?.current_address?.zipcode || " "}`;
};
