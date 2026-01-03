import '@/app/styles/index.css';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/theme/ThemeProvider.tsx';
import './shared/config/i18n/i18n.ts';
import { AppErrorBoundary } from './app/providers/ErrorBoundary/index.ts';
import { StoreProvider } from './app/providers/Store/index.ts';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StoreProvider>
            <AppErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </AppErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
);
