import React from 'react'
import {
    JobContainer,
    JobDescription,
    JobDescriptionContainer,
    JobHeader,
    JobImg,
    JobImgBackground,
    JobImgContainer,
    JobLanguages,
    JobTag,
    JobTagContainer,
} from './styles/JobStyles'

interface Props {
    title: string
    logo: string
    description: string
    languages: Array<string>
    tags: Array<string>
    left?: boolean
    right?: boolean
    width?: string
    img_alt: string
}

interface TagProps {
    children: Array<string>
}

const Job = ({
    title,
    logo,
    description,
    languages,
    tags,
    left = true,
    right = false,
    width = '100%',
    img_alt = "",
}: Props) => {
    const isLeft = left && !right ? true : false

    const Tags = ({ children: tags }: TagProps) => (
        <>
            {tags.map((t) => (
                <JobTag isLeft={isLeft} key={t}>
                    {t}
                </JobTag>
            ))}
        </>
    )

    return (
        <JobContainer isLeft={isLeft}>
            <JobImgContainer isLeft={isLeft}>
                <JobImgBackground isLeft={isLeft}>
                    <JobImg src={logo} width={width} alt={img_alt} />
                </JobImgBackground>
            </JobImgContainer>
            <JobDescriptionContainer isLeft={isLeft}>
                <JobHeader isLeft={isLeft}>{title}</JobHeader>
                <JobDescription>{description}</JobDescription>
                <JobLanguages isLeft={isLeft}>
                    {languages.join('.')}
                </JobLanguages>
                <JobTagContainer isLeft={isLeft}>
                    <Tags>{tags}</Tags>
                </JobTagContainer>
            </JobDescriptionContainer>
        </JobContainer>
    )
}

export default Job
