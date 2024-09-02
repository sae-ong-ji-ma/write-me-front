import { Outlet } from 'react-router';
import Header from '@components/Header';
import NavigationBar from '@components/NavigationBar';

function MainLayout() {
    return (
        <div className="flex h-real-screen w-screen flex-col pb-[5.4375rem] pt-10">
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
            <NavigationBar />
        </div>
    );
}

export default MainLayout;
