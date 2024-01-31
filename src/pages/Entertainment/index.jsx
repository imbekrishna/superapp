import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import MovieSection from '../../components/MovieSection';
import { MOVIE_CATEGORY_KEY } from '../../utils/constants';
import { useEffect, useState } from 'react';

const Entertainment = () => {
  const userGenres = JSON.parse(localStorage.getItem(MOVIE_CATEGORY_KEY));
  const userGenresQueryStr = userGenres.map((genre) => genre.name).join(',');
  const [movieList, setMovieList] = useState({ page: '', results: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getMoviesByGenres(userGenresQueryStr);
  }, [userGenresQueryStr]);

  const getMoviesByGenres = (genres) => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genres}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json);
      })
      .catch((err) => console.error('error:' + err))
      .finally(setIsLoading(false));
  };

  const filterMovieByGenre = (list, genreId) => {
    return list.filter((movie) => movie.genre_ids.includes(genreId));
  };

  const movieSections = userGenres.map((genre) => {
    const genreMovies = filterMovieByGenre(movieList.results, genre.id);
    return (
      <MovieSection key={genre.id} name={genre.name} movies={genreMovies} />
    );
  });

  return (
    <div className={styles.flexContainer}>
      <header>
        <nav className={styles.navBar}>
          <h2>
            <Link to="/home" className={styles.headerLink}>
              Super app
            </Link>
          </h2>
          <img
            className={styles.avatar}
            src="/src/assets/images/profile_picture.png"
            alt="profile picture"
          />
        </nav>
        <h1>Entertainment according to your choice</h1>
      </header>

      {isLoading ? (
        <p>Loading</p>
      ) : (
        <main className={styles.mainContainer}>{movieSections}</main>
      )}
    </div>
  );
};

export default Entertainment;
