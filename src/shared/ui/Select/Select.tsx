import clsx from "clsx"
import cls from './Select.module.css'
import { memo, useMemo, type ChangeEvent } from "react";

type SelectOptions = {
    value: string;
    content: string;
}

type SelectProps = {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {

    const {
        className,
        label,
        onChange,
        options,
        value,
        readonly,
    } = props;

    const classNames = clsx(
        cls.Select,
        className,
        readonly && cls.readOnly
    );

    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    }

    return (
        <div className={classNames}>
            {label &&
                <span className={cls.label}>{label + ' '}</span>
            }
            <select
                disabled={readonly}
                className={clsx(cls.select,)}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    )
})