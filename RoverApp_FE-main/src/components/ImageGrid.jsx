import React from 'react'
import './ImageGrid.css'

const Images = ({images}) => {

    return (

        <div id='wrapper' className='mt-[-800px] bg-gray-800  h-dvh w-dvh'>

            <div className='container'>
                <div className='gallery'>
                    {
                        images.map((image, key) => (
                            <img src={image.img_src} className='card' alt={image.earth_date}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Images
