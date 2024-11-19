import Loader from '../components/Loader/Loader';
import NewsSection from '../components/NewsSection/NewsSection';
import Title from '../components/Title/Title';

export default function Home() {
  return (
    <>
      <Title title={'Stay Informed: Your Daily Dose of News'} />
      <NewsSection />
    </>
  );
}
