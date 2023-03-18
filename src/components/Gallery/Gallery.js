import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';
import Card from '../Card/Card';
import { useFetch } from '../../hooks';

const Gallery = () => {
  const { data, isLoading } = useFetch("https://api.jikan.moe/v4/top/anime");
  
  useEffect(() => {

  }, []);

  return (
    <div className={ styles.gallery }>
        <div className={ styles.gallery__filter }>
            <div className={ styles.gallery__filterLinks }>
            <h3>Comming Soon</h3>
            <h3>Favorite Animes</h3>
            <h3>Most Popular</h3>
            <h3>Genre</h3>
            </div>

            <div className={ styles.gallery__filterButtons }>
                <img 
                  className={ styles.gallery__filterBtn } 
                  src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://buttonpoetry.com/wp-content/themes/Button-Theme/dist/assets/images/theme/button-logo-transparent-white.png' 
                  alt='Gallery Filter Icons'
                />
                <img 
                  className={ styles.gallery__filterBtn } 
                  src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://buttonpoetry.com/wp-content/themes/Button-Theme/dist/assets/images/theme/button-logo-transparent-white.png' 
                  alt='Gallery Filter Icons'
                />
            </div>
        </div>

        <div className={ styles.gallery__container }>
        {
          data?.map((item) => (
            <Card 
            key={item.mal_id}
            title={item.title}
            imageBg={item.images.jpg.large_image_url}
            />
          ))
        }
        </div>
    </div>
  )
}

export default Gallery