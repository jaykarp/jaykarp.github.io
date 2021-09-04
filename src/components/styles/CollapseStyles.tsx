import styled from 'styled-components/macro'
import { Collapse as _Collapse } from 'react-collapse'

export const CollapseContainer = styled.div`
    ${({ theme: { boxShadow } }) => `
        box-shadow: ${boxShadow};
    `}
    border-radius: 0 0 5px 5px;
    background: var(--background-color);
    border: 1px solid var(--light-color);
    display: grid;
    width: 75vw;
    max-width: 1000px;
    @media (max-width: 800px) {
        width: 90vw;
    }
`

export const Coll = styled(_Collapse)`
    grid-column: 1;
    grid-row: 1;
`

export const CollapseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 2rem 0 2rem;
`

export const HeaderContainer = styled.div`
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
`

export const CollapseHeader = styled.div`
    flex: 1;
`

export const CollapseClose = styled.div`
    ${({
        theme: {
            fonts: {
                body: { family }
            }
        }
    }) => `
        font-family: ${family};
    `}
    color: var(--dark-color);
    cursor: pointer;
`

export const DescriptionContainer = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
`

export const CollapseDescription = styled.div`
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
    text-align: justify;
`

export const LanguagesContainer = styled.div`
    ${({
        theme: {
            fonts: {
                body: { family },
                xsmall
            }
        }
    }) => `
        font-family: ${family};
        font-size: calc(${xsmall} - 0.2rem);
    `}
    color: var(--accent-color);
    display: flex;
    font-weight: bold;
    margin-top: 1rem;
`
