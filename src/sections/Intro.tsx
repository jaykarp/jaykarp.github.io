import React from 'react'
import {
    WidthManager,
    IntroContainer,
    IntroImgContainer,
    IntroImg,
    IntroTextContainer,
    IntroText,
    IntroTextAccent,
} from './styles/IntroStyles'
import Shape from '../components/Shape'
import cartoon from '../assets/cartoon_jay.png'

interface Props { }

const Intro = (props: Props) => {
    return (
        <WidthManager>
            <IntroContainer>
                <Shape
                    shape={'pentagon'}
                    size={'6rem'}
                    rotation={'25deg'}
                    top={'5%'}
                    left={'-35%'}
                    xleft={'-35%'}
                    xtop={'10%'}
                />
                <Shape
                    shape={'circle'}
                    size={'6rem'}
                    rotation={'75deg'}
                    top={'65%'}
                    left={'2%'}
                    xleft={'5%'}
                    xtop={'55%'}
                />
                <Shape
                    shape={'square'}
                    size={'6rem'}
                    rotation={'30deg'}
                    top={'75%'}
                    left={'-30%'}
                />
                <IntroTextContainer>
                    <IntroText>Hi, I'm</IntroText>
                    <IntroTextAccent>&nbsp;Jay.</IntroTextAccent>
                </IntroTextContainer>
                <IntroImgContainer>
                    <IntroImg src={cartoon} alt={'Cartoon drawing of Jay at his desk, drawn by Jay'} />
                </IntroImgContainer>
            </IntroContainer>
        </WidthManager>
    )
}

export default Intro
