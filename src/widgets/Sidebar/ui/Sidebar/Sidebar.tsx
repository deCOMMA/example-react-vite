import clsx from 'clsx';
import cls from './Sidebar.module.css';
import { useMemo, useState } from 'react';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { Button } from '@/shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';


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

    const itemList = useMemo(() => {
        return (
            SidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    expand={isExpand} />
            ))
        )
    }, [isExpand])

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
                {isExpand ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {itemList}
            </div>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher short={isExpand} />
            </div>
        </div>
    );
};
