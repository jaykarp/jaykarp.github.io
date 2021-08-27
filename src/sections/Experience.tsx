import React, { forwardRef } from 'react'
import Job from '../components/Job'
import ceal from '../assets/ceal.png'
import navstick from '../assets/navstick.svg'
import cheddar from '../assets/cheddar.svg'
import vanderbilt from '../assets/vanderbilt.png'
import apple from '../assets/apple.png'

import {
    WidthManager,
    ExperienceHeader,
    ExperienceContainer,
    ExperienceSpacer,
} from './styles/ExperienceStyles'
import Shape from '../components/Shape'

interface Props { }

const Experience = forwardRef<HTMLDivElement>((props: Props, ref) => {
    return (
        <>
            <WidthManager>
                <ExperienceContainer ref={ref}>
                    <Shape
                        shape={'triangle'}
                        size={'4rem'}
                        rotation={'40deg'}
                        top={'4%'}
                        left={'30%'}
                    />
                    <Shape
                        shape={'circle'}
                        size={'5rem'}
                        rotation={'256deg'}
                        top={'25%'}
                        left={'-3%'}
                    />
                    <Shape
                        shape={'square'}
                        size={'4rem'}
                        rotation={'135deg'}
                        top={'47%'}
                        left={'-20%'}
                    />
                    <Shape
                        shape={'pentagon'}
                        size={'5rem'}
                        rotation={'345deg'}
                        top={'54%'}
                        left={'20%'}
                    />
                    <Shape
                        shape={'circle'}
                        size={'6rem'}
                        rotation={'75deg'}
                        top={'72%'}
                        left={'15%'}
                    />
                    <Shape
                        shape={'square'}
                        size={'4rem'}
                        rotation={'150deg'}
                        top={'97%'}
                        left={'0%'}
                        xleft={'41%'}
                    />
                    <ExperienceHeader>Experience</ExperienceHeader>
                    <Job
                        title={'apple.'}
                        logo={apple}
                        description={
                            'During my time at Apple I worked on buildling tooling for the Customer Feedback Engineering team. I created custom designs for different user interfaces by following an iterative design process which consisted of talking to users and creating both paper prototypes and wireframes. After completing the design process, I developed the designs into a fullstack application using a Ruby on Rails backend along with the GraphQL Ruby gem. I then used an Apollo middleware to fetch data from the backend. Finally, I built the frontend application based on my previous designs using SwiftUI as well as specialized AppKit views.'
                        }
                        languages={['SWIFT', 'RAILS', 'SWIFTUI', 'APPKIT', 'UIKIT', 'GRAPHQL']}
                        tags={['UI & UX', 'Fullstack Dev']}
                        width={'65%'}
                        img_alt={'Apple Logo'}
                        left
                    />
                    <Job
                        title={'ceal.'}
                        logo={ceal}
                        description={
                            'CEAL (Columbia Computer Enabled Abilities Lab) is an interdisciplinary lab enabling those with differing abilities to experience the world. Our research spans accessibility, games, AR, AI, sensing and vision. Our website serves dual purposes: recruiting researchers to grow the lab and enrolling those with differing abilities in our studies. We want to ensure our lab’s interface is reflective of the participants we work with, as typical media connections sometimes rely on inaccessible audio or visual communication. My contributions to this website spanned the entire development process, ranging from early prototyping and design to implementation. We expect to be live at the end of January 2021.'
                        }
                        languages={['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON']}
                        tags={['UI & UX', 'Fullstack Dev']}
                        img_alt={'CEAL Lab Logo'}
                        right
                    />
                    <Job
                        title={'navstick.'}
                        logo={navstick}
                        description={
                            'Navstick is a CEAL lab project exploring accessibility for people with visual impairments. Using self-directed audio navigation, we aim to encourage autonomous shopping. Existing supermarket navigation solutions are cumbersome, and ours allows users to explore the shelves through self-directed verbalization of the environment. We created a supermarket simulator game for our virtual testing environment and a remote user research framework. During the course of the project, I ran 15 user studies over Zoom, built web interfaces to control the game environment remotely, and built the database/backend design to enable communication during testing. Upon the completion of our prototype, testing, and evaluation, we submitted two papers to UIST and CHI. The lab is further refining phases based on our findings.'
                        }
                        languages={[
                            'REACT',
                            'PYTHON',
                            'BASH',
                            'C#',
                            'UNITY',
                            'PARSE',
                        ]}
                        tags={['UI & UX', 'Fullstack Dev']}
                        width={'60%'}
                        img_alt={'Navstick Project Logo'}
                        left
                    />
                    <Job
                        title={'cheddar.'}
                        logo={cheddar}
                        description={
                            'Cheddar is a finance and tech based streaming news network with it’s trademark 24 hour live news coverage. As a constantly live site, Cheddar has unique opportunities and challenges, especially in tool development and deployment. I worked on several projects over the course of my internship, gaining experience in many different areas of online news delivery production. The key area of my internship was developing tools to ensure a seamless 24 hour news broadcast. Two of the projects that I focused on were monitoring web content and content distributed over a raspberry pi distribution network. My contributions varied from writing code for a golang api in the prometheus pod for kubernetes cluster, to writing software to update the raspberry pi network remotely. I also enabled highly requested features on the site, including internal tooling to connect articles and highlight authors, as well as developing the tooling required to launch their Need2Know newsletter.'
                        }
                        languages={['REACT', 'GOLANG', 'RUBY']}
                        tags={['UI & UX', 'Fullstack Dev', 'DevOps']}
                        width={'75%'}
                        img_alt={'Cheddar Inc Logo'}
                        right
                    />
                    <Job
                        title={'vanderbilt.'}
                        logo={vanderbilt}
                        description={
                            'I explored three main projects during my time at Vanderbilt in data science and biomedical research. First, a joint venture in electronic health records with EPIC enabling verbal interactions with patient information documentation. This increases efficiency by allowing doctors to notate while occupied and reduces search time for patient information. To understand doctor’s perception of NLP tools, I built test tools to enable large-scale user testing via nlp querying tools to compare EPIC to traditional voice assistant models, trained on medical and not medical words. Second, our lab investigated reversing diabetes in mice using cancer therapy drugs. We examined different transcription factors and their ability to reverse diabetes by performing immunohistochemistry, Western blotting, dissection and husbandry techniques. Lastly, I calculated the distance of various zip codes and their closest hospital for UNOS organ donation allocation policies. Both the transplant allocation work and transcription factors research resulted in published papers, viewable in my resume.'
                        }
                        languages={['JAVASCRIPT', 'JAVA', 'PYTHON']}
                        tags={['NLP', 'Statistics', 'UI & UX']}
                        width={'75%'}
                        img_alt={'Vanderbilt Logo'}
                        left
                    />
                </ExperienceContainer>
            </WidthManager>
            <ExperienceSpacer />
        </>
    )
})

export default Experience
