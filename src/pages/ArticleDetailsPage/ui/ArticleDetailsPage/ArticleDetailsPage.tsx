import clsx from "clsx"
import cls from './ArticleDetailsPage.module.css'
import { useTranslation } from "react-i18next";
import { memo } from "react";

type ArticleDetailsPageProps = {
    className?: string;
}

const ArticleDetailsPage = ({
    className,
}: ArticleDetailsPageProps) => {

    const { t } = useTranslation('article')
    const classNames = clsx(
        cls.ArticleDetailsPage,
        className
    );

    return (
        <div className={classNames}>
            {t('Article Details Page')}
        </div>
    )
}

export default memo(ArticleDetailsPage);