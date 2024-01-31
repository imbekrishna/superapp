/* eslint-disable react-refresh/only-export-components */
import { useRef, useState, memo, Suspense } from 'react';
import styles from './styles.module.css';

const MovieList = (props) => {
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

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div
        className={styles.movieList}
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseAway}
        onMouseLeave={handleMouseAway}
        onMouseMove={handleMouseMove}
      >
        {props.children}
      </div>
    </Suspense>
  );
};

const LoadingSpinner = () => {
  return <div>Loading...</div>;
};

export default memo(MovieList);
