import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

import './styles/App.scss';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
