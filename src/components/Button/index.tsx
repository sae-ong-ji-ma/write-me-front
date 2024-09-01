import { twMerge } from 'tailwind-merge';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

function Button({ children, className, ...props }: Props) {
    return (
        <button
            className={twMerge(
                'rounded-[.5rem] font-apple text-base font-semibold bg-[#0066ff] text-WRTE-WHITE disabled:bg-[#80b2ff] disabled:text-opacity-50',
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
