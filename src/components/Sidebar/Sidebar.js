import React, { useEffect, useState } from 'react';
import { animeActions } from '../../actions';
import { useFetch } from '../../hooks';
import { animeStreamingServices } from '../../services/animeStreaming';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  // const { data, isLoading } = useFetch("https://api.jikan.moe/v4/recommendations/anime");
  const [data, setData] = useState([]);
  const { actGetCharacters } = animeActions();
  

  useEffect(() => {
    const getData = async () => {
      const response = await actGetCharacters();
      setData(response);
    }

    getData();
  }, []);

  return (
    <div className={ styles.sidebar }>
        <div className={ styles.sidebar__box }>
            <h2 className={ styles.sidebar__title }>RECENT EPISODES</h2>
            <h2 className={ styles.sidebar__title }>RECOMMENDED</h2>
        </div>

        <div className={ styles.sidebar__cards }>
        {
  data?.map((item) => (
    <div key={item.mal_id} className={ styles.sidebar__card }>
    <img src={ item.images.jpg.image_url } className={ styles.sidebar__avatar }/>
    <div className={ styles.sidebar__cardContent }>
        <div>
        <h3><b>{ item.name }</b></h3>
        {/* <h4>Episode: the Titan Fight</h4> */}
        </div>
        <h5>{ item.name_kanji }</h5>
    </div>
    </div>
  ))
}
        </div>
      
    </div>
  )
}

export default Sidebar


