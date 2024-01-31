import styles from './styles.module.css';

const CategoryTile = (props) => {
  const style = {
    backgroundColor: props.tileColor,
  };
  return (
    <div
      className={`${styles.categoryTile} ${props.selected && styles.selected}`}
      style={style}
      onClick={() => props.onClick(props.id)}
    >
      <p>{props.name}</p>
      <img src={props.imageURL} alt={props.altText} />
    </div>
  );
};

export default CategoryTile;
