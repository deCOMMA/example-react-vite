import { Counter } from '@/entities/Counter';
import { Input } from '@/shared/ui/Input/Input';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation();
    const [value, setValue] = useState('')

    const onChangeHandler = (val: string) => {
        setValue(val)
    }

    return (
        <div>
            <Input value={value} onChange={onChangeHandler} placeholder='asdsa'></Input>
            <Counter />
            {t('Главная')}
        </div>
    );
}

export default MainPage;
