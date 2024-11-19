import { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../components/Title/Title.jsx';
import NewsCard from '../../components/NewsCard/NewsCard.jsx';
import useFetchNews from '../../hooks/UseFetchNews.js';
import Loader from '../../components/Loader/Loader.jsx';

import s from './NewsCategory.module.scss';
import SeeMoreBtn from '../../components/SeeMoreBtn/SeeMoreBtn.jsx';

export default function NewsCategory() {
  const { category } = useParams();
  const [visibleNews, setVisibleNews] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [showCount, setShowCount] = useState(5);
  const [hasMore, setHasMore] = useState(true);

  const params = useMemo(
    () => ({
      countries: 'us,gb,ca',
      languages: 'en',
      categories: category === 'latest' ? 'general' : category,
      limit: 50,
    }),
    [category]
  );

  const { data, loading, error } = useFetchNews({
    endpoint: 'http://api.mediastack.com/v1/news',
    params,
  });

  useEffect(() => {
    if (data?.data) {
      setAllNews(data.data);
      setVisibleNews(data.data.slice(0, 5));
      setHasMore(data.data.length > 5);
    }
  }, [data]);

  const loadMore = () => {
    const nextCount = showCount + 5;
    setVisibleNews(allNews.slice(0, nextCount));
    setShowCount(nextCount);
    setHasMore(nextCount < allNews.length);
  };

  return (
    <div>
      <Title title={`${category} news`} />

      {loading ? (
        <Loader />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : visibleNews.length === 0 ? (
        <div>No news found.</div>
      ) : (
        <>
          <div className={s.news_container}>
            {visibleNews.map((item, index) => (
              <NewsCard key={index} data={item} />
            ))}
          </div>

          {hasMore ? (
            <SeeMoreBtn text={'See more'} onClick={loadMore} />
          ) : (
            <p className={s.shown_message}>
              The number of news items specified in your limit is shown.
            </p>
          )}
        </>
      )}
    </div>
  );
}
