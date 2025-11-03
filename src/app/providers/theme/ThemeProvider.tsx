import { useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, type ThemeType } from './ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) || 'normal';

export type ThemeProviderProps = {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeType>(defaultTheme);

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                setTheme: setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
