import s from './Home.module.scss';

import Title from '../../components/Title/Title';
import SeeMoreBtn from '../../components/SeeMoreBtn/SeeMoreBtn';
import { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import useFetchNews from '../../hooks/UseFetchNews.js';
import { useNewsSettings } from '../../context/NewsSettingsContext.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import SideNewsItem from '../../components/SideNewsItem/SideNewsItem.jsx';
import NewsSlider from '../../components/NewsSlider/NewsSlider.jsx';

const categories = [
  {
    name: 'Politics',
    desc: 'News and updates on political events and government affairs.',
  },
  {
    name: 'Business',
    desc: 'Coverage of business trends, markets, and corporate developments.',
  },
  {
    name: 'Sports',
    desc: 'Highlights and results from the world of sports and athletic competitions.',
  },
  {
    name: 'General',
    desc: 'Stay informed with the latest general news covering politics, society, and global events.',
  },
];

export default function Home() {
  const { choosenCountries, choosenLanguages } = useNewsSettings();

  const params = useMemo(() => {
    return {
      countries: choosenCountries.join(','),
      languages: choosenLanguages.join(','),
      categories: 'general',
      limit: 10,
    };
  }, [choosenCountries, choosenLanguages]);

  // const loading = false;
  // const error = false;
  // const data = {
  //   data: [
  //     {
  //       author: 'TMZ Staff',
  //       title: 'Rafael Nadal Pulls Out Of U.S. Open Over COVID-19 Concerns',
  //       description:
  //         'Rafael Nadal is officially OUT of the U.S. the tennis legend said Tuesday it\'s just too damn unsafe for him to travel to America during the COVID-19 pandemic. "The situation is very complicated worldwide," Nadal wrote in a statement. "The…',
  //       url: 'https://www.tmz.com/2020/08/04/rafael-nadal-us-open-tennis-covid-19-concerns/',
  //       source: 'TMZ.com',
  //       image:
  //         'https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg',
  //       category: 'general',
  //       language: 'en',
  //       country: 'us',
  //       published_at: '2020-08-05T05:47:24+00:00',
  //     },
  //     {
  //       author: 'TMZ Staff',
  //       title: 'Rafael Nadal Pulls Out Of U.S. Open Over COVID-19 Concerns',
  //       description:
  //         'Rafael Nadal is officially OUT of the U.S. the tennis legend said Tuesday it\'s just too damn unsafe for him to travel to America during the COVID-19 pandemic. "The situation is very complicated worldwide," Nadal wrote in a statement. "The…',
  //       url: 'https://www.tmz.com/2020/08/04/rafael-nadal-us-open-tennis-covid-19-concerns/',
  //       source: 'TMZ.com',
  //       image:
  //         'https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg',
  //       category: 'general',
  //       language: 'en',
  //       country: 'us',
  //       published_at: '2020-08-05T05:47:24+00:00',
  //     },
  //     {
  //       author: 'TMZ Staff',
  //       title: 'Rafael Nadal Pulls Out Of U.S. Open Over COVID-19 Concerns',
  //       description:
  //         'Rafael Nadal is officially OUT of the U.S. the tennis legend said Tuesday it\'s just too damn unsafe for him to travel to America during the COVID-19 pandemic. "The situation is very complicated worldwide," Nadal wrote in a statement. "The…',
  //       url: 'https://www.tmz.com/2020/08/04/rafael-nadal-us-open-tennis-covid-19-concerns/',
  //       source: 'TMZ.com',
  //       category: 'general',
  //       language: 'en',
  //       country: 'us',
  //       published_at: '2020-08-05T05:47:24+00:00',
  //     },
  //   ],
  // };

  const { data, loading, error } = useFetchNews({
    endpoint: 'http://api.mediastack.com/v1/news',
    params,
  });

  return (
    <>
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

      {!loading && !error && data.data.length === 0 && (
        <div className={s.shown_message}>No news available</div>
      )}

      {!loading && !error && (
        <>
          <section className={`${s.latest_news_section} ${s.section}`}>
            <Title title={'Stay Informed: Your Daily Dose of News'} />

            <div className={s.news_container}>
              <NewsSlider data={data.data.slice(3)} />

              <div className={s.side_news_container}>
                {data.data.slice(0, 3).map((item, index) => (
                  <SideNewsItem key={index} data={item} />
                ))}
              </div>
            </div>
            <div className={s.view_all_container}>
              <Link to='/news/latest'>
                <SeeMoreBtn text='View all latest news' />
              </Link>
            </div>
          </section>

          <section className={`${s.categories_section} ${s.section}`}>
            <Title title={'Explore news by categories'} />

            <div className={s.category_cards}>
              {categories.map((category, index) => {
                return (
                  <CategoryCard
                    key={index}
                    name={category.name}
                    desc={category.desc}
                    img={category.img}
                  />
                );
              })}
            </div>

            <div className={s.view_all_container}>
              <Link to='/categories'>
                <SeeMoreBtn text='View all categories' />
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
}
