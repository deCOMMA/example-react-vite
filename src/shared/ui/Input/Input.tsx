import clsx from 'clsx';
import cls from './Input.module.css';
import { useEffect, useRef, useState, type ChangeEvent, type InputHTMLAttributes } from 'react';

type InputProps = {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
} & Omit<InputHTMLAttributes<HTMLElement>, 'classNames' | 'value' | 'onChange'>;

export const Input = ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
}: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const [_isFocus, setIsFocus] = useState(false);

    useEffect(() => {
        if (autoFocus) {
            setIsFocus(true);
            ref?.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const classNames = clsx(cls.Input, className);

    const onFocus = () => {
        setIsFocus(true);
    };

    const onBlur = () => {
        setIsFocus(false);
    };

    return (
        <div className={classNames}>
            {placeholder && <div className={cls.placeholder}>{placeholder + '>'}</div>}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    {...otherProps}
                />
            </div>
        </div>
    );
};
