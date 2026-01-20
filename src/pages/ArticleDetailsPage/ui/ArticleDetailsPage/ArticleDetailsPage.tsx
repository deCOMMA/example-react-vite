import clsx from "clsx"
import cls from './ArticleDetailsPage.module.css'
import { memo } from "react";
import { ArticleDetails } from "@/entities/Article";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

type ArticleDetailsPageProps = {
    className?: string;
}

const ArticleDetailsPage = ({ className, }: ArticleDetailsPageProps) => {

    const classNames = clsx(
        cls.ArticleDetailsPage,
        className
    );
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article')
    if (!id) {
        return (
            <div>
                {t('Article not found')}
            </div>
        )
    }

    return (
        <div className={classNames}>
            <ArticleDetails id={id} />
        </div>
    )
}

export default memo(ArticleDetailsPage);