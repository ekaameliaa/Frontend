import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //memanggil funagsi getTopRatedMovie
        getTopRatedMovie();
        
    }, [])

    //membuat fungsi getTopRtaedMovie
    async function getTopRatedMovie(){
        const response = await axios(ENDPOINTS.TOPRATED);
        setMovies(response.data.results);
    }
    return(
        <div>
           <Hero />
           <Movies movies={movies} title={"Top Rated Movies"} />
        </div>
        
    )
}

export default TopRatedMovie;