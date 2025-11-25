import clsx from 'clsx';
import cls from './Navbar.module.css';

type NavbarProps = {
    className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
    const classNames = clsx(cls.Navbar, className);

    //const { t } = useTranslation();

    return (
        <div className={classNames}>
            <div className={cls.links}></div>
        </div>
    );
};
