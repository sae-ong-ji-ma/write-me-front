import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTE from '@consts/path';
import { MainLayout } from '@components/Layouts';
import LoginPage from './LoginPage';
import SplashPage from './SplashPage';
const NotFoundPage = lazy(() => import('./NotFoundPage'));
const HomePage = lazy(() => import('./HomePage'));
const BrowsingPage = lazy(() => import('./BrowsingPage'));
const UploadImagePage = lazy(() => import('./UploadImagePage'));

export const Router = () => {
    return (
        <Suspense fallback={<NotFoundPage />}>
            <Routes>
                <Route path={ROUTE.SPLASH} element={<SplashPage />} />
                <Route path={ROUTE.LOGIN} element={<LoginPage />} />
                <Route element={<MainLayout />}>
                    <Route path={ROUTE.ROOT} element={<HomePage />} />
                    <Route path={ROUTE.BROWSE} element={<BrowsingPage />} />
                </Route>
                <Route path={ROUTE.UPLOAD_IMAGE} element={<UploadImagePage />} />
            </Routes>
        </Suspense>
    );
};
