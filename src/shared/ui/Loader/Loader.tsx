import clsx from 'clsx';
import cls from './Loader.module.css';

type LoaderProps = {
    className?: string;
    children?: React.ReactNode;
};

export const Loader = ({ className, children, ...otherProps }: LoaderProps) => {
    const classNames = clsx(cls.Loader, className);

    return (
        <span className={classNames} {...otherProps}>
            {children}
        </span>
    );
};
