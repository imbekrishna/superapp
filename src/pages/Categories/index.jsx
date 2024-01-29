import styles from './styles.module.css';

const Categories = () => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.categoryLeft}>
        <h1>Super app</h1>
        <h2>Choose your entertainment catgory</h2>
        <div className={styles.selectedCategories}>
          <p className={styles.categoryPill}>
            <span>Romance</span>{' '}
            <button className={styles.pillButton}>x</button>{' '}
          </p>
          <p className={styles.categoryPill}>
            <span>Music</span> <button className={styles.pillButton}>x</button>{' '}
          </p>
          <p className={styles.categoryPill}>
            <span>Action</span> <button className={styles.pillButton}>x</button>{' '}
          </p>
        </div>
        <p>Minimum 3 category required</p>
      </div>
      <div className={styles.categoryRight}>Right</div>
    </div>
  );
};

export default Categories;
