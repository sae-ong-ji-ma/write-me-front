import Header from '@components/Header';
import NavigationBar from '@components/NavigationBar';
import { Outlet } from 'react-router';

function MainLayout() {
    return (
        <div className={`h-real-screen w-screen bg-main-bg`}>
            <Header />
            <Outlet />
            <NavigationBar />
        </div>
    );
}

export default MainLayout;
