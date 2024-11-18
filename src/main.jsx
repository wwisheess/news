import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import { ApiKeyProvider } from './hooks/ApiKeyContext.jsx';

import './index.css';

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
          <Route path='newsList' index element={<NewsList />} />
          <Route path='news/:id' element={<NewsDetail />} />
        </Route>
      </Routes>
    </ApiKeyProvider>
  </BrowserRouter>
);
