import React, { memo } from 'react'
import {
    FooterContainer,
    FooterText,
    FooterTextSmall,
    WidthManager
} from './styles/FooterStyles'

interface Props {}

const Footer = (props: Props) => {
    return (
        <WidthManager>
            <FooterContainer>
                <FooterText> Copyright &copy; Jay Karp 2021 </FooterText>
                <FooterTextSmall>designed and built by me.</FooterTextSmall>
            </FooterContainer>
        </WidthManager>
    )
}

export default memo(Footer)
