import React, { useEffect } from 'react';
import './Gallery.scss';
import Card from '../Card/Card';

const Gallery = () => {
  
  useEffect(() => {
    console.log("Gallery.js");   
  }, [])
  
  return (
    <div className='gallery'>
        <div className='gallery__filter'>
            <div className='gallery__filterLinks'>
            <h3>Comming Soon</h3>
            <h3>Favorite Animes</h3>
            <h3>Most Popular</h3>
            <h3>Genre</h3>
            </div>

            <div className='gallery__filterButtons'>
                <img className='gallery__filterBtn' src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://buttonpoetry.com/wp-content/themes/Button-Theme/dist/assets/images/theme/button-logo-transparent-white.png' alt='Gallery Filter Icons'/>
                <img className='gallery__filterBtn' src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://buttonpoetry.com/wp-content/themes/Button-Theme/dist/assets/images/theme/button-logo-transparent-white.png' alt='Gallery Filter Icons'/>
            </div>
            
        </div>
        <div className='gallery__container'>
        <Card />
        {

        }
        </div>
    </div>
  )
}

export default Gallery