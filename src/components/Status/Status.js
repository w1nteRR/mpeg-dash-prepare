import React from 'react'
import Icon from '@mdi/react'
import { mdiCloseCircle, mdiAlertCircle, mdiCheckCircle } from '@mdi/js'
import { useSelector } from 'react-redux'

import { Card } from '../shared/styled/Card'
import { Container } from '../shared/layout'
import { ActiveText } from '../shared/typography'

import { error, warning, success } from '../shared/colors'

export const Status = () => {

    const availableFiles = useSelector(state => state.file.availableFiles)

    const isVideo = Object.values(availableFiles.video).length
    const isAudio = Object.values(availableFiles.audio).length
    const isSub = Object.values(availableFiles.subtitles).length

    return (
        <Card title='Status' w='150px'>
            <Container 
                direction='column' 
                align='start' 
                justify='space-around' 
                m='10px' 
                height='200px'
            >
                <Container justify='space-between' width='90%'>
                    <ActiveText 
                        color={isVideo ? success : error}
                    >
                        {isVideo ? 'Video is available' : 'Convert video'}
                    </ActiveText>
                    <Icon 
                        color={isVideo ? success : error} 
                        size={0.7} 
                        path={isVideo ? mdiCheckCircle : mdiCloseCircle} 
                    />
                </Container>
                <Container 
                    justify='space-between' 
                    width='90%'
                > 
                    <ActiveText 
                        color={isAudio ? success : warning}
                    >
                        {isAudio ? 'Audio is available' : 'Get audio'}
                    </ActiveText>
                    <Icon 
                        color={isAudio ? success : warning} 
                        size={0.7} 
                        path={isAudio ? mdiCheckCircle : mdiAlertCircle} 
                    />
                </Container>
                <Container 
                    justify='space-between' 
                    width='90%'
                >
                    <ActiveText 
                        color={isSub ? success : warning}
                    >
                        {isSub ? 'Subtitles are available' : 'Get subtitles'}
                    </ActiveText>
                    <Icon 
                        color={isSub ? success : warning} 
                        size={0.7} 
                        path={isSub ? mdiCheckCircle : mdiAlertCircle} 
                    />
                </Container>
            </Container>
        </Card>
    )
}
