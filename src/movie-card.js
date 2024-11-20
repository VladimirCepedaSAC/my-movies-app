import { useEffect, useState } from "react";


function MovieCard({titulo,poster,puntuacion,id,imdb_id}){
    return(
    <div class="movie-card" id={id}>
      <img src={poster}/>
      <div className="movie-card-text">
        <h4>{titulo}</h4>
        <p>Puntuacion: {puntuacion}</p>
        <a href={imdb_id} target="_blank" rel="noopener noreferrer" className="imdb-link">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
          alt="IMDb Logo"
          className="imdb-logo"
        />
        </a>
      </div>
    </div>
    )
}

export default MovieCard;