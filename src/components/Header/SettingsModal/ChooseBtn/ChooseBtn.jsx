import s from './ChooseBtn.module.scss';

export default function ChooseBtn({ text, onClick, isActive }) {
  return (
    <button
      className={`${s.btn} ${isActive ? s.active : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
