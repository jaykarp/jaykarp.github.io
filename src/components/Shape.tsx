import React, { memo } from 'react'
import circle from '../assets/shapes/circle.svg'
import hexagon from '../assets/shapes/hexagon.svg'
import pentagon from '../assets/shapes/pentagon.svg'
import square from '../assets/shapes/square.svg'
import triangle from '../assets/shapes/triangle.svg'

import { StyledShape } from './styles/ShapeStyles'

interface Props {
    shape: 'square' | 'triangle' | 'circle' | 'pentagon' | 'hexagon'
    size: string
    rotation: string
    top: string
    left: string
    xtop?: string
    xleft?: string
}

const Shape = memo(
    ({ shape, size, rotation, top, left, xtop = top, xleft = left }: Props) => {
        switch (shape) {
            case 'square':
                return (
                    <StyledShape
                        src={square}
                        rotation={rotation}
                        size={size}
                        top={top}
                        left={left}
                        xtop={xtop}
                        xleft={xleft}
                        alt={''}
                    />
                )
            case 'triangle':
                return (
                    <StyledShape
                        src={triangle}
                        rotation={rotation}
                        size={size}
                        top={top}
                        left={left}
                        xtop={xtop}
                        xleft={xleft}
                        alt={''}
                    />
                )
            case 'pentagon':
                return (
                    <StyledShape
                        src={pentagon}
                        rotation={rotation}
                        size={size}
                        top={top}
                        left={left}
                        xtop={xtop}
                        xleft={xleft}
                        alt={''}
                    />
                )
            case 'hexagon':
                return (
                    <StyledShape
                        src={hexagon}
                        rotation={rotation}
                        size={size}
                        top={top}
                        left={left}
                        xtop={xtop}
                        xleft={xleft}
                        alt={''}
                    />
                )
            default:
                return (
                    <StyledShape
                        src={circle}
                        rotation={rotation}
                        size={size}
                        top={top}
                        left={left}
                        xtop={xtop}
                        xleft={xleft}
                        alt={''}
                    />
                )
        }
    }
)

export default memo(Shape)
