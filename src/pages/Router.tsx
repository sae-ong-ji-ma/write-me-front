import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ROUTE from '@consts/path';
import { MainLayout } from '@components/Layouts';

const NotFoundPage = lazy(() => import('./NotFoundPage'));
const HomePage = lazy(() => import('./HomePage'));

export const Router = () => {
    return (
        <Suspense fallback={<NotFoundPage />}>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={ROUTE.ROOT} element={<HomePage />} />
                    <Route path={ROUTE.BROWSE} element={<HomePage />} />
                </Route>
            </Routes>
        </Suspense>
    );
};
