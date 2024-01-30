import { useState } from 'react';
import styles from './styles.module.css';
import { useEffect } from 'react';

const NewsCard = () => {
  const [allNews, setAllNews] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: uncomment in production
    // setLoading(true);
    // getAllNews();
  }, []);

  const getAllNews = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
        import.meta.env.VITE_NEWSORG_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data.articles);
        console.log(data.articles);
      })
      .catch((error) => {
        setErrors(error);
        console.error(error);
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
              src={allNews[0].urlToImage ?? '/src/assets/images/news_bg.png'}
              alt={allNews[0].title}
            />
            <div className={styles.newsData}>
              <h1>{allNews[0].title}</h1>
              <p>
                {formattedDate(allNews[0].publishedAt)} |{' '}
                {formattedTime(allNews[0].publishedAt)}
              </p>
            </div>
          </div>
          <div className={styles.newsContent}>
            <p>
              {allNews[0].content.replace(/\[\++\d+.\w+\]/gm, '')}{' '}
              <a target="_blank" rel="noreferrer" href={allNews[0].url}>
                Read more
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsCard;