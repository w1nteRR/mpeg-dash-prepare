import React from 'react'
import { useSelector } from 'react-redux'

import { Text } from '../shared/typography'
import { Container } from '../shared/layout'

import { StatusInfo } from '../shared/styled/Status.info'

export const StatusMain = () => {

    const availableFiles = useSelector(state => state.file.availableFiles)
    
    const isVideo = Object.values(availableFiles.video).length
    const isAudio = Object.values(availableFiles.audio).length
    const isSub = Object.values(availableFiles.subtitles).length

    return (
        <>
            <Container justify='flex-start'>
                <Text>Main</Text>
            </Container>
            <Container 
                direction='column' 
                align='start' 
                justify='space-around' 
                height='200px'
            >
                <StatusInfo 
                    status={isVideo}
                    textSuccess='Video is available'
                    textError='Convert video to .264'
                    type='error'
                />
                <StatusInfo 
                    status={isAudio}
                    textSuccess='Audio is available'
                    textError='Get audio'
                    type='warning'
                />
                <StatusInfo 
                    status={isSub}
                    textSuccess='Subtitles are available'
                    textError='Get subtitles'
                    type='warning'
                />
            </Container>
        </>
    )
}