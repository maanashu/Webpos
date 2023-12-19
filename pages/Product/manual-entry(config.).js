import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";
import SearchInvoice from '../../components/commanComonets/InvoiceSearch/Search'
import * as Product from '../../components/commanComonets/Product';
import Pagination from '../../components/commanComonets/pagination';

const Manualentryconfig = () => {
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
                            <Pagination />
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
                                    <div className="ProductsearchBar">
                                        <input type="text" className="form-control searchControl" placeholder="Scan Barcode of each Item" />
                                        <Image src={Images.scanImg} alt="SearchImageIcon" className="img-fluid scanImg" />
                                    </div>
                                </div>
                                <div className='invoiceButtonBox'>
                                    <button type='button' className='coloredManualButton'>Manual Entry
                                        <Image src={Images.Cancelproduct} alt="SearchImageIcon" className="img-fluid ms-2" />
                                    </button>
                                </div>
                            </div>
                            <div className='commanscrollBar manualOrderedProduct mt-3'>
                                <div className="ManualsearchBar">
                                    <input type="text" className="form-control searchControl" placeholder="0199 - 322" />
                                    <Image src={Images.SearchIcon} alt="SearchImageIcon" className="img-fluid searchImg" />
                                </div>
                                <div className='manualProduct'>
                                    <div className=' manualSelectedProduct  manualSelectedItems align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <figure>
                                                <Image src={Images.ItemImage} alt="ItemImage" className="img-fluid ItemImage" />
                                            </figure>
                                            <article>
                                                <h6 className='selectedproductDetails'>Lightweight Stylish Casual Daypack</h6>
                                                <button type='button' className='productId'><span className='productDot'></span>SKU 0199 - 3221</button>
                                                <p className='innerHeading'>$90.00</p>
                                            </article>
                                        </div>
                                        <div className=''>
                                            <p className='priceHeading'>Color</p>
                                            <article className='manual-entryColor'>
                                                <span className='Pink'></span>
                                                <span className='Red'></span>
                                                <span className='Yellow active'></span>
                                                <span className='Blue'></span>
                                                <span className='Black'></span>
                                                <span className='White'></span>
                                            </article>
                                        </div>
                                        <div className=''>
                                            <p className='priceHeading'>Size</p>
                                            <article className='productSizeBtnBox'>
                                                <button className='productSizeBtn'>S</button>
                                                <button className='productSizeBtn active'>M</button>
                                                <button className='productSizeBtn'>L</button>
                                                <button className='productSizeBtn'>XL</button>
                                                <button className='productSizeBtn disable'>XXL</button>
                                            </article>
                                        </div>
                                        <div className='form-group flexBox addCart mb-3'>
                                            <button className='removeProductBtn'>
                                                <i className="fa-solid fa-minus plusMinus"></i>
                                            </button>
                                            <input className="form-control customTextarea" type="text" placeholder="1" />
                                            <button className='addProductBtn'>
                                                <i className="fa-solid fa-plus plusMinus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='flexBox buttonBox'>
                                    <button type='button' className='cancelBtn'>Cancel</button>
                                    <button type='button' className='BlueBtn '>Next
                                        <Image src={Images.serviceCart} alt="serviceCart" className="img-fluid serviceCart" />
                                    </button>
                                    <button type='button' className='AddedBtn d-none'>Item added
                                        <Image src={Images.AddedIcon} alt="AddedIcon" className="img-fluid serviceCart" />
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

export default Manualentryconfig