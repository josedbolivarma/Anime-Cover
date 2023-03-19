import React from 'react';
import { EpisodeItem } from '../../components';

import styles from "./EpisodesContainer.module.scss";

export const EpisodesContainer = ({ episode_videos }) => {
  return (
    <div>
        
        <div className={ styles.grid }>
        {
            episode_videos.map((item) => (
                <EpisodeItem 
                    key={item?.mal_id}
                    title={item?.title}
                    episode={item?.episode}
                    url={item?.url}
                    image={item?.images?.jpg?.image_url}
                />
            ))
        }
        </div>
    </div>
  )
}
