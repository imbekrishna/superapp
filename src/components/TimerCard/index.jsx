import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import TimeSetter from '../TimeSetter';
import styles from './styles.module.css';

import bellAudio from '/src/assets/audio/basic_bell.mp3';

const TimerCard = () => {
  const counterBell = new Audio(bellAudio);

  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [totalSeconds, setTotalSeconds] = useState(0);

  const [key, setKey] = useState(0);

  useEffect(() => {
    setTotalSeconds(time.hours * 60 * 60 + time.minutes * 60 + time.seconds);
  }, [time]);

  const [isRunning, setIsRunning] = useState(false);

  const timeLeft = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    const display = `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${
      s < 10 ? '0' : ''
    }${s}`;

    return display;
  };

  const startCountDown = () => {
    setIsRunning(true);
  };

  const handleOnComplete = () => {
    setIsRunning(false);
  };

  return (
    <div className={styles.flexContainer}>
      <div className={styles.timerClockDiv}>
        <CountdownCircleTimer
          key={key}
          isPlaying={isRunning}
          duration={totalSeconds}
          colors="#ff6a6a"
          trailColor="0,0,0,0"
          strokeWidth={5}
          isGrowing={true}
          rotation="counterclockwise"
          onComplete={() => {
            handleOnComplete();
            counterBell.play();
            setKey((prev) => prev + 1);
          }}
        >
          {({ remainingTime }) => (
            <p className={styles.countDownText}>{timeLeft(remainingTime)}</p>
          )}
        </CountdownCircleTimer>
      </div>
      {/* set timer div */}
      <div className={styles.setTimerDiv}>
        <div className={styles.setTimeDiv}>
          <div className={styles.setTimeDivSection}>
            <p>HH</p>
            <TimeSetter label="hours" value={time.hours} onClick={setTime} />
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.setTimeDivSection}>
            <p>MM</p>
            <TimeSetter
              label="minutes"
              value={time.minutes}
              onClick={setTime}
            />
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.setTimeDivSection}>
            <p>SS</p>
            <TimeSetter
              label="seconds"
              value={time.seconds}
              onClick={setTime}
            />
          </div>
        </div>
        {/* start timer button */}
        <button
          disabled={totalSeconds <= 0}
          onClick={isRunning ? handleOnComplete : startCountDown}
        >
          {isRunning ? 'STOP' : 'START'}
        </button>
      </div>
    </div>
  );
};

export default TimerCard;
