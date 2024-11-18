import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Title from '../../components/Title/Title';
import s from './Categories.module.scss';

const categories = [
  {
    name: 'Politics',
    desc: 'News and updates on political events and government affairs.',
    img: 'https://images.unsplash.com/photo-1534293230397-c067fc201ab8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Business',
    desc: 'Coverage of business trends, markets, and corporate developments.',
    img: 'https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Sports',
    desc: 'Highlights and results from the world of sports and athletic competitions.',
    img: 'https://plus.unsplash.com/premium_photo-1664537975122-9c598d85816e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Education',
    desc: 'News related to schools, universities, and educational advancements.',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Tech',
    desc: 'Updates on the latest tech innovations, gadgets, and digital trends.',
    img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Health',
    desc: 'Information on health, medicine, and wellness topics.',
    img: 'https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Entertainment',
    desc: 'Breaking news about celebrities, movies, and the entertainment industry.',
    img: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Science',
    desc: 'Discoveries, studies, and breakthroughs in the world of science.',
    img: 'https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Environment',
    desc: 'Stories about climate change, sustainability, and ecological preservation.',
    img: 'https://plus.unsplash.com/premium_photo-1664637952509-c2627f44406b?q=80&w=2575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Crime',
    desc: 'Reports on criminal cases, investigations, and public safety.',
    img: 'https://plus.unsplash.com/premium_photo-1673543763736-f74c4b14a007?q=80&w=2637&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Travel',
    desc: 'Insights into travel destinations, tips, and global tourism trends.',
    img: 'https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'World',
    desc: 'Global news and events from around the world.',
    img: 'https://plus.unsplash.com/premium_photo-1681488098851-e3913f3b1908?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Categories() {
  return (
    <div className={s.container}>
      <Title title='All news categories' />
      <div className={s.category_cards}>
        {categories.map((category, index) => {
          return (
            <CategoryCard
              index={index}
              key={category.name}
              name={category.name}
              desc={category.desc}
              img={category.img}
            />
          );
        })}
      </div>
    </div>
  );
}
