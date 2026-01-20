import clsx from "clsx"
import cls from './ArticleCodeBlockComponent.module.css'

type ArticleCodeBlockComponentProps = {
    className?: string;
}

export const ArticleCodeBlockComponent = ({
    className,
}: ArticleCodeBlockComponentProps) => {

    const classNames = clsx(
        cls.ArticleCodeBlockComponent,
        className
    );

    return (
        <div
            className={classNames}>
        </div>
    )
}