import styled from 'styled-components/macro'

export const WidthManager = styled.div`
    background: var(--background-color);
    width: 125%;
    display: flex;
    justify-content: center;
    border-top-left-radius: 50rem 5rem;
    border-top-right-radius: 50rem 15rem;
`

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4rem 0;
    width: 100vw;
    max-width: 1200px;
    position: relative;
    @media (max-width: 500px) {
        width: 90vw;
    }
`

export const ExperienceHeader = styled.header`
    ${({
        theme: {
            fonts: {
                header: { family },
                large
            }
        }
    }) => `
        font-family: ${family};
        font-size: ${large};
    `}
    margin-left: 5rem;
`

export const ExperienceSpacer = styled.div`
    background: var(--white-color);
    z-index: 0;
    width: 120%;
    height: 30rem;
    border-radius: 50%;
    min-width: 1255px;
    transform: rotate(-7deg);
    margin-top: -13rem;
`
