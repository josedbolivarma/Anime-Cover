import { usePalette } from 'color-thief-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animeActions } from '../../actions/action';
import { Loader } from '../../shared';
import styles from "./AnimeScreen.module.scss";

export const AnimeScreen = () => {

  const { actGetAnimeById } = animeActions();
  const { id } = useParams();
  const [anime, setAnime] = useState({
    images: {
      jpg: {
        image_url: "https://cdn-icons-png.flaticon.com/512/1159/1159355.png"
      }
    }
  });

  const {data, loading, error} = usePalette(anime?.images?.jpg?.image_url, 2,"rgbArray", {
    crossOrigin: "anonymous",
  });
  
  const getData = async () => {
    const response = await actGetAnimeById(id);
    setAnime(response);
  }

  console.log({data});

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className={ styles.anime__screen } >
      {/* style={{ backgroundImage: `url(${ (anime?.trailer?.images.maximum_image_url)? anime?.trailer?.images.maximum_image_url : anime?.images?.jpg?.large_image_url })`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} */}
      {
        !loading ? (
          <div 
            className={ styles.anime__banner }
          >

            <div style={{
              background: `rgba(${data[0][0]}, ${data[0][1]}, ${data[0][2]})`,
              // background: `linear-gradient(90deg, rgba(${data[1][0]},${data[1][1]},${data[1][2]},1) 22%, rgba(${data[0][0]},${data[0][1]},${data[0][2]},1) 100%`,
              background: `linear-gradient(245deg, rgba(${data[1][0]},${data[1][1]},${data[1][2]},1) 35%, rgba(${data[0][0]},${data[0][1]},${data[0][2]},1) 70%`,
              // position: "absolute",
              // top: 0,
              // left: 0,
              // bottom: 0,
              // right: 0,
              // opacity: 1,
              zIndex: 99
            }} />

            <div className={ styles.gradient__one } />
            <div className={ styles.gradient__two } style={{
              backgroundImage: `radial-gradient(at left top, rgb(${data[0][0]}, ${data[0][1]}, ${data[0][2]}) 5%, rgba(255, 119, 51, 0) 70%)`
            }}/>

              <div className={ styles.anime__container }>

              {/* Description Anime */}
              <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                zIndex: 1000,
                color: "#FFF"
              }}>
                <h2>titulo</h2>
                <p>Descripcion... <b>MORE</b></p>
                <p>TVMA * Action, Animation, Fantasy, Anime * TV Series * 2013</p>

                <div>
                  <button>START YOUR FREE TRIAL</button>
                  <button>WATCH TRAILER</button>
                </div>
              </div>
              {/* Description Anime */}

              {/* Image Anime */}
              <img 
                className={ styles.anime__image }
                style={{
                  border: `3px solid rgba(${data[0][0]}, ${data[0][1]}, ${data[0][2]})`
                }}
                src={anime.images.jpg.large_image_url} 
                alt='titulo' 
              />
              {/* Image Anime */}

                <div className={ styles.shadow__bottom }/>
                <div className={ styles.shadow__top }/>
                
              </div>
          </div>
        ) : <Loader />
      }
    </div>
  )
}
