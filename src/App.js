import './App.css';
import { useMovies } from './hooks';
import { PopularMovies } from './components';

const App = () => {
  const { movies } = useMovies();
  return (
    <div className="App">
      <h1>Watchlist</h1>
      <PopularMovies movies={movies} />
    </div>
  );
}

export default App;
