import React from 'react'

const Videoiframe = () => {
    return (
        <div className='sm:max-w-md md:max-w-3xl'>
            <div className='aspect-w-16 aspect-h-9'>
                <iframe src="https://www.youtube.com/embed/1mlqwxYBW_w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Videoiframe