import s from './NewsItem.module.scss';

import { Link } from 'react-router-dom';

export default function NewsItem({ data }) {
  console.log(data);
  return (
    <div>
      <Link to={`/news/${data.id}`}>{data.title}</Link> {data.author}{' '}
      {data.publish_date}
    </div>
  );
}
