import React from 'react'
import { useSelector } from 'react-redux'

import { VideoFfmpeg } from '../components/Ffmpeg/Video.ffmpeg'
import { AudioFfmpeg } from '../components/Ffmpeg/Audio.ffmpeg'
import { SubFfmpeg } from '../components/Ffmpeg/Sub.ffmpeg'

import { Container } from '../components/shared/layout'

export const Ffmpeg = () => {

    const streams = useSelector(state => state.file.metadata.streams)

    console.log(useSelector(state => state))

    return (
        <Container direction='column'>
            <VideoFfmpeg stream={streams[0]} />
            {
                streams.map((stream, index) => {
                    if(stream.codec_type === 'audio') return <AudioFfmpeg key={index} stream={stream} />
                    if(stream.codec_type === 'subtitle') return <SubFfmpeg key={index} stream={stream} />        
                })
            }
        </Container>
    )
}