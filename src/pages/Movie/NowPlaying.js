import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlaying(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getNowPlaying();
        
    }, [])

    async function getNowPlaying(){
        const response = await axios(ENDPOINTS.NOWPLAYING);
        setMovies(response.data.results);
    }
    return(
        <div>
           <Hero />
           <Movies movies={movies} title={"Now Playing Movies"}/>
        </div>
        
    )
}

export default NowPlaying;