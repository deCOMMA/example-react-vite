import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme/useTheme';
import './styles/index.css';
import { Navbar } from '@/widgets/Navbar';
import clsx from 'clsx';
import { Suspense, useState } from 'react';
import { Modal } from '@/shared/ui/Modal/ui/Modal';

function App() {
    const { theme } = useTheme();
    const classNames = clsx('app', theme);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={classNames}>
            <Suspense fallback=''>
                <Navbar />
                <button onClick={() => setIsOpen(true)}>модальное око</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    модальное окно
                </Modal>
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
