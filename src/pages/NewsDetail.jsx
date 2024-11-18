import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function NewsDetail() {
  const { id } = useParams();

  if (!newsItem) {
    return (
      <div>
        <h1>News not found</h1>
        <Link to='/newsList'>Back to News List</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.content}</p>
      <Link to='/newsList'>Back to News List</Link>
    </div>
  );
}
