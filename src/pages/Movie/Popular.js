import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //fetch dari data axios
        getPopularMovies(); 
    }, []);

    async function getPopularMovies(){
        const response = await axios(ENDPOINTS.POPULAR);
        setMovies(response.data.results);
    }
    return(
        <div>
           <Hero />
           <Movies movies={movies} title={"Popular Movies"}/>
        </div>
        
    )
}

export default PopularMovie;