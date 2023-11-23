import React, { useEffect, useState } from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosUser, selectLoginAuth } from '../../redux/slices/auth';
import moment from "moment";
import { useRouter } from 'next/router';

const Login = () => {
    const authData = useSelector(selectLoginAuth)
    const router = useRouter();
    const dispatch = useDispatch();
    const [GetPosUserList, setGetPosUserList] = useState("");
  
    // find out UniqueId from redux for send in params
    const UniqueId = authData?.usersInfo?.payload?.uniqe_id

    // API for get all POS users...............................
    const getAllPOSUser = () => {
        let params = {
            seller_id: UniqueId,
        };
        dispatch(getAllPosUser({
            ...params,
            cb(res) {
                if (res.status) {
                    setGetPosUserList(res?.data?.payload?.pos_staff)
                }
            },
        })
        );
    };

    useEffect(() => {
        if (UniqueId) {
            getAllPOSUser();
        }
    }, [UniqueId]);

    return (
        <>
            <div className='loginSection'>
                <div className='loginheading'>Welcome to <span>JOBR POS</span></div>
                <div className='authLoginSection'>
                    <div className='container'>
                        <div className='row'>
                            {authData?.loading ? (
                                <>
                                    <div className="loaderOuter">
                                        <div className="spinner-grow loaderSpinner text-center my-5"></div>
                                    </div>
                                </>
                            ) : (
                                GetPosUserList?.length > 0 ? (
                                    <>
                                        {GetPosUserList?.map((data, index) => {
                                            return (
                                                <div className='col-lg-3 col-md-6 mt-4' key={index}>
                                                    <div className='loginCard' onClick={() => router.push({ pathname: '/auth/password', query: { id: data?.user_id } })}>
                                                        <figure className='loginIds'>
                                                            <Image src={data?.user?.user_profiles?.profile_photo ? data?.user?.user_profiles?.profile_photo : Images.LoginFirst} alt="LoginIdImage" width="100" height="100" className="img-fluid loginIdImg" />
                                                        </figure>
                                                        <div className='login'>
                                                        <h2 className='loginMain'>{data?.user?.user_profiles?.firstname} {data?.user?.user_profiles?.lastname}</h2>

                                                        {data?.user?.user_roles.length > 0 ? (
                                                            data?.user?.user_roles?.map((data, index) => {
                                                                return (
                                                                    <h4 className='loginSub'>{data?.role?.name}</h4>
                                                                )
                                                            })
                                                        )
                                                            :
                                                            <h4 className='loginSub'>Admin / Manager</h4>
                                                        }

                                                        {data?.user?.api_tokens?.length > 0 ? (
                                                            <>
                                                                <h4 className='loginPara '>{moment(data?.user?.api_tokens[0]?.created_at).fromNow()}</h4>
                                                                <h4 className='loginPara '>{moment(data?.user?.api_tokens[0]?.created_at).format('LT')}</h4>
                                                            </>
                                                        ) :
                                                            ""}
                                                            </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </>
                                ) : (
                                    <h2 className='text-center my-5'>No POS user Found</h2>
                                )
                            )}

                            {/* <div className='col-lg-3 col-md-6 '>
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
                        </div> */}
                            {/* <div className='col-lg-3 col-md-6 '>
                            <div className='newLoginCard'>
                            <i className="fa-sharp fa-light fa-plus plusIcon"></i>
                            <h2 className='loginMain'>New user</h2>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login