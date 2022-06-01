import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {

  return (
    <div className='header'>
      <img src='https://preview.redd.it/u389ge466bb11.jpg?width=600&format=pjpg&auto=webp&s=5402236a21f43269967d996ddd3ce9154ff0019c' className='header__logo'
      alt='Header Logo'/>

      <div className='header__container'>

      <div className='header__menu'>
        <h3>Comming Soon</h3>
        <h3>Favorite Animes</h3>
        <h3>Most Popular</h3>
        <h3>Genre</h3>
        <div className='header__box'>
        <h3>Hello José David</h3>
        <img src='https://novascotiatoday.com/wp-content/uploads/2021/10/eren-yeager-..jpg' className='header__avatar'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header;