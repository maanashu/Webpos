if (process.env.NODE_ENV === "production") {

    module.exports = {
        AUTH_API_URL: "https://apiuserservice.jobr.com",
        PRODUCT_API_URL: "https://apiproductmgmt.jobr.com"
    };

} else {

    module.exports = {
        AUTH_API_URL: "https://apiuserservice.jobr.com",
        PRODUCT_API_URL: "https://apiproductmgmt.jobr.com"
    };
}