import clsx from "clsx"
import cls from './Page.module.css'
import { useRef, type ReactNode } from "react";
import { useInfiniteScroll } from "@/shared/helpers/hooks/useInfiniteScroll/useInfiniteScroll";

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
    const triggerRef = useRef<HTMLDivElement>(null)
    const wrapperRef = useRef<HTMLElement>(null)
    useInfiniteScroll({
        callback: () => console.log('sdfsd'),
        triggerRef,
        wrapperRef,
    })

    return (
        <section ref={wrapperRef} className={classNames}>
            {children}
            <div ref={triggerRef} />
        </section>
    )
}