import clsx from 'clsx';
import cls from './Navbar.module.css';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUserName';

type NavbarProps = {
    className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
    const classNames = clsx(cls.Navbar, className);

    const { t } = useTranslation();
    const [isAuthModal, setIsAutnmodal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAutnmodal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAutnmodal(true);
    }, []);

    return (
        <div className={classNames}>
            <div className={cls.links}></div>
            <Button onClick={onShowModal} theme='clearInv'>
                {t('Войти')}
            </Button>
            <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
        </div>
    );
};
