import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";

const Invoices = () => {
    return (
        <>
            <div className='invoice'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <div className='commonBoxInvoice'>
                                <div class="searchBar">
                                    <input type="text" class="form-control searchControl" placeholder="Search here the # of invoice" />
                                  <figure className='scanBox'>
                                   <Image src={Images.scanImg} alt="ScanIcon" className="img-fluid " />
                                   </figure>
                                    <Image src={Images.SearchIcon} alt="SearchImageIcon" className="img-fluid searchImg" />
                                </div>
                                <div className='invoceDetails mt-4 mb-4'>
                                <h6 className='innerHeading'>Invoices <span className='twleve'>(+1280)</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Invoices