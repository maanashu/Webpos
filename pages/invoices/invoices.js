import React from 'react'




const Invoices = () => {
    return (
        <>
            <div className='invoice'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <div className='homePage'>
                                <div className="table-responsive">
                                    <table id="tableInvoice" className="Invoice-Table">
                                        <thead>
                                            <tr>
                                                <th className="recent_head">#Invoice</th>
                                                <th className="recent_head">Customer</th>
                                                <th className="recent_head">Sale</th>
                                                <th className="recent_head">items</th>
                                                <th className="recent_head">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="activities_user  activities_">
                                                <td className="recent_subhead">#7869YZ</td>
                                                <td className="recent_subhead">
                                                    <div className="trandTable">
                                                        {/* <Image src={Images.Tableone} alt="tableImg" className="smallImg_" /> */}
                                                        <span className="userName">Bitcoin</span>
                                                    </div>
                                                </td>
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

export default Invoices