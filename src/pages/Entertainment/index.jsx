import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Entertainment = () => {
  return (
    <div className={styles.flexContainer}>
      <nav className={styles.navBar}>
        <h2>
          <Link to="/home" className={styles.headerLink}>Super app</Link>
        </h2>
        <img
          className={styles.avatar}
          src="/src/assets/images/profile_picture.png"
          alt="profile picture"
        />
      </nav>
      <h1>Entertainment according to your choice</h1>
      <main className={styles.mainContainer}>
        <section className={styles.movieSection}>
          <h3>Action</h3>
          <div className={styles.movieList}>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
          </div>
        </section>
        <section className={styles.movieSection}>
          <h3>Action</h3>
          <div className={styles.movieList}>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
          </div>
        </section>
        <section className={styles.movieSection}>
          <h3>Action</h3>
          <div className={styles.movieList}>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
            <div className={styles.movie}></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Entertainment;
