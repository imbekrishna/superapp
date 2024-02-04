import React from 'react'
import { useNavigate } from 'react-router-dom';
import NewsCard from '../../components/NewsCard';
import NoteCard from '../../components/NoteCard';
import TimerCard from '../../components/TimerCard';
import styles from './styles.module.css';

import { lazy, Suspense } from 'react';
import useRedirectOnNoUser from '../../hooks/useHasUser';

const Homepage = () => {
  console.log('homepage reached')
  const ProfileCard = lazy(() => import('../../components/ProfileCard'));
  const WeatherCard = lazy(() => import('../../components/WeatherCard'));

  useRedirectOnNoUser()

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/entertainment');
  };

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.containerLeft}>
          <div className={styles.profileContainer}>
            <Suspense fallback={<p>Loading...</p>}>
              <ProfileCard />
            </Suspense>
          </div>
          <div className={styles.weatherContainer}>
            {' '}
            <Suspense fallback={<p>Loading...</p>}>
              <WeatherCard />
            </Suspense>
          </div>
          <div className={styles.notesContainer}>
            <NoteCard />
          </div>
          <div className={styles.timerContainer}>
            <TimerCard />
          </div>
        </div>
        <div className={styles.containerRight}>
          <NewsCard />
        </div>
      </div>
      <button onClick={handleClick}>Browse</button>
    </div>
  );
};

export default Homepage;
