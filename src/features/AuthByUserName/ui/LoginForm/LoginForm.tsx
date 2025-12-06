import clsx from 'clsx';
import cls from './LoginForm.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

type LoginFormProps = {
    className?: string;
    children?: React.ReactNode;
};

export const LoginForm = ({ className, children, ...otherProps }: LoginFormProps) => {
    const { t } = useTranslation();

    const classNames = clsx(cls.LoginForm, className);

    return (
        <div className={classNames} {...otherProps}>
            <Input className={cls.input}></Input>
            <Input className={cls.input}></Input>
            <input type='text' className={cls.input}></input>
            <Button className={cls.loginBtn} >{t('Войти ')}</Button>
        </div>
    );
};
