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
  const [showCount, setShowCount] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  const params = useMemo(
    () => ({
      countries: 'us,gb,ca',
      languages: 'en',
      categories: category === 'latest' ? 'general' : category,
      limit: 100,
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
      setVisibleNews(data.data.slice(0, showCount));
      setHasMore(data.data.length > showCount);
    }
  }, [data]);

  const loadMore = () => {
    const nextCount = showCount + 6;
    setVisibleNews(allNews.slice(0, nextCount));
    setShowCount(nextCount);
    setHasMore(nextCount < allNews.length);
  };

  return (
    <>
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
            {visibleNews.map((_, index) =>
              index % 2 === 0 ? (
                <div key={index} className={s.news_row}>
                  <NewsCard data={visibleNews[index]} />
                  {visibleNews[index + 1] && (
                    <NewsCard data={visibleNews[index + 1]} />
                  )}
                </div>
              ) : null
            )}
          </div>

          {/* <div className={s.news_container}>
            {visibleNews.map((item, index) => (
              <NewsCard key={index} data={item} />
            ))}
          </div> */}

          {hasMore ? (
            <div className={s.more_btn_container}>
              <SeeMoreBtn text={'See more'} onClick={loadMore} />
            </div>
          ) : (
            <p className={s.shown_message}>
              The number of news items specified in your limit is shown.
            </p>
          )}
        </>
      )}
    </>
  );
}
