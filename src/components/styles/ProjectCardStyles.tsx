import styled, { css } from 'styled-components/macro'

export const Card = styled.div`
    ${({ theme: { borderRadius, boxShadow } }) => `
        border-radius: ${borderRadius};
        box-shadow: ${boxShadow};
    `}
    background: var(--background-color);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 1rem;
    width: 100%;
    min-width: 170px;
    max-width: 270px;
`

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const CardHeader = styled.div`
    ${({
        theme: {
            fonts: {
                body: { family },
                medium
            }
        }
    }) => `
        font-family: ${family};
        font-size: calc(${medium} - 0.5rem);
    `}
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
`

export const CardDescription = styled.div`
    ${({
        theme: {
            fonts: {
                body: { family },
                xsmall
            }
        }
    }) => `
        font-family: ${family};
        font-size: ${xsmall};
    `}
    display: flex;
    margin-top: 0.7rem;
    margin-bottom: 0.2rem;
`

export const CardTagContainer = styled.div`
    display: flex;
`

type CardProps = {
    color: string
}

export const CardTag = styled.div<CardProps>`
    ${({
        theme: {
            fonts: {
                body: { family },
                xsmall
            },
            borderRadiusSmall
        },
        color
    }) => css`
        font-family: ${family};
        font-size: calc(${xsmall} - 0.2rem);
        background: ${color};
        margin: 0 0.3rem 0 0;
        border-radius: ${borderRadiusSmall};
    `}
    padding: 0.2rem;
    color: white;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0.3rem 0.4rem 0.3rem 0;
`

export const MoreContainer = styled.div`
    ${({
        theme: {
            fonts: {
                body: { family },
                xsmall
            }
        }
    }) => `
        font-family: ${family};
        font-size: ${xsmall};
    `}
    margin: 0.3rem 0;
    display: flex;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
        transform: translateX(2px);
    }
`

export const Arrow = styled.div``

export const More = styled.div<CardProps>`
    ${({
        theme: {
            fonts: {
                body: { family },
                xsmall
            }
        },
        color
    }) => `
        font-family: ${family};
        font-size: ${xsmall};
        border-bottom: 3px solid ${color};
    `}
`
