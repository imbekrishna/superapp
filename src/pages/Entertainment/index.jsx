import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import movieDb from '../../utils/movie_db.json';
import MovieSection from '../../components/MovieSection';

const Entertainment = () => {
  const allMovies = movieDb.movies;

  const getMoviesByGenres = () => {
    const url =
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=drama%2Caction%2Cthriller%2Cromance';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGRkZWUwNTMyOWI3YzBkMmNkZDcyMmJkYzdlYzMwZiIsInN1YiI6IjY1YmEzNGNmMzBmNzljMDE4M2FiZmUzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HsevY8V6OCmXclfei6XTj1XCub4sQYJp254kDu_9mho',
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error('error:' + err));
  };

  const actionMovies = allMovies.filter((movie) =>
    movie.genres.includes('Action')
  );
  const dramaMovies = allMovies.filter((movie) =>
    movie.genres.includes('Drama')
  );
  const thrillerMovies = allMovies.filter((movie) =>
    movie.genres.includes('Thriller')
  );
  const romanceMovies = allMovies.filter((movie) =>
    movie.genres.includes('Romance')
  );

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
      <main className={styles.mainContainer}>
        <MovieSection name="Action" movies={actionMovies} />
        <MovieSection name="Thriller" movies={thrillerMovies} />
        <MovieSection name="Drama" movies={dramaMovies} />
        <MovieSection name="Romance" movies={romanceMovies} />
      </main>
    </div>
  );
};

export default Entertainment;
