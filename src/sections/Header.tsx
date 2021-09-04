import React, { memo, useEffect, useState } from 'react'
import {
    HeaderContainer,
    LogoContainer,
    ItemContainer,
    HeaderItem,
    WidthManager,
    Filler,
    Hamburger,
    HamburgerContainer,
    DarkModeToggle,
    SmallItemContainer,
    HeaderTop,
    HeaderNav
} from './styles/HeaderStyles'
import { Collapse } from 'react-collapse'
import { ThemeToggle } from '../components/ThemeToggle'
import './styles/HeaderStyles.css'
import { Themes } from '../helpers/useDarkMode'

interface Props {
    refs: {
        skillsRef: React.RefObject<HTMLDivElement>
        experienceRef: React.RefObject<HTMLDivElement>
        projectsRef: React.RefObject<HTMLDivElement>
        connectRef: React.RefObject<HTMLDivElement>
    }
    theme: Themes
    toggleTheme: () => void
}

const scrollToTargetAdjusted = (el: HTMLDivElement) => {
    const headerOffset = 100
    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition - headerOffset
    const windowPosition = window.pageYOffset

    window.scrollTo({
        top: windowPosition + offsetPosition,
        behavior: 'smooth'
    })
}

const Header = ({ refs, theme, toggleTheme }: Props) => {
    const [isTop, setIsTop] = useState(true)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset < 1) {
                setIsTop(true)
            } else if (isTop) {
                setIsTop(false)
            }
        }
        return () => {
            window.onscroll = null
        }
    }, [isTop])

    const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current == null) {
            return
        }
        scrollToTargetAdjusted(ref.current)
    }

    const sscrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current == null) {
            return
        }
        setOpen(false)
        scrollToTargetAdjusted(ref.current)
    }

    return (
        <>
            <Filler />
            <WidthManager isTop={isTop && !open}>
                <HeaderContainer>
                    <HeaderTop>
                        <LogoContainer>
                            <HeaderItem>jay karp</HeaderItem>
                        </LogoContainer>
                        <HamburgerContainer>
                            <DarkModeToggle>
                                <ThemeToggle
                                    theme={theme}
                                    toggleTheme={toggleTheme}
                                />
                            </DarkModeToggle>
                            <Hamburger
                                toggled={open}
                                toggle={setOpen}
                                easing={'ease-in-out'}
                                rounded
                            />
                        </HamburgerContainer>
                        <ItemContainer>
                            <HeaderItem
                                onClick={() => scrollTo(refs.skillsRef)}
                            >
                                skills
                            </HeaderItem>
                            <HeaderItem
                                onClick={() => scrollTo(refs.experienceRef)}
                            >
                                experience
                            </HeaderItem>
                            <HeaderItem
                                onClick={() => scrollTo(refs.projectsRef)}
                            >
                                projects
                            </HeaderItem>
                            <HeaderItem
                                onClick={() => scrollTo(refs.connectRef)}
                            >
                                connect
                            </HeaderItem>
                        </ItemContainer>
                    </HeaderTop>
                    <HeaderNav>
                        <Collapse
                            isOpened={open}
                            theme={{
                                collapse: 'headercollapse',
                                content: 'headercontent'
                            }}
                        >
                            <SmallItemContainer>
                                <HeaderItem
                                    onClick={() => sscrollTo(refs.skillsRef)}
                                >
                                    skills
                                </HeaderItem>
                                <HeaderItem
                                    onClick={() =>
                                        sscrollTo(refs.experienceRef)
                                    }
                                >
                                    experience
                                </HeaderItem>
                                <HeaderItem
                                    onClick={() => sscrollTo(refs.projectsRef)}
                                >
                                    projects
                                </HeaderItem>
                                <HeaderItem
                                    onClick={() => sscrollTo(refs.connectRef)}
                                >
                                    connect
                                </HeaderItem>
                            </SmallItemContainer>
                        </Collapse>
                    </HeaderNav>
                </HeaderContainer>
            </WidthManager>
        </>
    )
}

export default memo(Header)
