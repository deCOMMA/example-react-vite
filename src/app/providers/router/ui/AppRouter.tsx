import { Route, Routes } from 'react-router-dom';
import { Suspense, useMemo } from 'react';
import { routeConfig } from '@/shared/config/routerConfig/routeConfig';
import { LoaderPage } from '@/widgets/LoaderPage/ui/LoaderPage';
import { useSelector } from 'react-redux';
import { getAuthUserData } from '@/entities/User';

export const AppRouter = () => {

    const isAuth = useSelector(getAuthUserData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            if (route.authOnly && !isAuth) {
                return false;
            }
            return true;
        })
    }, [isAuth])

    return (
        <Suspense fallback={<LoaderPage />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        element={<div className='page-wrapper'>{element}</div>}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
