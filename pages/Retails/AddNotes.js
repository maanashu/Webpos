const AddNotes = () => {
  return (
    <div className="verifyBox">
      <form className="otpForm">
        <div className="otpMain">
          <div className="verify-part">
            <div className="verify-box text-center">
              <textarea
                id="w3review"
                placeholder="Add Notes"
                name="w3review"
                rows="4"
                cols="20"
              />
            </div>
          </div>
        </div>
        <div className="verifyBtn">
          <button className="addnotesBtn" type="button">
            Add Notes
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddNotes;
