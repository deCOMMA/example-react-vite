import clsx from 'clsx';
import cls from './ThemeSwitcher.module.css';
import { useTheme } from '@/app/providers/theme/useTheme';
import { Button } from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

type ThemeSwitcherProps = {
    className?: string;
};

export const ThemeSwitcher = memo(({ className, ...otherProps }: ThemeSwitcherProps) => {
    const { switchThem } = useTheme();

    const classNames = clsx(cls.ThemeSwitcher, className);

    const { t } = useTranslation();

    return (
        <div>
            <Button
                size='medium'
                className={classNames}
                onClick={switchThem}
                {...otherProps}
                theme={'backgroundInv'}
            >
                {t('Тема')}
            </Button>
        </div>
    );
});
