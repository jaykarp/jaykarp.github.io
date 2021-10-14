import React, { forwardRef, useEffect } from 'react'
import hs from '../assets/headshot2.svg'
import Shape from '../components/Shape'
import {
    ConnectContainer,
    ConnectHeader,
    ContentContainer,
    HeadshotContainer,
    Headshot,
    Arrow,
    Link,
    LinksContainer,
    LinkContainer,
} from './styles/ConnectStyles'
import { WidthManager } from './styles/ConnectStyles'

interface Props { }

const Connect = forwardRef<HTMLDivElement>((props: Props, ref) => {
    useEffect(() => {
        const email = `amxrMjIyNUBjb2x1bWJpYS5lZHU=`
        const links = document.querySelectorAll<HTMLElement>(
            `[data-gen='email']`
        )
        links.forEach((l) => {
            l.onmouseover = l.ontouchstart = () =>
                l.setAttribute('href', `mailto:${atob(email)}`)
        })
        return () => {
            links.forEach((l) => {
                l.onmouseover = l.ontouchstart = () => null
            })
        }
    }, [])
    return (
        <WidthManager>
            <ConnectContainer ref={ref}>
                <Shape
                    shape={'triangle'}
                    size={'3rem'}
                    rotation={'200deg'}
                    top={'60%'}
                    left={'35%'}
                    xleft={'50%'}
                />
                <Shape
                    shape={'hexagon'}
                    size={'6rem'}
                    rotation={'20deg'}
                    top={'80%'}
                    left={'-30%'}
                />
                <ConnectHeader> Connect </ConnectHeader>
                <ContentContainer>
                    <LinksContainer>
                        <LinkContainer
                            href={'#'}
                            target={'_blank'}
                            rel={'noreferrer noopener'}
                            data-gen={'email'}>
                            <Arrow indent={'0rem'}>&rarr;&nbsp;</Arrow>
                            <Link color={'#456268'}>email.</Link>
                        </LinkContainer>
                        <LinkContainer
                            href={'https://www.linkedin.com/in/jaykarp/'}
                            target={'_blank'}
                            rel={'noreferrer noopener'}
                        >
                            <Arrow indent={'1.5rem'}>&rarr;&nbsp;</Arrow>
                            <Link color={'#FF8A00'}>linkedin.</Link>
                        </LinkContainer>
                        <LinkContainer
                            href={'https://www.github.com/jaykarp'}
                            target={'_blank'}
                            rel={'noreferrer noopener'}
                        >
                            <Arrow indent={'3rem'}>&rarr;&nbsp;</Arrow>
                            <Link color={'#D0E8F2'}>github.</Link>
                        </LinkContainer>
                        <LinkContainer
                            href={'https://docs.google.com/viewer?url=https://github.com/jaykarp/jaykarp.github.io/raw/main/public/jk_resume_2021.pdf'}
                            target={'_blank'}
                            rel={'noreferrer noopener'}
                        >
                            <Arrow indent={'4.5rem'}>&rarr;&nbsp;</Arrow>
                            <Link color={'#79A3B1'}>resume.</Link>
                        </LinkContainer>
                    </LinksContainer>
                    <HeadshotContainer>
                        <Headshot src={hs} alt={'Jays headshot'}></Headshot>
                    </HeadshotContainer>
                </ContentContainer>
            </ConnectContainer>
        </WidthManager>
    )
})

export default Connect
