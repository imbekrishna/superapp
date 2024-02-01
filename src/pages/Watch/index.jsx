import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import { useState } from 'react';

const Watch = () => {
  const posterUrl = 'https://image.tmdb.org/t/p/w1280';
  const [isPlaying, setIsPlaying] = useState(false);

  const { state } = useLocation();

  console.log(state);

  const style = {
    backgroundImage: `url(${posterUrl}${state.movie.backdrop_path})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    backgroundSize: 'cover',
    minHeight: '100vh',
    height: '100vh',
  };

  return (
    <div style={style}>
      <div className={styles.detailSection}>
        <div className={styles.movieDetail}>
          <h1>{state.movie.title}</h1>
          <p className={styles.movieOverview}>{state.movie.overview}</p>
          <div className={styles.metaData}>
            <span>
              <img
                width="40px"
                src="/src/assets/images/rating_icon.svg"
                alt="yellow start with 5 ends"
              />
              {state.movie.vote_average}
            </span>
            <span>{state.movie.release_date}</span>
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
      <div
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
      </div>
    </div>
  );
};

export default Watch;
