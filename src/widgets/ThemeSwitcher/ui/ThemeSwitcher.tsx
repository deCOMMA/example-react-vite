import clsx from 'clsx';
import cls from './ThemeSwitcher.module.css';
import { useTheme } from '@/app/providers/theme/useTheme';
import { Button } from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

type ThemeSwitcherProps = {
    className?: string;
};

export const ThemeSwitcher = ({ className, ...otherProps }: ThemeSwitcherProps) => {
    const { switchThem } = useTheme();

    const classNames = clsx(cls.ThemeSwitcher, className);

    const { t } = useTranslation();

    return (
        <div>
            <Button size='medium' className={classNames} onClick={switchThem} {...otherProps}>
                {t('Тема')}
            </Button>
        </div>
    );
};
