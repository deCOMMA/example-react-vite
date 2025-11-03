import clsx from 'clsx';
import cls from './NotFoundPage.module.css';
import { useTranslation } from 'react-i18next';

type NotFoundPageProps = {
    className?: string;
};

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const classNames = clsx(cls.NotFoundPage, className);

    const { t } = useTranslation();

    return <div className={classNames}>{t('Страница не найдена')}</div>;
};
