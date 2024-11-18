import { Link } from 'react-router-dom';
import s from './NavLink.module.scss';

export default function NavLink({ url, name }) {
  return (
    <Link className={s.nav_link} to={url}>
      {name}
    </Link>
  );
}
