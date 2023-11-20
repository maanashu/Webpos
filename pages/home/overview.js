import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";

const Overview = () => {
    return (
        <>
            <div className='homeOverview'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-12'>
                            <div className='homeLeft'>
                                <div className='homeProfile'>
                                    <figure className='profileImage'>
                                        <Image src={Images.HomeProfileImg} alt="HomeProfileImage" className="img-fluid homeProfileImg" />
                                    </figure>
                                    <h2 className='loginheading'>Eugenia Salas</h2>
                                    <div className='cashBox'>
                                        <h4 className='cashierHeading'>POS Cashier</h4>
                                        <div className='IdTextMain'>
                                            <h4 className='userIdText'>ID: 3890EN</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='todaySale '>
                                    <h4 className='loginMain'>Today’s Sales</h4>
                                    <div className='flexHeading mt-4'>
                                        <h4 className='saleHeading'>Cash Sales amount</h4>
                                        <h4 className='saleHeading'>$400.50</h4>
                                    </div>
                                    <div className='flexHeading mt-2'>
                                        <h4 className='saleHeading'>Cash Sales amount</h4>
                                        <h4 className='saleHeading'>$400.50</h4>
                                    </div>
                                    <div className='flexHeading mt-2'>
                                        <h4 className='saleHeading'>JOBR Coin Sales amount</h4>
                                        <h4 className='saleHeading'>JOBR 400.50</h4>
                                    </div>
                                </div>
                                <div className='todaySale cashDraw'>
                                    <h4 className='loginMain'>Cash Drawer</h4>
                                    <div className='flexHeading mt-4'>
                                        <h4 className='saleHeading'>Opening Balance</h4>
                                        <h4 className='saleHeading'>$900.50</h4>
                                    </div>
                                    <div className='flexHeading mt-2'>
                                        <h4 className='saleHeading'>Closing Balance</h4>
                                        <h4 className='saleHeading'>$450.00</h4>
                                    </div>
                                </div>
                                <div className='timedetail'>
                                    <div className='flexHeading mt-2'>
                                        <h4 className='dayTimeText'>Today 25 April, 2023</h4>
                                        <h4 className='dayTimeText'>11:15:23 am</h4>
                                    </div>
                                    <div className='flexHeading mt-2'>
                                        <h4 className='dayTimeText'>Log in Time:</h4>
                                        <h4 className='dayTimeText'>10:15:03 am</h4>
                                    </div>
                                    <div className='flexHeading mt-2'>
                                        <h4 className='dayTimeText'>Session:</h4>
                                        <h4 className='dayTimeText'>01h:03 min</h4>
                                    </div>
                                </div>
                                <div className='productReturn'>
                                    <h4 className='linkHeading'>Product Returns</h4>
                                    <Image src={Images.ProductBox} alt="BoxImage" className="img-fluid " />
                                </div>
                                <div className='lockScreenBox'>
                                    <h4 className='linkHeading'>Lock Screen</h4>
                                    <Image src={Images.ProductLock} alt="LockImage" className="img-fluid " />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12'>
                            <div className='homeRight'>
                                <form className='homeRightForm'>
                                    <div class="searchControl">
                                        <input type="search" class="form-control searchControl" placeholder="Search here" />
                                        <Image src={Images.Scan} alt="ScanImage" className="img-fluid scanSearch" />
                                        <Image src={Images.SearchIcon} alt="SearchImageIcon" className="img-fluid searchImg" />
                                    </div>
                                </form>
                                <div className='sellingOrder'>
                                    <div className='startSelling'>
                                        <figure className='profileImage'>
                                            <Image src={Images.HomeIcon} alt="HomeImage" className="img-fluid" />
                                        </figure>
                                        <h4 className='loginMain'>Start Selling</h4>
                                        <figure className='scanText'>
                                            <Image src={Images.SearchLight} alt="SearchImage" className="img-fluid" />
                                            <span className='smallText'>
                                                Scan / Search
                                            </span>
                                        </figure>
                                    </div>
                                    <div className='onlineOrder'>
                                        <figure className='profileImage'>
                                            <Image src={Images.ShoppingCart} alt="HomeImage" className="img-fluid" />
                                        </figure>
                                        <h4 className='loginMain'>Online Orders</h4>
                                        <button className='OrderBtn'>12 New Orders</button>
                                        <Image src={Images.Bell} alt="BellImage" className="img-fluid bellImg " />
                                    </div>
                                </div>
                                <div class="table-responsive deliverTable">
                                    <h4 className='loginMain'>Order Deliveries</h4>
                                    <table class="table">
                                        {/* <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                        </thead> */}
                                        <tbody>
                                            <tr className='orderRow'>
                                                <td>john</td>
                                                <td>JOBR</td>
                                                <td>hd</td>
                                            </tr>
                                            <tr className='orderRow'>
                                                <td>john</td>
                                                <td>JOBR</td>
                                                <td>hd</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview