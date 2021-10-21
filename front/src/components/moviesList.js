import { useEffect, useState } from "react";
import Movie from "./movie";
import CreateMovie from "./createMovie";

function MoviesList ()
{
    const [movies, setMovies] = useState([]);

function addMovie(movie) {
    let newMovie = {...movie, id: movies.length + 1}
    setMovies([...movies, newMovie]);
}

    useEffect(()=> {
        const url = "/api/movies";
        fetch(url).then(res => res.json()).then(res => {
            console.log("Res", res)
            setMovies(res);
        })


    }, [])
    return (
        <div>
            <h1> Listado de películas </h1>
            {movies.map(m => <Movie movie ={m}/>)}
            <CreateMovie agregar={addMovie}/>
        </div>
    )
}

export default MoviesList;