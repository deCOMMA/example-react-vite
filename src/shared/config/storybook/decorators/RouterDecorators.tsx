import { ThemeProvider } from '@/app/providers/theme/ThemeProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/Store';

type RouterDecoratorProps = {
    theme?: 'normal' | 'dark';
};

export const RouterDecorator = ({ theme = 'normal' }: RouterDecoratorProps = {}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (Story: any) => (
        <StoreProvider>
            <BrowserRouter>
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider>
                        <div className={`app ${theme}`}>
                            <Story />
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </BrowserRouter>
        </StoreProvider>
    );
};
