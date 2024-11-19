import s from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footer_inner}>
        <span>© 2024 My News App</span>
        <span>
          Git: <a href='https://github.com/wwisheess'>wwisheess</a>
        </span>
      </div>
    </footer>
  );
}
