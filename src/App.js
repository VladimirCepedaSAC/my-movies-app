
import React, { useEffect, useState } from "react";
import './App.css';
import MovieCard from './movie-card';


function App() {
  const [movies, setMovies] = useState([]);

  const cargaPeliculas = async () => {
      
    const API_KEY = "fb3ebe5d932f72c2066066485b317f9c";
    const BASE_URL = "https://api.themoviedb.org/3";

    const page = Math.floor(Math.random() * 500);
    const URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=`+ page;

    const response = await fetch(URL);
    const data = await response.json();

    const shuffled = data.results.sort(() => 0.5 - Math.random()).slice(0, 6);

      // Obtener el `imdb_id` para cada película
      const moviesWithIMDb = await Promise.all(
        shuffled.map(async (movie) => {
          const detailsResponse = await fetch(`${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}&language=es-ES`);
          const details = await detailsResponse.json();
          return {
            ...movie,
            imdbLink: `https://www.imdb.com/title/${details.imdb_id}/`,
          };
        })
      );

      setMovies(moviesWithIMDb);


  };

  useEffect(() => {
    cargaPeliculas();
  }, []);



  return (
    <div className="App">
      <header className="App-header">
          <h1>RandomFlix</h1>
          <div class="movie-container" >
          {movies.map((movie)=>(
            <MovieCard 
              titulo={movie.title} 
              poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              puntuacion={movie.vote_average}
              id = {movie.id}
              imdb_id={movie.imdbLink}
              year={new Date(movie.release_date).getFullYear()}
              >  
            </MovieCard>
          ))}
      </div>
      <button onClick={cargaPeliculas}>Actualizar</button>
      </header>

    </div>
  );
}

export default App;
