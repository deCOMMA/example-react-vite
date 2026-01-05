import clsx from 'clsx';
import cls from './Button.module.css';
import { memo, type ButtonHTMLAttributes } from 'react';

type ButtonProps = {
    className?: string;
    children?: React.ReactNode;
    theme?: 'clear' | 'clearInv' | 'def' | 'background' | 'backgroundInv';
    size?: 'small' | 'medium' | 'large' | 'xl';
    square?: boolean;
    disabled?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

export const Button = memo(({
    className,
    children,
    theme = 'def',
    size = 'medium',
    square = false,
    disabled,
    ...otherProps
}: ButtonProps) => {
    const classNames = clsx(
        cls.Button,
        cls[theme],
        cls[size],
        className,
        square && cls.sqare,
        disabled && cls.disable
    );

    return (
        <button disabled={disabled} className={classNames} {...otherProps}>
            {children}
        </button>
    );
});
