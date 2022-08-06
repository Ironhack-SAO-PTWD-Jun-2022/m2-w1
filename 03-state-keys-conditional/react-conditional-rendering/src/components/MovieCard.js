import React from 'react';
import MovieList from './MovieList';

function MovieCard(props) {
  const { movie, clickToDelete } = props;

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>

      {/* {movie.hasOscars && <p>Tem Oscar(s)!</p>}
      {!movie.hasOscars && <p>Um ótimo filme, mas sem Oscars!</p>} */}

      {movie.hasOscars ? <p>Tem Oscar(s)!</p> : <p>Um ótimo filme, mas sem Oscars!</p>}

      <button onClick={() => clickToDelete(movie._id)} className="btn-delete">
        Delete 
      </button>
    </div>
  );
}

export default MovieCard;