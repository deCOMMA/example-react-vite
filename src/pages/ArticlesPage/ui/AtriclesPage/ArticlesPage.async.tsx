import { lazy } from 'react';

export const ArticleAsyncPage = lazy(
    () =>
        new Promise(resolve => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setTimeout(() => resolve(import('./AtriclesPage')), 1500);
        })
);
