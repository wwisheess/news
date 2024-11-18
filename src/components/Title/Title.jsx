import s from './Title.module.scss';

export default function Title({ title }) {
  return <h1 className={s.title}>{title}</h1>;
}
