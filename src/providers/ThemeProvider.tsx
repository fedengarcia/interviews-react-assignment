import React from 'react'
import ThemeContext from './ThemeContext';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import { IThemeProviderProps } from './type';
import { customTheme } from './Themes';


const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }: IThemeProviderProps) => {

    return (
        <ThemeContext.Provider
            value={{
                theme: customTheme,
            }}
        >
            <MaterialThemeProvider theme={customTheme}>
                {children}
            </MaterialThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
