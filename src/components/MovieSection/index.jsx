import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import MovieList from '../MovieList';

const MovieSection = (props) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w780/';

  const [allMovies, setAllMovies] = useState({ page: '', results: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getMoviesByGenres(props.genre.id);
  }, [props.genre.id]);

  const getMoviesByGenres = (genre) => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setAllMovies(json);
      })
      .catch((err) => console.error('error:' + err))
      .finally(setIsLoading(false));
  };

  const movieList = allMovies.results.map((movie) => (
    <div
      key={movie.id}
      className={styles.movie}
      style={{ backgroundImage: `url(${posterUrl}/${movie.backdrop_path})` }}
    >
      <p className={styles.movieName}>{movie.title}</p>
    </div>
  ));

  return (
    <section className={styles.movieSection}>
      <h3>{props.genre.name}</h3>
      <MovieList>{isLoading ? <p>Loading</p> : movieList}</MovieList>
    </section>
  );
};

export default MovieSection;
