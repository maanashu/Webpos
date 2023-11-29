import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";
import SearchInvoice from '../../components/commanComonets/InvoiceSearch/Search'

const ProductInvoice = () => {
    return (
        <>
            <div className='productInvoice'>
                <div className='row'>
                    <div className='col-lg-6 mb-5'>
                        <div className='commanOuter'>
                            <SearchInvoice />
                            <div className='invoiceHeading'>
                                <p className='innerHeading'>Invoices<span className='productCount'>(+1280)</span></p>
                            </div>
                            <div className="table-responsive">
                                <table id="tableProduct" className="product_table">
                                    <thead>
                                        <tr>
                                            <th className="recent_head"># Invoice</th>
                                            <th className="recent_head">Customer</th>
                                            <th className="recent_head">Sale</th>
                                            <th className="recent_head">Items</th>
                                            <th className="recent_head">Price</th>
                                            <th className="recent_head"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="activities_user">
                                            <td className="recent_subhead">#7869YZ</td>
                                            <td className="recent_subhead">
                                                <div className="trandTable d-flex">
                                                    <Image src={Images.jokerImg} alt="tableImg" className="jokerImg" />
                                                    <span className="userName">Costumer</span>
                                                </div>
                                            </td>

                                            <td className="recent_subhead">
                                                <Image src={Images.storeImg} alt="store" className="storeimg" />
                                                <span className=''>In-Store</span>
                                            </td>
                                            <td className="recent_subhead">7</td>
                                            <td className="recent_subhead">
                                                <div className='moneyBox'>

                                                    <Image src={Images.moneyImg} alt="money" className="moneyImg" />
                                                    <span className=''>$59.00</span>
                                                </div>
                                            </td>
                                            <td className="recent_subhead">
                                                <Image src={Images.arrowIcon} alt="arrows" className="arrowRight_" />
                                            </td>
                                        </tr>
                                        <tr className="activities_user  activities_">
                                            <td className="recent_subhead">#7869YZ</td>
                                            <td className="recent_subhead">
                                                <div className="trandTable d-flex">
                                                    <Image src={Images.jokerImg} alt="tableImg" className="jokerImg" />
                                                    <span className="userName">Costumer</span>
                                                </div>
                                            </td>

                                            <td className="recent_subhead">
                                                <Image src={Images.storeImg} alt="store" className="storeimg" />
                                                <span className=''>In-Store</span>
                                            </td>
                                            <td className="recent_subhead">7</td>
                                            <td className="recent_subhead">
                                                <div className='moneyBox'>

                                                    <Image src={Images.moneyImg} alt="money" className="moneyImg" />
                                                    <span className=''>$59.00</span>
                                                </div>
                                            </td>
                                            <td className="recent_subhead">
                                                <Image src={Images.arrowIcon} alt="arrows" className="arrowRight_" />
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 mb-5'>
                        <div className='commanOuter'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInvoice