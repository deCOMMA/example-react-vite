import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import clsx from 'clsx';
import { Suspense, useEffect } from 'react';
import { useAppDispatch } from '@/shared/helpers/hooks/reduxHooks/reduxHppks';
import { getUserInited, userActions } from '@/entities/User';
import { useSelector } from 'react-redux';

function App() {
    const classNames = clsx('app');
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames}>
            <Suspense fallback=''>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
