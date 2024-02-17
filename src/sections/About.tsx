import React from 'react'
import {
    AboutContainer,
    CloudContainer,
    TextContainer,
    AboutText,
    CloudImg,
    WidthManager,
    AboutSpacer,
} from './styles/AboutStyles'
import cloud from '../assets/wordcloud_square.png'
import Shape from '../components/Shape'

interface Props { }

const About = (props: Props) => {
    return (
        <>
            <WidthManager>
                <AboutContainer>
                    <Shape
                        shape={'triangle'}
                        size={'4rem'}
                        rotation={'75deg'}
                        top={'90%'}
                        left={'30%'}
                    />
                    <CloudContainer>
                        <CloudImg src={cloud} alt={'Word cloud about current interest, topics include: languages, systems, frameworks, etc.'} />
                    </CloudContainer>
                    <TextContainer>
                        <AboutText>
                            I’m a software engineer working at Twitch as part of Amazon Web Services IVS.
                            My interests span the full product development process, from user
                            research and prototyping to system implementation
                            and design. When I’m not programming, you can find
                            me playing saxophone and piano or baking fresh
                            bread. I’m currently looking for job opportunities
                            for {new Date().getFullYear()}. Check out some of my projects below - including 
                            the website itself! And please contact me with any 
                            questions or opportunities.
                        </AboutText>
                    </TextContainer>
                </AboutContainer>
            </WidthManager>
            <AboutSpacer />
        </>
    )
}

export default About
