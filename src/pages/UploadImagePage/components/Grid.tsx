import { twMerge } from 'tailwind-merge';

interface IGridItemProps {
    className?: string;
    children?: React.ReactNode;
}

export const GridItem = ({ className, children }: IGridItemProps) => {
    return <div className={twMerge('aspect-square', className)}>{children}</div>;
};

interface IGridProps {
    children: React.ReactNode;
    className?: string;
}

export const Grid = ({ children, className }: IGridProps) => {
    return <div className={twMerge('mx-4 mt-[.625rem] grid grid-cols-3 gap-[.625rem]', className)}>{children}</div>;
};
