import { AboutPage } from '@/pages/AboutPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticlePage } from '@/pages/ArticlesPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import ProfilePage from '@/pages/ProfilePage/ui/ProfilePage';
import type { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    title?: string;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',

    NOT_FOUND = 'not_found',
}

export type RouteConfig = {
    path: string;
    title?: string;
    element: React.ReactNode;
    authOnly?: boolean;
};

export const RoutePath: Record<AppRoutes, string> = {
    main: '/',
    about: '/about',
    profile: '/profile/', // + id
    articles: '/articles',
    article_details: '/articles/', // + id

    not_found: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    main: {
        path: RoutePath.main,
        title: 'Main',
        element: <MainPage />,
    },
    about: {
        path: RoutePath.about,
        title: 'About',
        element: <AboutPage />,
    },
    profile: {
        path: `${RoutePath.profile}:id`,
        title: 'Profile',
        element: <ProfilePage />,
        authOnly: true,
    },
    articles: {
        path: RoutePath.articles,
        title: 'Articles',
        element: <ArticlePage />,
        authOnly: true,
    },
    article_details: {
        path: `${RoutePath.article_details}:id`,
        title: 'Article Details',
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    not_found: {
        path: RoutePath.not_found,
        title: 'Not Found',
        element: <NotFoundPage />,
    },
};
