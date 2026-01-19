import { Route, Routes } from 'react-router-dom';
import { Suspense, useCallback } from 'react';
import { LoaderPage } from '@/widgets/LoaderPage/ui/LoaderPage';
import { routeConfig, type AppRoutesProps } from '@/shared/config/routerConfig/routeConfig';
import { ReqireAyth } from './RequireAuth';

export const AppRouter = () => {

    const renderWithWrapper = useCallback((route: AppRoutesProps) => {

        return (
            <Route
                key={route.path}
                element={<div className='page-wrapper'>{
                    route.authOnly
                        ?
                        <ReqireAyth>{route.element}</ReqireAyth>
                        :
                        route.element}</div>
                }
                path={route.path}
            />
        )
    }, [])

    return (
        <Suspense fallback={<LoaderPage />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};
