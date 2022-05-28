import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function NowPlaying(){
    //simpan API_KEY dan URL kedalam variabel
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL= `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getNowPlaying();
        
    }, [])

    async function getNowPlaying(){
        const response = await axios(URL);
        setMovies(response.data.results);
    }
    return(
        <div>
           <Hero />
           <Movies movies={movies} />
        </div>
        
    )
}

export default NowPlaying;