import clsx from 'clsx';
import cls from './Navbar.module.css';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getAuthUserData, userActions } from '@/entities/User/index';
import { useAppDispatch } from '@/app/providers/Store/config/hooks';

type NavbarProps = {
    className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
    const authData = useSelector(getAuthUserData);
    const dispatch = useAppDispatch();

    const classNames = clsx(cls.Navbar, className);

    const { t } = useTranslation();

    const [isAuthModal, setIsAutnmodal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAutnmodal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAutnmodal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames}>
                <div className={cls.links}></div>
                <Button onClick={onLogout} theme='clearInv' className={cls.links}>
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames}>
            <div className={cls.links}></div>
            <Button onClick={onShowModal} theme='clearInv' className={cls.links}>
                {t('Войти')}
            </Button>
            <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
        </div>
    );
};
