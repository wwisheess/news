import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
