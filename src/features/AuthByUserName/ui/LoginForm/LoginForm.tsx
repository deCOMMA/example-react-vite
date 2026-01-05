import clsx from 'clsx';
import cls from './LoginForm.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from '@/app/providers/Store/config/hooks';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Text } from '@/shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
    DynamicModuleFolder,
    type ReducerList,
} from '@/shared/helpers/components/DynamicModuleFolder/DynamicModuleFolder';

export type LoginFormProps = {
    className?: string;
    onSuccess?: () => void;
};

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess, ...otherProps }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

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

    const onLoginClick = useCallback(async () => {
        const res = await dispatch(loginByUsername({ password, username }));
        if (res.meta.requestStatus === 'fulfilled' && onSuccess) {
            onSuccess();
        }
    }, [dispatch, password, username, onSuccess]);

    const classNames = clsx(cls.LoginForm, className);

    return (
        <DynamicModuleFolder reducers={initialReducers} removeAfterUnmount={true}>
            <div className={classNames} {...otherProps}>
                <Text title={t('Форма авторизации')} />
                {error && <Text text={error} thema='error' />}
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
                    disabled={isLoading}
                >
                    {t('Войти ')}
                </Button>
                {isLoading && <Loader />}
            </div>
        </DynamicModuleFolder>
    );
});

export default LoginForm;
