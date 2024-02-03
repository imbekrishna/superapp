import { useState } from 'react';
import styles from './styles.module.css';
import { useEffect } from 'react';

const NewsCard = () => {
  const [topNews, setTopNews] = useState({});
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // getAllNews();
  }, []);

  const getAllNews = () => {
    fetch(
      `https://api.thenewsapi.com/v1/news/top?api_token=${
        import.meta.env.VITE_THENEWS_API_KEY
      }&locale=in&limit=1`
    )
      .then((res) => res.json())
      .then((res) => {
        setTopNews(res.data[0]);
      })
      .catch((error) => {
        setErrors(error);
      })
      .finally(() => setLoading(false));
  };

  const formattedDate = (date) => {
    return new Intl.DateTimeFormat('en-IN', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).format(Date.parse(date) ?? new Date());
  };

  const formattedTime = (date) => {
    return new Intl.DateTimeFormat('en-IN', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(Date.parse(date) ?? new Date());
  };

  return (
    <div className={styles.newsContainer}>
      {loading ? (
        <p>Loading</p>
      ) : errors ? (
        <p>Error fetching news</p>
      ) : (
        <>
          <div className={styles.newsImageContainer}>
            <img
              src={topNews.image_url ?? '/src/assets/images/news_bg.png'}
              alt={topNews.title}
            />
            <div className={styles.newsData}>
              <h1>{topNews.title}</h1>
              <p>
                {formattedDate(topNews.published_at)} |{' '}
                {formattedTime(topNews.published_at)}
              </p>
            </div>
          </div>
          <div className={styles.newsContent}>
            {topNews.snippet}{' '}
            <a target="_blank" rel="noreferrer" href={topNews.url}>
              Read more
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsCard;
