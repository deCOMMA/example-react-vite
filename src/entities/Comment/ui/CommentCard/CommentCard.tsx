import clsx from "clsx"
import cls from './CommentCard.module.css'
import type { CommentI } from "../../model/types/comments";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Text } from "@/shared/ui/Text/Text";
import AvatarLogo from '@/shared/ui/Avatar/storybook.jpg'
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { RoutePath } from "@/shared/config/routerConfig/routeConfig";

type CommentCardProps = {
    className?: string;
    comment?: CommentI;
    isLoading?: boolean;
}

export const CommentCard = ({
    className, comment, isLoading
}: CommentCardProps) => {

    const classNames = clsx(
        cls.CommentCard,
        className,
        isLoading && cls.loading
    );

    if (isLoading) {
        return (
            <div className={classNames}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.usernem} />
                </div>
                <Skeleton width={'100%'} height={50} className={cls.text} />
            </div>
        )
    }

    return (
        <div className={classNames}>
            <AppLink className={cls.header} to={`${RoutePath.profile}${comment?.user.id}`}>
                <Avatar size={30} src={comment?.user?.avatar ? comment.user.avatar : AvatarLogo} />
                <Text className={cls.usernem} title={comment?.user.username} size="l" />
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </div>
    )
}