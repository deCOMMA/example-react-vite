import clsx from 'clsx';
import cls from './Input.module.css';
import {
    memo,
    useEffect,
    useRef,
    useState,
    type ChangeEvent,
    type InputHTMLAttributes,
} from 'react';

type InputProps = {
    className?: string;
    value?: string | number;
    onChange?: (value: string, name?: string) => void;
    name?: string;
    autoFocus?: boolean;
    readOnly?: boolean;
} & Omit<InputHTMLAttributes<HTMLElement>, 'classNames' | 'value' | 'onChange' | 'readOnly'>;

export const Input = memo(
    ({
        className,
        value,
        readOnly,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        name,
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
            onChange?.(e.target.value, name);
        };

        const classNames = clsx(cls.Input, className, readOnly && cls.readOnly);

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
                        name={name}
                        type={type}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        value={value}
                        onChange={onChangeHandler}
                        className={cls.input}
                        readOnly={readOnly}
                        {...otherProps}
                    />
                </div>
            </div>
        );
    }
);
