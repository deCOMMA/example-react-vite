import clsx from 'clsx';
import cls from './Sidebar.module.css';
import { memo, useState } from 'react';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { Button } from '@/shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selector/getSidebarItems';

type SidebarProps = {
    className?: string;
};

export const Sidebar = memo(({ className, ...otherProps }: SidebarProps) => {
    const [isExpand, setIsExpand] = useState(false);

    const classNames = clsx(cls.Sidebar, className, {
        [cls.expand]: isExpand,
    });

    const onToggle = () => {
        setIsExpand(prev => !prev);
    };

    const sidebarItemList = useSelector(getSidebarItems);

    const itemList = sidebarItemList.map(item => (
        <SidebarItem key={item.path} item={item} expand={isExpand} />
    ));

    return (
        <div data-testid='sidebar' className={classNames} {...otherProps}>
            <Button
                data-testid='sidebar-toggle'
                onClick={onToggle}
                size={'large'}
                className={cls.collapseBtn}
                theme={'backgroundInv'}
                square
            >
                {isExpand ? '>' : '<'}
            </Button>
            <div className={cls.items}>{itemList}</div>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher short={isExpand} />
            </div>
        </div>
    );
});
