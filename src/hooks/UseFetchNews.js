import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'b0e9814c99f7c4f6872a76534587fd19';

export default function useFetchNews({ endpoint, params }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(endpoint, {
          params: { ...params, access_key: API_KEY },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint, params]);

  return { data, loading, error };
}
