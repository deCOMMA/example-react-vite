import clsx from "clsx"
import cls from './CommentList.module.css'
import type { CommentI } from "../../model/types/comments";
import { Text } from "@/shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";

type CommentListProps = {
    className?: string;
    comments?: CommentI[];
    isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {

    const { className, comments, isLoading } = props;

    const { t } = useTranslation('article')

    const classNames = clsx(
        cls.CommentList,
        className
    );

    if (isLoading) {
        return (
            <div className={classNames}>
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
            </div>
        )
    }

    if (!comments) {
        return null
    }

    return (
        <div className={classNames}>
            {comments?.length
                ?
                comments.map(comment => (
                    <CommentCard
                        isLoading={isLoading}
                        className={cls.commentCard}
                        comment={comment}
                    />
                ))
                :
                <Text text={t('No comments yet')} />
            }
        </div>
    )
}