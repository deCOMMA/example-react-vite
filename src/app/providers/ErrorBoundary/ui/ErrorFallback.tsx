import { Button } from '@/shared/ui/Button/Button';
import type { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import cls from './ErrorFallback.module.css';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    const { t } = useTranslation();

    return (
        <div className={cls.ErrorFallback}>
            <div className={cls.large}>{t('Что-то пошло не так')}</div>
            <div>
                <p>{error.message}</p>
            </div>
            <div>
                <Button size='large' onClick={resetErrorBoundary} style={{ margin: '10px' }}>
                    {t('Попробовать снова')}
                </Button>
                <Button
                    size='large'
                    onClick={() => (window.location.href = '/')}
                    style={{ margin: '10px' }}
                >
                    {t('На главную')}
                </Button>
            </div>
        </div>
    );
};
