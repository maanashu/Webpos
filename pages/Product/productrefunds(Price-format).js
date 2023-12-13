import Link from 'next/link'
import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";

const productrefunds = () => {
    return (
        <>
            <div className='commanOuter'>
                <div className='refundsBox'>
                    <div className=''>
                        <div className='flexBox justify-content-between'>
                            <article>
                                <h3 className='refundItems'>Refunds <span className='refundCount'>(5)</span></h3>
                                <p className='priceHeading'>Select the items to refund.</p>
                            </article>
                            <div className='flexBox'>
                                <h5 className='priceHeading pe-3'>Apply a fixed amount to all items.</h5>
                                <div className='flexBox refundPricebox'>
                                    <p className='refundPrice'>$ 20.00</p>
                                    <article>
                                        <Link href='/' className='priceFilterBtn active'>$</Link>
                                        <Link href='/' className='priceFilterBtn'>%</Link>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table id="tableProduct" className="refundproduct_table">
                                <thead>
                                    <tr>
                                        <th className="recent_head">#</th>
                                        <th className="recent_head">Item</th>
                                        <th className="recent_head text-center">Unit Price</th>
                                        <th className="recent_head text-center">Refund Amount</th>
                                        <th className="recent_head text-center">Quantity</th>
                                        <th className="recent_head text-center">Line Total</th>
                                        <th className="recent_head">
                                            <label class="custom-checkbox">
                                                <input type="checkbox" checked />
                                                <span class="checkmark"></span>
                                            </label>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="activities_user">
                                        <td className="recent_subhead">1</td>
                                        <td className="recent_subhead">
                                            <div className="trandTable flexBox">
                                                <Image src={Images.ItemImage} alt="tableImg" className="img-fluid refundItemImage" />
                                                <article>
                                                    <h3 className="productPrice">Lightweight Stylish Casual Daypack</h3>
                                                    <p className='flexBox paginatinationBtn'><span className='productDot'></span>SKU 0199 - 3221</p>
                                                </article>
                                            </div>
                                        </td>

                                        <td className="recent_subhead text-center">
                                            <span className=''>$90.00</span>
                                        </td>
                                        <td className="recent_subhead text-center">
                                            <input type='text' placeholder='' value={'$20.00'} className='tablecustomInput' />
                                        </td>
                                        <td className="recent_subhead text-center">
                                            × 1
                                        </td>
                                        <td className="recent_subhead text-center">
                                            $90.00
                                        </td>
                                        <td className="recent_subhead">
                                            <label class="custom-checkbox">
                                                <input type="checkbox" checked />
                                                <span class="checkmark"></span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr className="activities_user">
                                        <td className="recent_subhead">1</td>
                                        <td className="recent_subhead">
                                            <div className="trandTable flexBox">
                                                <Image src={Images.ItemImage} alt="tableImg" className="img-fluid refundItemImage" />
                                                <article>
                                                    <h3 className="productPrice">Lightweight Stylish Casual Daypack</h3>
                                                    <p className='flexBox'><span className='productDot'></span>SKU 0199 - 3221</p>
                                                </article>
                                            </div>
                                        </td>

                                        <td className="recent_subhead text-center">
                                            <span className=''>$90.00</span>
                                        </td>
                                        <td className="recent_subhead text-center">
                                            <input type='text' placeholder='$20.00' className='tablecustomInput' />
                                        </td>
                                        <td className="recent_subhead text-center">
                                            × 1
                                        </td>
                                        <td className="recent_subhead text-center">
                                            $90.00
                                        </td>
                                        <td className="recent_subhead">
                                            <label class="custom-checkbox">
                                                <input type="checkbox" checked />
                                                <span class="checkmark"></span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr className="activities_user">
                                        <td className="recent_subhead">1</td>
                                        <td className="recent_subhead">
                                            <div className="trandTable flexBox">
                                                <Image src={Images.ItemImage} alt="tableImg" className="img-fluid refundItemImage" />
                                                <article>
                                                    <h3 className="productPrice">Lightweight Stylish Casual Daypack</h3>
                                                    <p className='flexBox'><span className='productDot'></span>SKU 0199 - 3221</p>
                                                </article>
                                            </div>
                                        </td>

                                        <td className="recent_subhead text-center">
                                            <span className=''>$90.00</span>
                                        </td>
                                        <td className="recent_subhead text-center">
                                            <input type='text' placeholder='' value={'$20.00'} className='tablecustomInput' />
                                        </td>
                                        <td className="recent_subhead text-center">
                                            × 1
                                        </td>
                                        <td className="recent_subhead text-center">
                                            $90.00
                                        </td>
                                        <td className="recent_subhead">
                                            <label class="custom-checkbox">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 offset-8'>
                            <div className='refundedItems'>
                                <div className='flexBox justify-content-between itemsRefundedBox'>
                                    <p className='priceHeading'>Items Refunded</p>
                                    <p className='priceHeading'>4</p>
                                </div>
                                <div className='itemsRefundedsubTotal'>
                                    <div className='flexBox justify-content-between '>
                                        <p className='orderHeading'>Sub Total</p>
                                        <p className='orderHeading'>$2,396.50</p>
                                    </div>
                                    <div className='flexBox justify-content-between '>
                                        <p className='orderHeading'>Total Taxes</p>
                                        <p className='orderHeading'>-$19.00</p>
                                    </div>
                                </div>
                                <div className='flexBox justify-content-between itemsRefundedTotal'>
                                    <p className='priceHeading'>Total</p>
                                    <p className='priceHeading'>$254.60</p>
                                </div>
                                <div className='text-end'>
                                    <button type='button' className='comfirmatiopnBtn'>
                                        Confirm
                                        <Image src={Images.Arrowtopright} alt="Arrowtopright" className="img-fluid Arrowtopright"/>
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

export default productrefunds