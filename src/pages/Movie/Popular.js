import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function PopularMovie(){
    //simpan API_KEY dan URL kedalam variabel
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL= `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //fetch dari data axios
        getPopularMovies(); 
    }, []);

    async function getPopularMovies(){
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

export default PopularMovie;