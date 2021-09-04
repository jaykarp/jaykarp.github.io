import { useEffect, useState } from 'react'

export enum Themes {
    light,
    dark
}

const THEME_IDENTIFIER = 'com.theme.jaykarp'

export const useDarkMode = (): [Themes, () => void, boolean] => {
    const [theme, setTheme] = useState(Themes.light)
    const [componentMounted, setComponentMounted] = useState(false)

    const setMode = (mode: Themes) => {
        window.localStorage.setItem(THEME_IDENTIFIER, String(mode))
        switch (mode) {
            case Themes.light:
                document.documentElement.setAttribute('data-theme', 'light')
                break
            case Themes.dark:
                document.documentElement.setAttribute('data-theme', 'dark')
                break
        }
        setTheme(mode)
    }

    const toggleTheme = () => {
        switch (theme) {
            case Themes.light:
                setMode(Themes.dark)
                break
            case Themes.dark:
                setMode(Themes.light)
                break
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem(THEME_IDENTIFIER)
        if (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            if (!localTheme) {
                setMode(Themes.dark)
            } else {
                setMode(+localTheme)
            }
        } else {
            setMode(Themes.light)
        }
        setComponentMounted(true)
    }, [])

    return [theme, toggleTheme, componentMounted]
}
