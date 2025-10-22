import clsx from "clsx"
import cls from './ThemeSwitcher.module.css'
import { useTheme } from "@/app/providers/theme/useTheme";
import type React from "react";
import { Button } from "@/shared/ui/Button/Button";

type ThemeSwitcherProps = {
    className?: string;
    children?: React.ReactNode;
}

export const ThemeSwitcher = ({
    className,
    children,
    ...otherProps
}: ThemeSwitcherProps) => {

    const { switchThem } = useTheme()

    const classNames = clsx(
        cls.ThemeSwitcher,
        className
    );

    return (
        <Button
            className={classNames}
            onClick={switchThem}
            {...otherProps}
        >
            {children}
        </Button>
    )
}