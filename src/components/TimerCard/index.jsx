import { useState } from 'react';
import styles from './styles.module.css';
import TimeSetter from '../TimeSetter';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

let countdownId;

const TimerCard = () => {
  const counterBell = new Audio('/src/assets/audio/basic_bell.mp3');

  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [countDown, setCountDown] = useState('00:00:00');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const timer = (seconds) => {
    clearInterval(countdownId);

    const now = Date.now();
    const then = now + seconds * 1000;

    countdownId = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      setProgress(((seconds - secondsLeft) / seconds) * 100);

      if (secondsLeft < 0) {
        stopCountDown();
        counterBell.play();
        return;
      }

      timeLeft(secondsLeft);
    }, 1000);
  };

  const timeLeft = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    const display = `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${
      s < 10 ? '0' : ''
    }${s}`;

    setCountDown(display);
  };

  const startCountDown = () => {
    const seconds = time.hours * 60 * 60 + time.minutes * 60 + time.seconds;
    timer(seconds);
    setIsRunning(true);
  };

  const stopCountDown = () => {
    clearInterval(countdownId);
    setCountDown('00:00:00');
    setProgress(0);
    setIsRunning(false);
  };
  return (
    <div className={styles.flexContainer}>
      <div className={styles.timerClockDiv}>
        <CircularProgressbarWithChildren
          value={progress}
          strokeWidth={4}
          styles={buildStyles({
            pathColor: `#FF6A6A`,
            textColor: '#f88',
            trailColor: 'transparent',
          })}
        >
          <p className={styles.countDownText}>{countDown}</p>
        </CircularProgressbarWithChildren>
      </div>
      {/* set timer div */}
      <div className={styles.setTimerDiv}>
        <div className={styles.setTimeDiv}>
          <div className={styles.setTimeDivSection}>
            <p>Hours</p>
            <TimeSetter label="hours" value={time.hours} onClick={setTime} />
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.setTimeDivSection}>
            <p>Minutes</p>
            <TimeSetter
              label="minutes"
              value={time.minutes}
              onClick={setTime}
            />
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.setTimeDivSection}>
            <p>Seconds</p>
            <TimeSetter
              label="seconds"
              value={time.seconds}
              onClick={setTime}
            />
          </div>
        </div>
        {/* start timer button */}
        <button onClick={isRunning ? stopCountDown : startCountDown}>
          {isRunning ? 'STOP' : 'START'}
        </button>
      </div>
    </div>
  );
};

export default TimerCard;
