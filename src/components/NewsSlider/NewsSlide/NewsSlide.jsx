import s from './NewsSlide.module.scss';
import { useNewsHelpers } from '../../../hooks/UseNewsHelpers';

export default function NewsSlide({ data }) {
  const { decodedDescription, formattedDate, decodedTitle } =
    useNewsHelpers(data);

  return (
    <div className={s.slide}>
      {data.image && (
        <div className={s.img_container}>
          <img src={data.image} />
        </div>
      )}
      <div className={s.text_container}>
        <div className={s.source_date_container}>
          <span>Source: {data.source} </span>
          <span className={s.publish_date}>{formattedDate}</span>
        </div>
        <h2>{decodedTitle}</h2>
        <p>{decodedDescription}</p>

        {data.author && <span className={s.author}>Author: {data.author}</span>}
      </div>
    </div>
  );
}
