import styled, { css } from 'styled-components/macro'

type JobProps = {
    isLeft: boolean
}

export const JobContainer = styled.div<JobProps>`
    z-index: 100;
    flex-direction: ${({ isLeft }) => (isLeft ? 'row-reverse' : 'row')};
    display: flex;
    justify-content: center;
    margin: 2rem 6rem;
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 2rem 2rem;
    }
    @media (max-width: 500px) {
        margin: 2rem 0;
    }
`

export const JobHeader = styled.div<JobProps>`
    ${({
        theme: {
            fonts: {
                body: { family },
                medium,
            },
        },
    }) => `
        font-family: ${family};
        font-size: ${medium};
    `}
    margin: 0.5rem 3rem 0.5rem 3rem;
`

export const JobImgContainer = styled.div<JobProps>`
    ${({ isLeft }) => css`
        justify-content: ${isLeft ? 'flex-end' : 'flex-start'};
        @media (max-width: 768px) {
            justify-content: center;
        }
    `}
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    /* @media (max-width: 768px) {
        justify-content: center;
    } */
`

export const JobImgBackground = styled.div<JobProps>`
    ${({
        theme: {
            colors: { medium, dark },
            borderRadius,
        },
        isLeft,
    }) => `
        background: ${isLeft ? medium : dark};
        border-radius: ${borderRadius};
    `}
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
`

type ImgProps = {
    width: string
}

export const JobImg = styled.img<ImgProps>`
    width: ${({ width }) => width};
    max-width: 100%;
`

export const JobDescriptionContainer = styled.div<JobProps>`
    ${({ isLeft }) => `
        align-items: ${isLeft ? 'flex-start' : 'flex-end'}; 
        margin: ${isLeft ? '0 1rem 0 0' : '0 0 0 1rem'};
    `}
    display: flex;
    flex-direction: column;
    flex: 2 1 auto;
    @media (max-width: 500px) {
        margin: 0;
    }
`

export const JobDescription = styled.div`
    ${({
        theme: {
            fonts: {
                body: { family },
                small,
            },
        },
    }) => css`
        font-family: ${family};
    `}
    font-size: 1rem;
    margin: 1rem 0;
    text-align: justify;
    @media (max-width: 800px) {
        font-size: 1rem;
    }
`

export const JobLanguages = styled.div<JobProps>`
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
    margin: 0.4rem 0;
    font-weight: bold;
`

export const JobTagContainer = styled.div<JobProps>`
    display: flex;
`

export const JobTag = styled.div<JobProps>`
    ${({
        theme: {
            colors: { medium, dark },
            fonts: {
                body: { family },
                xsmall,
            },
            borderRadiusSmall,
        },
        isLeft,
    }) => `
        font-family: ${family};
        font-size: ${xsmall};
        background: ${isLeft ? medium : dark};
        margin: ${isLeft ? '0 0.3rem 0 0' : '0 0 0 0.3rem'};
        border-radius: ${borderRadiusSmall};
    `}}
    padding: 0.3rem;
    color: white;
`
