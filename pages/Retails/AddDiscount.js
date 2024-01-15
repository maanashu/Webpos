const AddDiscount = () => {
  return (
    <div className="verifyBox">
      <form className="otpForm">
        <div className="otpMain">
          <div className="verify-part">
            <div className="verify-box text-center">
              <div className="discountAmountBox">
                <label
                  htmlFor="amount"
                  className="customform-control customInputDiscount"
                >
                  <input type="radio" id="amount" name="amount" />
                  Amount
                </label>

                <input
                  className="form-control unitPriceControl"
                  type="number"
                  placeholder="$0.00"
                />
              </div>
              <div className="discountAmountBox">
                <label
                  htmlFor="percent"
                  className="customform-control customInputDiscount"
                >
                  <input type="radio" id="amount" name="amount" />
                  Percent
                </label>
                <input
                  className="form-control unitPriceControl"
                  type="number"
                  placeholder="0.00      % "
                />
              </div>
              <div className="discountAmountBox">
                <label htmlFor="discountCode" className="customform-control customInputDiscount">
                <input type="radio" id="amount" name="amount" />
                  Discount Code
                </label>
                <input
                  className="form-control unitPriceControl"
                  type="text"
                  placeholder="CODE"
                />
              </div>
              <div>
                <label className="form-label fw-500">Discount Title</label>
                <input
                  className="customform-control customInputDiscount"
                  placeholder="Discount"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="verifyBtn">
          <button className="addnotesBtn" type="button">
            Add Discount
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddDiscount;
