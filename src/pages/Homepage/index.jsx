import { useNavigate } from 'react-router-dom';
import NewsCard from '../../components/NewsCard';
import NoteCard from '../../components/NoteCard';
import TimerCard from '../../components/TimerCard';
import styles from './styles.module.css';

import { PROFILE_DATA_KEY } from '../../utils/constants';
import { useEffect, lazy, Suspense } from 'react';

const Homepage = () => {
  const ProfileCard = lazy(() => import('../../components/ProfileCard'));
  const WeatherCard = lazy(() => import('../../components/WeatherCard'));
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(PROFILE_DATA_KEY));
    if (!user) {
      navigate('/register');
      return;
    }

    const userDetails = ['name', 'username', 'email', 'mobile', 'terms'];
    const validUser = userDetails.every(
      (detail) =>
        Object.prototype.hasOwnProperty.call(user, detail) &&
        user[detail] !== null
    );

    if (!validUser) {
      navigate('/register');
      return;
    }
  }, [navigate]);

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
