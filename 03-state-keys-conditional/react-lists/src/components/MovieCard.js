function MovieCard({ movie, clickToDelete }) {
  // const { movie } = props;
  return (
    <div key={movie._id} className='MovieCard'>
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      <button onClick={() => clickToDelete(movie._id)} className='btn-delete'>Delete</button>
    </div>
  )
}

export default MovieCard;