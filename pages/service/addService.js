import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";

const AddService = () => {
  return (
    <>
      <div className='addServiceSection'>
        <div className='row'>
          <div className='col-lg-6 col-md-6'>
            <div className='commanOuter newServiceSection commonSubOuter'>
              <div className='newServiceDetail'>
                <Image src={Images.boldLeftArrow} alt="leftarrow image" className="img-fluid" />
                <div className='addserviceInfo ms-3'>
                  <h4 className='loginMain m-0 text-start'>Add a new service</h4>
                  <p className='addServicePara'>Configure the service to add it to the cart</p>
                </div>
              </div>
              <div className='consultInfo'>
                <div className="serviceProfile" >
                  <Image src={Images.addServiceImg} alt="service profile image" className="addSeviceImg" height="500" width="500" />
                  <figure className='rotateImage'>
                    <Image src={Images.rotateArrow} alt="rotateImage" className="img-fluid" />
                  </figure>
                </div>
                <h4 className='loginMain'>Veterinary Consultations.</h4>
                <p className='userIdText'>Pets are an important part of your family, and as a team of animal lovers, we understand that very well. As a family member, one part of your duty is ensuring your pets get the best veterinary care possible.</p>
                <div className='flexDiv'>
                  <figure className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="timeimage" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime ms-2'>Est. 45-60min</span>
                  </figure>
                  <h4 className='loginMain m-0'>$90.00</h4>
                </div>
              </div>
              <div className='providerSection'>
                <h4 className='amountText m-0'>Provider</h4>
                <div className='row'>
                  <div className='col-lg-4 col-md-4'>
                    <div className='addServiceProfile active'>
                      <Image src={Images.providerImg} alt="providerProfileImage" className="providerImage" />
                      <h4 className='amountText '>Dr. Evan Hills</h4>
                      <h6 className='providerSubText'>Zootechnisian</h6>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='addServiceProfile '>
                      <Image src={Images.providerImg} alt="providerProfileImage" className="providerImage" />
                      <h4 className='amountText '>Dr. Evan Hills</h4>
                      <h6 className='providerSubText'>Zootechnisian</h6>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='addServiceProfile '>
                      <Image src={Images.providerImg} alt="providerProfileImage" className="providerImage" />
                      <h4 className='amountText '>Dr. Evan Hills</h4>
                      <h6 className='providerSubText'>Zootechnisian</h6>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='addServiceProfile '>
                      <Image src={Images.providerImg} alt="providerProfileImage" className="providerImage" />
                      <h4 className='amountText '>Dr. Evan Hills</h4>
                      <h6 className='providerSubText'>Zootechnisian</h6>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='addServiceProfile '>
                      <Image src={Images.providerImg} alt="providerProfileImage" className="providerImage" />
                      <h4 className='amountText '>Dr. Evan Hills</h4>
                      <h6 className='providerSubText'>Zootechnisian</h6>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4'>
                    <div className='addServiceProfile '>
                      <Image src={Images.providerImg} alt="providerProfileImage" className="providerImage" />
                      <h4 className='amountText '>Dr. Evan Hills</h4>
                      <h6 className='providerSubText'>Zootechnisian</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className='paginationImg text-center'>
                <Image src={Images.paginationImg} alt="Paginationimage" className="img-fluid " />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6'>
            <div className='commanOuter  appointmentSection commonSubOuter'>
              <div className='appointmentSub'>
                <div className='appointmentHeading'>
                  <h4 className='appointMain'>Appointments</h4>
                  <p className='appointSub'>Select the hour that works the best.</p>
                </div>
                <div className='appointmenMonth'>
                  <Image src={Images.calendarLight} alt='calendarimage' className='img-fluid' />
                  <span className='monthText ms-2'>October</span>
                  <Image src={Images.arrowDown} alt='calendarimage' className='img-fluid ms-5' />
                </div>
              </div>
              <div className='scheduleSection'>
                <Image src={Images.calendarDark} alt='calendarimage' className='img-fluid' />
                <h4 className='trackingHeading mt-2'>Schedule of <strong className='fw-bold'> Dr. Africa Zwarawi</strong></h4>
              </div>
              <div className='daycalendar'>
                <div className='serviceArrow'>
                  <Image src={Images.serviceLeft} alt='calendarimage' className='img-fluid' />
                </div>
                <div className='daysubCalendar'>
                  <div className='serviceDate'>
                    <h4 className='productName'>Tomorrow</h4>
                    <h4 className='dateText'>28</h4>
                  </div>
                  <div className='serviceDate'>
                    <h4 className='productName'>Tomorrow</h4>
                    <h4 className='dateText'>28</h4>
                  </div>
                  <div className='serviceDate'>
                    <h4 className='productName'>Tomorrow</h4>
                    <h4 className='dateText'>28</h4>
                  </div>
                  <div className='serviceDate active'>
                    <h4 className='productName'>Tomorrow</h4>
                    <h4 className='dateText'>28</h4>
                  </div>
                </div>
                <div className='serviceArrow'>
                  <Image src={Images.serviceRight} alt='calendarimage' className='img-fluid' />
                </div>
              </div>
              <div className='serviceDayTime'>
                <div className='scheduleDay'>
                  <div className='scheduleTimeImg'>
                  </div>
                  <div className='scheduleTime active'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                </div>
                <div className='scheduleDay'>
                  <div className='scheduleTimeImg'>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                </div>
                <div className='scheduleDay'>
                  <div className='scheduleTimeImg'>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                </div>
                <div className='scheduleDay'>
                  <div className='scheduleTimeImg'>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                </div>
                <div className='scheduleDay'>
                  <div className='scheduleTimeImg'>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                </div>
                <div className='scheduleDay'>
                  <div className='scheduleTimeImg'>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                </div>
                <div className='scheduleDay'>
                  <div className='scheduleTimeImg'>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                </div>
                <div className='scheduleDay'>
                  <div className='scheduleTimeImg'>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                </div>
                <div className='scheduleDay'>
                  <div className='scheduleTimeImg'>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                </div>
                <div className='scheduleDay'>
                  <div className='scheduleTimeImg'>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                  <div className='scheduleTime'>
                    <h4 className='addServicePara m-0'>
                      11:00 — 11:30
                    </h4>
                  </div>
                </div>
              </div>
              <div className='serviceFooter'>
                <button className='nextverifyBtn w-100' type='submit'>
                  Confirm and Add to Cart
                  <Image src={Images.serviceCart} alt="rightArrow" className="img-fluid rightImg ms-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddService