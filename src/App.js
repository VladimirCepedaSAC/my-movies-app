
import React, { useEffect, useState } from "react";
import './App.css';
import MovieCard from './movie-card';


function App() {
  const [movies, setMovies] = useState([]);

  const cargaPeliculas = async () => {
      
    const page = Math.floor(Math.random() * 500);
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=fb3ebe5d932f72c2066066485b317f9c&language=es-ES&page=`+ page;

    const response = await fetch(URL);
    const data = await response.json();

    const shuffled = data.results.sort(() => 0.5 - Math.random());
    setMovies(shuffled.slice(0, 6));
  };

  useEffect(() => {
    cargaPeliculas();
  }, []);



  return (
    <div className="App">
      <header className="App-header">
          <h1>Peliculas sugeridas</h1>
          <div class="movie-container" >
          {movies.map((movie)=>(
            <MovieCard 
              titulo={movie.title} 
              poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              puntuacion={movie.vote_average}>  
            </MovieCard>
          ))}
      </div>
      <button onClick={cargaPeliculas}>Actualizar</button>
      </header>

    </div>
  );
}

export default App;
