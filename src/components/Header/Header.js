import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {

  return (
    <div className={ styles.header }>
      <div className={ styles.header__container }>
      <img 
        src='https://res.cloudinary.com/duzncuogi/image/upload/v1679199983/anime_cover/animelogo-PhotoRoom.png-PhotoRoom_lgyp1k.png' 
        className={ styles.header__logo }
        alt='Header Logo'
      />


      <div className={ styles.header__menu }>
        <h3>Comming Soon</h3>
        <h3>Favorite Animes</h3>
        <h3>Most Popular</h3>
        <h3>Genre</h3>
        <div className={ styles.header__box }>
        <h3>LOG IN</h3>
        {/* <img 
          src='https://sportshub.cbsistatic.com/i/2022/05/17/ede30685-59f4-435a-a886-58fa06ba361a/bleach-sousuke-aizen-anime.jpg' 
          className={ styles.header__avatar }
        /> */}
        </div>
      </div>
      
      </div>
    </div>
  )
}