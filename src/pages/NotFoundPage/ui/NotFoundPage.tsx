import clsx from 'clsx';
import cls from './NotFoundPage.module.css';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page/Page';

type NotFoundPageProps = {
    className?: string;
};

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const classNames = clsx(cls.NotFoundPage, className);

    const { t } = useTranslation();

    return (
        <Page>
            <section className={classNames}>
                {t('Страница не найдена')}
            </section>
        </Page>
    )
};
