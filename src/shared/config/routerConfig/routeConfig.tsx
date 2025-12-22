import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import ProfilePage from '@/pages/ProfilePage/ui/ProfilePage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',

    NOT_FOUND = 'not_found',
}

export type RouteConfig = {
    path: string;
    title: string;
    element: React.ReactNode;
    authOnly?: boolean;
};

// export const PublicRoutes = {
//     MAIN: AppRoutes.MAIN,
//     ABOUT: AppRoutes.ABOUT,
//     NOT_FOUND: AppRoutes.NOT_FOUND,
// } as const;

// export const PrivateRoutes = {} as const;

export const RoutePath: Record<AppRoutes, string> = {
    main: '/',
    about: '/about',
    profile: '/profile',

    not_found: '*',
};

export const routeConfig: Record<AppRoutes, RouteConfig> = {
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
        path: RoutePath.profile,
        title: 'Profile',
        element: <ProfilePage />
    },
    not_found: {
        path: RoutePath.not_found,
        title: 'Not Found',
        element: <NotFoundPage />,
    },
};
