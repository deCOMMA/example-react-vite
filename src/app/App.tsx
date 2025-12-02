import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import clsx from 'clsx';
import { Suspense } from 'react';

function App() {
    const { theme } = useTheme();
    const classNames = clsx('app', theme);

    return (
        <div className={classNames}>
            <Suspense fallback=''>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
