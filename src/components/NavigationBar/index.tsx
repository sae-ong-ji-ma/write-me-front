import { useNavigate } from 'react-router';
import RecentIcon from '@assets/svg/recent-icon.svg?react';
import SearchIcon from '@assets/svg/search-icon.svg?react';
import ROUTE from '@consts/path';

type NavigationItem = {
    id: string;
    label?: string;
    path?: string;
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        id: 'recent',
        label: '최근',
        path: ROUTE.ROOT,
        Icon: RecentIcon,
    },
    {
        id: 'cta',
        path: ROUTE.UPLOAD_IMAGE,
        Icon: () => (
            <div className="relative size-[2.875rem] rounded-[1.125rem] bg-WRTE-Blue-400">
                <div className="absolute h-4 w-[.125rem] rounded-[.625rem] bg-white absolute-center" />
                <div className="absolute h-[.125rem] w-4 rounded-[.625rem] bg-white absolute-center" />
            </div>
        ),
    },
    {
        id: 'browse',
        label: '둘러보기',
        path: ROUTE.BROWSE,
        Icon: SearchIcon,
    },
];

const NavigationItem = ({
    active,
    label,
    Icon,
    onClick,
}: {
    active: boolean;
    label?: string;
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
}) => {
    return (
        <button
            className={`flex w-[2.1875rem] flex-col items-center gap-[.25rem] ${active ? 'text-WRTE-Black' : 'text-WRTE-Light-Gray-300'}`}
            onClick={onClick}
        >
            {Icon ? <Icon /> : null}
            <span className={`text-[.625rem] font-medium`}>{label}</span>
        </button>
    );
};

const NavigationBar = () => {
    const pathname = window.location.pathname;
    const navigate = useNavigate();

    return (
        <div className="fixed bottom-0 z-10 flex h-[5.4375rem] w-full items-start justify-around border-t-[.0187rem] border-t-black-2 bg-WRTE-WHITE pt-[.75rem]">
            {NAVIGATION_ITEMS.map(({ id, Icon, label, path }) => (
                <NavigationItem
                    key={id}
                    label={label}
                    active={pathname === path}
                    Icon={Icon}
                    onClick={() => path && navigate(path)}
                />
            ))}
        </div>
    );
};

export default NavigationBar;
