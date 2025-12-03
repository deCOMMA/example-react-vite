import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import clsx from 'clsx';
import { Suspense } from 'react';

function App() {
    const classNames = clsx('app');

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
