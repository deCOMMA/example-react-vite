import clsx from "clsx";
import cls from './Avatar.module.css'
import { useMemo, type CSSProperties } from "react";
type AvatarProps = {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {

    const style = useMemo<CSSProperties>(() => (
        {
            width: size,
            height: size,
        }), [size])

    return (
        <img
            style={style}
            src={src}
            alt={alt}
            className={clsx(className, cls.Avatar)}
        />
    )
}