import { useState } from "react";
import Form from "../components/AddMovieForm/AddMovieForm";
import Counter from "../components/Counter";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import data from "../utils/constants/data";



function  Home(){
    const [movies, setMovies] = useState(data);
    return(
        <div>
            <Hero />
            <Movies movies={movies} setMovies={setMovies} title={"Latest Movies"}/>
            <Form movies={movies} setMovies={setMovies} />
        </div>
    )
    // return(
    //     <Counter />
    // )
}

export default Home;