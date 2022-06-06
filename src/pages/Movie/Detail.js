import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail (){
    const params = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        gerRecomendationMovies();
    }, [params.id])

    async function gerRecomendationMovies(){
        const response = await axios(ENDPOINTS.RECOMENDATION(params.id));

        setMovies(response.data.results);
    } 
    return (
        <div>
            <DetailMovie />
            <Movies movies={movies} title={"Recomendation Movies"}/>
        </div>
     
    )
}

export default Detail;