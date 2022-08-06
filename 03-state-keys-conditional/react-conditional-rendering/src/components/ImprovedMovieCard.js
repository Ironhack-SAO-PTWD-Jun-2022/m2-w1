import React from 'react';
import MovieList from './MovieList';

function MovieCard(props) {
  const { movie, clickToDelete } = props;

  function generateScoreLabel(score) {
    if(score >= 9) {
      return <span className='green'>{score}</span>
    } else if(score < 7) {
      return <span className='red'>{score}</span>
    } else {
      return <span className='black'>{score}</span>
    }
  }

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {generateScoreLabel(movie.IMDBRating)}</p>

      {movie.hasOscars ? <p>Tem Oscar(s)!</p> : <p>Um ótimo filme, mas sem Oscars!</p>}

      <button onClick={() => clickToDelete(movie._id)} className="btn-delete">
        Delete 
      </button>
    </div>
  );
}

export default MovieCard;