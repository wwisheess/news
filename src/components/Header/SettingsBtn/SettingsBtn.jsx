import s from './SettingsBtn.module.scss';

export default function SettingsBtn({ onClick }) {
  return (
    <>
      <button onClick={onClick} className={s.settings_btn}></button>
    </>
  );
}
