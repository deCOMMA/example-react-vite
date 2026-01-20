import clsx from "clsx"
import cls from './Skeleton.module.css'
import { memo, type CSSProperties } from "react";

type SkeletonProps = {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        border,
        className,
        height,
        width,
    } = props;

    const classNames = clsx(cls.Skeleton, className);
    const styles: CSSProperties = {
        height: height,
        width: width,
        borderRadius: border,
    }

    return (
        <div
            style={styles}
            className={classNames}>
        </div>
    )
})