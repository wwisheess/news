import { Link } from 'react-router-dom';

import s from './Header.module.scss';

export default function Header() {
  return (
    <nav>
      <Link to='/'>Home</Link>|<Link to='/newsList'>News List</Link>
    </nav>
  );
}
