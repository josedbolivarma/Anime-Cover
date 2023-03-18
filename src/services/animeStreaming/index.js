import { instance } from "../configBaseAxiosUrl";

export const animeStreamingServices = () => {
    
    const getCharacters = () => {
        return instance({
            method: "GET",
            url: `/characters?order_by=favorites`
        });
    }

    // Pantalla principal 'animes que estás en el top'
    const getTop = (tier) => {
        return instance({
            method: 'GET',
            url: `/top/anime/1/${tier}`
        })
    }

    // Pantalla principal 'animes según su genero'
    const getGenre = (type) => {
        return instance({
            method: 'GET',
            url: `search/anime?genre=${type}`
        })
    }

    // Personajes y actores que prestan sus voces
    const getCharactersStaff = (animeId) => {
        return instance({
            method: 'GET',
            url: `/anime/${animeId}/characters_staff`
        })
    }

    // Portada promocional
    const getPictures = (animeId) => {
        return instance({
            method: 'GET',
            url: `/anime/${animeId}/pictures`
        })
    }

    // Video promocional
    const getVideos = (animeId) => {
        return instance({
            method: 'GET',
            url: `/anime/${animeId}/videos`
        })
    }

    // Episodios
    const getEpisodes = (animeId) => {
        return instance({
            method: 'GET',
            url: `/anime/${animeId}/episodes`
        })
    }

    // Noticias del anime
    const getNews = (animeId) => {
        return instance({
            method: 'GET',
            url: `/anime/${animeId}/news`
        })
    }

    // Recomendaciones de si ver o no el anime
    const getMoreInfo = (animeId) => {
        return instance({
            method: 'GET',
            url: `/anime/${animeId}/moreInfo`
        })
    }

    // Encontrar anime solamente por nombre pero en una busqueda de caracteres incluidos
    const getSearchAnimeByName = (animeName) => {
        return instance({
            method: 'GET',
            url: `search/anime?q=${animeName}&limit=5`
        })
    }

    return {
        getTop,
        getGenre,
        getCharactersStaff,
        getPictures,
        getVideos,
        getEpisodes,
        getNews,
        getMoreInfo,
        getSearchAnimeByName,
        getCharacters
    }
}