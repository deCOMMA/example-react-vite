import { RoutePath } from '@/shared/config/routerConfig/routeConfig';
import type { FC, SVGProps } from 'react';
import AboutIcon from '@/shared/assets/icons/about.svg?react';
import MainIcon from '@/shared/assets/icons/main.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile.svg?react';
import ArticleIcon from '@/shared/assets/icons/spisok.svg?react';

export type SidebarItemsType = {
    path: string;
    text: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
};

export const SidebarItemsList: SidebarItemsType[] = [
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
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: ArticleIcon,
        authOnly: true,
    },
];
