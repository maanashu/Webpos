import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import ProductInnerNav from '../../components/commanComonets/Product/productInnerNav'
import ProductRightSidebar from '../../components/commanComonets/Product/ProductRightSidebar'

const Productservice = () => {
  return (
    <>
      <div className='flexBox'>
        <div className='commanOuter'>
          <ProductInnerNav />
          <div className='commanscrollBar'>
            <div className='row'>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Spa & Relaxation</p>
                    <p className='productserviceName'>Body Massage with Flower from Paradise.</p>
                    <p className='productPrice'>$29.00</p>
                  </article>
                  <article className='Tomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard active'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Hair Stylist</p>
                    <p className='productserviceName'>Barbershop and Salon for Men and Women.</p>
                    <p className='productPrice'>$19.00</p>
                  </article>
                  <article className='Todayappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Classes for Kids</p>
                    <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                    <p className='productPrice'>$21.00</p>
                  </article>
                  <article className='afterSomeappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>01/11/23 at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.cardThree} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Vet & Pet Accesories</p>
                    <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                    <p className='productPrice'>$9.00</p>
                  </article>
                  <article className='DayTomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Friday at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Classes for Kids</p>
                    <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                    <p className='productPrice'>$21.00</p>
                  </article>
                  <article className='afterSomeappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>01/11/23 at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.cardThree} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Vet & Pet Accesories</p>
                    <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                    <p className='productPrice'>$9.00</p>
                  </article>
                  <article className='DayTomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Friday at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Spa & Relaxation</p>
                    <p className='productserviceName'>Body Massage with Flower from Paradise.</p>
                    <p className='productPrice'>$29.00</p>
                  </article>
                  <article className='Tomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Hair Stylist</p>
                    <p className='productserviceName'>Barbershop and Salon for Men and Women.</p>
                    <p className='productPrice'>$19.00</p>
                  </article>
                  <article className='Todayappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Spa & Relaxation</p>
                    <p className='productserviceName'>Body Massage with Flower from Paradise.</p>
                    <p className='productPrice'>$29.00</p>
                  </article>
                  <article className='Tomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Hair Stylist</p>
                    <p className='productserviceName'>Barbershop and Salon for Men and Women.</p>
                    <p className='productPrice'>$19.00</p>
                  </article>
                  <article className='Todayappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Classes for Kids</p>
                    <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                    <p className='productPrice'>$21.00</p>
                  </article>
                  <article className='afterSomeappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>01/11/23 at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.cardThree} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Vet & Pet Accesories</p>
                    <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                    <p className='productPrice'>$9.00</p>
                  </article>
                  <article className='DayTomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Friday at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Classes for Kids</p>
                    <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                    <p className='productPrice'>$21.00</p>
                  </article>
                  <article className='afterSomeappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>01/11/23 at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.cardThree} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Vet & Pet Accesories</p>
                    <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                    <p className='productPrice'>$9.00</p>
                  </article>
                  <article className='DayTomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Friday at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Spa & Relaxation</p>
                    <p className='productserviceName'>Body Massage with Flower from Paradise.</p>
                    <p className='productPrice'>$29.00</p>
                  </article>
                  <article className='Tomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Hair Stylist</p>
                    <p className='productserviceName'>Barbershop and Salon for Men and Women.</p>
                    <p className='productPrice'>$19.00</p>
                  </article>
                  <article className='Todayappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.cardThree} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Vet & Pet Accesories</p>
                    <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                    <p className='productPrice'>$9.00</p>
                  </article>
                  <article className='DayTomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Friday at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Spa & Relaxation</p>
                    <p className='productserviceName'>Body Massage with Flower from Paradise.</p>
                    <p className='productPrice'>$29.00</p>
                  </article>
                  <article className='Tomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Hair Stylist</p>
                    <p className='productserviceName'>Barbershop and Salon for Men and Women.</p>
                    <p className='productPrice'>$19.00</p>
                  </article>
                  <article className='Todayappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Spa & Relaxation</p>
                    <p className='productserviceName'>Body Massage with Flower from Paradise.</p>
                    <p className='productPrice'>$29.00</p>
                  </article>
                  <article className='Tomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Hair Stylist</p>
                    <p className='productserviceName'>Barbershop and Salon for Men and Women.</p>
                    <p className='productPrice'>$19.00</p>
                  </article>
                  <article className='Todayappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Classes for Kids</p>
                    <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                    <p className='productPrice'>$21.00</p>
                  </article>
                  <article className='afterSomeappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>01/11/23 at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.cardThree} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Vet & Pet Accesories</p>
                    <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                    <p className='productPrice'>$9.00</p>
                  </article>
                  <article className='DayTomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Friday at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Classes for Kids</p>
                    <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                    <p className='productPrice'>$21.00</p>
                  </article>
                  <article className='afterSomeappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>01/11/23 at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.cardThree} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Vet & Pet Accesories</p>
                    <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                    <p className='productPrice'>$9.00</p>
                  </article>
                  <article className='DayTomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Friday at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Spa & Relaxation</p>
                    <p className='productserviceName'>Body Massage with Flower from Paradise.</p>
                    <p className='productPrice'>$29.00</p>
                  </article>
                  <article className='Tomorrowappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                <div className='productsCard'>
                  <figure className='productImageBox'>
                    <Image src={Images.productService} alt="image" className="img-fluid ProductIcon" />
                    <div className='overlay'>
                      <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                    </div>
                  </figure>
                  <article className='productDetails'>
                    <p className='productName'>Hair Stylist</p>
                    <p className='productserviceName'>Barbershop and Salon for Men and Women.</p>
                    <p className='productPrice'>$19.00</p>
                  </article>
                  <article className='Todayappointment flexBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clip-path="url(#clip0_4075_22380)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75754 1.53879C6.75754 1.26711 6.5373 1.04688 6.26562 1.04688C5.99395 1.04688 5.77371 1.26711 5.77371 1.53879V1.73898C4.96339 1.78387 4.39624 1.88885 3.91435 2.13438C3.17387 2.51168 2.57184 3.11371 2.19455 3.85419C1.76562 4.696 1.76562 5.79799 1.76562 8.00198V9.74226C1.76562 11.9463 1.76562 13.0482 2.19455 13.8901C2.57184 14.6305 3.17387 15.2326 3.91435 15.6099C4.75617 16.0388 5.85816 16.0388 8.06215 16.0388H9.80243C12.0064 16.0388 13.1084 16.0388 13.9502 15.6099C14.6907 15.2326 15.2927 14.6305 15.67 13.8901C16.099 13.0482 16.099 11.9463 16.099 9.74226V8.00199C16.099 5.798 16.099 4.696 15.67 3.85419C15.2927 3.11371 14.6907 2.51168 13.9502 2.13438C13.4683 1.88885 12.9012 1.78387 12.0909 1.73898V1.53879C12.0909 1.26711 11.8706 1.04688 11.599 1.04688C11.3273 1.04688 11.107 1.26711 11.107 1.53879V1.71004C10.7196 1.70546 10.2877 1.70546 9.80243 1.70546H8.06216C7.57685 1.70546 7.14497 1.70546 6.75754 1.71004V1.53879ZM4.77375 6.20552C4.77375 5.93384 4.99399 5.7136 5.26567 5.7136H12.599C12.8707 5.7136 13.0909 5.93384 13.0909 6.20552C13.0909 6.4772 12.8707 6.69743 12.599 6.69743H5.26567C4.99399 6.69743 4.77375 6.4772 4.77375 6.20552ZM5.10709 9.20552C5.10709 8.74975 5.47656 8.38027 5.93234 8.38027C6.38811 8.38027 6.75759 8.74975 6.75759 9.20552C6.75759 9.66129 6.38811 10.0308 5.93234 10.0308C5.47656 10.0308 5.10709 9.66129 5.10709 9.20552ZM8.10709 9.20552C8.10709 8.74975 8.47656 8.38027 8.93234 8.38027C9.38811 8.38027 9.75759 8.74975 9.75759 9.20552C9.75759 9.66129 9.38811 10.0308 8.93234 10.0308C8.47656 10.0308 8.10709 9.66129 8.10709 9.20552ZM11.1071 9.20552C11.1071 8.74975 11.4766 8.38027 11.9323 8.38027C12.3881 8.38027 12.7576 8.74975 12.7576 9.20552C12.7576 9.66129 12.3881 10.0308 11.9323 10.0308C11.4766 10.0308 11.1071 9.66129 11.1071 9.20552ZM5.10709 11.8722C5.10709 11.4164 5.47656 11.0469 5.93234 11.0469C6.38811 11.0469 6.75759 11.4164 6.75759 11.8722C6.75759 12.328 6.38811 12.6974 5.93234 12.6974C5.47656 12.6974 5.10709 12.328 5.10709 11.8722ZM8.10709 11.8722C8.10709 11.4164 8.47656 11.0469 8.93234 11.0469C9.38811 11.0469 9.75759 11.4164 9.75759 11.8722C9.75759 12.328 9.38811 12.6974 8.93234 12.6974C8.47656 12.6974 8.10709 12.328 8.10709 11.8722ZM11.1071 11.8722C11.1071 11.4164 11.4766 11.0469 11.9323 11.0469C12.3881 11.0469 12.7576 11.4164 12.7576 11.8722C12.7576 12.328 12.3881 12.6974 11.9323 12.6974C11.4766 12.6974 11.1071 12.328 11.1071 11.8722Z" fill="#12B76A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4075_22380">
                          <rect width="16" height="16" fill="white" transform="translate(0.932129 0.87207)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='Ontime'>Tomorrow at 10:00hrs</span>
                  </article>
                  <article className='Timezone'>
                    <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                    <span className='AppointmentEstTime'>Est. 45-60min</span>
                  </article>
                  <figure className='flexBox Appointmentusers'>
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                    <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductRightSidebar />
      </div>
    </>
  )
}

export default Productservice