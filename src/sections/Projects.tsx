import React, { forwardRef, memo, useRef, useState } from 'react'
import Collapse from '../components/Collapse'
import ProjectCard from '../components/ProjectCard'
import Shape from '../components/Shape'
import {
    WidthManager,
    CollapseContainer,
    ProjectCardContainer,
    ProjectsContainer,
    ProjectsHeader,
    ProjectSpacer
} from './styles/ProjectStyles'

interface Props {}

const musely_code = `store.subscribe(() => console.log(store.getState()))
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root'))`

const parsort_code = `shuffle :: V.Vector a -> IO (V.Vector a)
shuffle v = do
 let n = V.length v - 1
 js <- V.forM (V.enumFromTo 0 n) $ \\i -> randomRIO (i, n)
 return $ V.create $ do
    o <- V.thaw v
    forM_ [1..n] $ \\i -> M.swap o i (js!i)
    return o`

const paxos_code = `p1PreparePhase := func(s *base.State) bool {
  s1 := s.Nodes()["s1"].(*Server)
  valid := s1.proposer.Phase == Propose 
  if valid {
    fmt.Println("... p1 entered Propose phase")
  }
  return valid
}`

const isInViewport = (el: HTMLDivElement) => {
    const rect = el.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    )
}

const Projects = forwardRef<HTMLDivElement>((props: Props, ref) => {
    const [open, setOpen] = useState([false, false, false])
    const collapseRef = useRef(document.createElement('div'))
    const checkOpen = (idx: number) => {
        setOpen(open => open.map((o, i) => i === idx))
    }

    const handleClick = (idx: number) => {
        if (isInViewport(collapseRef.current)) {
            checkOpen(idx)
        } else {
            if (!open[idx]) {
                collapseRef.current.scrollIntoView({ behavior: 'smooth' })
            }
            setTimeout(() => checkOpen(idx), 500)
        }
    }

    return (
        <>
            <WidthManager>
                <ProjectsContainer ref={ref}>
                    <Shape
                        shape={'circle'}
                        size={'5rem'}
                        rotation={'199deg'}
                        top={'2rem'}
                        left={'-25%'}
                    />
                    <Shape
                        shape={'hexagon'}
                        size={'4rem'}
                        rotation={'55deg'}
                        top={'13rem'}
                        left={'18%'}
                    />
                    <Shape
                        shape={'square'}
                        size={'5rem'}
                        rotation={'340deg'}
                        top={'15rem'}
                        left={'-18%'}
                    />
                    <Shape
                        shape={'pentagon'}
                        size={'6rem'}
                        rotation={'44deg'}
                        top={'100%'}
                        left={'-40%'}
                    />
                    <Shape
                        shape={'circle'}
                        size={'6rem'}
                        rotation={'44deg'}
                        top={'80%'}
                        left={'45%'}
                    />
                    <ProjectsHeader>Projects</ProjectsHeader>
                    <ProjectCardContainer>
                        <ProjectCard
                            title={'musely.'}
                            description={
                                'a music note taking tool for the average student'
                            }
                            code={musely_code}
                            language={'javascript'}
                            tags={['UI & UX']}
                            color={'#779095'}
                            onClick={() => handleClick(0)}
                        />
                        <ProjectCard
                            title={'par-sort.'}
                            description={
                                'parallel functional sorting implementations in haskell'
                            }
                            code={parsort_code}
                            language={'haskell'}
                            tags={['Parallel', 'Functional']}
                            color={'#7C9A8F'}
                            onClick={() => handleClick(1)}
                        />
                        <ProjectCard
                            title={'paxos checker.'}
                            description={
                                'distributed, stateful paxos error checking'
                            }
                            code={paxos_code}
                            language={'go'}
                            tags={['Distributed Systems']}
                            color={'#57838C'}
                            onClick={() => handleClick(2)}
                        />
                    </ProjectCardContainer>
                    <CollapseContainer>
                        <Collapse
                            open={open}
                            setOpen={setOpen}
                            ref={collapseRef}
                        />
                    </CollapseContainer>
                </ProjectsContainer>
            </WidthManager>
            <ProjectSpacer />
        </>
    )
})

export default memo(Projects)
