import clsx from "clsx"
import cls from './ThemeSwitcher.module.css'
import { useTheme } from "@/app/providers/theme/useTheme";
import type React from "react";

type ThemeSwitcherProps = {
    classNamesProps?: string;
    children?: React.ReactNode;
}

export const ThemeSwitcher = ({
    classNamesProps,
    children,
    ...otherProps
}: ThemeSwitcherProps) => {

    const { theme, switchThem } = useTheme()

    const classNames = clsx(
        cls.ThemeSwitcher,
        classNamesProps
    );

    return (
        <button
            onClick={switchThem}
            {...otherProps}
        >
            {children}
        </button>
    )
}