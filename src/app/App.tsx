import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import clsx from 'clsx';
import { Suspense, useEffect } from 'react';
import { useAppDispatch } from './providers/Store/config/hooks';
import { userActions } from '@/entities/User';

function App() {
    const classNames = clsx('app');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
