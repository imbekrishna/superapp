import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import { useState } from 'react';
import { CATEGORIES } from '../../utils/constants';


import ratingIcon from '/src/assets/images/rating_icon.svg';

const Watch = () => {
  const posterUrl = 'https://image.tmdb.org/t/p/w1280';
  const [isPlaying, setIsPlaying] = useState(false);

  const { state } = useLocation();

  const release_year = new Date(state.movie.release_date).getFullYear();
  const category_list = CATEGORIES.filter((category) =>
    state.movie.genre_ids.includes(category.id)
  )
    .map((i) => i.name)
    .join(' | ');

  const style = {
    backgroundImage: `url(${posterUrl}${state.movie.backdrop_path})`,
  };

  return (
    <div className={styles.bgContainer} style={style}>
      {isPlaying ? (
        <iframe
          className={styles.videoPlayer}
          src={
            isPlaying && `${import.meta.env.VITE_MOVIE_DB_URL}${state.movie.id}`
          }
          allowFullScreen
          frameBorder="0"
        ></iframe>
      ) : (
        <div className={styles.detailSection}>
          <div className={styles.movieDetail}>
            <h1>{state.movie.title}</h1>
            <p className={styles.movieOverview}>{state.movie.overview}</p>
            <div className={styles.metaData}>
              <span>
                <img
                  width="30px"
                  src={ratingIcon}
                  alt="yellow start with 5 ends"
                />
                {Math.round(state.movie.vote_average * 100) / 100}
              </span>
              <span>{release_year}</span>
              <span>{category_list}</span>
            </div>
            <button
              className={styles.watchNow}
              onClick={() => setIsPlaying(true)}
            >
              Watch Now
            </button>
          </div>
          <div className={styles.moviePoster}>
            <img src={`${posterUrl}${state.movie.poster_path}`} alt="" />
          </div>
        </div>
      )}
      {/* <div
        style={isPlaying ? { display: 'block' } : { display: 'none' }}
        className={styles.frameContainer}
        onClick={() => setIsPlaying(false)}
      >
        <iframe
          className={styles.videoPlayer}
          src={
            isPlaying && `${import.meta.env.VITE_MOVIE_DB_URL}${state.movie.id}`
          }
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div> */}
    </div>
  );
};

export default Watch;
