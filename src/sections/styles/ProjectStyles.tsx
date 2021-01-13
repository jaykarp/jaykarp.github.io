import styled from 'styled-components/macro'
import { CardContainer } from '../../components/styles/ProjectCardStyles'

export const WidthManager = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: -22rem;
`

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
    margin: 4rem 0;
    width: 100%;
    position: relative;
    max-width: 1000px;
`

export const ProjectCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 95vw;
    z-index: 100;
    max-width: 1000px;
    @media (max-width: 1000px) {
        flex-direction: column;
        ${CardContainer}:nth-child(odd) {
            margin-right: 20%;
        }
        ${CardContainer}:nth-child(even) {
            margin-left: 20%;
        }
    }
    @media (max-width: 500px) {
        flex-direction: column;
        ${CardContainer}:nth-child(odd) {
            margin-right: 10%;
        }
        ${CardContainer}:nth-child(even) {
            margin-left: 10%;
        }
    }
`

export const ProjectsHeader = styled.div`
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
    z-index: 100;
`
export const CollapseContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 6rem;
    z-index: 100;
`

export const ProjectSpacer = styled.div`
    ${({
        theme: {
            colors: { white },
        },
    }) => `
        background: ${white}; 
    `}
    z-index: 1;
    width: 150%;
    height: 34rem;
    border-radius: 50%;
    min-width: 1255px;
    transform: rotate(-2deg);
    margin-top: -27rem;
    margin-bottom: -6rem;
`
