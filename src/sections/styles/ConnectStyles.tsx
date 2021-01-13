import styled, { css } from 'styled-components/macro'

export const WidthManager = styled.div`
    background: ${({
        theme: {
            colors: { background },
        },
    }) => background};
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ConnectContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 3rem 0 7rem 0;
    position: relative;
    @media (max-width: 500px) {
        margin: 3rem 0 5rem 0;
    }
`

export const ConnectHeader = styled.div`
    ${({
        theme: {
            colors: { black },
            fonts: {
                large,
                header: { family },
            },
        },
    }) => `
        color: ${black};
        font-size: ${large};
        font-family: ${family};
    `}
    margin-left: 5rem;
    margin-bottom: 2rem;
    z-index: 100;
`

export const ContentContainer = styled.div`
    display: flex;
    z-index: 100;
    @media (max-width: 450px) {
        flex-direction: column-reverse;
    }
`

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    @media (max-width: 450px) {
        align-self: center;
    }
`

export const LinkContainer = styled.a`
    ${({
        theme: {
            colors: { black },
            fonts: {
                small,
                body: { family },
            },
        },
    }) => css`
        color: ${black};
        font-size: ${small};
        font-family: ${family};
        @media (max-width: 450px) {
            font-size: calc(${small} + 0.3rem);
        }
    `}
    display: flex;
    transition: all 0.2s;
    text-decoration: none;
    cursor: pointer;
    padding-left: 40%;
    margin-top: 0.5rem;
    will-change: transform;
    &:hover {
        transform: translateX(2px);
    }
    @media (max-width: 600px) {
        padding-left: 20%;
    }
    @media (max-width: 450px) {
        padding-left: 0;
    }
`

type LinkProps = {
    color: string
}

export const Link = styled.div<LinkProps>`
    ${({ color }) => `
        border-bottom: 3px solid ${color};
    `}
    padding: 0.1rem;
`

type ArrowProps = {
    indent: string
}

export const Arrow = styled.div<ArrowProps>`
    margin-left: ${({ indent }) => indent};
`

export const HeadshotContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    margin-left: 1rem;
    @media (max-width: 450px) {
        justify-content: center;
        margin-left: 0;
    }
`

export const Headshot = styled.img`
    width: 12rem;
    @media (max-width: 450px) {
        width: 65vw;
    }
`
