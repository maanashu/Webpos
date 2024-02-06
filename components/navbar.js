import React, { useEffect, useState } from "react";
import * as Images from "../utilities/images";
import Image from "next/image";
import moment from "moment-timezone";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { restAllData } from "../redux/slices/commonActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [token, setToken] = useState("");
  const [currentTime, setCurrentTime] = useState(moment());

  const isDaytime = () => {
    const currentHour = currentTime.hour();
    return currentHour >= 6 && currentHour < 18;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const merchantLogout = async (e) => {
    e.preventDefault();
    toast.success("Logout successfully");
    router.push("/auth/verification");
    localStorage.clear();
    dispatch(restAllData());
  };

  // const token = authData?.posUserLoginDetails?.payload?.token
  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("authToken"));
    }
  }, []);

  return (
    <>
      <div className="headerSection">
        {/* <div {...(!token && {className: 'container'})}> */}
        <div className={!token ? "authHeader mainAuthHead" : "otherHead"}>
          <div className="row">
            <div className="col-lg-6 col-md-6 leftMainHeader">
              <div className="leftHeader">
                <div className="timeNav">
                  {isDaytime() ? (
                    <Image
                      src={Images.SunImg}
                      alt="image"
                      className="img-fluid"
                    />
                  ) : (
                    <i class="fa-solid fa-moon"></i>
                  )}

                  <h4 className="timeHeading">{moment().format("hh:mm a")}</h4>
                </div>
                <h4 className="timeHeading ">
                  {moment().format("dddd") + ", " + moment().format("LL")}
                </h4>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 select-language-drop">
              <div className="rightMainHeader">
                <div className="rightheader">
                  {/* <h4 className='timeHeading'>POS Ni. <span>#Front-CC01</span></h4> */}
                  <button className="navBtn">Walk-in</button>
                  {router?.pathname == "/auth/login" ? (
                    <button
                      type="button"
                      className="navBtn"
                      onClick={(e) => merchantLogout(e)}
                    >
                      Logout
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
