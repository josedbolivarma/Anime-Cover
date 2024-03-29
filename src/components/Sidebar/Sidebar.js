import React, { useEffect, useState } from "react";
import { animeActions } from "../../actions";
import { useFetch } from "../../hooks";
import { animeStreamingServices } from "../../services/animeStreaming";
import { Loader } from "../../shared";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  // const { data, isLoading } = useFetch("https://api.jikan.moe/v4/recommendations/anime");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { actGetCharacters } = animeActions();

  const getData = async () => {
    setIsLoading(true);
    const response = await actGetCharacters();
    setData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__box}>
        <h2 className={styles.sidebar__title}>RECENT EPISODES</h2>
        <h2 className={styles.sidebar__title}>RECOMMENDED</h2>
      </div>

      {
        !isLoading? (
          <div className={styles.sidebar__cards}>
        {data?.map((item) => (
          <div key={item.mal_id} className={styles.sidebar__card}>
            <img
              src={item.images.jpg.image_url}
              className={styles.sidebar__avatar}
            />
            <div className={styles.sidebar__cardContent}>
              <div>
                <h3>
                  <b>{item.name}</b>
                </h3>
                {/* <h4>Episode: the Titan Fight</h4> */}
              </div>
              <h5>{item.name_kanji}</h5>
            </div>
          </div>
        ))}
      </div>
        ) : <Loader />
      }
    </div>
  );
};

export default Sidebar;
