import { Route, Routes } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { routeConfig } from '@/shared/config/routerConfig/routeConfig';
import { LoaderPage } from '@/widgets/LoaderPage/ui/LoaderPage';

export const AppRouter = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Искусственная задержка 3 секунды
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return <LoaderPage />;
  }

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