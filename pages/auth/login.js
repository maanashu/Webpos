import React, { useEffect, useState } from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { getAllPosUser } from '../../redux/slices/auth';

const Login = () => {
    const dispatch = useDispatch();
    const [GetPosUserList, setGetPosUserList] = useState("");
    const getAllPOSUser = () => {
        let params = {
            page: 1,
            limit: 20,
            seller_id: "b169ed4d-be27-44eb-9a08-74f997bc6a2j",
        };
        dispatch(getAllPosUser({
            ...params,
            cb(res) {
                if (res.status) {
                    setGetPosUserList(res?.data)
                }
            },
        })
        );
    };

    useEffect(() => {
        getAllPOSUser()
        document.title = "Dashboard";
    }, []);

    return (
        <>
            <div className='loginSection'>
                <div className='container'>
                    <div className='loginheading'>Welcome to <span>JOBR POS</span></div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 '>
                            <div className='loginCard active'>
                                <figure className='loginIds'>
                                    <Image src={Images.LoginFirst} alt="LoginIdImage" className="img-fluid loginIdImg" />
                                </figure>
                                <h2 className='loginMain'>Alice Green</h2>
                                <h4 className='loginSub'>Admin / Manager</h4>
                                <h4 className='loginPara '> Today</h4>
                                <h4 className='loginPara '>18:32 pm</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 '>
                            <div className='loginCard'>
                                <figure className='loginIds'>
                                    <Image src={Images.LoginSecond} alt="LoginIdImage" className="img-fluid loginIdImg" />
                                </figure>
                                <h2 className='loginMain'>Eugenia Salas</h2>
                                <h4 className='loginSub'>Store Cashier</h4>
                                <h4 className='loginPara '> Today</h4>
                                <h4 className='loginPara '>10:32 am</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 '>
                            <div className='loginCard'>
                                <figure className='loginIds'>
                                    <Image src={Images.LoginThird} alt="LoginIdImage" className="img-fluid loginIdImg" />
                                </figure>
                                <h2 className='loginMain'>Alexander Gray</h2>
                                <h4 className='loginSub'>Accountant</h4>
                                <h4 className='loginPara '> 02 October 2023 </h4>
                                <h4 className='loginPara '>14:14 pm</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 '>
                            <div className='loginCard'>
                                <figure className='loginIds'>
                                    <Image src={Images.LoginFourth} alt="LoginIdImage" className="img-fluid loginIdImg" />
                                </figure>
                                <h2 className='loginMain'>Karim Ahmed</h2>
                                <h4 className='loginSub'>Store Cashier</h4>
                                <h4 className='loginPara '> Yesterday </h4>
                                <h4 className='loginPara '>6:12 pm</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 '>
                            <div className='loginCard'>
                                <figure className='loginIds'>
                                    <Image src={Images.LoginFive} alt="LoginIdImage" className="img-fluid loginIdImg" />
                                </figure>
                                <h2 className='loginMain'>Andrei Antonov</h2>
                                <h4 className='loginSub'>Store Cashier</h4>
                                <h4 className='loginPara '>Tuesday</h4>
                                <h4 className='loginPara '>09:24 am</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 '>
                            <div className='loginCard'>
                                <figure className='loginIds'>
                                    <Image src={Images.LoginSix} alt="LoginIdImage" className="img-fluid loginIdImg" />
                                </figure>
                                <h2 className='loginMain'>Isla Johnson</h2>
                                <h4 className='loginSub'>Store Cashier</h4>
                                <h4 className='loginPara '> 09 October 2023 </h4>
                                <h4 className='loginPara '>18:32 pm</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 '>
                            <div className='loginCard'>
                                <figure className='loginIds'>
                                    <Image src={Images.LoginSeven} alt="LoginIdImage" className="img-fluid loginIdImg" />
                                </figure>
                                <h2 className='loginMain'>Serge Peace</h2>
                                <h4 className='loginSub'>Store Cashier</h4>
                                <h4 className='loginPara '> Today </h4>
                                <h4 className='loginPara '>12:02 pm</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 '>
                            <div className='newLoginCard'>
                                <i class="fa-sharp fa-light fa-plus plusIcon"></i>
                                <h2 className='loginMain'>New user</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login