import styles from './styles.module.css';


const TimeSetter = (props) => {
  const handleIncrement = () => {
    props.onClick((prev) => {
      return { ...prev, [props.label]: props.value + 1 };
    });
  };
  const handleDecrement = () => {
    props.onClick((prev) => {
      return { ...prev, [props.label]: props.value > 0 ? props.value - 1 : 0 };
    });
  };
  return (
    <div className={styles.flexContainer}>
      <div className={styles.counterContainer}>
        <img
          src="/src/assets/images/increment_timer.svg"
          alt="timer increment button"
          onClick={handleIncrement}
        />
        <p>
          {props.value < 10 ? '0' + props.value : props.value}
        </p>
        <img
          src="/src/assets/images/decrement_timer.svg"
          alt="timer increment button"
          onClick={handleDecrement}
        />
      </div>
    </div>
  );
};

export default TimeSetter;
