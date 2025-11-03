import clsx from 'clsx';
import cls from './Navbar.module.css';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

type NavbarProps = {
    className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
    const classNames = clsx(cls.Navbar, className);

    const { t } = useTranslation();

    return (
        <div className={classNames}>
            <div className={cls.links}>
                <AppLink size='large' className={cls.links} to={'/'}>
                    {t('Главная')}
                </AppLink>
                <AppLink size='large' className={cls.links} to={'/about'}>
                    {t('О нас')}
                </AppLink>
            </div>
        </div>
    );
};
