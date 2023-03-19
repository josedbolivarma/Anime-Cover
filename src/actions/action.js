import { animeStreamingServices } from "../services/animeStreaming";

const { getCharacters, getAnimeById, getVideos } = animeStreamingServices();

const actGetCharacters = async () => {
    try {
        const  res = await getCharacters();
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
}

const actGetAnimeById = async (animeId) => {
    try {
        const res = await getAnimeById(animeId);
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
}

const actGetEpisodeVideosById = async (animeId) => {
    try {
        const res = await getVideos(animeId);
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
}

export const animeActions = () => {
    return {
        actGetCharacters,
        actGetAnimeById,
        actGetEpisodeVideosById
    };
};