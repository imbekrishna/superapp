import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MovieSection from '../../components/MovieSection';
import useRedirectOnNoUser from '../../hooks/useHasUser';
import { MOVIE_CATEGORY_KEY } from '../../utils/constants';
import styles from './styles.module.css';

import profilePicture from '/src/assets/images/profile_picture.png';

const Entertainment = () => {
  const userGenres = JSON.parse(localStorage.getItem(MOVIE_CATEGORY_KEY));
  const navigate = useNavigate();

  useRedirectOnNoUser();

  useEffect(() => {
    if (!userGenres) {
      navigate('/home');
      return;
    }
  }, [navigate, userGenres]);

  const movieSections = userGenres?.map((genre) => {
    return <MovieSection key={genre.id} genre={genre} />;
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
            src={profilePicture}
            alt="profile picture"
          />
        </nav>
        <h1>Entertainment according to your choice</h1>
      </header>

      <main className={styles.mainContainer}>{movieSections}</main>
    </div>
  );
};

export default Entertainment;
