import React from 'react'

const ReturnInventory = (props) => {
    return (
        <>
            <h5 className='inventorySubheading'>
                All returned items will be adjusted with inventory
            </h5>
            <div className='productBoxDetails pe-2'>

                {props?.selectedProductItems?.map((data,index)=>{
                    return(
                        <div key={index} className='productcartBox mb-2'>
                        <p className='priceHeading'>{index+1}×</p>
                        <article>
                            <h6 className='priceHeading'> {data?.product_name}</h6>
                            <p className='productSize'>Yellow / M</p>
                        </article>
                        <div className='form-group flexBox addCart '>
                            <button className='removeProductBtn'>
                                <i className="fa-solid fa-minus plusMinus"></i>
                            </button>
                            <input className="form-control customTextarea" type="text" placeholder="" value={data?.qty}/>
                            <button className='addProductBtn'>
                                <i className="fa-solid fa-plus plusMinus"></i>
                            </button>
                        </div>
                    </div>
                    )
                })}
             
              
            </div>
        </>
    )
}

export default ReturnInventory