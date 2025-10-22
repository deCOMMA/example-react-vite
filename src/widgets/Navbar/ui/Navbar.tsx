import clsx from "clsx"
import cls from './Navbar.module.css'
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

type NavbarProps = {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    const classNames = clsx(cls.Navbar, className);

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
                    className={cls.links}
                    to={'/'}
                >Main</AppLink>
                <AppLink
                    size="large"
                    className={cls.links}
                    to={'/about'}
                >About</AppLink>
            </div>
        </div>
    )
}
