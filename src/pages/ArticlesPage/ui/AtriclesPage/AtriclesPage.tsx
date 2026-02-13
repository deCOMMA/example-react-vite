import clsx from 'clsx';
import cls from './ArticlesPage.module.css';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from '@/entities/Article';
import { DynamicModuleFolder, type ReducerList } from '@/shared/helpers/components/DynamicModuleFolder/DynamicModuleFolder';
import { articlePageAction, articlePageReducer, getArticle } from '../../model/slices/articlePageSlice';
import { useAppDispatch } from '@/shared/helpers/hooks/reduxHooks/reduxHppks';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { useSelector } from 'react-redux';
import { getArticlesPageError, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/getArticlesPage';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/shared/ui/Page/Page';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';


type AtriclesPageProps = {
    className?: string;
};

const initialReducer: ReducerList = {
    articlesPage: articlePageReducer
}

const AtriclesPage = ({ className }: AtriclesPageProps) => {
    const { t } = useTranslation('article');

    const classNames = clsx(cls.AtriclesPage, className);

    const articles = useSelector(getArticle.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView)
    const dispatch = useAppDispatch()
    const inited = useSelector(getArticlesPageInited);

    useEffect(() => {
        if (!inited) {
            dispatch(articlePageAction.initStat())
            dispatch(fetchArticleList({ page: 1 }))
        }
    }, [dispatch])

    const onLoadNextPage = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [dispatch])

    const omChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageAction.setView(view));
    }, [dispatch, view])

    return (
        <DynamicModuleFolder reducers={initialReducer} removeAfterUnmount={false}>
            <Page onScroll={onLoadNextPage} className={classNames}>
                <section>
                    {t('ARTICLE PAGE')}
                    {error && <Text align='center' text={error} thema='error' size='l' />}
                    <ArticleViewSelector view={view} onViewClick={omChangeView} />
                    <ArticleList
                        isLoading={isLoading}
                        view={view}
                        articles={articles}
                    />
                </section>
            </Page>
        </DynamicModuleFolder>
    )
};

export default memo(AtriclesPage);
