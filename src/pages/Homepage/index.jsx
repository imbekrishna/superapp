import ProfileCard from '../../components/ProfileCard';
import WeatherCard from '../../components/WeatherCard';
import NewsCard from '../../components/NewsCard';
import styles from './styles.module.css';

const index = () => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.containerLeft}>
        <ProfileCard />
        <WeatherCard />
      </div>
      <div className={styles.containerRight}>
        <NewsCard />
        </div>
    </div>
  );
};

export default index;
