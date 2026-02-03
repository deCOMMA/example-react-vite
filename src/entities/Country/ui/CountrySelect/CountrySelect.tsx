import { Select } from '@/shared/ui/Select/Select';
import { Country } from '../../model/types/country';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type CountrySelectProps = {
    className?: string;
    readonly?: boolean;
    onChange?: (country: Country) => void;
    value?: Country;
};

const options = [
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.kazahstan, content: Country.kazahstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
    ({ readonly, onChange, value, className }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange]
        );

        return (
            <Select
                readonly={readonly}
                className={className}
                options={options}
                label={t('Укажите страну')}
                value={value}
                onChange={onChangeHandler}
            />
        );
    }
);
