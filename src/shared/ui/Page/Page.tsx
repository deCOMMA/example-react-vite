import clsx from "clsx"
import cls from './Page.module.css'
import type { ReactNode } from "react";

type PageProps = {
    className?: string;
    children: ReactNode;
}

export const Page = ({
    className, children
}: PageProps) => {

    const classNames = clsx(
        cls.Page,
        className
    );

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}