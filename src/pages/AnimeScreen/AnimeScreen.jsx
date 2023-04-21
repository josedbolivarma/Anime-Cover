import { usePalette } from 'color-thief-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animeActions } from '../../actions/action';
import { AnimeDescription } from '../../components';
import { EpisodesContainer } from '../../containers';
import { Loader } from '../../shared';
import styles from "./AnimeScreen.module.scss";

export const AnimeScreen = () => {

  const { actGetAnimeById, actGetEpisodeVideosById } = animeActions();
  const { id } = useParams();
  const [anime, setAnime] = useState({
    images: {
      jpg: {
        image_url: "https://cdn-icons-png.flaticon.com/512/1159/1159355.png"
      }
    }
  });
  const [episodeVideos, setEpisodeVideos] = useState([]);

  const {data, loading, error} = usePalette(anime?.images?.jpg?.image_url, 2,"rgbArray", {
    crossOrigin: "anonymous",
  });
  
  const getData = async () => {
    const resAnime = await actGetAnimeById(id);
    const resEpisodeVideos = await actGetEpisodeVideosById(id);

    setAnime(resAnime);
    setEpisodeVideos(resEpisodeVideos);
  }

  console.log(episodeVideos);

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <section>
      <div className={ styles.anime__screen } style={{ backgroundImage: `url(${ (anime?.trailer?.images.maximum_image_url)? anime?.trailer?.images.maximum_image_url : null })`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
      {
        !loading ? (
          <div 
            className={ styles.anime__banner }
          >

            <div style={{
              background: `rgba(${data[0][0]}, ${data[0][1]}, ${data[0][2]})`,
              background: `linear-gradient(245deg, rgba(${data[1][0]},${data[1][1]},${data[1][2]},1) 35%, rgba(${data[0][0]},${data[0][1]},${data[0][2]},1) 70%`,
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: -1
            }} />

            <div className={ styles.gradient__one } />
            <div className={ styles.gradient__two } style={{
              backgroundImage: `radial-gradient(at left top, rgb(${data[0][0]}, ${data[0][1]}, ${data[0][2]}) 5%, rgba(255, 119, 51, 0) 70%)`
            }}/>

              <div className={ styles.anime__container }>

              {/* Description Anime */}
              <AnimeDescription
                title={anime.title}
                synopsis={anime.synopsis}
                rating={anime.rating}
                genres={anime?.genres}
              />
              {/* Description Anime */}

              {/* Image Anime */}
              <img 
                className={ styles.anime__image }
                style={{
                  border: `3px solid rgba(${data[0][0]}, ${data[0][1]}, ${data[0][2]})`
                }}
                src={anime?.images.jpg?.large_image_url} 
                alt={anime?.title}
              />
              {/* Image Anime */}

                <div className={ styles.shadow__bottom }/>
                <div className={ styles.shadow__top }/>
                
              </div>
          </div>
        ) : <Loader />
      }

    </div>

      <div className={ styles.container }>
      <EpisodesContainer 
        episode_videos={episodeVideos}
      />
      </div>

    </section>
  )
}
