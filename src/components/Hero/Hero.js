import { useEffect, useState } from "react";
import Button from "../UI/Button";
import StyledHero from "./styled.hero";


function Hero() {
  //state movie
  const [  movie, setMovie ] = useState("");

  async function fetchMovie(){
    //melakukan side effect yaitu melakukan fetch data movie (api)
    const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");

    const data = await response.json();
    
    //set movie dengan hasil data fetch movie
    setMovie(data);
  }
  useEffect(fetchMovie, [])

  return (
    <StyledHero>
      <div>
      <section>
        <div>
          <h2>{movie.Title}</h2>
          <h3>Genre: {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button variant="secondary" size="lg">Watch</Button>
        </div>
        <div>
          <img src={movie.Poster} alt={movie.Title}/>
        </div>
      </section>
      </div>
    </StyledHero>
  );
}

export default Hero;