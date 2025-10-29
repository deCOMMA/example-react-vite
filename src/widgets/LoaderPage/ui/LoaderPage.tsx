import clsx from "clsx"
import cls from './LoaderPage.module.css'
import { Loader } from "@/shared/ui/Loader/Loader";

type LoaderPageProps = {
    className?: string;
    children?: React.ReactNode;
}

export const LoaderPage = ({
    className,
    children,
    ...otherProps
}: LoaderPageProps) => {

    const classNames = clsx(
        cls.LoaderPage,
        className
    );

    return (
        <div
            className={classNames}
            {...otherProps}>
            <Loader />
        </div>
    )
}