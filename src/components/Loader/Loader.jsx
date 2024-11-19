import s from './Loader.module.scss';

export default function Loader({ size = 50 }) {
  return (
    <div className={s.loader_container}>
      <div className={s.loader} style={{ width: size, height: size }}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
          <radialGradient
            id='a12'
            cx='.66'
            fx='.66'
            cy='.3125'
            fy='.3125'
            gradientTransform='scale(1.5)'
          >
            <stop offset='0' stopColor='#ACACAC'></stop>
            <stop offset='.3' stopColor='#ACACAC' stopOpacity='.9'></stop>
            <stop offset='.6' stopColor='#ACACAC' stopOpacity='.6'></stop>
            <stop offset='.8' stopColor='#ACACAC' stopOpacity='.3'></stop>
            <stop offset='1' stopColor='#ACACAC' stopOpacity='0'></stop>
          </radialGradient>
          <circle
            transformorigin='center'
            fill='none'
            stroke='url(#a12)'
            strokeWidth='17'
            strokeLinecap='round'
            strokeDasharray='200 1000'
            strokeDashoffset='0'
            cx='100'
            cy='100'
            r='70'
          >
            <animateTransform
              type='rotate'
              attributeName='transform'
              calcMode='spline'
              dur='0.7'
              values='360;0'
              keyTimes='0;1'
              keySplines='0 0 1 1'
              repeatCount='indefinite'
            ></animateTransform>
          </circle>
          <circle
            transformorigin='center'
            fill='none'
            opacity='.2'
            stroke='#ACACAC'
            strokeWidth='17'
            strokeLinecap='round'
            cx='100'
            cy='100'
            r='70'
          ></circle>
        </svg>
      </div>
    </div>
  );
}
