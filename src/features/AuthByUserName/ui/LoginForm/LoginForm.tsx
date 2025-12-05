import clsx from "clsx"
import cls from './LoginForm.module.css'
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button/Button";

type LoginFormProps = {
    className?: string;
    children?: React.ReactNode;
}

export const LoginForm = ({
    className,
    children,
    ...otherProps
}: LoginFormProps) => {

    const { t } = useTranslation()

    const classNames = clsx(
        cls.LoginForm,
        className
    );

    return (
        <div
            className={classNames}
            {...otherProps}>
            <input type="text"></input>
            <input type="text"></input>
            <Button>{t('Войти ')}</Button>
        </div>
    )
}