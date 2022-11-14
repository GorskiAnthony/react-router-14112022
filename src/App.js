import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeDef from './components/HomeDef';
import HtmlDef from './components/HtmlDef';
import CssDef from './components/CssDef';
import JsDef from './components/JsDef';
import Layout from './pages/Layout';

import './style.css';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeDef />} />
        <Route path="/html" element={<HtmlDef />} />
        <Route path="/css" element={<CssDef />} />
        <Route path="/js" element={<JsDef />} />
        <Route path="*" element={<Layout>Error 404</Layout>} />
      </Routes>
    </div>
  );
}
