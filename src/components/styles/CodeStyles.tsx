import styled from 'styled-components/macro'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import go from 'react-syntax-highlighter/dist/esm/languages/prism/go'
import haskell from 'react-syntax-highlighter/dist/esm/languages/prism/haskell'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('go', go)
SyntaxHighlighter.registerLanguage('haskell', haskell)

export const StyledCode = styled(SyntaxHighlighter)`
    background: ${({ color }) => color} !important;
    color: rgb(256, 256, 256) !important;
    font-size: 0.5rem !important;
    overflow: hidden !important;
    margin: 0px !important;
    border-radius: 0 0 1rem 1rem !important;
    padding: 1rem !important;
    display: flex;
`

export const CodeContainer = styled.div`
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow};
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    min-width: 230px;
`

export const CodeHeader = styled.div`
    border-radius: 1rem 1rem 0 0;
    background: var(--dark-color);
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 15px;
`
export const Dot = styled.div`
    background: var(--background-color);
    height: 8px;
    width: 8px;
    border-radius: 100%;
    margin-right: 4px;
`
