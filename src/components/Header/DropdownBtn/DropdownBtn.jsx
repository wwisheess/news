import s from './DropdownBtn.module.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

export default function DropdownBtn({ name, dropdownLinks }) {
  return (
    <div className={s.dropdown_item}>
      <button>{name}</button>
      {dropdownLinks && <DropdownMenu links={dropdownLinks} />}
    </div>
  );
}
