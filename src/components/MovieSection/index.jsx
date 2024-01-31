import { useRef, useState } from 'react';
import styles from './styles.module.css';

const MovieSection = (props) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w780/';

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const ref = useRef(null);
  const slider = ref.current;

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseAway = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    scroll(e);
  };

  const scroll = (e) => {
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  };

  const movieList = props.movies.map((movie) => (
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
      <h3>{props.name}</h3>
      <div
        className={styles.movieList}
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseAway}
        onMouseLeave={handleMouseAway}
        onMouseMove={handleMouseMove}
      >
        {movieList}
      </div>
    </section>
  );
};

export default MovieSection;
