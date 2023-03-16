import React from 'react';
import { Title } from '../../shared';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={ styles.banner }>
        <div className={ styles.banner__container }>
          <div className={ styles.banner__containerText }>

        {/* Title */}
        <div>
          <Title title="Kill The Kill" size={2.8} color="#FFF" />
          <Title title="New Episodes" size={2.8} color="#FFF" />
          <Title title="Announced Today" size={2.8} color="rgb(255,253,122)" />
        </div>
        {/* Title */}

        <p>
          SAO is an anime of the top around the world
        </p>

        <div className={ styles.btn__box }>
          <button 
            className={ styles.btn__primary }
          >READ MORE</button>

          <button className={ styles.btn__secondary }>API</button>
          <button className={ styles.btn__secondary }>FOLLOW</button>
        </div>

        <div className={ styles.box__actionBtn}>
          <div className={ `${styles.action__btn} ${styles.action__btnOne}` }>
            <p>{'<'}</p>
            <p>LEFT</p>
          </div>
          <div className={ `${styles.action__btn} ${styles.action__btnTwo}` }>
            <p>RIGHT</p>
            <p>{'>'}</p>
          </div>
        </div>

        </div>
        </div>
    </div>
  )
}

export default Banner