import styled from 'styled-components/macro'

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

export const AboutContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 20px 0;
    display: flex;
    margin: 1rem 0 -8.125rem 0;
    position: relative;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const CloudContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1 1 auto;
    z-index: 100;
    @media (max-width: 768px) {
        justify-content: center;
        margin-bottom: 10px;
    }
`

export const TextContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1.5 1 auto;
    z-index: 100;
`

export const AboutText = styled.div`
    ${({
    theme: {
        colors: { black },
        fonts: {
            small,
            body: { family },
        },
    },
}) => `
        color: ${black};
        font-size: ${small};
        font-family: ${family};
        
    `}
    text-align: justify;
    width: 75%;
    @media (max-width: 500px) {
        width: 90%;
    }
`

export const CloudImg = styled.img`
    width: 50%;
    min-width: 300px;
`

export const AboutSpacer = styled.div`
    ${({
    theme: {
        colors: { background },
    },
}) => `
        background: ${background};
        
    `}
    width: 140%;
    height: 40rem;
    border-radius: 50% / 45%;
    z-index: -100;
    min-width: 1255px;
    /* border-bottom-left-radius: 50% 100%;
    border-bottom-right-radius: 50% 100%;
    border-top-right-radius: 0;
    border-top-left-radius: 0; */
    transform: translateX(10%);
    margin-top: -26.25rem;
`
