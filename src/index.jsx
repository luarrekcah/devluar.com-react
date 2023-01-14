import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.css';
import "react-multi-carousel/lib/styles.css";

import reportWebVitals from './utils/vercel/reportWebVitals';
import { sendToVercelAnalytics } from './utils/vercel/vitals';

import Home from './pages/Home/index.jsx';
import NotFound from './pages/NotFound';
import Store from './pages/Store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Store />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
