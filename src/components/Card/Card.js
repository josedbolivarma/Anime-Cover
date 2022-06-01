import React from 'react';
import './Card.scss';

const Card = ({ title, imageBg }) => {
  return (
    <div className='card' style={{
        backgroundImage: `url(${imageBg})`
    }}>
        <div className='card__container'>
            <h2 className='card__title'>{ title }</h2>
            <p className='card__text'>This anime is beautifull</p>
        </div>

        <div className='card__background'/>
    </div>
  )
}

export default Card