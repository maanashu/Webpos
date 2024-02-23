import { useEffect, useState, useRef } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import {
  addNewStaff,
  getStaffRoles,
  settingInfo,
} from "../../redux/slices/setting";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../redux/slices/auth";
import Multiselect from "multiselect-react-dropdown";
import { ChromePicker } from "react-color";
import { toast } from "react-toastify";

const AddStoreModal = ({ getUserLists, close }) => {
  console.log(close,"close");
  const dispatch = useDispatch();
  const toastId = useRef();
  const authData = useSelector(selectLoginAuth);
  const settingData = useSelector(settingInfo);
  const UniqueId = authData?.usersInfo?.payload?.uniqe_id;
  const [staffName, setStaffName] = useState("");
  const [staffPassword, setStaffPassword] = useState("");
  const [staffEmailAddress, setStaffEmailAddress] = useState("");
  const [isStaffMember, setIsStaffMember] = useState(false);
  const [phoneCode, SetPhoneCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [staffRoles, setStaffRoles] = useState("");
  const [selectedRoleId, setSelectedRoleId] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomName = () => {
    return Math.random().toString(36).substr(2, 10);
  };

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsStaffMember(!isStaffMember); // Toggle the checkbox value
  };
  // function for change the number and save number is state...............................
  const onChangePhoneNumber = (value, data) => {
    let phoneCode = data.dialCode;
    let phoneNumber = value.slice(data.dialCode.length);
    setPhoneNo(phoneNumber);
    SetPhoneCode(phoneCode);
  };

  // function for close color modal after select
  const handleColorPickerChangeComplete = () => {
    setDisplayColorPicker(false);
  };

  // function for open color modal after select
  const handleButtonClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  // API for POS user login..............................
  const handleAddStaff = () => {
    setIsLoading(true);
    if (!staffName) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter full name");
      }
      return;
    } else if (!phoneNo) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter phone number");
      }
      return;
    } else if (!staffPassword) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter one time password");
      }
      return;
    } else if (staffPassword.length < 4) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter atleast 4 digit password");
      }
      return;
    } else if (!staffEmailAddress) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter email address");
      }
      return;
    } else if (
      staffEmailAddress &&
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        staffEmailAddress
      )
    ) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter valid email address");
      }
      return;
    } else if (selectedRoleId.length === 0) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please select a role");
      }
      return;
    } else if (!selectedColor) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please select color code");
      }
      return;
    }
    let params = {
      firstname: staffName,
      pos_security_pin: staffPassword,
      phone_code: phoneCode,
      phone_no: phoneNo,
      email: staffEmailAddress,
      is_staff_member: isStaffMember,
      role_ids: selectedRoleId,
      color_code: selectedColor,
    };
    dispatch(
      addNewStaff({
        ...params,
        cb(res) {
          if (res) {
            if (res?.status) {
              console.log(res?.status,"res?.status");
              close();
              getUserLists();
              setIsLoading(false);
            }
          }
        },
      })
    );
  };

  // API for get STAFF ROLE...............................
  const getAllStaffRoles = () => {
    let params = {
      seller_id: UniqueId,
    };
    dispatch(
      getStaffRoles({
        ...params,
        cb(res) {
          if (res.status) {
            setStaffRoles(res?.data?.payload?.roles);
          }
        },
      })
    );
  };

  // driver supplier description
  const handleChanges = (data) => {
    setSelected(data);
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i].id);
    }
    setSelectedRoleId(arr);
  };

  useEffect(() => {
    if (UniqueId) {
      getAllStaffRoles();
    }
  }, [UniqueId]);

  return (
    <>
      <div className="addStoreSection">
        <form className="addStoreForm">
          <div className="addStoreData">
            <div className="nameForm">
              <label className="form-label amountText m-0">Full Name</label>
              <input
                className="form-control nameControl"
                type="text"
                placeholder="Marie"
                value={staffName}
                onChange={(e) => {
                  setStaffName(e.target.value);
                }}
              />
            </div>
            <div className="verifySelect mt-2">
              <label className="form-label amountText m-0">Phone Number</label>
              <div id="result" className="phoneIcon">
                <PhoneInput
                  country="us"
                  // value={phoneCode + phoneNo}
                  enableSearch={true}
                  name={generateRandomName}
                  placeholder="Phone no."
                  autoComplete="off"
                  onChange={(value, data, event, formattedValue) =>
                    onChangePhoneNumber(value, data, event, formattedValue)
                  }
                />
                <Image
                  src={Images.AlertCircle}
                  alt="alertImage"
                  className="img-fluid alertImg"
                />
              </div>
            </div>
            <div className="nameForm mt-2">
              <label className="form-label amountText m-0">
                One Time Password
              </label>
              <input
                className="form-control nameControl"
                max={4}
                type="password"
                placeholder="password"
                value={staffPassword}
                onChange={(e) => {
                  const numericValue = e.target.value
                    .replace(/[^0-9]/g, "")
                    .slice(0, 4);
                  setStaffPassword(numericValue);
                }}
              />
            </div>
            <div className="nameForm mt-2">
              <label className="form-label amountText m-0">Email Address</label>
              <input
                className="form-control nameControl"
                type="email"
                placeholder="E-mail"
                value={staffEmailAddress}
                onChange={(e) => {
                  setStaffEmailAddress(e.target.value);
                }}
              />
            </div>
            <div className="selectRole mt-2">
              <label className="form-label amountText m-0">Role</label>

              {staffRoles && (
                <Multiselect
                  options={staffRoles}
                  selectedValues={selected}
                  onSelect={handleChanges}
                  onRemove={handleChanges}
                  displayValue="name"
                />
              )}
            </div>
            <div className="memberColor mt-4">
              <div className="roundCheck mb-0">
                <input
                  type="checkbox"
                  checked={isStaffMember}
                  onChange={handleCheckboxChange}
                />
                <label className="amountText ms-1">Staff Member</label>
              </div>
              <div className="colorSelect">
                <h4
                  className="amountText pointHand"
                  onClick={handleButtonClick}
                >
                  Select Color
                </h4>
                <div className="colorPick">
                  {displayColorPicker && (
                    <ChromePicker
                      color={selectedColor}
                      onChange={handleColorChange}
                      onChangeComplete={handleColorPickerChangeComplete}
                    />
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className=""
                    style={{
                      background: selectedColor,
                      width: "50px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="addCustomerBtn mt-4">
            <button
              className="serviceCancel w-100 "
              type="button"
              onClick={() => close()}
            >
              Cancel
            </button>
            <button
              className="nextverifyBtn w-100"
              type="button"
              onClick={handleAddStaff}
            >
              {settingData?.loading && isLoading && (
                <div className="spinner-border loaderSpinner me-2 text-center"></div>
              )}
              Save
              <Image
                src={Images.ArrowRight}
                alt="rightArrow"
                className="img-fluid rightImg"
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddStoreModal;
