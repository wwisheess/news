import { Link } from 'react-router-dom';
import s from './CategoryCard.module.scss';

export default function CategoryCard({ name, desc, img, index }) {
  const isEven = index % 2 === 0;

  return (
    <Link to={`/news/${name.toLowerCase()}`} className={s.card}>
      <div
        className={s.text_container}
        style={isEven ? { order: 1 } : { order: 2 }}
      >
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
      <div
        style={isEven ? { order: 2 } : { order: 1 }}
        className={s.img_container}
      >
        <img src={img} alt='News category image' />
      </div>
    </Link>
  );
}
