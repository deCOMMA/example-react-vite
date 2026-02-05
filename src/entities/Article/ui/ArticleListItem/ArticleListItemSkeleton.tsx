import cls from './ArticleListItem.module.css'
import { ArticleView } from "../../model/types/article";
import { Text } from "@/shared/ui/Text/Text";
import { Card } from "@/shared/ui/Card/Card";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button } from "@/shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import clsx from 'clsx';

interface ArticleListItemSkeletonProps {
    view: ArticleView;
    className?: string,
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {

    const { view, className } = props;

    const classNames = clsx(
        cls.ArticleListItem,
        className,
        cls[String(view)],
    );

    if (view === ArticleView.BLOCK) {
        return (
            <div className={classNames}>
                <Card>
                    <div className={cls.imgeWrapper}>
                        <Skeleton width={200} height={200} className={cls.img} ></Skeleton>
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton width={150} height={16} className={cls.title} />
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames}>
            <Card>
                <div className={cls.header}>
                    <Skeleton height={30} width={30} border='50%' />
                    <Skeleton width={150} height={16} className={cls.username} />
                    <Skeleton width={150} height={16} className={cls.date} />
                </div>
                <Skeleton width={250} height={24} className={cls.title} />
                <Skeleton height={200} className={cls.img} />
                <div className={cls.footer}>
                    <Skeleton height={36} width={200} />
                </div>
            </Card>
        </div>
    )

}