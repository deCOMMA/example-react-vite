import clsx from 'clsx';
import cls from './AppLink.module.css';
import { Link, type LinkProps } from 'react-router-dom';
import { memo, type ReactNode } from 'react';

type AppLinkProps = {
    className?: string;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    children?: ReactNode;
} & Omit<LinkProps, 'className'>;

export const AppLink = memo(({
    className,
    to,
    variant = 'primary',
    size = 'medium',
    children,
    ...otherProps
}: AppLinkProps) => {
    const classNames = clsx(cls.AppLink, cls[size], cls[variant], className);

    return (
        <Link className={classNames} to={to} {...otherProps}>
            {children}
        </Link>
    );
});
