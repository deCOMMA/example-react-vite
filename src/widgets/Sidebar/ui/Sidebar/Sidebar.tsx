import clsx from 'clsx';
import cls from './Sidebar.module.css';
import { useState } from 'react';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { Button } from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routerConfig/routeConfig';
import AboutIcon from '@/shared/assets/icons/about.svg?react';
import MainIcon from '@/shared/assets/icons/main.svg?react';

type SidebarProps = {
    className?: string;
};

export const Sidebar = ({ className, ...otherProps }: SidebarProps) => {
    const [isExpand, setIsExpand] = useState(false);

    const classNames = clsx(cls.Sidebar, className, {
        [cls.expand]: isExpand,
    });

    const onToggle = () => {
        setIsExpand(prev => !prev);
    };

    const { t } = useTranslation();

    return (
        <div data-testid='sidebar' className={classNames} {...otherProps}>
            <Button
                data-testid='sidebar-toggle'
                onClick={onToggle}
                size={'large'}
                className={cls.collapseBtn}
                theme={'backgroundInv'}
                sqare
            >
                {isExpand ? t(' > ') : t(' < ')}
            </Button>
            <div className={cls.items}>
                <AppLink size='medium' className={cls.item} to={RoutePath.main}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Главная')}</span>
                </AppLink>
                <AppLink size='medium' className={cls.item} to={RoutePath.about}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('О нас')}</span>
                </AppLink>
            </div>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher short={isExpand} />
            </div>
        </div>
    );
};
