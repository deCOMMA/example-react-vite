import clsx from 'clsx';
import cls from './Loader.module.css';
import { memo } from 'react';

type LoaderProps = {
    className?: string;
};

export const Loader = memo(({ className, ...otherProps }: LoaderProps) => {
    const classNames = clsx(cls.Loader, className);

    return <span className={classNames} {...otherProps}></span>;
});
