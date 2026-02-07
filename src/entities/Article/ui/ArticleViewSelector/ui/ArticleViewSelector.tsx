import clsx from "clsx"
import { ArticleView } from "@/entities/Article/model/types/article";
import { Icon } from "@/shared/ui/Icon/Icon";
import Listicon from '@/shared/assets/icons/list_articlesPage.svg?react'
import Blockicon from '@/shared/assets/icons/block_articlesPage.svg?react'
import { Button } from "@/shared/ui/Button/Button";
import cls from './ArticleViewSelector.module.css'

type ArticleViewSelectorProps = {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BLOCK,
        icon: Blockicon,
    },
    {
        view: ArticleView.LINE,
        icon: Listicon,
    },
]

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {

    const { className, onViewClick, view } = props;
    const classNames = clsx(
        className
    );

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames}>
            {viewTypes.map(viewTypes => (
                <Button
                    theme="clear"
                    onClick={onClick(viewTypes.view)}
                >
                    <Icon
                        Svg={viewTypes.icon}
                        className={clsx(viewTypes.view !== view && cls.notSelect)}
                    />
                </Button>
            ))}
        </div>
    )
}