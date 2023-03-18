import { useEffect, useState } from "react";
import axios from 'axios';

export const useFetch = (fetchUrl) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = () => {
        axios.get(fetchUrl)
        .then((resp) => {
          const data = resp.data;
          setData(data.data);
          console.log(data.data, ' DATA');
        })
    };

    useEffect(() => {
        getData();
    }, [fetchUrl]);

    return {
        // properties
        data,
        isLoading
    }

}