import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";
import SearchInvoice from '../../components/commanComonets/InvoiceSearch/Search'
import * as Product from '../../components/commanComonets/Product';

const Manualinvoice = () => {
    return (
        <>
            <div className='manualInvoice'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='commanOuter'>
                            <SearchInvoice />
                            <div className='invoiceHeader'>
                                <p className='innerHeading'>Invoices<span className='productCount'>(+1280)</span></p>
                            </div>
                            <div className='commanscrollBar InvoiceTableBox'>
                                <div className="table-responsive">
                                    <table id="invoiceProduct" className="product_table">
                                        <thead className='invoiceHeadingBox'>
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
                                            <tr className="product_invoice active">
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
                            <div className='Custompagination'>
                                <button type='button' className='paginatinationBtn'>
                                    <Image src={Images.scanImg} alt="SearchImageIcon" className="img-fluid" />
                                    pre</button>
                                <button type='button' className='paginatinationBtn'>Page no. 1 to 8</button>
                                <button type='button' className='paginatinationBtn active'>Next
                                    <Image src={Images.scanImg} alt="SearchImageIcon" className="img-fluid" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='commanOuter'>
                            <div className='d-flex justify-content-between mb-3'>
                                <figure className="">
                                    <Image src={Images.jokerImg} alt="tableImg" className="costumerImg" />
                                    <span className='innerHeading ps-2'>Costumer</span>
                                </figure>
                                <figure className=''>
                                    <Image src={Images.storeImg} alt="store" className="storeimg" />
                                    <span className='innerHeading px-2'>In-Store</span>
                                    <button className='inStoreBtn'>10/10/23</button>
                                </figure>
                            </div>
                            <div className='d-flex justify-content-between  invoiceSearchBox pb-3'>
                                <div className='SearchinvoiceBox'>
                                    <div class="ProductsearchBar">
                                        <input type="text" class="form-control searchControl" placeholder="Scan Barcode of each Item" />
                                        <Image src={Images.scanImg} alt="SearchImageIcon" className="img-fluid scanImg" />
                                    </div>
                                </div>
                                <div className='invoiceButtonBox'>
                                    <button type='button' className='coloredManualButton'>Manual Entry
                                        <Image src={Images.scanImg} alt="SearchImageIcon" className="img-fluid" />
                                    </button>
                                </div>
                            </div>
                            <div className='commanscrollBar manualOrderedProduct mt-3'>
                                <div class="ManualsearchBar">
                                    <input type="text" class="form-control searchControl" placeholder="0199 - 322" />
                                    <Image src={Images.SearchIcon} alt="SearchImageIcon" className="img-fluid searchImg" />
                                </div>
                                <div className='manualSelectedProduct'>
                                    <div className='selectedProductDetails active'>
                                        <div className='d-flex'>
                                            <figure>
                                                <Image src={Images.jokerImg} alt="tableImg" className="costumerImg" />
                                            </figure>
                                            <div className='ps-1'>
                                                <p className='aboutProduct'>Name Product Gender and Quality</p>
                                                <div className='d-flex'>
                                                    <article className='productColor'>
                                                        <span className='Yellow'></span>
                                                        <span className='Red'></span>
                                                        <span className='Pink'></span>
                                                        <span className='Blue'></span>
                                                        <span className='Black'></span>
                                                        <span className='White'></span>
                                                    </article>
                                                    <span className='productSize'>Colors / Size</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='productPriceinvoice'>$90.00</p>
                                    </div>
                                    <div className='selectedProductDetails'>
                                        <div className='d-flex'>
                                            <figure>
                                                <Image src={Images.jokerImg} alt="tableImg" className="costumerImg" />
                                            </figure>
                                            <div className='ps-1'>
                                                <p className='aboutProduct'>Name Product Gender and Quality</p>
                                                <div className='d-flex'>
                                                    <article className='productColor'>
                                                        <span className='Yellow'></span>
                                                        <span className='Red'></span>
                                                        <span className='Pink'></span>
                                                        <span className='Blue'></span>
                                                        <span className='Black'></span>
                                                        <span className='White'></span>
                                                    </article>
                                                    <span className='productSize'>Colors / Size</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='productPriceinvoice'>$90.00</p>
                                    </div>
                                    <div className='selectedProductDetails'>
                                        <div className='d-flex'>
                                            <figure>
                                                <Image src={Images.jokerImg} alt="tableImg" className="costumerImg" />
                                            </figure>
                                            <div className='ps-1'>
                                                <p className='aboutProduct'>Name Product Gender and Quality</p>
                                                <div className='d-flex'>
                                                    <article className='productColor'>
                                                        <span className='Yellow'></span>
                                                        <span className='Red'></span>
                                                        <span className='Pink'></span>
                                                        <span className='Blue'></span>
                                                        <span className='Black'></span>
                                                        <span className='White'></span>
                                                    </article>
                                                    <span className='productSize'>Colors / Size</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='productPriceinvoice'>$90.00</p>
                                    </div>
                                </div>
                                <div className='flexBox buttonBox'>
                                    <button type='button' className='cancelBtn'>Cancel</button>
                                    <button type='button' className='BlueBtn'>Next
                                        <Image src={Images.scanImg} alt="SearchImageIcon" className="img-fluid" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manualinvoice