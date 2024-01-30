import NewsCard from '../../components/NewsCard';
import NoteCard from '../../components/NoteCard';
import ProfileCard from '../../components/ProfileCard';
import TimerCard from '../../components/TimerCard';
import WeatherCard from '../../components/WeatherCard';
import styles from './styles.module.css';

const index = () => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.containerLeft}>
        <div className={styles.profileContainer}>
          <ProfileCard />
        </div>
        <div className={styles.weatherContainer}>
          <WeatherCard />
        </div>
        <div className={styles.notesContainer}>
          <NoteCard />
        </div>
        <div className={styles.timerContainer}>
          <TimerCard/>
        </div>
      </div>
      <div className={styles.containerRight}>
        <NewsCard />
      </div>
    </div>
  );
};

export default index;
