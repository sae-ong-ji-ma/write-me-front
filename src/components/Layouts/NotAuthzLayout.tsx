import { Outlet } from 'react-router';

function NotAuthzLayout() {
    return (
        <div className="h-real-screen w-screen">
            <Outlet />
        </div>
    );
}

export default NotAuthzLayout;
