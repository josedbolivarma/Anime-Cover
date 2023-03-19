import React from 'react';
import { truncate } from '../../helpers';
import { Title } from '../../shared';

import styles from "./AnimeDescription.module.scss";

export const AnimeDescription = ({ title, synopsis, rating, genres }) => {
  return (
    <div className={ styles.content }>
        <Title title={ title } size={3.4} />
        <p className={ styles.description }>{ truncate(synopsis, 80) } <b>MORE</b></p>
        <div className={ styles.text__content }>
            <p>TVMA *</p> 
            <p>
                {
                    genres?.map(genre => genre.name ).join(", ")
                }
            </p>
            <p>* TV Series * 2013</p>
        </div>
        {/* Action, Animation, Fantasy, Anime */}
        <p>{ rating }</p>
        <div className={ styles.action__btn }>
          <button className={`${styles.btn} ${styles.btn__one}`}>START YOUR FREE TRIAL</button>
          <button className={`${styles.btn} ${styles.btn__two}`}>WATCH TRAILER</button>
        </div>
      </div>
  )
}
