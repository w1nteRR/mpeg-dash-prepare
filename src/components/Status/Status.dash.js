import React from 'react'
import { useSelector } from 'react-redux'

import { Text } from '../shared/typography'
import { Container } from '../shared/layout'

import { StatusInfo } from '../shared/styled/Status.info'

export const StatusDash = () => {

    const isVideo = useSelector(state => Object.values(state.file.availableFiles.video).length)
    const isAudio = useSelector(state => Object.values(state.file.availableFiles.audio).length)

    return (
        <>
            <Container justify='flex-start'>
                <Text>Dash</Text>
            </Container>
            <Container 
                direction='column' 
                align='start' 
                justify='space-around' 
                height='200px'
            >
                {
                    isVideo
                    &&
                    <StatusInfo 
                        textSuccess='Video is available'
                        textError='Convert video to mp4'
                        type='error'
                    />
                }
                {
                    isAudio
                    ?
                    <StatusInfo 
                        textSuccess='Audio is available'
                        textError='Convert audio to mp4'
                        type='warning'
                    />
                    :
                    <Container>
                        <Text>no audio</Text>
                    </Container>
                   
                } 
            </Container>
        </>
    )
}