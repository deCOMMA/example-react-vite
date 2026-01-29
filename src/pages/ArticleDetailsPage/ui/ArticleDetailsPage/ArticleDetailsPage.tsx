import clsx from "clsx"
import cls from './ArticleDetailsPage.module.css'
import { memo, useEffect } from "react";
import { ArticleDetails } from "@/entities/Article";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Text } from "@/shared/ui/Text/Text";
import { CommentList } from "@/entities/Comment/ui/CommentList/CommentList";
import { DynamicModuleFolder, type ReducerList } from "@/shared/helpers/components/DynamicModuleFolder/DynamicModuleFolder";
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slice/ArticleDetailsCommentsSlice.ts/ArticleDetailsCommentsSlice.ts";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments.ts";
import { useAppDispatch } from "@/app/providers/Store/config/hooks.ts";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts";

type ArticleDetailsPageProps = {
    className?: string;
}

const initialReducer: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className, }: ArticleDetailsPageProps) => {

    const classNames = clsx(
        cls.ArticleDetailsPage,
        className
    );
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article')
    const comments = useSelector(getArticleComments.selectAll)
    const commentsisLoading = useSelector(getArticleCommentsIsLoading)
    const dispatch = useAppDispatch();

    if (!id) {
        return (
            <div>
                {t('Article not found')}
            </div>
        )
    }

    useEffect(() => {
        dispatch((fetchCommentsByArticleId(id)))
    }, [dispatch, id])

    return (
        <DynamicModuleFolder reducers={initialReducer} removeAfterUnmount={true}>
            <div className={classNames}>
                <ArticleDetails id={id} />
                <Text title={t('Comments')} size="l" className={cls.commentTitle} />
                <CommentList isLoading={commentsisLoading} comments={comments} />
            </div>
        </DynamicModuleFolder>
    )
}

export default memo(ArticleDetailsPage);