import { Page } from '@/shared/ui/Page/Page';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation();

    return (
        <Page>
            <section>{t('О нас')}</section>
        </Page>
    );
}

export default AboutPage;
