import clsx from "clsx"
import cls from './ArticleImageBlockComponent.module.css'

type ArticleImageBlockComponentProps = {
    className?: string;
}

export const ArticleImageBlockComponent = ({
    className,
}: ArticleImageBlockComponentProps) => {

    const classNames = clsx(
        cls.ArticleImageBlockComponent,
        className
    );

    return (
        <div
            className={classNames}>
        </div>
    )
}