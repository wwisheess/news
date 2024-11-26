import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home.jsx';
import News from './pages/News/News.jsx';
import Categories from './pages/Categories/Categories.jsx';

import { NewsSettingsProvider } from './context/NewsSettingsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NewsSettingsProvider>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='news' element={<News />} />
          <Route path='news/:category' element={<News />} />
          <Route path='categories' element={<Categories />} />
        </Route>
      </Routes>
    </NewsSettingsProvider>
  </BrowserRouter>
);
