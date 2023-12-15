import React from 'react'

const GiftCardModal = () => {
    return (
        <>
            <div className='giftModalSection'>
                <form className='giftForm'>
                    <label className="form-label amountText m-0">Type a 12 digits code</label>
                    <input className="form-control cardControl mt-1" type="number" placeholder="0 2 3 4    8 6 5 0    5 5 6 9" />
                    <div className='addCustomerBtn mt-4 giftOfferBtn'>
                        <button className='serviceCancel' type='submit'>
                            Cancel
                        </button>
                        <button className='nextverifyBtn' type='submit'>
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default GiftCardModal