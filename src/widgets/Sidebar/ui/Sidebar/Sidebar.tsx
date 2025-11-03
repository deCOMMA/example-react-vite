import clsx from 'clsx';
import cls from './Sidebar.module.css';
import { useState } from 'react';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { Button } from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

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
            <Button data-testid='sidebar-toggle' onClick={onToggle}>
                {t('Свернуть')}
            </Button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
