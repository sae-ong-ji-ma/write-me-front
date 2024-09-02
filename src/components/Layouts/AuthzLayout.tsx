import { Outlet } from 'react-router';

function AuthzLayout() {
    return (
        <div className="h-real-screen w-screen">
            <Outlet />
        </div>
    );
}

export default AuthzLayout;
