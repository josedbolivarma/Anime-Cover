import { usePalette } from 'color-thief-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animeActions } from '../../actions/action';
import styles from "./AnimeDetail.module.scss";

export const AnimeDetail = () => {

  const { actGetAnimeById } = animeActions();
  const { id } = useParams();
  const [anime, setAnime] = useState({
    images: {
      jpg: {
        image_url: "https://www.laizquierdadiario.cl/IMG/arton130973.jpg?1559161281"
      }
    }
  });

  const {data, loading, error} = usePalette(anime?.images?.jpg?.image_url, 2,"rgbArray", {
    crossOrigin: "anonymous",
  });
  
  const getData = async () => {
    const response = await actGetAnimeById(id);
    setAnime(response);
    console.log(response);
  }

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div style={{ height: "80vh" }}>
      {
        !loading ? (
          <div style={{
            background: `rgba(${data[0][0]}, ${data[0][1]}, ${data[0][2]})`,
            background: `linear-gradient(90deg, rgba(${data[1][0]},${data[1][1]},${data[1][2]},1) 30%, rgba(${data[0][0]},${data[0][1]},${data[0][2]},1) 100%`,
            height: "100%"
          }}>
              AnimeDetail
          </div>
        ) : <h2>Loading</h2>
      }
    </div>
  )
}
