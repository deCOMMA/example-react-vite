import '@/app/styles/index.css';
import '@/app/styles/themes/dark.css';
import '@/app/styles/themes/normal.css';
import clsx from 'clsx';
import cls from './Modal.module.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../../Portal/Portal';

type ModalProps = {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
};

const ANIMATION_DELAY = 200;

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

    const classNames = clsx(cls.Modal, className, isOpen && cls.opened, isClosing && cls.isClosing);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentHandler}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
