import { Link } from 'react-router-dom';

import s from './DropdownMenu.module.scss';

export default function DropdownMenu({ links }) {
  return (
    <div className={s.dropdown_menu}>
      {links.map((link, index) => (
        <Link key={index} to={link.url}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}
