import { useState } from 'react'
import './App.css';
// import MovieList from './components/MovieList';
import ImprovedMovieList from './components/ImprovedMovieList';
import Spinner from './components/Spinner'

function App() {
  const [ isLoading, setIsLoading ] = useState(false);
  
  return isLoading
    ? <Spinner />
    : (
      <div className="App">
        {/* <MovieList /> */}
        <ImprovedMovieList />
      </div>
  );
}

export default App;