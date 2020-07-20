import React from 'react'
import { useSelector } from 'react-redux'

import { Text } from '../components/shared/typography'
import { Container } from '../components/shared/layout'

import { GpacVideo } from '../components/Gpac/Gpac.video'
import { GpacAudio } from '../components/Gpac/Gpac.audio'

export const Gpac = () => {

    const isVideo = useSelector(state => state.file.availableFiles.video.length)

    if(!isVideo) return (
        <Container height='50vh'>
            <Text>Get .264 first</Text>
        </Container>
    )

    return (
        <Container direction='column'>
            <GpacVideo />
            <GpacAudio />            
        </Container>
    )
}