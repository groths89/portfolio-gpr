"use client";

import * as React from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useThemeSwitcher() {
    const [theme, setThemeState] = React.useState<Theme>('system');
    const [resolvedTheme, setResolvedThemeState] = React.useState<Theme>('light');

    // Helper to determine the theme from the browser
    const getResolvedTheme = (currentTheme: Theme) => {
        if (currentTheme !== 'system' || typeof window === 'undefined') {
            return currentTheme === 'system' ? 'light' : currentTheme; // Default to light if system is unresolvable
        }
        // Now we are safe to access window.matchMedia
        return globalThis.window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    React.useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        if (typeof globalThis.window !== 'undefined') {
            if (storedTheme) {
                setThemeState(storedTheme);
            } else if (globalThis.window.matchMedia('(prefers-color-scheme: dark)').matches){
                setThemeState('dark');
            } else {
                setThemeState('light');
            }            
        }


    }, []);

    React.useEffect(() => {
        if (typeof globalThis.window === 'undefined') return;

        const root = globalThis.window.document.documentElement;
        const prefersDark = globalThis.window.matchMedia('(prefers-color-scheme: dark)');

        // Function to set the theme class based on the mode
        const applyTheme = (currentTheme: Theme) => {
            let isDark = false;
            let currentResolvedTheme: Theme;
            
            if (currentTheme === 'system') {
                isDark = prefersDark.matches;
                currentResolvedTheme = isDark ? 'dark' : 'light';
                localStorage.removeItem('theme');
            } else {
                isDark = currentTheme === 'dark';
                currentResolvedTheme = currentTheme;
                localStorage.setItem('theme', currentTheme);
            }
            
            // Update the resolvedTheme state
            setResolvedThemeState(currentResolvedTheme);

            // Apply the theme class
            root.classList.toggle('dark', isDark);
        };

        applyTheme(theme);

        const handleSystemChange = (e: MediaQueryListEvent) => {
            if (theme === 'system') {
                root.classList.toggle('dark', e.matches);
                setResolvedThemeState(e.matches ? 'dark' : 'light');
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

    return { theme, setTheme, resolvedTheme };

}