import s from './Loader.module.scss';

export default function Loader({ size = 50 }) {
  return (
    <div className={s.loader_container}>
      <div className={s.loader} style={{ width: size, height: size }}>
        <object data='/src/assets/loader.svg' type='image/svg+xml'></object>
      </div>
    </div>
  );
}
