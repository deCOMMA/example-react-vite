import clsx from "clsx"
import cls from './ArticleTextBlockComponent.module.css'
import { memo } from "react";
import type { ArticleBlockText } from "../../model/types/article";
import { Text } from "@/shared/ui/Text/Text";

type ArticleTextBlockComponentProps = {
    className?: string;
    block: ArticleBlockText;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {

    const classNames = clsx(
        cls.ArticleTextBlockComponent,
        className
    );

    return (
        <div className={classNames}>
            {block.title && (
                <Text title={block.title} className={cls.title} size="l" />
            )}
            {block.paragraphs.map(paragraph => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    )
})