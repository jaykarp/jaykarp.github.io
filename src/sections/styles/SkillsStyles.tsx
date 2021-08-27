import styled from 'styled-components/macro'

export const WidthManager = styled.div`
    background: ${({
    theme: {
        colors: { white },
    },
}) => white};
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
`

export const SkillsContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    position: relative;
`

export const SkillsGrid = styled.div`
    z-index: 100;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.4fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        'Header Header Header'
        'Languages Frameworks Frameworks'
        'Languages Technologies Technologies';
    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

export const GridHeader = styled.div`
    grid-area: Header;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Header = styled.header`
    ${({
    theme: {
        fonts: {
            header: { family },
            large,
        },
    },
}) => `
        font-family: ${family};
        font-size: ${large};
    `}
`

export const GridLanguages = styled.div`
    grid-area: Languages;
    display: flex;
    align-items: flex-start;

    margin-right: 20px;
    @media (max-width: 800px) {
        justify-content: center;
        margin-right: -50%;
    }
    @media (max-width: 500px) {
        margin-left: 1rem;
        margin-top: 1rem;
        justify-content: flex-start;
    }
`

export const LanguagesContainer = styled.div`
    ${({
    theme: {
        boxShadow,
        borderRadius,
        colors: { background },
    },
}) => `
        box-shadow ${boxShadow};
        border-radius: ${borderRadius};
        background: ${background};
    `}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 20px 10px 20px;
`

export const LanguagesHeader = styled.div`
    ${({
    theme: {
        fonts: {
            header: { family },
            small,
        },
    },
}) => `
        font-family: ${family};
        font-size: ${small};
    `}
    padding-bottom: 5px;
`

export const Language = styled.div`
    ${({
    theme: {
        fonts: {
            body: { family },
            xsmall,
        },
    },
}) => `
        font-family: ${family};
        font-size: ${xsmall};
    `}
`

export const GridFrameworks = styled.div`
    grid-area: Frameworks;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 500px) {
        margin-right: 1rem;
        margin-top: 1rem;
        justify-content: flex-end;
    }
`

export const FrameworksContainer = styled.div`
    ${({
    theme: {
        boxShadow,
        borderRadius,
        colors: { medium },
    },
}) => `
        box-shadow ${boxShadow};
        border-radius: ${borderRadius};
        background: ${medium};
    `}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 20px 10px 20px;
    margin-left: 110px;
    @media (max-width: 800px) {
        justify-content: center;
        margin-right: -50%;
        margin-left: 40px;
        margin-top: 36px;
        z-index: 0;
    }
    @media (max-width: 500px) {
        margin-top: 0px;
        margin-left: 0px;
        margin-right: 0px;
    }
`

export const LRContainer = styled.div`
    display: flex;
`

export const FrameworksLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FrameworksRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
`

export const FrameworksHeader = styled.div`
    ${({
    theme: {
        fonts: {
            header: { family },
            small,
        },
        colors: { white },
    },
}) => `
        font-family: ${family};
        font-size: ${small};
        color: ${white};
    `}
    padding-bottom: 5px;
`

export const Framework = styled.div`
    ${({
    theme: {
        fonts: {
            body: { family },
            xsmall,
        },
        colors: { white },
    },
}) => `
        font-family: ${family};
        font-size: ${xsmall};
        color: ${white};
    `}
`

export const GridTechnologies = styled.div`
    grid-area: Technologies;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 500px) {
        margin-left: 1rem;
        margin-top: 1rem;
        justify-content: flex-start;
    }
`
export const TechnologiesContainer = styled.div`
    ${({
    theme: {
        borderRadius,
        colors: { white },
    },
}) => `
        border-radius: ${borderRadius};
        background: ${white};
    `}
    margin-top: 20px;
    margin-left: 20px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 20px 10px 20px;
    @media (max-width: 500px) {
        margin-left: 0px;
        margin-top: 0px;
    }
`

export const TechnologiesLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const TechnologiesRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TechnologiesHeader = styled.div`
    ${({
    theme: {
        fonts: {
            header: { family },
            small,
        },
        colors: { black },
    },
}) => `
        font-family: ${family};
        font-size: ${small};
        color: ${black};
    `}
    padding-bottom: 5px
`

export const Technology = styled.div`
    ${({
    theme: {
        fonts: {
            body: { family },
            xsmall,
        },
        colors: { black },
    },
}) => `
        font-family: ${family};
        font-size: ${xsmall};
        color: ${black};
    `}
`
