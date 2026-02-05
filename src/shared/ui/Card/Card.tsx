import clsx from "clsx"
import cls from './Card.module.css'
import { useTranslation } from 'react-i18next'
import type { HTMLAttributes, ReactNode } from "react";

type CardProps = {
    className?: string;
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>

export const Card = (props: CardProps) => {

    const { className, children, ...otherProps } = props;
    const { t } = useTranslation()
    const classNames = clsx(
        cls.Card,
        className
    );

    return (
        <div className={classNames}
            {...otherProps}
        >
            {children}
        </div>
    )
}