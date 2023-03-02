import React, { forwardRef } from "react";
import Shape from "../components/Shape";
import {
    WidthManager,
    SkillsContainer,
    SkillsGrid,
    GridHeader,
    Header,
    GridLanguages,
    LanguagesContainer,
    LanguagesHeader,
    Language,
    GridFrameworks,
    FrameworksContainer,
    FrameworksLeft,
    FrameworksRight,
    FrameworksHeader,
    Framework,
    GridTechnologies,
    TechnologiesContainer,
    TechnologiesHeader,
    TechnologiesLeft,
    TechnologiesRight,
    Technology,
    LRContainer
} from "./styles/SkillsStyles";

const Skills = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <WidthManager>
            <SkillsContainer ref={ref}>
                {/* <Shape
                    shape={'circle'}
                    size={'5rem'}
                    rotation={'120deg'}
                    top={'12%'}
                    left={'-28%'}
                /> */}
                <Shape
                    shape={"square"}
                    size={"6rem"}
                    rotation={"250deg"}
                    top={"12%"}
                    left={"20%"}
                />
                <Shape
                    shape={"circle"}
                    size={"4rem"}
                    rotation={"20deg"}
                    top={"35%"}
                    left={"-10%"}
                />
                {/* <Shape
                    shape={'circle'}
                    size={'5rem'}
                    rotation={'290deg'}
                    top={'50%'}
                    left={'20%'}
                /> */}
                <Shape
                    shape={"triangle"}
                    size={"3rem"}
                    rotation={"10deg"}
                    top={"55%"}
                    left={"2%"}
                />
                <Shape
                    shape={"pentagon"}
                    size={"6rem"}
                    rotation={"165deg"}
                    top={"75%"}
                    left={"-20%"}
                />
                <Shape
                    shape={"hexagon"}
                    size={"5rem"}
                    rotation={"207deg"}
                    top={"80%"}
                    left={"20%"}
                />
                <SkillsGrid>
                    <GridHeader>
                        <Header>Skills</Header>
                    </GridHeader>
                    <GridLanguages>
                        <LanguagesContainer>
                            <LanguagesHeader>Languages.</LanguagesHeader>
                            <Language>Golang</Language>
                            <Language>Typescript & Javascript</Language>
                            <Language>HTML & CSS</Language>
                            <Language>C</Language>
                            <Language>Swift</Language>
                            <Language>Haskell</Language>
                            <Language>Ruby</Language>
                            <Language>Bash</Language>
                            <Language>LaTeX</Language>
                        </LanguagesContainer>
                    </GridLanguages>
                    <GridFrameworks>
                        <FrameworksContainer>
                            <LRContainer>
                                <FrameworksLeft>
                                    <FrameworksHeader>
                                        Frameworks.
                                    </FrameworksHeader>
                                    <Framework>React</Framework>
                                    <Framework>Styled UI</Framework>
                                    <Framework>Node.js</Framework>
                                    <Framework>GraphQL</Framework>
                                    <Framework>Bootstrap</Framework>
                                    <Framework>JQuery</Framework>
                                    <Framework>Apollo</Framework>
                                </FrameworksLeft>
                                <FrameworksRight>
                                    <Framework>SwiftUI</Framework>
                                    <Framework>AppKit & UIKit</Framework>
                                    <Framework>NumPy</Framework>
                                    <Framework>Selenium</Framework>
                                    <Framework>Flask</Framework>
                                    <Framework>Tensorflow</Framework>
                                    <Framework>Ruby On Rails</Framework>
                                    <Framework>Parse</Framework>
                                </FrameworksRight>
                            </LRContainer>
                        </FrameworksContainer>
                    </GridFrameworks>
                    <GridTechnologies>
                        <TechnologiesContainer>
                            <TechnologiesHeader>
                                Technologies.
                            </TechnologiesHeader>
                            <LRContainer>
                                <TechnologiesLeft>
                                    <Technology>Vim</Technology>
                                    <Technology>TMUX</Technology>
                                    <Technology>VS Code</Technology>
                                    <Technology>Microsoft Office</Technology>
                                    <Technology>Git & Github</Technology>
                                    <Technology>G Suite</Technology>
                                    <Technology>Docker</Technology>
                                </TechnologiesLeft>
                                <TechnologiesRight>
                                    <Technology>AWS</Technology>
                                    <Technology>Firebase</Technology>
                                    <Technology>&nbsp;</Technology>
                                    <Technology>Balsamiq</Technology>
                                    <Technology>Figma</Technology>
                                    <Technology>MailChimp</Technology>
                                </TechnologiesRight>
                            </LRContainer>
                        </TechnologiesContainer>
                    </GridTechnologies>
                </SkillsGrid>
            </SkillsContainer>
        </WidthManager>
    );
});

export default Skills;
