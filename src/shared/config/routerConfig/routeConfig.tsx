import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";

export const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
} as const;

export type AppRoutesType = typeof AppRoutes[keyof typeof AppRoutes];
export type AppRouteKeys = keyof typeof AppRoutes;

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

export const RoutePath: Record<AppRoutesType, string> = {
    main: '/',
    about: '/about',
};

export const routeConfig: Record<AppRoutesType, RouteConfig> = {
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