import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from '../components/NewsItem/NewsItem';
import { useApiKey } from '../hooks/ApiKeyContext';

async function fetchNews(key) {
  try {
    const response = await axios.get(
      'https://api.apilayer.com/world_news/search-news',
      {
        params: {
          text: 'text',
          'source-countries': 'us',
          number: 10,
        },
        headers: {
          apikey: key,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default function NewsList() {
  const API_KEY = useApiKey();
  const [news, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      const data = await fetchNews(API_KEY);
      setNewsData(data.news);
      setLoading(false);
    }

    loadNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!news || news.length === 0) {
    return <div>No news found.</div>;
  }

  return (
    <div>
      <h1>News</h1>
      <ul>
        {news.map((item) => (
          <NewsItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
}
