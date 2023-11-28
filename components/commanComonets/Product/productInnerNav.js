import React, { useState } from 'react'
import ProductSearch from './productSearch';
import * as Images from "../../../utilities/images"
import Image from "next/image";


const ProductInnerNav = () => {
    const [filterShow, setFilterShow] = useState(false)
    return (
        <>
            <div className='productNavbar'>
                <div className='productAll'>
                    <p className='ProductAbout'>All Products <span className='productCount'>(+1280)</span></p>
                </div>
                <div className='ProductSearch w-50'>
                    <ProductSearch />
                </div>
                <button className='BlueBtn'>Products
                    <Image src={Images.Shopping_Outline} alt="image" className="img-fluid BtnIcon" />
                </button>
                <button className='GreyBtn'>Services
                    <Image src={Images.Services} alt="image" className="img-fluid BtnIcon" />
                </button>
                <div className='filterDropSelect'>
                    <button className='GreyBtn' onClick={() => setFilterShow(prev => !prev)}>Filters
                        <Image src={Images.FilterIcon} alt="image" className="img-fluid BtnIcon" />
                    </button>
                    {
                        filterShow ?
                            <div className='FilterMultiSelect'>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Category
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <label><input type='checkbox'/>Health</label>
                                                <label><input type='checkbox'/>Health</label>
                                                <label><input type='checkbox'/>Health</label>
                                                <label><input type='checkbox'/>Health</label>
                                                <label><input type='checkbox'/>Health</label>
                                                <label><input type='checkbox'/>Health</label>
                                                <label><input type='checkbox'/>Health</label>
                                                <label><input type='checkbox'/>Health</label>
                                                <label><input type='checkbox'/>Health</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <></>
                    }
                </div>
            </div>
        </>
    )
}
function toggleDropdown(dropdown) {
    dropdown.classList.toggle('open');
}
export default ProductInnerNav