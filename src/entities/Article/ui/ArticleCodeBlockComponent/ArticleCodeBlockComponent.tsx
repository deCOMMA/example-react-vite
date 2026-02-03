import clsx from 'clsx';
import cls from './ArticleCodeBlockComponent.module.css';
import { memo } from 'react';
import type { ArticleBlockCode } from '../../model/types/article';
import { Code } from '@/shared/ui/Code/Code';

type ArticleCodeBlockComponentProps = {
    className?: string;
    block: ArticleBlockCode;
};

export const ArticleCodeBlockComponent = memo(
    ({ className, block }: ArticleCodeBlockComponentProps) => {
        const classNames = clsx(cls.ArticleCodeBlockComponent, className);

        return (
            <div className={classNames}>
                <Code text={block.code} />
            </div>
        );
    }
);
