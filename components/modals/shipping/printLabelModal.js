import React from 'react'

const PrintLabelModal = (props) => {
    return (
        <>
            <iframe
                title="PDF Viewer"
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(props?.printingUrl)}&embedded=true`}
                allow="autoplay; encrypted-media"
                style={{ width: "100%", height: "700px", border: "none" }}
            />
            <button onClick={() => window.print()} className='btn btn-primary'>Print</button>
        </>
    )
}

export default PrintLabelModal
