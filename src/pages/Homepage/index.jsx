import ProfileCard from '../../components/ProfileCard';
import WeatherCard from '../../components/WeatherCard';
import styles from './styles.module.css';

const index = () => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.containerLeft}>
        <ProfileCard />
        <WeatherCard />
      </div>
      <div className={styles.containerRight}>News Data</div>
    </div>
  );
};

export default index;
