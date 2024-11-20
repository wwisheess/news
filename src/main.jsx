import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home.jsx';
import NewsCategory from './pages/NewsCategory/NewsCategory.jsx';

import './index.css';
import AllCategories from './pages/AllCategories/AllCategories.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='news/:category' index element={<NewsCategory />} />
        <Route path='categories' element={<AllCategories />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
