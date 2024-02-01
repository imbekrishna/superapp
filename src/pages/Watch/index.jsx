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
    backgroundSize: 'cover',
    minHeight: '100vh',
    height: '100vh',
  };

  const videoPlayerStyle = {
    top: "50%",
    left: "50%",
  };

  return (
    <div style={style}>
      <div className={styles.detailSection}>
        <div className={styles.movieDetail}>
          <h1>{state.movie.title}</h1>
          <p className={styles.movieOverview}>{state.movie.overview}</p>
          <div className={styles.metaData}>
            <span>{state.movie.vote_average}</span>
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
      <iframe
        className={styles.videoPlayer}
        style={isPlaying ? videoPlayerStyle : {}}
        src={`${import.meta.env.VITE_MOVIE_DB_URL}${state.movie.id}`}
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Watch;
