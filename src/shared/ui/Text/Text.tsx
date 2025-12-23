import clsx from 'clsx';
import cls from './Text.module.css';
import { memo } from 'react';

type TextProps = {
    className?: string;
    title?: string;
    text?: string;
    thema?: 'primary' | 'error' | '';
};

export const Text = memo((props: TextProps) => {
    const { className, text, thema = 'primary', title } = props;

    const classNames = clsx(cls.Text, className, cls[thema]);

    return (
        <div className={classNames}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
