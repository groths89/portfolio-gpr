"use client";

import * as React from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useThemeSwitcher() {
    const [theme, setThemeState] = React.useState<Theme>('system');

    React.useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        if (storedTheme) {
            setThemeState(storedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            setThemeState('dark');
        } else {
            setThemeState('light');
        }
    }, []);

    React.useEffect(() => {
        const root = window.document.documentElement;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        // Function to set the theme class based on the mode
        const applyTheme = (currentTheme: Theme) => {
            let isDark = false;
            
            if (currentTheme === 'system') {
                isDark = prefersDark.matches;
                localStorage.removeItem('theme');
            } else {
                isDark = currentTheme === 'dark';
                localStorage.setItem('theme', currentTheme);
            }
            
            root.classList.toggle('dark', isDark);
        };

        applyTheme(theme);

        const handleSystemChange = (e: MediaQueryListEvent) => {
            if (theme === 'system') {
                root.classList.toggle('dark', e.matches);
            }
        };
        
        prefersDark.addEventListener('change', handleSystemChange);

        return () => {
            prefersDark.removeEventListener('change', handleSystemChange);
        };

    }, [theme]);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    }

    const resolvedTheme = theme === 'system' 
        ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' 
        : theme;


    return { theme, setTheme, resolvedTheme };

}