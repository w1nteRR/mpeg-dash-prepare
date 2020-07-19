import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router'

import { Container } from '../components/shared/layout'

import { MainInfo } from '../components/Info/Main.info'
import { VideoInfo } from '../components/Info/Video.info'
import { AudioInfo } from '../components/Info/Audio.info'
import { SubInfo } from '../components/Info/Sub.info'

import { runFileScanner } from '../redux/actions/fileActions'

export const Info = () => {
   
    const dispatch = useDispatch()

    const metadata = useSelector(state => state.file.metadata)

    if(!Object.keys(metadata).length) return <Redirect  to='/' />


    useEffect(() => dispatch(runFileScanner(metadata.format.filename, metadata.streams)), [])

    return (
        <Container align='flex-start'>
            <Container direction='column'>
                <Container direction='column' justify='space-around' minHeight='100vh'>
                    <MainInfo data={metadata.format} />
                    <VideoInfo data={metadata.streams[0]} />
                    {
                        metadata.streams.map((item, index) => {
                            if(item.codec_type === 'audio') {
                                return <AudioInfo 
                                            key={index} 
                                            data={item} 
                                        />
                            }
                            if(item.codec_type === 'subtitle') {
                                return <SubInfo
                                            key={index}
                                            data={item}
                                        />
                            }
                        })
                    }
                </Container>
            </Container>
        </Container>        
    )
}