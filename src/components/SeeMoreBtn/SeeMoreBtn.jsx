import s from './SeeMoreBtn.module.scss';

export default function SeeMoreBtn({ text, onClick }) {
  return (
    <button className={s.btn} onClick={onClick}>
      {text}
    </button>
  );
}
