import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotes,
  attachCustomer,
  customProuductAdd,
  getUserDetail,
  productCart,
  selectRetailData,
  setUserDetail,
} from "../../redux/slices/retails";
import { toast } from "react-toastify";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { digitWithDot, digits, emailReg } from "../../utilities/validators";
import { selectLoginAuth } from "../../redux/slices/auth";
import PhoneInput from "react-phone-input-2";

const AttachCustomer = ({ crosshandler }) => {
  const dispatch = useDispatch();
  const retailData = useSelector(selectRetailData);
  const cartData = retailData?.productCart;
  const authData = useSelector(selectLoginAuth);
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const cartId = retailData?.cartDetails?.id;
  const [addNote, setAddNotes] = useState("");
  const [count, setCount] = useState(1);
  const [productName, setProductName] = useState("");
  const [upcCode, setUpcCode] = useState("");
  const [notes, setNotes] = useState("");
  const [amount, setAmount] = useState("");
  const [phoneCode, SetPhoneCode] = useState("+1");
  const [phoneNo, setPhoneNo] = useState("");
  const [detailArea, setDetailArea] = useState(false);
  const getuserDetailByNo = retailData?.userDetailData || {};
  const userLength = Object?.keys(getuserDetailByNo)?.length;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [invitationEmail, setInvitationEmail] = useState();
  const [invitationFirstName, setInvitationFirstName] = useState();
  const [invitationLastName, setInvitationLastName] = useState();

  console.log(retailData?.attachCustomerLoad);

  const saveAndAddCustomer = () => {
    if (!firstName) {
      toast.error("Please enter first name");
    } else if (!lastName) {
      toast.error("Please enter last name");
    } else if (!email) {
      toast.error("Please enter email");
    } else if (email && emailReg.test(email) === false) {
      toast.error("Please enter valid  email");
    } else {
      let params = {
        email: email,
        phone_no: phoneNo,
        phone_code: phoneCode,
        firstname: firstName,
        lastname: lastName,
        cartId: cartData?.id,
      };
      dispatch(
        attachCustomer({
          ...params,
          cb() {
            setPhoneNo("");
            dispatch(productCart());
            crosshandler();
          },
        })
      );
    }
  };

  // const customProductHandler = () => {
  //   if (!productName) {
  //     toast.error("Please enter product name");
  //   } else if (!amount) {
  //     toast.error("Please enter product amount");
  //   } else if (amount && digitWithDot.test(amount) === false) {
  //     toast.error("Please enter valid amount");
  //   } else if (!upcCode) {
  //     toast.error("Please enter upc code");
  //   } else if (upcCode && digits.test(upcCode) === false)
  //     toast.error("Please enter valid upc code");
  //   else {
  //     let params = {
  //       seller_id: sellerId,
  //       price: amount,
  //       name: productName,
  //       type: "physical",
  //       qty: count,
  //       upc: upcCode,
  //       ...(notes && { description: notes }),
  //     };
  //     dispatch(
  //       customProuductAdd({
  //         ...params,
  //         cb() {
  //           crosshandler();
  //           dispatch(productCart());
  //         },
  //       })
  //     );
  //   }
  // };

  const generateRandomName = () => {
    return Math.random().toString(36).substr(2, 10);
  };
  const onChangePhoneNumber = (value, data) => {
    let phoneCode = data.dialCode;
    let phoneNumber = value.slice(data.dialCode.length);
    setPhoneNo(phoneNumber);
    SetPhoneCode(phoneCode);
  };

  useEffect(() => {
    if (phoneNo?.length > 9) {
      let params = {
        phone_code: phoneCode,
        phone_no: phoneNo,
      };
      dispatch(getUserDetail(params));
      setDetailArea(true);
    } else {
      setDetailArea(false);
      dispatch(setUserDetail({}));
    }
  }, [phoneNo?.length > 9]);
  useEffect(() => {
    if (cartData?.user_details) {
      SetPhoneCode(cartData?.user_details?.phone_code || "+1");
      setPhoneNo(cartData?.user_details?.phone_no || "");
      // setInvitationFirstName(getuserDetailByNo?.invitation?.firstname);
    }
  }, []);

  useEffect(() => {
    if (getuserDetailByNo?.invitation) {
      setInvitationFirstName(getuserDetailByNo?.invitation?.firstname);
      setInvitationLastName(getuserDetailByNo?.invitation?.lastname);
      setInvitationEmail(getuserDetailByNo?.invitation?.email);
    }
  }, [getuserDetailByNo]);

  const saveCustomer = () => {
    if (
      getuserDetailByNo?.invitation?.firstName ||
      getuserDetailByNo?.user_profile?.firstname
    ) {
      let params = getuserDetailByNo?.invitation?.id
        ? {
            cartId: cartData?.id,
            invitation_id: getuserDetailByNo?.invitation?.id,
          }
        : {
            cartId: cartData?.id,
            user_id: getuserDetailByNo?.user_profile?.user?.unique_uuid,
            // customerAdd: 'customerAdd',
          };
      dispatch(
        attachCustomer({
          ...params,
          cb() {
            setPhoneNo("");
            dispatch(productCart());
            crosshandler();
          },
        })
      );
    } else {
      if (!invitationEmail) {
        toast.error("Please enter email");
      } else if (invitationEmail && emailReg.test(invitationEmail) === false) {
        toast.error("Please enter valid  email");
      } else if (!invitationFirstName) {
        toast.error("Please enter first name");
      } else if (!invitationLastName) {
        toast.error("Please enter last name");
      } else {
        let params = {
          email: invitationEmail,
          phone_no: phoneNo,
          phone_code: phoneCode,
          firstname: invitationFirstName,
          lastname: invitationLastName,
          cartId: cartData?.id,
        };
        dispatch(
          attachCustomer({
            ...params,
            cb() {
              setPhoneNo("");
              dispatch(productCart());
              crosshandler();
            },
          })
        );
      }
    }
  };

  return (
    <div className="p-2">
      <div className="trackingSub headerModal">
        <figure className="profileImage ">
          <Image
            src={Images.addCutomer}
            alt="trackingImage"
            className="img-fluid "
          />
        </figure>
        <h4 className="loginheading mt-2">Add a customer</h4>
        <h4 className="trackingHeading">
          Search a costumer or{" "}
          <span className="fw-bold">create a new one. </span>
        </h4>
        <div
          className="crossModal"
          onClick={() => {
            dispatch(setUserDetail({}));
            crosshandler();
          }}
        >
          <Image
            src={Images.modalCross}
            alt="modalCross"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="b-1">
        <div className=" verifySelect mt-5">
          {/* <label className="form-label amountText m-0">Phone Number</label> */}
          <div id="result" className="phoneIcon">
            <PhoneInput
              country="us"
              value={phoneCode + phoneNo}
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
          {retailData?.getUserDetailLoad ? null : userLength > 0 &&
            detailArea ? (
            <p>Already in system</p>
          ) : userLength == 0 && !detailArea ? null : (
            <p>This phone is not registered in the database</p>
          )}
        </div>
        {retailData?.getUserDetailLoad ? (
          <div className="mt-5 text-center  " style={{ borderWidth: "1px" }}>
            <span className="spinner-border spinner-border-sm mx-1"></span>
          </div>
        ) : (
          <div>
            {userLength > 0 && detailArea ? (
              getuserDetailByNo?.invitation?.id ? (
                <div className="customerFoundSection">
                  <div className="trackingSub"></div>
                  <div className="customerFoundSub">
                    <div className="detailSection">
                      <div className="phoneDetail">
                        <label className="loginSub text-start">
                          Phone number
                        </label>
                        <div className="flexDiv ">
                          <h4 className="trackingHeading">
                            +{getuserDetailByNo?.invitation?.phone_code}
                            {getuserDetailByNo?.invitation?.phone_no}
                          </h4>
                          <Image
                            src={Images.AlertCircle}
                            alt="alertImage"
                            className="img-fluid "
                          />
                        </div>
                      </div>
                      <div className="emailDetail">
                        <label className="loginSub text-start">
                          E-mail Address
                        </label>
                        <input
                          className="form-control nameControl"
                          type="text"
                          placeholder="First Name"
                          value={invitationEmail?.toString()}
                          onChange={(e) => setInvitationEmail(e.target.value)}
                        />
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <label className="loginSub text-start">
                            First Name
                          </label>
                          <input
                            className="form-control nameControl"
                            type="text"
                            placeholder="First Name"
                            value={invitationFirstName?.toString()}
                            onChange={(e) =>
                              setInvitationFirstName(e.target.value)
                            }
                          />
                        </div>
                        <div className="col-lg-6">
                          <label className="loginSub text-start">
                            Last Name
                          </label>
                          <input
                            className="form-control nameControl"
                            type="text"
                            placeholder="Lastname"
                            value={invitationLastName?.toString()}
                            onChange={(e) =>
                              setInvitationLastName(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="payDetail">
                        <label className="loginSub text-start">
                          Payment Methods
                        </label>
                        <div className="emailDetailSub ">
                          <Image
                            src={Images.visa}
                            alt="mailbox image"
                            className="img-fluid"
                          />
                          <h4 className="trackingHeading">
                            ●●●● ●●●● ●●●● 7552
                          </h4>
                        </div>
                      </div> */}
                  </div>
                </div>
              ) : (
                // <p>2</p>
                <div className="customerFoundSection">
                  <div className="trackingSub"></div>
                  <div className="customerFoundSub">
                    <div className="detailSection">
                      <div className="phoneDetail">
                        <label className="loginSub text-start">
                          Phone number
                        </label>
                        <div className="flexDiv ">
                          <h4 className="trackingHeading">
                            {getuserDetailByNo?.user_profile?.phone_code}
                          </h4>
                          <Image
                            src={Images.AlertCircle}
                            alt="alertImage"
                            className="img-fluid "
                          />
                        </div>
                      </div>
                      <div className="emailDetail">
                        <label className="loginSub text-start">
                          E-mail Address
                        </label>
                        <div className="emailDetailSub ">
                          <Image
                            src={Images.mailBox}
                            alt="mailbox image"
                            className="img-fluid"
                          />
                          <h4 className="trackingHeading">
                            {getuserDetailByNo?.user_profile.user?.email}
                          </h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <label className="loginSub text-start">
                            First Name
                          </label>
                          <h4 className="trackingHeading text-start">
                            {getuserDetailByNo?.user_profile?.firstname}
                          </h4>
                        </div>
                        <div className="col-lg-6">
                          <label className="loginSub text-start">
                            Last Name
                          </label>
                          <h4 className="trackingHeading text-start">
                            {getuserDetailByNo?.user_profile?.lastname}
                          </h4>
                        </div>
                      </div>
                      <div className="payDetail">
                        <label className="loginSub text-start">
                          Payment Methods
                        </label>
                        <div className="emailDetailSub ">
                          <Image
                            src={Images.visa}
                            alt="mailbox image"
                            className="img-fluid"
                          />
                          <h4 className="trackingHeading">
                            ●●●● ●●●● ●●●● 7552
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ) : userLength == 0 && !detailArea ? null : (
              <div>
                <div className="row">
                  <div className="col-lg-6">
                    <label className="form-label amountText m-0">
                      First Name
                    </label>
                    <input
                      className="form-control nameControl"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label amountText m-0">
                      Last Name
                    </label>
                    <input
                      className="form-control nameControl"
                      type="text"
                      placeholder="Lastname"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <label className="form-label amountText m-0">
                  E-mail Address
                </label>
                <div className="phoneIcon">
                  <input
                    className="form-control verifyControl"
                    type="email"
                    placeholder="hello@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Image
                    src={Images.mailBox}
                    alt="mailbox image"
                    className="img-fluid lockImg"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* <div>
        <div className="emailField">
          
        </div>
        
      </div> */}
        {phoneNo?.length > 9 &&
        cartData?.user_details?.phone_no == phoneNo ? null : (
          <div className="modal-footer mt-5">
            <button className="cancelBtn" onClick={() => crosshandler()}>
              Cancel
            </button>
            <button
              className="ModalBlue"
              // onClick={() => customProductHandler()}
              onClick={() =>
                userLength == 0 && detailArea
                  ? saveAndAddCustomer()
                  : userLength > 0 && detailArea
                  ? saveCustomer()
                  : // toast.error("saveCustomer")
                    toast.error("Something went wrong")
              }
              disabled={retailData?.attachCustomerLoad ? true : false}
            >
              Add Customer
              {retailData?.attachCustomerLoad ? (
                <span className="spinner-border spinner-border-sm mx-1"></span>
              ) : (
                <Image
                  src={Images.plusRound}
                  alt="image"
                  className="img-fluid BtnIcon"
                />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default AttachCustomer;
