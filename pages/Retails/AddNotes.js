import { useDispatch, useSelector } from "react-redux";
import { addNotes, selectRetailData } from "../../redux/slices/retails";
import { useState } from "react";
import { toast } from "react-toastify";

const AddNotes = (props) => {
  const retailData = useSelector(selectRetailData);
  const dispatch = useDispatch();
  const cartId = retailData?.cartDetails?.id;
  const [addNote, setAddNotes] = useState("");

  const handleAddNotes = (e) => {
    e.preventDefault();
    if (!addNote) {
      toast.error("Please add notes!");
      return false;
    }
    let params = {
      id: cartId,
      notes: addNote,
    };
    dispatch(
      addNotes({
        ...params,
        cb(res) {
          toast.success("Notes Added!");
          props.close();
        },
      })
    );
  };

  return (
    <div className="addnotesMain">
      <form className="otpForm" onSubmit={(e) => handleAddNotes(e)}>
          <div className="verify-part mt-4 mb-3">
            <div className="verify-box text-center">
              <textarea
                className="notesBox"
                id="w3review"
                placeholder="Add Notes"
                name="w3review"
                rows="4"
                cols="20"
                onChange={(e) => setAddNotes(e.target.value)}
              />
            </div>
          </div>
        <div className="noteButton">
          {/* <button className="addnotesBtn" type="submit">
            Add Notes
          </button> */}

          {retailData?.loading ? (
            <button className="addnotesBtn" type="submit" disabled>
              <span className="spinner-border spinner-border-sm"></span>
            </button>
          ) : (
            <button className="addnotesBtn" type="submit">
              Add Notes
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default AddNotes;
