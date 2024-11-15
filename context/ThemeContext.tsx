// ThemeContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Appearance } from 'react-native';
import { lightTheme, darkTheme } from '../constants/Themes';

// Define a Theme type
type Theme = typeof lightTheme; // Assuming lightTheme and darkTheme have the same structure

// Define the context value type
interface ThemeContextType {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

// Create the ThemeContext with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode; // Type for children
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const colorScheme = Appearance.getColorScheme();
    const [theme, setTheme] = useState<Theme>(colorScheme === 'dark' ? darkTheme : lightTheme);

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
        });

        return () => subscription.remove();
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook for easier use of ThemeContext
export const useTheme = (): ThemeContextType => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default ThemeContext;
