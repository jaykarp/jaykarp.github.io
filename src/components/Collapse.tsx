import React, { forwardRef, useEffect, useRef, useState } from 'react'
// import { Collapse as Coll } from 'react-collapse'
import {
    Coll,
    CollapseClose,
    CollapseContainer,
    CollapseDescription,
    CollapseHeader,
    CollapseWrapper,
    DescriptionContainer,
    HeaderContainer,
    LanguagesContainer,
} from './styles/CollapseStyles'
import './styles/CollapseStyles.css'

interface Props {
    open: Array<boolean>
    setOpen: React.Dispatch<React.SetStateAction<boolean[]>>
}

const Collapse = ({ open, setOpen }: Props, ref: any) => {
    const [copen, setCopen] = useState([false, false, false])
    const isFirst = useRef(true)
    const isAnimating = useRef(false)

    const arrEq = (a: Array<boolean>, b: Array<boolean>) =>
        JSON.stringify(a) === JSON.stringify(b)

    useEffect(() => {
        if (!arrEq(open, copen)) {
            if (isFirst.current) {
                isFirst.current = false
                setCopen(open)
            } else if (!isAnimating.current) {
                setCopen([false, false, false])
                isAnimating.current = true
                setTimeout(() => {
                    setCopen(open)
                    isAnimating.current = false
                }, 600)
            }
        }
    }, [open, copen])

    return (
        <CollapseContainer ref={ref}>
            <Coll isOpened={copen[0]}>
                <CollapseWrapper>
                    <HeaderContainer>
                        <CollapseHeader>Musely.</CollapseHeader>
                        <CollapseClose
                            onClick={() => {
                                setOpen([false, false, false])
                                setCopen([false, false, false])
                                isFirst.current = true
                            }}
                        >
                            x
                        </CollapseClose>
                    </HeaderContainer>
                    <DescriptionContainer>
                        <CollapseDescription>
                            In fall of 2019, I worked on Musely: a musical
                            note-taking app. Our initial user studies exploring
                            pain points for music students revealed a difficulty
                            recording information about music - especially when
                            those notes were tied to a certain time in the
                            piece. Previously, a student would need to write
                            down a timeframe and musical description (eg:
                            adagio) and later match it to the piece. This
                            written description was very difficult for students
                            to relate to a piece of music, especially in
                            remembering how the verbal notes related to the
                            music without re-listening. Our solution integrates
                            the music and the annotations in the same interface,
                            no longer a separate audio file and paper time
                            markings. We built a prototype that enabled students
                            to notate as they listened to the music, and to see
                            a visual representation of their notes overlaid on
                            the audio file.
                        </CollapseDescription>
                        <LanguagesContainer>
                            REACT.JAVASCRIPT.REDUX.BALSAMIQ.FIGMA
                        </LanguagesContainer>
                    </DescriptionContainer>
                </CollapseWrapper>
            </Coll>
            <Coll isOpened={copen[1]}>
                <CollapseWrapper>
                    <HeaderContainer>
                        <CollapseHeader>par-sort.</CollapseHeader>
                        <CollapseClose
                            onClick={() => {
                                setOpen([false, false, false])
                                setCopen([false, false, false])
                                isFirst.current = true
                            }}
                        >
                            x
                        </CollapseClose>
                    </HeaderContainer>
                    <DescriptionContainer>
                        <CollapseDescription>
                            Through this project, we aimed to explore the
                            possibilities of parallel sorting in a functional
                            language. With the possibile slowing of Moore’s law
                            in the near future, it is essential that we look at
                            alternative methods to push these important
                            algorithms even further. In our research, we
                            implemented three main sorting algorithms using
                            Haskell: merge sort, quicksort, andbitonic sort.
                            Although it would probably be faster to write these
                            sorts in a lower level language like C, we believe
                            that the functional paradigm allows for much easier
                            and more concise data parallelism. After moving
                            these three main sorts from their equivalent
                            sequential and imperative counterparts, we further
                            pushed the limits of sorting in Haskell to implement
                            some of the different data parallelism models.
                            Finally, we present ‘hybrid’ sort, which is composed
                            of the best features from all of the sequential, and
                            parallel sorts that we implemented.
                        </CollapseDescription>
                        <LanguagesContainer>
                            HASKELL.STACK.THREADSCOPE
                        </LanguagesContainer>
                    </DescriptionContainer>
                </CollapseWrapper>
            </Coll>
            <Coll isOpened={copen[2]}>
                <CollapseWrapper>
                    <HeaderContainer>
                        <CollapseHeader>paxos checker.</CollapseHeader>
                        <CollapseClose
                            onClick={() => {
                                setOpen([false, false, false])
                                setCopen([false, false, false])
                                isFirst.current = true
                            }}
                        >
                            x
                        </CollapseClose>
                    </HeaderContainer>
                    <DescriptionContainer>
                        <CollapseDescription>
                            When we build a distributed system, we check if it
                            works properly in all cases, even some very low
                            probability corner cases. For this project we aim to
                            prove the correctness of an implementation of paxos.
                            We evaluated two different methods: model checking
                            and fuzz testing. Fuzz testing occurs when you
                            repeatedly test multiple different randomly
                            occurring states, and is efficient in practice.
                            However, there is no guarantee that this randomized
                            testing can cover every case. Instead we pursued the
                            Model checking approach, exploring every
                            possibility, potentially achieved by simulating a
                            system by a state machine. Then search algorithms
                            like Breadth First Search (BFS) or Depth First
                            Search (DFS) can be used to walk through all the
                            states and verify the correctness of one's
                            implementation. In this assignment, we considered
                            the whole system (nodes + network) as one large
                            state machine. Each node represented a client or
                            server that could send or receive messages. The
                            network represented an abstraction of on-the-fly
                            messages being transferred over a real network. We
                            first implemented the state machine as well as the
                            different state transitions. We finally wrote our
                            model checking tests, and verified that our solution
                            was viable, successfully modeling paxos.
                        </CollapseDescription>
                        <LanguagesContainer>
                            GOLANG.PYTHON.BASH
                        </LanguagesContainer>
                    </DescriptionContainer>
                </CollapseWrapper>
            </Coll>
        </CollapseContainer>
    )
}

export default forwardRef<HTMLDivElement, Props>(Collapse)
