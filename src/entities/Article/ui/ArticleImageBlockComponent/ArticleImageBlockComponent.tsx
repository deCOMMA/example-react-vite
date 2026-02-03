import clsx from 'clsx';
import cls from './ArticleImageBlockComponent.module.css';
import { memo } from 'react';
import type { ArticleBlockImg } from '../../model/types/article';
import { Text } from '@/shared/ui/Text/Text';

type ArticleImageBlockComponentProps = {
    className?: string;
    block: ArticleBlockImg;
};

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => {
        const classNames = clsx(cls.ArticleImageBlockComponent, className);

        return (
            <div className={classNames}>
                <img className={cls.img} alt={block.title} src={block.src}></img>
                {block.title && <Text title={block.title} size='m' align='center' />}
            </div>
        );
    }
);
