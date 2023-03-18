import React from 'react';
import styles from './Card.module.scss';

const Card = ({ title, imageBg }) => {
  return (
    <div className={ styles.card } style={{
        backgroundImage: `url(${imageBg})`
    }}>
        <div className={ styles.card__container }>
            <h2 className={ styles.card__title }>{ title }</h2>
            <p className={ styles.card__text }>This anime is beautifull</p>
        </div>

        <div className={ styles.card__background } />
    </div>
  )
}

export default Card