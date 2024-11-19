import s from './Search.module.scss';

export default function NavSearch() {
  return (
    <div className={s.input_wrapper}>
      <input
        id='news-search'
        className={s.search_input}
        placeholder='Search for news...'
        type='text'
      />
    </div>
  );
}
