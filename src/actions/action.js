import { animeStreamingServices } from "../services/animeStreaming";

const { getCharacters } = animeStreamingServices();

const actGetCharacters = async () => {
    try {
        const  res = await getCharacters();
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
}

export const animeActions = () => {
    return {
        actGetCharacters
    };
};