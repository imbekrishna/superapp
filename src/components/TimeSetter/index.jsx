import styles from './styles.module.css';

const TimeSetter = (props) => {
  const handleIncrement = () => {
    props.onClick((prev) => {
      let newValue;

      if (props.label === 'hours') {
        newValue = prev[props.label] + 1;
      } else {
        newValue = prev[props.label] < 59 ? prev[props.label] + 1 : 0;
      }
      return {
        ...prev,
        [props.label]: newValue,
      };
    });
  };
  const handleDecrement = () => {
    props.onClick((prev) => {
      let newValue;
      if (props.label === 'hours') {
        newValue = prev[props.label] > 0 ? prev[props.label] - 1 : 0;
      } else {
        newValue =
          prev[props.label] > 0 && prev[props.label] < 60
            ? prev[props.label] - 1
            : 59;
      }
      return {
        ...prev,
        [props.label]: newValue,
      };
    });
  };
  return (
    <div className={styles.flexContainer}>
      <div className={styles.counterContainer}>
        <img
          src="/src/assets/images/increment_timer.svg"
          alt="timer increment button"
          onClick={handleIncrement}
          role='button'
        />
        <p>{props.value < 10 ? '0' + props.value : props.value}</p>
        <img
          src="/src/assets/images/decrement_timer.svg"
          alt="timer increment button"
          onClick={handleDecrement}
          role='button'
        />
      </div>
    </div>
  );
};

export default TimeSetter;
