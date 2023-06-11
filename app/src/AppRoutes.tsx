import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from 'components/ui/Layout';
import Home from 'pages/Home';
import NotFound from 'components/ui/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:page" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
