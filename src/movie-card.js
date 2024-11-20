function MovieCard({titulo,poster,puntuacion}){
    return(
    <div class="movie-card">
    <img src={poster}/>
    <h3>{titulo}</h3>
    <p>Puntuacion: {puntuacion}</p>
  </div>
    )
}

export default MovieCard;