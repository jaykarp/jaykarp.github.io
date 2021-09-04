import React from 'react'
import { Themes } from '../helpers/useDarkMode'
import { Toggle, Input, Slider } from './styles/ThemeToggleStyles'

interface Props {
    theme: Themes
    toggleTheme: () => void
}

export const ThemeToggle = ({ theme, toggleTheme }: Props) => {
    return (
        <Toggle onClick={toggleTheme}>
            <Input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === Themes.light ? false : true}
                id={'mode'}
            />
            <Slider />
        </Toggle>
    )
}
