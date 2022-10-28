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

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
