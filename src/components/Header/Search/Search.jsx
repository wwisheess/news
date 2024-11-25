import { useNavigate } from 'react-router-dom';
import s from './Search.module.scss';

export default function NavSearch() {
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const query = event.target.value.trim();
      if (query) {
        navigate(`/news/?search=${encodeURIComponent(query)}`);
        event.target.value = '';
      }
    }
  };

  return (
    <div className={s.input_wrapper}>
      <input
        id='news-search'
        className={s.search_input}
        placeholder='Search for news...'
        type='text'
        onKeyDown={handleKeyDown}
      />
      <div className={s.icon}></div>
    </div>
  );
}
