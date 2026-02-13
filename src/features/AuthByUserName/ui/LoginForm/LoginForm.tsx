import clsx from 'clsx';
import cls from './LoginForm.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { memo, useCallback, useState } from 'react';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Text } from '@/shared/ui/Text/Text';
import { useAppDispatch } from '@/shared/helpers/hooks/reduxHooks/reduxHppks';
import { userActions, type User } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { api } from '@/shared/api/api';

export type LoginFormProps = {
    className?: string;
    onSuccess?: () => void;
};

const LoginForm = memo(({ className, onSuccess, ...otherProps }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const setUsernameHandler = useCallback((username: string) => {
        setUsername(username);
    }, []);
    const setPasswordandler = useCallback((password: string) => {
        setPassword(password);
    }, []);

    const onLoginClick = useCallback(async () => {
        setIsLoading(true);
        setError(undefined);

        try {
            const response = await api.post<User>('/login', { username, password });
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            onSuccess?.();
        } catch (e) {
            console.error(e);
            setError('Вы ввели неверный логин или пароль');
        } finally {
            setIsLoading(false);
        }
    }, [dispatch, username, password, onSuccess]);

    const classNames = clsx(cls.LoginForm, className);

    return (
        <div className={classNames} {...otherProps}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={error} thema='error' />}
            <Input
                value={username}
                className={cls.input}
                placeholder={t('Введите username')}
                autoFocus
                onChange={setUsernameHandler}
            ></Input>
            <Input
                value={password}
                className={cls.input}
                placeholder={t('Введите password')}
                onChange={setPasswordandler}
                type='password'
            ></Input>
            <Button
                theme='clearInv'
                className={cls.loginBtn}
                style={{ marginTop: '40px' }}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти ')}
            </Button>
            {isLoading && <Loader />}
        </div>
    );
});

export default LoginForm;
