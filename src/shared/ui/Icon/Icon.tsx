import clsx from "clsx"
import cls from './Icon.module.css'
import { memo } from "react";
import React from "react";

type IconProps = {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>,
}

export const Icon = memo(({
    className, Svg
}: IconProps) => {

    const classNames = clsx(
        cls.Icon,
        className
    );

    return (
        <Svg className={classNames}></Svg>
    )
})