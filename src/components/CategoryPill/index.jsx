import styles from './styles.module.css';

const CategoryPill = (props) => {
  return (
    <p className={styles.categoryPill}>
      <span>{props.category}</span>{' '}
      <button
        className={styles.pillButton}
        onClick={() => props.onClick(props.category)}
      >
        x
      </button>{' '}
    </p>
  );
};

export default CategoryPill;
