import StarRating from './stars-rating';

function MovieCard({titulo,poster,puntuacion,id,imdb_id,year}){
    return(
    <div class="movie-card" id={id}>
      <img src={poster} alt={titulo}/>
        <h3 >{titulo}</h3>
        <p>{year}</p>
        <StarRating rating={puntuacion} ></StarRating>
        <a href={imdb_id} target="_blank" rel="noopener noreferrer" className="imdb-link">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
          alt="IMDb Logo"
          className="imdb-logo"
        />
        </a>
    </div>
    )
}

export default MovieCard;