import styled from 'styled-components/macro'

export const WidthManager = styled.div`
    background: var(--background-color);
    width: 100%;
    display: flex;
    justify-content: center;
`

export const IntroContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    height: calc(100vh - 4.2rem);
    max-height: 775px;
    min-height: 400px;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const IntroTextContainer = styled.header`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    z-index: 100;
    @media (max-width: 768px) {
        flex: none;
    }
`

export const IntroImgContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    z-index: 100;
    @media (max-width: 768px) {
        flex: none;
        justify-content: center;
    }
`

export const IntroImg = styled.img`
    width: 60vh;
    max-width: 500px;
    min-height: 275px;
    min-width: 280px;
    @media (max-width: 768px) {
        max-width: 400px;
    }
`

export const IntroText = styled.div`
    ${({
        theme: {
            fonts: {
                large,
                header: { family }
            }
        }
    }) => `
        font-size: ${large};
        font-family: ${family};
        
    `}
    color: var(--black-color);
    padding-bottom: 20px;
`

export const IntroTextAccent = styled.div`
    ${({
        theme: {
            fonts: {
                large,
                header: { family }
            }
        }
    }) => `
        font-size: ${large};
        font-family: ${family}; 
    `}
    color: var(--accent-color);
    padding-bottom: 20px;
`
