import s from './Button.module.scss';

export default function Button({ onClick, text, color }) {
  const formattedColorName = color ? color.toLowerCase().trim() : '';

  return (
    <button
      className={`${s.btn} ${
        formattedColorName === 'red'
          ? s.red
          : formattedColorName === 'green'
          ? s.green
          : ''
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
