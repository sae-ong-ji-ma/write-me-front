import ROUTE from '@consts/path';
import { useNavigate } from 'react-router';

type NavigationItem = {
    id: string;
    label?: string;
    path?: string;
    icon?: React.ReactNode;
};

const NAVIGATION_ITEMS = [
    {
        id: 'recent',
        label: '최근',
        path: ROUTE.ROOT,
        icon: <div className="m-[2px] size-[24px] bg-black" />,
    },
    {
        id: 'cta',
        icon: (
            <div className="relative size-[46px] rounded-[16px] bg-main-1">
                <div className="absolute h-[16px] w-[2px] rounded-[10px] bg-white absolute-center" />
                <div className="absolute h-[2px] w-[16px] rounded-[10px] bg-white absolute-center" />
            </div>
        ),
    },
    {
        id: 'browse',
        label: '둘러보기',
        path: ROUTE.BROWSE,
        icon: <div className="m-[2px] size-[24px] bg-black" />,
    },
];

const NavigationItem = ({
    active,
    label,
    icon,
    onClick,
}: {
    active: boolean;
    label?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}) => {
    return (
        <button className="flex flex-col items-center gap-[4px]" onClick={onClick}>
            {icon}
            <span className={`text-[10px] font-medium ${active ? 'text-black' : 'text-gray-400'}`}>{label}</span>
        </button>
    );
};

const NavigationBar = () => {
    const pathname = window.location.pathname;
    const navigate = useNavigate();

    return (
        <div className="fixed bottom-0 flex h-[87px] w-full items-start justify-around border-t-[0.3px] border-t-black-2 pt-[8px]">
            {NAVIGATION_ITEMS.map(({ id, icon, label, path }) => (
                <NavigationItem
                    key={id}
                    label={label}
                    active={pathname === path}
                    icon={icon}
                    onClick={() => path && navigate(path)}
                />
            ))}
        </div>
    );
};

export default NavigationBar;
