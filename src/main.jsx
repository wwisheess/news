import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import NewsCategory from './pages/NewsCategory.jsx';
import NewsDetail from './pages/NewsDetail';
import { ApiKeyProvider } from './hooks/ApiKeyContext.jsx';

import './index.css';
import Categories from './pages/Categories/Categories.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <ApiKeyProvider>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='news/:category' index element={<NewsCategory />} />
          <Route path='news/:id' element={<NewsDetail />} />
          <Route path='categories' element={<Categories />} />
        </Route>
      </Routes>
    </ApiKeyProvider>
  </BrowserRouter>
);
