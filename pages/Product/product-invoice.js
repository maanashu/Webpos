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
                            <div className='invoiceHeader'>
                                <p className='innerHeading'>Invoices<span className='productCount'>(+1280)</span></p>
                            </div>
                            <div className="table-responsive">
                                <table id="invoiceProduct" className="product_table">
                                    <thead>
                                        <tr>
                                            <th className='invoiceHeading'># Invoice</th>
                                            <th className='invoiceHeading'>Customer</th>
                                            <th className='invoiceHeading'>Sale</th>
                                            <th className='invoiceHeading'>Items</th>
                                            <th className='invoiceHeading'>Price</th>
                                            <th className='invoiceHeading'></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="product_invoice">
                                            <td className='invoice_subhead'>#7869YZ</td>
                                            <td className='invoice_subhead'>
                                                <figure className="">
                                                    <Image src={Images.jokerImg} alt="tableImg" className="costumerImg" />
                                                    <span>Costumer</span>
                                                </figure>
                                            </td>
                                            <td className='invoice_subhead'>
                                                <figure className='inStoreBtn'>
                                                    <Image src={Images.storeImg} alt="store" className="storeimg" />
                                                    <span >In-Store</span>
                                                </figure>
                                            </td>
                                            <td className='invoice_subhead'>7</td>
                                            <td className='invoice_subhead'>
                                                <figure className='priceBtn'>
                                                    <Image src={Images.moneyImg} alt="money" className="moneyImg" />
                                                    <span >$59.00</span>
                                                </figure>
                                            </td>
                                            <td className='invoice_subhead'>
                                                <Image src={Images.arrowIcon} alt="arrows" className="arrowRight_" />
                                            </td>
                                        </tr>
                                        <tr className="product_invoice">
                                            <td className='invoice_subhead'>#7869YZ</td>
                                            <td className='invoice_subhead'>
                                                <figure className="">
                                                    <Image src={Images.jokerImg} alt="tableImg" className="costumerImg" />
                                                    <span>Costumer</span>
                                                </figure>
                                            </td>
                                            <td className='invoice_subhead'>
                                                <figure className='onlineBtn'>
                                                    <Image src={Images.ShoppingSolid} alt="store" className="storeimg" />
                                                    <span >Online</span>
                                                </figure>
                                            </td>
                                            <td className='invoice_subhead'>7</td>
                                            <td className='invoice_subhead'>
                                                <figure className='priceBtn'>
                                                    <Image src={Images.moneyImg} alt="money" className="moneyImg" />
                                                    <span >$59.00</span>
                                                </figure>
                                            </td>
                                            <td className='invoice_subhead'>
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