import { getAuthUserData } from '@/entities/User';
import { createSelector } from '@reduxjs/toolkit';
import type { SidebarItemsType } from '../types/sidebarItemsType';
import { RoutePath } from '@/shared/config/routerConfig/routeConfig';
import AboutIcon from '@/shared/assets/icons/about.svg?react';
import MainIcon from '@/shared/assets/icons/main.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile.svg?react';
import ArticleIcon from '@/shared/assets/icons/spisok.svg?react';

export const getSidebarItems = createSelector(getAuthUserData, userData => {
    const sidebarItemList: SidebarItemsType[] = [
        {
            path: RoutePath.main,
            text: 'Главная',
            Icon: MainIcon,
        },
        {
            path: RoutePath.about,
            text: 'О сайте',
            Icon: AboutIcon,
        },
    ];
    if (userData) {
        sidebarItemList.push(
            {
                path: RoutePath.profile + userData.id,
                text: 'Профиль',
                Icon: ProfileIcon,
            },
            {
                path: RoutePath.articles,
                text: 'Статьи',
                Icon: ArticleIcon,
            }
        );
    }
    return sidebarItemList;
});
