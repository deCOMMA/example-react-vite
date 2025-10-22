import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";


export function useTheme() {

    const { theme, setTheme } = useContext(ThemeContext);

    const switchThem = () => {
        const newTheme = theme === 'normal' ? 'dark' : 'normal';
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme,
        switchThem
    }
}