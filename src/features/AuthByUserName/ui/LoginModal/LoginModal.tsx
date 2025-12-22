import clsx from 'clsx';
import cls from './LoginModal.module.css';
import { Modal } from '@/shared/ui/Modal/ui/Modal';
import { Suspense } from 'react';
import { Loader } from '@/shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

type LoginModalProps = {
    className?: string;
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    const classNames = clsx(cls.LoginModal, className);
    return (
        <Modal className={classNames} isOpen={isOpen} onClose={onClose} lazy>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
