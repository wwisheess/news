import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './CategoryCard.module.scss';

export default function CategoryCard({ name, desc, img, index }) {
  const isEven = index % 2 === 0;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Link
      to={`/news/${name.toLowerCase()}`}
      className={`${s.card} ${isVisible ? s.card_visible : ''}`}
    >
      <div
        className={s.text_container}
        style={isEven ? { order: 1 } : { order: 2 }}
      >
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
      {img && (
        <div
          style={isEven ? { order: 2 } : { order: 1 }}
          className={s.img_container}
        >
          <img src={img} alt='News category image' />
        </div>
      )}
    </Link>
  );
}
