import clsx from "clsx"
import cls from './ArricleList.module.css'
import { useTranslation } from 'react-i18next'
import { type Article } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleView } from "../../model/types/article";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

type ArticleListProps = {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = (props: ArticleListProps) => {

    const { articles, className, isLoading, view = ArticleView.BLOCK } = props;

    const { t } = useTranslation()
    const classNames = clsx(
        cls.ArticleList,
        className,
        cls[String(view)],
    );

    if (isLoading) {
        return (
            <div className={classNames}>
                {new Array(view == ArticleView.BLOCK ? 9 : 3)
                    .fill(0)
                    .map((block, index) => (
                        <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
                    ))}
            </div>
        )
    }

    const renderArticles = (article: Article) => {
        return (
            <>
                <ArticleListItem
                    article={article}
                    view={view}
                    className={cls.card}
                    key={article.id}
                />
            </>
        )
    }

    return (
        <>
            <>
                {t('ArticleList')}
            </>
            <div className={classNames}>
                {articles.length > 0
                    ?
                    articles.map(renderArticles)
                    :
                    null
                }
            </div>
        </>
    )
}