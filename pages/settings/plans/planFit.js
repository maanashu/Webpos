import React, { useState } from 'react'
import MonthlyBilling from './monthlyBilling';
import AnnuallyBilling from './annuallyBilling';

const PlanFit = () => {
    const [activeTab, setActiveTab] = useState("MonthlyBilling");
    return (
        <>
            <div className='settingMain'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-9'>
                        <div className='settingOuter planFitRight'>
                            <h4 className='appointMain text-center'>Plans that fit your scale</h4>
                            <h6 className='lightOfferText text-center mt-2'>
                                Simple, Transparent pricing that grows with you
                            </h6>
                            <div className='PlansTabSection'>
                                <div className='planSubTab'>
                                    <div className='plansTabBtn'>
                                        <button className={`billingActiveBtn ${activeTab === 'MonthlyBilling' ? 'active' : ""}`}
                                            onClick={() => setActiveTab('MonthlyBilling')} type='button'>Monthly Billing</button>
                                        <button className={`billingActiveBtn ${activeTab === 'AnnuallyBilling' ? 'active' : ""}`}
                                            onClick={() => setActiveTab('AnnuallyBilling')} type='button'>Annually Billing</button>
                                    </div>
                                </div>
                                <div className='billingSubSection'>
                                    {
                                        activeTab == 'MonthlyBilling' ?
                                            <MonthlyBilling /> :
                                            activeTab == 'AnnuallyBilling' ?
                                                <AnnuallyBilling /> :
                                                ""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanFit