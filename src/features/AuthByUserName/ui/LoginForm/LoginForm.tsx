import clsx from 'clsx';
import cls from './LoginForm.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { getLoginState } from '../../model/selectors/selectLoginState/getLoginState';

type LoginFormProps = {
    className?: string;
};

export const LoginForm = memo(({ className, ...otherProps }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {}, []);

    const classNames = clsx(cls.LoginForm, className);

    return (
        <div className={classNames} {...otherProps}>
            <Input
                value={username}
                className={cls.input}
                placeholder={t('Введите username')}
                autoFocus
                onChange={onChangeUsername}
            ></Input>
            <Input
                value={password}
                className={cls.input}
                placeholder={t('Введите password')}
                onChange={onChangePassword}
            ></Input>
            <Button
                theme='clearInv'
                className={cls.loginBtn}
                style={{ marginTop: '40px' }}
                onClick={onLoginClick}
            >
                {t('Войти ')}
            </Button>
        </div>
    );
});
