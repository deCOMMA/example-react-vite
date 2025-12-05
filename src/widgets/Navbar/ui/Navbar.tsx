import clsx from 'clsx';
import cls from './Navbar.module.css';
import { Modal } from '@/shared/ui/Modal/ui/Modal';
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

    const onToggleModal = useCallback(() => {
        setIsAutnmodal(prev => !prev);
    }, []);

    return (
        <div className={classNames}>
            <div className={cls.links}></div>
            <Button onClick={onToggleModal} theme='clearInv'>
                {t('Войти')}
            </Button>
            <LoginModal onClose={onToggleModal} isOpen={isAuthModal} />
        </div>
    );
};
