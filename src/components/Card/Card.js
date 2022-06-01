import React from 'react';
import './Card.scss';

const Card = () => {
  return (
    <div className='card' style={{
        backgroundImage: "url('https://img1.ak.crunchyroll.com/i/spire3/dac363972d628a7009e04fdeb9d7104a1641869274_full.jpg')"
    }}>
        <div className='card__container'>
            <h2 className='card__title'>Card Title</h2>
            <p className='card__text'>This anime is beautifull</p>
        </div>
    </div>
  )
}

export default Card