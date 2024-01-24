import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { subscriber } from '../redux/slices/auth';
const SignUpModal = (props) => {
  const [phoneCode, SetPhoneCode] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNo, setPhoneNo] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const [isVerified, setIsVerified] = useState(false);
  const toastId = React.useRef(null)
  const dispatch = useDispatch()

  const handleRecaptchaChange = (value) => {
    setIsVerified(!!value);
  };

  const onChangePhoneNumber = (value, data) => {
    let phoneCode = data.dialCode;
    let phoneNumber = value.slice(data.dialCode.length);
    setPhoneNo(phoneNumber);
    SetPhoneCode(phoneCode);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var resultemail = pattern.test(email);
    if(!firstName) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter first name");
      }
      return;
    }
    else if(!lastName) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter last name");
      }
      return;
    }
    else if(!email) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter email");
      }
      return;
    }
    else if (resultemail === false) {
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error("Please enter valid email");
        }
        return;
    }
    else if (!phoneNo) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter phone number");
      }
      return;
    }
    else if (phoneNo && phoneNo.length <= 9) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Phone number length should be of 10 digits");
      }
      return;
    }
    else if(isVerified == false){
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please verify the reCAPTCHA before submitting the form.");
      }
      return;
    }
    let params = {
      "email": email,
      "firstname": firstName,
      "lastname": lastName,
      "phone_code": `+${phoneCode}`,
      "phone_no": phoneNo,
    }

    dispatch(
      subscriber({
          ...params,
          cb(res) {
              if (res.status) {
                props.close()
              } else {
              }
          },
      })
  );
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className='signupModalForm'>
        <div className="mt-2">
          <label className="form-label fw-500">First Name</label>
          <input className="customform-control customInput" placeholder="Please enter first name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="mt-2">
          <label className="form-label fw-500">Last Name</label>
          <input className="customform-control customInput" placeholder="Please enter last name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="mt-2">
          <label className="form-label fw-500">Email</label>
          <input className="customform-control customInput" placeholder="Please enter email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mt-2">
          <label className="form-label fw-500">Phone</label>
          <div className="phone-numbpart">
            <div className="country-plugin">
              <div id="result">
                <PhoneInput
                  country="us"
                  value={phoneCode + phoneNo}
                  enableSearch={true}
                  name="phone"
                  placeholder="Phone no."
                  onChange={(value, data, event, formattedValue) => onChangePhoneNumber(value, data, event, formattedValue)}
                />
                {/* <span id="valid-msg" className="hide">✓ Valid</span> */}
                <span id="error-msg" className="hide"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <ReCAPTCHA
            sitekey="6Lcxa3QnAAAAAEc21mC21MP_JlUh9Ad_KctA7U-P"
            onChange={handleRecaptchaChange}
          />
        </div>

        <hr />
        <div className="mt-3">
          <button className='signUpBtn' type="submit" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            &nbsp;&nbsp;
            <span>Submit</span>
          </button>
        </div>
      </form>
    </>
  )
}

export default SignUpModal