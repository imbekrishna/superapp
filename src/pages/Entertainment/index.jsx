import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import movieDb from '../../utils/movie_db.json';
import MovieSection from '../../components/MovieSection';

const Entertainment = () => {
    const allMovies = movieDb.movies;
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
