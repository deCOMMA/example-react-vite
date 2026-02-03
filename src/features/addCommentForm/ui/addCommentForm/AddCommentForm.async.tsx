import { lazy } from 'react';
import { type AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy(
    () =>
        new Promise<{ default: React.ComponentType<AddCommentFormProps> }>(resolve => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setTimeout(() => resolve(import('./AddCommentForm')), 1500);
        })
);
