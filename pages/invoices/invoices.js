import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";
import SearchInvoice from '../../components/commanComonets/InvoiceSearch/Search';

const Invoices = () => {
    return (
        <>
            <div className='invoice'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='commonBoxInvoice mt-2 mb-2'>
                                <SearchInvoice/>
                                <div className='invoceDetails mt-4 mb-4'>
                                    <h6 className='innerHeading'>Invoices <span className='twleve'>(+1280)</span></h6>
                                </div>
                                
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='commonBoxInvoice mt-2 mb-2'>
                               
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Invoices