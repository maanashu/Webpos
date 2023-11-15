// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import * as Images from "../utilities/images";
// import { useRouter } from "next/router";
// import CustomModal from '../components/modals/CustomModal';
// import LoginModal from './loginModal';

// const Navbar = (props) => {
// const [key, setKey] = useState(Math.random());
// const [modalDetail, setModalDetail] = useState({
//     show: false,
//     title: "",
//     flag: "",
//     });
//     const handleOnCloseModal = () => {
//         setModalDetail({
//         show: false,
//         title: "",
//         flag: "",
//         });
//         setKey(Math.random());
//     };
//   const [active, setActive] = useState("")
//   const router = useRouter()
//   let activeData

//   if (typeof window !== 'undefined') {
//     // Perform localStorage action
//     activeData = localStorage.getItem('active')
//   }

//   console.log(activeData,"active data")
//   console.log(activeData == "jobrpricing", "condition check ")
//   return (
//     <>
//       <header>
//         <div className="container-fluid">
//           <nav className="navbar navbar-expand-lg">
//             <div className="container-fluid">
//               <Link className="navbar-brand" href="/">
//                 <Image src={Images.logo} alt="img"/>
//               </Link>
//               <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon">
//                   <i className="fas fa-bars"></i>
//                 </span>
//               </button>
//               <div className="navbar-collapse collapse justify-content-center" id="navbarTogglerDemo02">
//                 <ul className="navbar-nav">
//                   <li className={`nav-item navActive1`} onClick={()=> {localStorage.removeItem("active")}}>
//                     <Link className={`nav_links dropdown-toggle`} onClick={()=> {localStorage.removeItem("active")}} href="#" data-bs-toggle="dropdown" aria-expanded="false">JOBR Products </Link>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <a className="dropdown-item" href="/web/pos">
//                           <p className="subHeading14">JOBR Point of Sales (POS)</p>
//                           <span className="subHeading13"><em>Tablet & Mobile</em></span>
//                       </a>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="/web/wallet">
//                           <p className="subHeading14">JOBR Wallet</p>
//                           <span className="subHeading13"><em>iOS & Android App</em></span>
//                         </a>
//                       </li>
//                       <li>
//                           <a className="dropdown-item" href="/web/b2b">
//                             <p className="subHeading14">JOBR B2B </p>
//                             <span className="subHeading13"><em>iOS & Android App</em></span>
//                           </a>
//                       </li>
//                       <li>
//                           <a className="dropdown-item" href="/web/b2c">
//                             <p className="subHeading14">JOBR Delivery</p>
//                             <span className="subHeading13"><em>iOS & Android App</em></span>
//                           </a>
//                       </li>
//                       <li>
//                           <a className="dropdown-item" href="/web/driver">
//                             <p className="subHeading14">JOBR Driver</p>
//                             <span className="subHeading13"><em>iOS & Android App</em></span>
//                           </a>
//                       </li>
                      
//                     </ul>
//                   </li>
//                   <li className={`nav-item navActive1`} onClick={()=> {localStorage.removeItem("active")}}>
//                     <Link className={`nav_links dropdown-toggle`} onClick={()=> {localStorage.removeItem("active")}} href="#" data-bs-toggle="dropdown" aria-expanded="false">JOBR Solutions </Link>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <a className="dropdown-item" href="/web/manufacturer">
//                           <p className="subHeading14">Manufacture & Wholesale Business</p>
//                           <span className="subHeading13"><em>B2B & Wallet App</em></span>
//                       </a>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="/web/retailBusiness">
//                           <p className="subHeading14">Retail Business</p>
//                           <span className="subHeading13"><em>POS, Delivery & Wallet App</em></span>
//                         </a>
//                       </li>
//                       <li>
//                           <a className="dropdown-item" href="javascript:void(0)">
//                             <p className="subHeading14">Professional Service Business  </p>
//                             <span className="subHeading13"><em>POS & Wallet App</em></span>
//                           </a>
//                       </li>
//                       <li>
//                           <a className="dropdown-item" href="javascript:void(0)">
//                             <p className="subHeading14">Delivery Professionals</p>
//                             <span className="subHeading13"><em>Driver  & Wallet App</em></span>
//                           </a>
//                       </li> 
//                     </ul>
//                   </li>
//                   <li className={`nav-item ${activeData == "jobrpricing" ? "navActive" :""}`}>
//                     <Link className={`nav_links`} href="/web/pricing" onClick={() => {setActive("jobrpricing"); localStorage.setItem("active","jobrpricing")}}>Pricing</Link>
//                   </li>
//                   <li className={`nav-item ${activeData == "jobrcompany" ? "navActive" :""}`}>
//                     <Link className={`nav_links`} href="/web/company" onClick={() => {setActive("jobrcompany"); localStorage.setItem("active","jobrcompany")}}>Company </Link>
//                   </li>
//                   <li className={`nav-item ${activeData == "jobrshop" ? "navActive" :""}`}>
//                     <Link className={`nav_links`} href="/web/shop" onClick={() => {setActive("jobrshop"); localStorage.setItem("active","jobrshop")}}>Shop </Link>
//                   </li>
//                   <li>
//                   <div className="loginBtnCo afterRes">
//                     <button className="loginBtn me-3"
//                     onClick={() => {
//                       setModalDetail({ show: true, flag: "loginModal" });
//                       setKey(Math.random());
//                     }}
//                     >login</button>
//                     <button className="signUpBtn">Sign Up</button>
//                   </div>
//                   </li>
//                 </ul>
//               </div>
//               {/* <div className="loginBtnCon">
//                   <button className="loginBtn me-3"
//                     onClick={() => {
//                       setModalDetail({ show: true, flag: "loginModal" });
//                       setKey(Math.random());
//                     }}
//                   >login</button>
//                 <button className="signUpBtn">Sign Up</button>
//               </div> */}
//               <div className='dropdown adminDropdown' >
//                     <Link href="#" id='dropdownAdminButton' data-bs-toggle='dropdown' aria-expanded='false'>
//                       <span className='nameUser'>System Admin</span>
//                       <span className='userProfile'>
//                         <Image src={Images.user} className='userImg me-2' alt='UserImage' />
//                         <i className="fas fa-chevron-down"></i>
//                       </span>
//                     </Link>
//                     <ul className='dropdown-menu dropdownAdminMenus mt-3' aria-labelledby="dropdownAdminButton">
//                       <li className='dropdown-item'>
//                         <Link href='/web/profile' className='dropdown-link'>Profile</Link>
//                       </li>
//                       <li className='dropdown-item'>
//                         <Link href='/web/profile' className='dropdown-link'>Logout</Link>
//                       </li>
//                     </ul>
//                   </div>
//             </div>
//           </nav>
//         </div>
//       </header>
//       <CustomModal
//         key={key}
//         show={modalDetail.show}
//         backdrop="static"
//         showCloseBtn={false}
//         isRightSideModal={false}
//         mediumWidth={false}
//     //   className={modalDetail.flag === "AddProductModal" ? "customContent commonWidth" : ""}
//         ids={modalDetail.flag === "loginModal" ? "loginModal" : ""}
//         size={modalDetail.flag === "loginModal" ? "lg" : "lg"}
//         child={
//         modalDetail.flag === "loginModal" ? (
//             <LoginModal close={() => handleOnCloseModal()} />
//         ) :
//             ""
//         }
//         header={
//         <>
//             {/* <div className='modalHeader_'> */}
            
//                 {/* <h2 className="modalHeading">
//                 Add New Employee Details
//                 </h2> */}
//                 <button className="closeButton">
//                 <Image src={Images.crossIcon} onClick={() => handleOnCloseModal()}/>
//                 </button>
//                 {/* <button className='primaryBtn'>Add to Cart</button> */}
            
//         {/* </div> */}
//         </>
//         }
//         onCloseModal={() => handleOnCloseModal()}
//     />
//     </>
//   );
// };
// export default Navbar;