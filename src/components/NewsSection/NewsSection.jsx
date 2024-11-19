import s from './NewsSection.module.scss';

export default function NewsSection() {
  return (
    <div className={s.section_container}>
      <div className={s.news_card_big}></div>
      <div className={s.small_cards_container}>
        <div className={s.news_card_small}></div>
        <div className={s.news_card_small}></div>
        <div className={s.news_card_small}></div>
      </div>
    </div>
  );
}
