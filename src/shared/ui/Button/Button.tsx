import clsx from "clsx"
import cls from './Button.module.css'
import type { ButtonHTMLAttributes } from "react";



type ButtonProps = {
    className?: string;
    children?: React.ReactNode;
    theme?: 'clear' | 'def';
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

export const Button = ({
    className,
    children,
    theme = 'def',
    ...otherProps
}: ButtonProps) => {

    const classNames = clsx(
        cls.Button,
        cls[theme],
        className
    );

    return (
        <button
            className={classNames}
            {...otherProps}
        >
            {children}
        </button>
    )
}