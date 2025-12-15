import clsx from 'clsx';
import cls from './Button.module.css';
import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
    className?: string;
    children?: React.ReactNode;
    theme?: 'clear' | 'clearInv' | 'def' | 'background' | 'backgroundInv';
    size?: 'small' | 'medium' | 'large' | 'xl';
    sqare?: boolean;
    disabled?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

export const Button = ({
    className,
    children,
    theme = 'def',
    size = 'medium',
    sqare = false,
    disabled,
    ...otherProps
}: ButtonProps) => {
    const classNames = clsx(
        cls.Button,
        cls[theme],
        cls[size],
        className,
        sqare && cls.sqare,
        disabled && cls.disable
    );

    return (
        <button disabled={disabled} className={classNames} {...otherProps}>
            {children}
        </button>
    );
};
