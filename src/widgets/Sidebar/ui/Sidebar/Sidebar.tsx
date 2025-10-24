import clsx from "clsx"
import cls from './Sidebar.module.css'
import { useState } from "react";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher/ui/LanguageSwitcher";

type SidebarProps = {
    className?: string;
    children?: React.ReactNode;
}

export const Sidebar = ({
    className,
    children,
    ...otherProps
}: SidebarProps) => {

    const [isExpand, setIsExpand] = useState(false);

    const classNames = clsx(
        cls.Sidebar,
        className,
        {
            [cls.expand]: isExpand,
        }
    );

    const onToggle = () => {
        setIsExpand(prev => !prev);
    }

    return (
        <div
            className={classNames}
            {...otherProps}>
            <button onClick={onToggle}>
                toggle
            </button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
}