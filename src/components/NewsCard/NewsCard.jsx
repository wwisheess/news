import s from './NewsCard.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NewsCard({ data }) {
  const decodeHtmlEntities = (text) => {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(text, 'text/html')
      .documentElement.textContent;
    return decodedString;
  };

  return (
    <div className={s.news_card}>
      <div className={s.news_text_container}>
        <div className={s.text_container_inner}>
          <div className={s.source_date_container}>
            <span>Source: {data.source} </span>
            <span>{data.published_at.slice(0, 10)}</span>
          </div>
          <h2>{decodeHtmlEntities(data.title)}</h2>
          <p>{decodeHtmlEntities(data.description)}</p>

          {data.author ? (
            <span className={s.author}>Author: {data.author}</span>
          ) : (
            ''
          )}
        </div>

        <Link to={`/`}>Read more...</Link>
      </div>

      {data.image ? (
        <div className={s.news_img_container}>
          {data.image ? <img src={data.image} alt='News image' /> : ''}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
