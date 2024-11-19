import s from './SeeMoreBtn.module.scss';

export default function SeeMoreBtn({ text, onClick }) {
  return (
    <div className={s.btn_container}>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
