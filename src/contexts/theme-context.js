import React, { createContext, useState } from "react"
import backgroundLight from '../images/background-pokeball.jpg'
import backgroundDark  from '../images/background-inv.jpg'

export const themes = {
    light: {
        color: '#14213D',
        image: `url(${backgroundLight})`,
        background: '#e0e1dd'
    },
    dark: {
        color: '#e0e1dd',
        image: `url(${backgroundDark})`,
        background: '#c22027'
    }
}

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light)

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}