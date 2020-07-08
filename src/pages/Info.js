import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import { Title, Text } from '../components/shared/typography'
import { Container } from '../components/shared/layout'

import { MainInfo } from '../components/Info/Main.info'
import { VideoInfo } from '../components/Info/Video.info'
import { AudioInfo } from '../components/Info/Audio.info'

export const Info = () => {

    const metadata = useSelector(state => state.file.metadata)

    if(!Object.keys(metadata).length) return <Redirect  to='/' />

    return (
        <Container direction='column'>
            <Container align='flex-start' m='20px' direction='column'>
                <Title>Information</Title>
                <Text size='12px'>{metadata.format.tags.title}</Text>
            </Container>
            <Container direction='column' justify='space-around' minHeight='100vh'>
                <MainInfo data={metadata.format} />
                <VideoInfo data={metadata.streams[0]} fileName={metadata.format.filename} />
                {
                    metadata.streams.map((item, index) => {
                        if(item.codec_type === 'audio') {
                            return <AudioInfo key={index} data={item} fileName={metadata.format.filename} />
                        }
                    })
                }
            </Container>
        </Container>        
    )
}