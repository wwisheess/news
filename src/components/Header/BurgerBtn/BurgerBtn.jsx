import s from './BurgerBtn.module.scss';

export default function BurgerBtn({ onClick, isMenuOpen }) {
  return (
    <button
      className={`${s.burger_btn} ${isMenuOpen ? s.active : ''}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
