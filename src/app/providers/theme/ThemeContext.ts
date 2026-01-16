import { createContext } from 'react';

export type ThemeType = 'normal' | 'dark' | 'black';

export type ThemeContextProps = {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'normal',
    setTheme: () => { },
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
