import './PopularMovies.css';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { trimTitle } from '../../helpers';

const PopularMovies = ({ movies }) => {
    return (
        <ScrollMenu>
            {movies?.map((movie, index) => {
                return (
                    <div  key={index} className="movie">
                        <img className="movie_poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" />
                        <h4>{trimTitle(movie.original_title)}</h4>
                    </div>
                );
            })}
        </ScrollMenu>
    );
}

export default PopularMovies;
