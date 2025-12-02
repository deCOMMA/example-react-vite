import { Counter } from '@/entities/Counter';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation();

    return (
        <div>
            <Counter />
            {t('Главная')}
        </div>
    );
}

export default MainPage;
