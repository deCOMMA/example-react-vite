import clsx from 'clsx';
import cls from './Loader.module.css';

type LoaderProps = {
    className?: string;
};

export const Loader = ({ className, ...otherProps }: LoaderProps) => {
    const classNames = clsx(cls.Loader, className);

    return <span className={classNames} {...otherProps}></span>;
};
