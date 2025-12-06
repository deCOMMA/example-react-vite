import clsx from "clsx"
import cls from './Input.module.css'
import { useState, type ChangeEvent, type InputHTMLAttributes } from "react";

type InputProps = {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;

} & Omit<InputHTMLAttributes<HTMLElement>, 'classNames' | 'value' | 'onChange'>

export const Input = ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    ...otherProps
}: InputProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }
    const classNames = clsx(
        cls.Input,
        className
    );

    return (
        <div className={classNames}>
            {placeholder &&
                (<div className={cls.placeholder}>
                    {placeholder + '>'}
                </div>
                )}
            <div className={cls.caretWrapper}>
                <input
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    {...otherProps}
                />
            </div>
        </div>
    )
}