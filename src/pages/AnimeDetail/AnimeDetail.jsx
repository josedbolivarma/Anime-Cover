import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { animeActions } from '../../actions/action';
import styles from "./AnimeDetail.module.scss";

export const AnimeDetail = () => {

  const { actGetAnimeById } = animeActions();
  const { id } = useParams();
  
  const getData = async () => {
    const response = await actGetAnimeById(id);
    console.log(response);
  }

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
        AnimeDetail
    </div>
  )
}
