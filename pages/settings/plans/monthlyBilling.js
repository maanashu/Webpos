import React from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";

const MonthlyBilling = () => {
  return (
    <div className="row">
      <div className="col-lg-4 mt-3">
        <div className="monthEnter">
          <div className="monthSubEnter">
            <h2 className="entreText">Entrepreneur</h2>
            <p className="orderPara">
              Everything you need to create a store, make shipping and payments.
            </p>
            <h4 className="settingText my-2">Apps included:</h4>
            <div className="planTickBox">
              <Image
                src={Images.cyanCircleTick}
                alt="cyanCircleTick image"
                className="img-fluid"
              />
              <Image
                src={Images.blueCircleTick}
                alt="blueCircleTick image"
                className="img-fluid"
              />
              <h4 className="planCyan">JOBR B2B</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.cyanCircleTick}
                alt="cyanCircleTick image"
                className="img-fluid"
              />
              <Image
                src={Images.blueCircleTick}
                alt="blueCircleTick image"
                className="img-fluid"
              />
              <h4 className="planCyan">JOBR Wallet</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.lightCircleTick}
                alt="lightCircleTick image"
                className="img-fluid"
              />
              <h4 className="planPara">JOBR POS</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.lightCircleTick}
                alt="lightCircleTick image"
                className="img-fluid"
              />
              <h4 className="planPara">JOBR Driver</h4>
            </div>
            <hr className="dottedDivide" />
            <div className="planTickBox m-0">
              <Image
                src={Images.simpleCheck}
                alt="simpleCheck image"
                className="img-fluid"
              />
              <h4 className="planCyan">Online Store</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.simpleCheck}
                alt="simpleCheck image"
                className="img-fluid"
              />
              <h4 className="planCyan">Shareable product pages</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.simpleCheck}
                alt="simpleCheck image"
                className="img-fluid"
              />
              <h4 className="planCyan">Unlimited products</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.simpleCheck}
                alt="simpleCheck image"
                className="img-fluid"
              />
              <h4 className="planCyan">24/7 support</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.simpleCheck}
                alt="simpleCheck image"
                className="img-fluid"
              />
              <h4 className="planCyan">Abandoned cart recovery</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.simpleCheck}
                alt="simpleCheck image"
                className="img-fluid"
              />
              <h4 className="planCyan">Advanced report builder</h4>
            </div>
          </div>
          <div className="subscribeRightn my-3 text-center">
            <span className="subscribeText">$190.00</span>
            <span className="SubscribePara"> /mo</span>
          </div>
          <button className="monthBtn">Subscribed</button>
        </div>
      </div>
      <div className="col-lg-4 mt-4">
        <div className="professionEnter">
          <div className="professionEnterSub">
            <h3 className="returnConfirmedHeading p-0">Professional</h3>
            <p className="orderPara">
              Everything you need to create a store, make shipping and payments.
            </p>
            <h4 className="settingText my-2">Apps included:</h4>
            <div className="planTickBox">
              <Image
                src={Images.fillCheck}
                alt="cyanCircleTick image"
                className="img-fluid"
              />
              <Image
                src={Images.blueCircleTick}
                alt="blueCircleTick image"
                className="img-fluid"
              />
              <h4 className="professionText">JOBR B2B</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.fillCheck}
                alt="cyanCircleTick image"
                className="img-fluid"
              />
              <Image
                src={Images.blueCircleTick}
                alt="blueCircleTick image"
                className="img-fluid"
              />
              <h4 className="professionText">JOBR Wallet</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.fillCheck}
                alt="lightCircleTick image"
                className="img-fluid"
              />
              <h4 className="professionText">JOBR POS</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.lightCircleTick}
                alt="lightCircleTick image"
                className="img-fluid"
              />
              <h4 className="planPara">JOBR Driver</h4>
            </div>
            <hr className="dottedDivide" />
            <h6 className="professionText">Online Store</h6>
            <h6 className="professionText">Shareable product pages</h6>
            <h6 className="professionText">Unlimited products</h6>
            <h6 className="professionText">24/7 support</h6>
            <h6 className="professionText">Abandoned cart recovery</h6>
            <h6 className="professionText">Advanced report builder</h6>
          </div>
          <div className="subscribeRightn my-3 text-center">
            <span className="subscribeText">$190.00</span>
            <span className="SubscribePara"> /mo</span>
          </div>
          <button className="changeBtn">
            Change
            <Image
              src={Images.ArrowRight}
              alt="lightCircleTick image"
              className="img-fluid ms-1"
            />
          </button>
        </div>
      </div>
      <div className="col-lg-4 mt-4">
        <div className="bussinessEnter">
          <div className="professionEnterSub">
            <h3 className="returnConfirmedHeading p-0">Business</h3>
            <p className="orderPara">
              Everything you need to create a store, make shipping and payments.
            </p>
            <h4 className="settingText my-2">Apps included:</h4>
            <div className="planTickBox">
              <Image
                src={Images.bussinessCheck}
                alt="cyanCircleTick image"
                className="img-fluid"
              />
              <Image
                src={Images.blueCircleTick}
                alt="blueCircleTick image"
                className="img-fluid"
              />
              <h4 className="dayTimeText">JOBR B2B</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.bussinessCheck}
                alt="cyanCircleTick image"
                className="img-fluid"
              />
              <Image
                src={Images.blueCircleTick}
                alt="blueCircleTick image"
                className="img-fluid"
              />
              <h4 className="dayTimeText">JOBR Wallet</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.bussinessCheck}
                alt="lightCircleTick image"
                className="img-fluid"
              />
              <h4 className="dayTimeText">JOBR POS</h4>
            </div>
            <div className="planTickBox">
              <Image
                src={Images.bussinessCheck}
                alt="lightCircleTick image"
                className="img-fluid"
              />
              <h4 className="dayTimeText">JOBR Driver</h4>
            </div>
            <hr className="dottedDivide" />
            <h6 className="dayTimeText mt-1">Online Store</h6>
            <h6 className="dayTimeText mt-1">Shareable product pages</h6>
            <h6 className="dayTimeText mt-1">Unlimited products</h6>
            <h6 className="dayTimeText mt-1">24/7 support</h6>
            <h6 className="dayTimeText mt-1">Abandoned cart recovery</h6>
            <h6 className="dayTimeText mt-1">Advanced report builder</h6>
          </div>
          <div className="subscribeRightn my-3 text-center">
            <span className="subscribeText">$190.00</span>
            <span className="SubscribePara"> /mo</span>
          </div>
          <button className="changeBtn">
            Change
            <Image
              src={Images.ArrowRight}
              alt="lightCircleTick image"
              className="img-fluid ms-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonthlyBilling;
