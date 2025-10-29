import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './ErrorFallback';

type AppErrorBoundaryProps = {
    children?: React.ReactNode;
}

export const AppErrorBoundary = ({ children }: AppErrorBoundaryProps) => {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}>
            {children}
        </ErrorBoundary>
    );
}
