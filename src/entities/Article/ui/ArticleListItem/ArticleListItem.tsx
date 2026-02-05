import clsx from "clsx"
import cls from './ArticleListItem.module.css'
import { useTranslation } from 'react-i18next'
import { ArticleBlockType, ArticleView, type Article, type ArticleBlockText } from "../../model/types/article";
import { Text } from "@/shared/ui/Text/Text";
import { Icon } from "@/shared/ui/Icon/Icon";
import EyeIcon from '@/shared/assets/icons/eye.svg?react';
import { Card } from "@/shared/ui/Card/Card";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button } from "@/shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/shared/config/routerConfig/routeConfig";

type ArticleListItemProps = {
    className?: string;
    article: Article;
    view?: ArticleView;
}

export const ArticleListItem = (props: ArticleListItemProps) => {

    const { article, className, view } = props;
    const { t } = useTranslation('article');
    const classNames = clsx(
        cls.ArticleListItem,
        className,
        cls[String(view)],
    );

    const viewBlock = (
        <>
            <Text text={String(article.views)} className={cls.view} />
            <Icon Svg={EyeIcon} />
        </>
    )

    let textBlock;
    if (view === ArticleView.LINE) {
        textBlock = article.blocks.find(
            block => block.type == ArticleBlockType.TEXT
        ) as ArticleBlockText
    }

    const navigate = useNavigate()
    const onOpenArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article.id}`)
    }, [navigate, article.id])

    if (view === ArticleView.BLOCK) {
        return (
            <div className={classNames}>
                <Card onClick={onOpenArticle}>
                    <div className={cls.imgeWrapper}>
                        <img src={article.img} className={cls.img} alt={article.title}></img>
                        <Text text={article.createdAt} className={cls.data} />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Text text={article.type.join(', ')} className={cls.types} />
                        {viewBlock}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames}>
            <Card>
                <div className={cls.header}>
                    <Avatar size={30} src={article.userId.avatar} />
                    <Text text={article.userId.username} className={cls.username} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <Text title={article.title} size="l" className={cls.title} />
                <Text text={article.type.join(', ')} className={cls.types} />

                <img src={article.img} alt={`Изображение статьи ${article.title}`} className={cls.img} />
                {textBlock &&
                    <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                }
                <div className={cls.footer}>
                    <Button onClick={onOpenArticle} theme="outline" size="medium">
                        {t('Читать далее...')}
                    </Button>
                    {viewBlock}
                </div>
            </Card>
        </div>
    )

}