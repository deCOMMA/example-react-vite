import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export type RouteConfig = {
  path: string;
  title: string;
  element: React.ReactNode;
  authOnly?: boolean;
};

export const PublicRoutes = {
  MAIN: AppRoutes.MAIN,
  ABOUT: AppRoutes.ABOUT,
  NOT_FOUND: AppRoutes.NOT_FOUND,
} as const;

export const PrivateRoutes = {} as const;

export const RoutePath: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
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
  not_found: {
    path: RoutePath.not_found,
    title: 'Not Found',
    element: <NotFoundPage />
  }
};
