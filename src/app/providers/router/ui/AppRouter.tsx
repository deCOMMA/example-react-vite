import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from '@/shared/config/routerConfig/routeConfig';
import { LoaderPage } from '@/widgets/LoaderPage/ui/LoaderPage';

export const AppRouter = () => {
    return (
        <Suspense fallback={<LoaderPage />}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
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
