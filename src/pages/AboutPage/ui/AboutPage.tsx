import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation();

    return <div>{t('О нас')}</div>;
}

export default AboutPage;
