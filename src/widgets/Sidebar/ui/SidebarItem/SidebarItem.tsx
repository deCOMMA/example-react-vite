import cls from './SidebarItem.module.css'
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import type { SidebarItemsType } from '../../model/items';
import { memo } from 'react';
import clsx from 'clsx';

type SidebarItemProps = {
    item: SidebarItemsType;
    expand: boolean;
}

export const SidebarItem = memo(({ item, expand }: SidebarItemProps) => {

    const { t } = useTranslation()
    const classnames = clsx(cls.item, { [cls.expand]: expand, })
    return (
        <AppLink size='medium' className={classnames} to={item.path}>
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    )
})