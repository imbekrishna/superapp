import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CategoryPill from '../../components/CategoryPill';
import CategoryTile from '../../components/CategoryTile';
import { MOVIE_CATEGORY_KEY } from '../../utils/constants';
import styles from './styles.module.css';

const Categories = () => {
  const navigate = useNavigate();
  const [movieCategories, setMovieCategories] = useState([
    {
      id: 28,
      name: 'action',
      imageURL: '/src/assets/images/categories/action.jpg',
      altText: 'John wick chapter 2 movie poster',
      tileColor: '#FF5209',
      selected: true,
    },
    {
      id: 18,
      name: 'drama',
      imageURL: '/src/assets/images/categories/drama.jpg',
      altText: 'Shawshank redemption movie poster',
      tileColor: '#D7A4FF',
      selected: false,
    },
    {
      id: 10749,
      name: 'romance',
      imageURL: '/src/assets/images/categories/romance.jpg',
      altText: 'The fault in our stars movie poster',
      tileColor: '#148A08',
      selected: false,
    },
    {
      id: 53,
      name: 'thriller',
      imageURL: '/src/assets/images/categories/thriller.jpg',
      altText: 'Shutter island poster',
      tileColor: '#84C2FF',
      selected: false,
    },
    {
      id: 37,
      name: 'western',
      imageURL: '/src/assets/images/categories/western.jpg',
      altText: 'Indiana jones movie poster',
      tileColor: '#902500',
      selected: false,
    },
    {
      id: 27,
      name: 'horror',
      imageURL: '/src/assets/images/categories/horror.jpg',
      altText: 'Anabelle movie poster',
      tileColor: '#7358FF',
      selected: false,
    },
    {
      id: 14,
      name: 'fantasy',
      imageURL: '/src/assets/images/categories/fantasy.jpg',
      altText: 'Narnia movie poster',
      tileColor: '#FF4ADE',
      selected: false,
    },
    {
      id: 10402,
      name: 'music',
      imageURL: '/src/assets/images/categories/music.jpg',
      altText: 'Whiplash movie poster',
      tileColor: '#E61E32',
      selected: false,
    },
    {
      id: 878,
      name: 'fiction',
      imageURL: '/src/assets/images/categories/fiction.jpg',
      altText: 'Avatar movie poster',
      tileColor: '#6CD061',
      selected: false,
    },
  ]);

  useEffect(() => {
    const data = localStorage.getItem(MOVIE_CATEGORY_KEY);
    if (data) {
      const selectedCatIds = JSON.parse(data).map((c) => c.id);
      setMovieCategories((prev) => {
        return prev.map((category) =>
          selectedCatIds.includes(category.id)
            ? { ...category, selected: true }
            : category
        );
      });
    }
  }, []);

  const selectedCategories = movieCategories
    .filter((movie) => movie.selected)
    .map((movie) => ({ id: movie.id, name: movie.name }));

  const canProceed = selectedCategories.length >= 3;

  const selectCategory = (categoryId) => {
    setMovieCategories((prevSelected) =>
      prevSelected.map((movie) =>
        movie.id === categoryId
          ? { ...movie, selected: !movie.selected }
          : movie
      )
    );
  };

  const handleNextPage = () => {
    localStorage.setItem(
      MOVIE_CATEGORY_KEY,
      JSON.stringify(selectedCategories)
    );

    navigate('/home');
  };

  const categoryTiles = movieCategories.map((category) => (
    <CategoryTile key={category.id} {...category} onClick={selectCategory} />
  ));

  const selectedCategory = selectedCategories.map((category) => (
    <CategoryPill
      key={category.id}
      category={category}
      onClick={selectCategory}
    />
  ));

  return (
    <div className={styles.flexContainer}>
      <div className={styles.categoryLeft}>
        <h1>Super app</h1>
        <h2>Choose your entertainment catgory</h2>
        <div className={styles.selectedCategories}>{selectedCategory}</div>
        {!canProceed && (
          <div className={styles.warningContainer}>
            <img src="/src/assets/images/warning.png" alt="warning icon" />
            <p className="error">Minimum 3 category required</p>
          </div>
        )}
      </div>
      <div className={styles.categoryRight}>
        <div className={styles.tilesContainer}>{categoryTiles}</div>
        <button
          className={styles.formButton}
          disabled={canProceed === false}
          onClick={handleNextPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Categories;
