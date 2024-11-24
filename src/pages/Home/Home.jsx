import s from './Home.module.scss';

import Title from '../../components/Title/Title';
import SeeMoreBtn from '../../components/SeeMoreBtn/SeeMoreBtn';
import { Link } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import HomeSlider from '../../components/HomeSlider/HomeSlider';

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

      <div className={s.section_container}>
        <HomeSlider />
        <div className={s.small_cards_container}>
          <div className={s.news_card_small}></div>
          <div className={s.news_card_small}></div>
          <div className={s.news_card_small}></div>
        </div>
      </div>

      <section className={s.section}>
        <h2>Explore News by Categories</h2>

        <div className={s.category_cards}>
          {categories.map((category, index) => {
            return (
              <CategoryCard
                key={index}
                name={category.name}
                desc={category.desc}
                img={category.img}
              />
            );
          })}
        </div>

        <div className={s.view_all_container}>
          <Link to='/categories'>
            <SeeMoreBtn text='View all news categories' />
          </Link>
        </div>
      </section>
    </>
  );
}
