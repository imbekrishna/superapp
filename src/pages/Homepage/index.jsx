import ProfileCard from '../../components/ProfileCard';
import WeatherCard from '../../components/WeatherCard';
import NewsCard from '../../components/NewsCard';
import NoteCard from '../../components/NoteCard';
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
      </div>
      <div className={styles.containerRight}>
        <NewsCard />
      </div>
    </div>
  );
};

export default index;
