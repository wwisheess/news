import { useState, useEffect } from 'react';
import s from './NewsSlider.module.scss';
import NewsSlide from './NewsSlide/NewsSlide';

export default function NewsSlider({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [data.length]);

  const handleBulletClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={s.slider_container}>
      <div className={s.slider}>
        <div
          className={s.slider_inner}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {data.map((item, index) => (
            <NewsSlide key={index} data={item} />
          ))}
        </div>
      </div>

      <div className={s.bullets}>
        {data.map((_, index) => (
          <button
            key={index}
            className={`${s.bullet} ${index === currentSlide ? s.active : ''}`}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
