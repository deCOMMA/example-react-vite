import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, type ThemeType } from './ThemeContext';

export function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);
    document.body.className = theme;
    const switchThem = () => {
        const themes: ThemeType[] = ['normal', 'dark', 'black'];
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const newTheme = themes[nextIndex];

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        document.body.className = newTheme;
    };

    return {
        theme,
        switchThem,
    };
}
