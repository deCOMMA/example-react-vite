import { ThemeProvider } from "@/app/providers/theme/ThemeProvider"
import { I18nextProvider } from "react-i18next"
import i18n from "../../i18n/i18n";

type ThemeDecoratorsProps = {
    theme?: 'normal' | 'dark',
}

export const ThemeDecorators = ({ theme = 'normal' }: ThemeDecoratorsProps = {}) => {
    return (Story: any) => (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider >
                <div className={`app ${theme}`}>
                    <Story />
                </div>
            </ThemeProvider>
        </I18nextProvider>
    )
};