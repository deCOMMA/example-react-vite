import { Select } from "@/shared/ui/Select/Select";
import { Currency } from "../../model/types/currency";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

type CurrencySelectProps = {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = memo(({ className, value, onChange, readOnly }: CurrencySelectProps) => {

    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [])

    return (
        <Select
            readonly={readOnly}
            className={className}
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
        />
    )
})