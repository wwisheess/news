import s from './Home.module.scss';

import NewsSection from '../../components/NewsSection/NewsSection';
import Title from '../../components/Title/Title';
import SeeMoreBtn from '../../components/SeeMoreBtn/SeeMoreBtn';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Politics',
    desc: 'News and updates on political events and government affairs.',
  },
  {
    name: 'Business',
    desc: 'Coverage of business trends, markets, and corporate developments.',
  },
  {
    name: 'Sports',
    desc: 'Highlights and results from the world of sports and athletic competitions.',
  },
  {
    name: 'General',
    desc: 'Stay informed with the latest general news covering politics, society, and global events.',
  },
];

export default function Home() {
  return (
    <>
      <Title title={'Stay Informed: Your Daily Dose of News'} />
      <NewsSection />

      <div className={s.view_all_container}>
        <Link to='/categories'>
          <SeeMoreBtn text='View all categories' />
        </Link>
      </div>
    </>
  );
}
