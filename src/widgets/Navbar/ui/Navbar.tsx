import clsx from "clsx"
import cls from './Navbar.module.css'
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

type NavbarProps = {
    classNamesProps?: string;
}

export const Navbar = ({ classNamesProps }: NavbarProps) => {

    const classNames = clsx(cls.Navbar, classNamesProps);

    return (
        <div className={classNames}>
            <div>
                <ThemeSwitcher>
                    SWITCH THEME
                </ThemeSwitcher>
            </div>
            <div className={cls.links}>
                <AppLink
                    size="large"
                    classNamesProps={cls.links}
                    to={'/'}
                >Main</AppLink>
                <AppLink
                    size="large"
                    classNamesProps={cls.links}
                    to={'/about'}
                >About</AppLink>
            </div>
        </div>
    )
}
