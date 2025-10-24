import clsx from "clsx"
import cls from './LanguageSwitcher.module.css'
import { Button } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

type LanguageSwitcherProps = {
    className?: string;
    children?: React.ReactNode;
}

export const LanguageSwitcher = ({
    className,
    children,
    ...otherProps
}: LanguageSwitcherProps) => {

    const classNames = clsx(
        cls.LanguageSwitcher,
        className
    );

    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            onClick={toggle}
            className={classNames}
            {...otherProps}
        >
            {t('Язык')}
        </Button>
    )
}