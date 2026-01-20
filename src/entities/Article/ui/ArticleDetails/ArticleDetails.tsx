import clsx from "clsx"
import cls from './ArticleDetails.module.css'
import { useTranslation } from "react-i18next";
import { DynamicModuleFolder, type ReducerList } from "@/shared/helpers/components/DynamicModuleFolder/DynamicModuleFolder";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { memo, useEffect } from "react";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useAppDispatch } from "@/app/providers/Store/config/hooks";
import { useSelector } from "react-redux";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from "../../model/selectors/articleDetails";
import { Text } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

type ArticleDetailsProps = {
    className?: string;
    id: string,
}

const initialReducer: ReducerList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, id, }: ArticleDetailsProps) => {

    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsLoading)
    // const isLoading = true;
    const data = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    const classNames = clsx(
        cls.ArticleDetails,
        className
    );

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])


    let content;
    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.sleketon} width={600} height={24} />
                <Skeleton className={cls.sleketon} width={'100%'} height={200} />
                <Skeleton className={cls.sleketon} width={'100%'} height={200} />
            </div>
        )
    } else if (error) {
        content = (
            <Text thema="error" title="Ошибка" text="Ошибка загрузки данных статьи" align="center" />
        )
    } else {
        content = (
            <div>
                {t('Article Details Page')}
            </div>
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