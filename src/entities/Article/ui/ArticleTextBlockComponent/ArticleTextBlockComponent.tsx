import clsx from "clsx"
import cls from './ArticleTextBlockComponent.module.css'

type ArticleTextBlockComponentProps = {
    className?: string;
}

export const ArticleTextBlockComponent = ({
    className,
}: ArticleTextBlockComponentProps) => {

    const classNames = clsx(
        cls.ArticleTextBlockComponent,
        className
    );

    return (
        <div
            className={classNames}>
        </div>
    )
}