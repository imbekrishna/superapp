import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const WeatherCard = () => {
  const [date, setDate] = useState(new Date());
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          fetchWeatherData(`${latitude},${longitude}`);
        },
        () => fetchWeatherData('auto:ip')
      );
    } else {
      fetchWeatherData('auto:ip');
    }
  }, []);

  const fetchWeatherData = (queryParams) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&q=${queryParams}&aqi=no`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeather(res);
        console.log(res);
      })
      .catch(console.error);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(date);

  const formattedTime = new Intl.DateTimeFormat('en-IN', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);

  return (
    <div className={styles.weatherCard}>
      <div className={styles.dateTime}>
        <p>{formattedDate}</p>
        <p>{formattedTime}</p>
      </div>
      {weather === null ? (
        <div className={styles.weatherData}>
          <div className={styles.weatherSection}>Loading</div>
        </div>
      ) : (
        <div className={styles.weatherData}>
          <div className={styles.weatherSection}>
            <img
              className={styles.weatherIcon}
              src={weather?.current.condition.icon}
              alt={weather?.current.condition.text}
            />
            <p>{weather?.current.condition.text}</p>
          </div>
          <span className={styles.sectionDivider}></span>
          <div className={styles.weatherSection}>
            <p className={styles.temperature}>{weather?.current.temp_c}°C</p>
            <div className={styles.dataStatsSection}>
              <img
                src="/src/assets/images/weather/pressure.svg"
                alt="pressure icon"
              />
              <div className={styles.dataDetails}>
                <p>{weather?.current.pressure_mb} mbar</p>
                <p>Pressure</p>
              </div>
            </div>
          </div>
          <span className={styles.sectionDivider}></span>
          <div className={styles.weatherSection}>
            <div className={styles.dataStatsSection}>
              <img src="/src/assets/images/weather/wind.svg" alt="wind icon" />
              <div className={styles.dataDetails}>
                <p>{weather?.current.wind_kph} km/h</p>
                <p>Wind</p>
              </div>
            </div>
            <div className={styles.dataStatsSection}>
              <img
                src="/src/assets/images/weather/humidity.svg"
                alt="humidity icon"
              />
              <div className={styles.dataDetails}>
                <p>{weather?.current.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
