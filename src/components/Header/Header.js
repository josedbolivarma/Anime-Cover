import React from 'react';
import styles from './Header.module.scss';

const Header = () => {

  return (
    <div className={ styles.header }>
      <img 
        src='https://preview.redd.it/u389ge466bb11.jpg?width=600&format=pjpg&auto=webp&s=5402236a21f43269967d996ddd3ce9154ff0019c' 
        className={ styles.header__logo }
        alt='Header Logo'
      />

      <div className={ styles.header__container }>

      <div className={ styles.header__menu }>
        <h3>Comming Soon</h3>
        <h3>Favorite Animes</h3>
        <h3>Most Popular</h3>
        <h3>Genre</h3>
        <div className={ styles.header__box }>
        <h3>Hello José David</h3>
        <img 
          src='https://novascotiatoday.com/wp-content/uploads/2021/10/eren-yeager-..jpg' 
          className={ styles.header__avatar }
        />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header;