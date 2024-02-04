import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CategoryPill from '../../components/CategoryPill';
import CategoryTile from '../../components/CategoryTile';
import useRedirectOnNoUser from '../../hooks/useHasUser';
import { MOVIE_CATEGORY_KEY } from '../../utils/constants';
import styles from './styles.module.css';

import warningIcon from '/src/assets/images/warning.png';

import actionImage from '/src/assets/images/categories/action.jpg';
import dramaImage from '/src/assets/images/categories/drama.jpg';
import romanceImage from '/src/assets/images/categories/romance.jpg';
import thrillerImage from '/src/assets/images/categories/thriller.jpg';
import westernImage from '/src/assets/images/categories/western.jpg';
import horrorImage from '/src/assets/images/categories/horror.jpg';
import fantasyImage from '/src/assets/images/categories/fantasy.jpg';
import musicImage from '/src/assets/images/categories/music.jpg';
import fictionImage from '/src/assets/images/categories/fiction.jpg';

const Categories = () => {
  useRedirectOnNoUser();

  const navigate = useNavigate();
  const [movieCategories, setMovieCategories] = useState([
    {
      id: 28,
      name: 'action',
      imageURL: actionImage,
      altText: 'John wick chapter 2 movie poster',
      tileColor: '#FF5209',
      selected: true,
    },
    {
      id: 18,
      name: 'drama',
      imageURL: dramaImage,
      altText: 'Shawshank redemption movie poster',
      tileColor: '#D7A4FF',
      selected: false,
    },
    {
      id: 10749,
      name: 'romance',
      imageURL: romanceImage,
      altText: 'The fault in our stars movie poster',
      tileColor: '#148A08',
      selected: false,
    },
    {
      id: 53,
      name: 'thriller',
      imageURL: thrillerImage,
      altText: 'Shutter island poster',
      tileColor: '#84C2FF',
      selected: false,
    },
    {
      id: 37,
      name: 'western',
      imageURL: westernImage,
      altText: 'Indiana jones movie poster',
      tileColor: '#902500',
      selected: false,
    },
    {
      id: 27,
      name: 'horror',
      imageURL: horrorImage,
      altText: 'Anabelle movie poster',
      tileColor: '#7358FF',
      selected: false,
    },
    {
      id: 14,
      name: 'fantasy',
      imageURL: fantasyImage,
      altText: 'Narnia movie poster',
      tileColor: '#FF4ADE',
      selected: false,
    },
    {
      id: 10402,
      name: 'music',
      imageURL: musicImage,
      altText: 'Whiplash movie poster',
      tileColor: '#E61E32',
      selected: false,
    },
    {
      id: 878,
      name: 'fiction',
      imageURL: fictionImage,
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
      {/* TODO: Show category left on mobile */}
      <div className={styles.categoryLeft}>
        <h1>Super app</h1>
        <h2>Choose your entertainment catgory</h2>
        <div className={styles.selectedCategories}>{selectedCategory}</div>
        {!canProceed && (
          <div className={styles.warningContainer}>
            <img src={warningIcon} alt="warning icon" />
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
