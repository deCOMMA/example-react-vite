export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './model/types/article';
export { ArticleView } from './model/types/article';
export type { ArticleDetailShema } from './model/types/articleDetailsSchema';

export {
    articleDetailsActions,
    articleDetailsReducer,
    articleDetailsSlice,
} from './model/slice/articleDetailsSlice';

export { ArticleList } from './ui/ArricleList/ArricleList'
