import styled from 'styled-components/macro'

export const WidthManager = styled.div`
    background: var(--background-color);
    width: 100%;
    display: flex;
    justify-content: center;
`

export const FooterContainer = styled.div`
    ${({
        theme: {
            fonts: {
                xsmall,
                body: { family }
            }
        }
    }) => `
        font-family: ${family};
        font-size: ${xsmall};
    `}
    background: var(--dark-color);
    color: var(--white-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 100%;
`

export const FooterText = styled.div``
export const FooterTextSmall = styled.div`
    font-size: 0.8rem;
`
