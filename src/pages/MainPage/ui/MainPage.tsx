import { Page } from '@/shared/ui/Page/Page';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation();


    return (
        <Page>
            <section>
                {t('Главная')}
            </section>
        </Page>
    );
}

export default MainPage;
