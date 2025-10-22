import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export type RouteConfig = {
    path: string;
    title: string;
    element: React.ReactNode;
    authOnly?: boolean;
}

export const PublicRoutes = {
    MAIN: AppRoutes.MAIN,
    ABOUT: AppRoutes.ABOUT,
} as const;

export const PrivateRoutes = {
} as const;

export const RoutePath: Record<AppRoutes, string> = {
    main: '/',
    about: '/about',
};

export const routeConfig: Record<AppRoutes, RouteConfig> = {
    main: {
        path: RoutePath.main,
        title: "Main",
        element: <MainPage />
    },
    about: {
        path: RoutePath.about,
        title: "About",
        element: <AboutPage />
    }
};