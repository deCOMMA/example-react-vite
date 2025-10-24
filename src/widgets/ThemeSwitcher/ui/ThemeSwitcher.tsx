import clsx from "clsx"
import cls from './ThemeSwitcher.module.css'
import { useTheme } from "@/app/providers/theme/useTheme";
import type React from "react";
import { Button } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation()

    return (
        <div>
            <Button
                size="medium"
                className={classNames}
                onClick={switchThem}
                {...otherProps}
            >
                {t('Тема')}
            </Button>
        </div>
    )
}