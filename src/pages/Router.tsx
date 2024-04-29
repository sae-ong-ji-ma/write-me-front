import { Route, Routes } from 'react-router-dom';
import ROUTE from '@libs/constants/path';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./HomePage'));

export const Router = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path={ROUTE.ROOT} element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};
