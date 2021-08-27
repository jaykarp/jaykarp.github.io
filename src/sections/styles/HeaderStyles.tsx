import styled, { css } from 'styled-components/macro'
import { Squash as _Hamburger } from 'hamburger-react'

export const Sections = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
`

export const Hamburger = styled(_Hamburger)``

export const HamburgerContainer = styled.div`
    display: none;
    padding: 10px;
    justify-content: flex-end;
    flex: 1;
    @media (max-width: 800px) {
        display: flex;
    }
`

export const Filler = styled.div`
    ${({
    theme: {
        colors: { background },
    },
}) => css`
        background: ${background};
    `};
    width: 100%;
    height: 4.2rem;
`

type ManagerProps = {
    isTop: boolean
}

export const WidthManager = styled.div<ManagerProps>`
    ${({
    theme: {
        colors: { background },
    },
    isTop,
}) => css`
        background: ${background};
        box-shadow: ${isTop
        ? `0px 6px 6px ${background}`
        : '0px 2px 2px rgba(0, 0, 0, 0.1)'};
    `};
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 101;
    transition: all 0.5s;
`

export const HeaderContainer = styled.div`
    display: flex;
    max-width: 1200px;
    width: 100%;
    padding: 0 2rem;
    /* height: 4.2rem; */
    position: relative;
    flex-direction: column;
`

export const HeaderTop = styled.div`
    display: flex;
    width: 100%;
`

export const HeaderNav = styled.div`
    flex: 1;
    will-change: height;
`

export const LogoContainer = styled.div`
    display: flex;
`

export const SmallItemContainer = styled.div`
    display: none;
    justify-content: flex-end;
    flex: 1;
    flex-direction: column;
    align-items: center;
    @media (max-width: 800px) {
        display: flex;
        width: 100%;
        background: ${({
    theme: {
        colors: { background },
    },
}) => background};
    }
`

export const ItemContainer = styled.nav`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    @media (max-width: 800px) {
        display: none;
    }
`
export const HeaderItem = styled.div`
    ${({ theme: { fonts } }) => css`
        font-family: ${fonts.body.family};
        font-size: ${fonts.medium};
        padding: 10px;
    `}
    cursor: pointer;
`
