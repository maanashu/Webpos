import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
const CreatetaxModal = () => {
  return (
    <div className='taxPayerSection'>
      <form className='addStoreForm'>
        <div className='taxpayData'>
          <div className='nameForm'>
            <label className="form-label amountText m-0">Tax Name</label>
            <input className="form-control nameControl" type="text" placeholder="Tax Name" />
          </div>
          <div className='row mt-3'>
            <div className='col-lg-6'>
              <div className='nameForm'>
                <label className="form-label amountText m-0">Tax Name</label>
                <input className="form-control nameControl" type="text" placeholder="Tax Name" />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='selectRole'>
                <label className="form-label amountText m-0">Location</label>
                <select class="form-select" aria-label="Default select example" >
                  <option selected>Florida</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='addCustomerBtn mt-4'>
          <button className='serviceCancel w-100 ' type='button'>
            Cancel
          </button>
          <button className='nextverifyBtn w-100' type='button'>
            Save
            <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatetaxModal
