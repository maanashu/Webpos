import React from 'react'

const Pagination = () => {
    return (
        <>
            <div className='Custompagination'>
                <button type='button' className='paginatinationBtn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M12.8242 12.4462L4.82422 4.44629M4.82422 4.44629L12.8242 4.44629M4.82422 4.44629L4.82422 12.4463" stroke="#B4BEEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className='ps-1'>pre</span>
                </button>
                <button type='button' className='paginatinationBtn'>Page no. 1 to 8</button>
                <button type='button' className='paginatinationBtn active'>
                    <span className='pe-1'>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M4.82434 12.4462L12.8241 4.44629M12.8241 4.44629V12.4462M12.8241 4.44629H4.82422" stroke="#58C2E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Pagination