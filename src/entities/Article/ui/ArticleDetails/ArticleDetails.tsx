import clsx from "clsx"
import cls from './ArticleDetails.module.css'
import { DynamicModuleFolder, type ReducerList } from "@/shared/helpers/components/DynamicModuleFolder/DynamicModuleFolder";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { memo, useCallback, useEffect } from "react";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useAppDispatch } from "@/app/providers/Store/config/hooks";
import { useSelector } from "react-redux";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from "../../model/selectors/articleDetails";
import { Text } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import EyeIcon from '@/shared/assets/icons/eye.svg?react'
import CalendarIcon from '@/shared/assets/icons/clarity_date-line.svg?react'
import { Icon } from "@/shared/ui/Icon/Icon";
import { ArticleBlockType, type ArticleBlock } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

type ArticleDetailsProps = {
    className?: string;
    id: string,
}

const initialReducer: ReducerList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, id, }: ArticleDetailsProps) => {

    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    const classNames = clsx(
        cls.ArticleDetails,
        className
    );
    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block} />
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block} />
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent key={block.id} block={block} className={cls.block} />
            default:
                return null;
        }
    }, [])

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])


    let content;
    if (isLoading) {
        content = (
            < >
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.sleketon} width={600} height={24} />
                <Skeleton className={cls.sleketon} width={'100%'} height={200} />
                <Skeleton className={cls.sleketon} width={'100%'} height={200} />
            </ >
        )
    } else if (error) {
        content = (
            <Text thema="error" title="Ошибка" text="Ошибка загрузки данных статьи" align="center" />
        )
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </div>
                <Text size="l" className={cls.title} title={article?.title} text={article?.subtitle} />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleFolder reducers={initialReducer} removeAfterUnmount={true}>
            <div className={classNames}>
                {content}
            </div>
        </DynamicModuleFolder>
    )
})