import { Link } from 'react-router-dom';
import s from './Dropdown.module.scss';

export default function Dropdown({ url, name, dropdownLinks }) {
  return (
    <div className={s.dropdown_item}>
      <button>{name}</button>
      {dropdownLinks && (
        <div className={s.dropdown_menu}>
          {dropdownLinks.map((link, index) => (
            <Link key={index} className={s.dropdown_menu_item} to={link.url}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
