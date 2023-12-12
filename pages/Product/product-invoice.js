import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";
import SearchInvoice from '../../components/commanComonets/InvoiceSearch/Search'
import * as Product from '../../components/commanComonets/Product';
import Pagination from '../../components/commanComonets/pagination';


const ProductInvoice = () => {
    return (
        <>
            <div className='productInvoice'>
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
                            <Pagination/>
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
                                    <button type='button' className='boderdManualButton'>Manual Entry
                                        <Image src={Images.plusRound} alt="SearchImageIcon" className="img-fluid ms-2" />
                                    </button>
                                </div>
                            </div>
                            <div className='commanscrollBar productBoxDetails mt-3'>
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                                <Product.ProductDetail />
                            </div>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <div className='OrderBox'>
                                        <div class="OrderCheckoutBox">
                                            <p className='orderHeading'>Total Items</p>
                                            <p className='orderSubHeading'>7</p>
                                        </div>
                                        <div class="OrderCheckoutBox">
                                            <p className='orderHeading'>Order Date</p>
                                            <p className='orderSubHeading'>10/10/2023</p>
                                        </div>
                                        <div class="OrderCheckoutBox">
                                            <p className='orderHeading'>Order ID#</p>
                                            <p className='orderSubHeading'>JOBR00001</p>
                                        </div>
                                        <div class="OrderCheckoutBox">
                                            <p className='orderHeading'>Payment Method</p>
                                            <figure className='priceBtn'>
                                                <Image src={Images.moneyImg} alt="money" className="moneyImg" />
                                                <span >Cash</span>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-8'>
                                    <div className="productBilling">
                                        <div className='OrderDiscountBox'>
                                            <div className='flexBox '>
                                                <p className='orderHeading'>Sub Total</p>
                                                <p className='orderSubHeading'>$2,396.50</p>
                                            </div>
                                            <div className='flexBox'>
                                                <p className='orderHeading'>Discount</p>
                                                <p className='orderSubHeading'>-$19.00</p>
                                            </div>
                                            <div className='flexBox'>
                                                <p className='orderHeading'>Other Fees</p>
                                                <p className='orderSubHeading'>$14,000</p>
                                            </div>
                                            <div className='flexBox'>
                                                <p className='orderHeading'>Fax</p>
                                                <p className='orderSubHeading'>$236</p>
                                            </div>
                                        </div>
                                        <div className='OrderTotal'>
                                            <div className='flexBox'>
                                                <p className='priceHeading'>Total</p>
                                                <p className='priceHeading'>$254.60</p>
                                            </div>
                                            <button type='button' className='BlueBtn w-100'>
                                                Next
                                                <Image src={Images.ArrowRight} alt="ArrowRight" className="img-fluid ArrowRight" />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInvoice