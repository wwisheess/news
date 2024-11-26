import { useMemo, useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import Title from '../../components/Title/Title.jsx';
import NewsCard from '../../components/NewsCard/NewsCard.jsx';
import useFetchNews from '../../hooks/UseFetchNews.js';
import Loader from '../../components/Loader/Loader.jsx';
import s from './News.module.scss';
import SeeMoreBtn from '../../components/SeeMoreBtn/SeeMoreBtn.jsx';
import { useNewsSettings } from '../../context/NewsSettingsContext.jsx';

export default function News() {
  const [searchParams] = useSearchParams();
  const { category } = useParams();

  const searchQuery = searchParams.get('search');
  const isSearch = Boolean(searchQuery);

  const [visibleNews, setVisibleNews] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [showCount, setShowCount] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  const { choosenCountries, choosenLanguages } = useNewsSettings();

  const params = useMemo(() => {
    const baseParams = {
      countries: choosenCountries.join(','),
      languages: choosenLanguages.join(','),
      limit: 100,
    };

    if (isSearch) {
      return {
        ...baseParams,
        keywords: searchQuery,
      };
    }

    return {
      ...baseParams,
      categories: category === 'latest' ? 'general' : category,
    };
  }, [isSearch, searchQuery, category, choosenCountries, choosenLanguages]);

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
    <section className={s.news}>
      {loading && <Loader />}

      {error && (
        <div className={s.shown_message}>
          {error.status === 429
            ? 'Error: API request limit exceeded.'
            : error.status === 404
            ? 'No news found for the selected category.'
            : error.status === 401
            ? 'Error: API key is not valid.'
            : `An error occurred: ${error.message}`}
        </div>
      )}

      {!loading && !error && visibleNews.length === 0 && (
        <div className={s.shown_message}>
          {isSearch
            ? `Sorry, we couldn't find any news matching your search: "${searchQuery}"`
            : `No news available :(`}
        </div>
      )}

      {!loading && !error && visibleNews.length > 0 && (
        <>
          {/* <span
            className={s.countries_languages}
          >{`News from: ${choosenCountries.join(
            ','
          )}, Languages: ${choosenLanguages.join(',')}`}</span> */}

          <Title
            title={
              isSearch
                ? `Search results for "${searchQuery}"`
                : `${category} news`
            }
          />

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

          {hasMore ? (
            <div className={s.more_btn_container}>
              <SeeMoreBtn text='See more' onClick={loadMore} />
            </div>
          ) : (
            <p className={s.shown_message}>
              The maximum number of news is displayed.
            </p>
          )}
        </>
      )}
    </section>
  );
}
