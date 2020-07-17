import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Card } from '../shared/styled/Card'
import { Container } from '../shared/layout'
import { Text } from '../shared/typography'
import { Button } from '../shared/styled/Button'

import { PropertiesList } from './Properties.list'

import { startConvertation } from '../../redux/actions/converterActions'

export const VideoInfo = ({ data, file }) => {

    const dispatch = useDispatch()
    const isVideo = useSelector(state => Object.values(state.file.availableFiles.video).length)

    const videoInfo = [
        {
            fps: data.avg_frame_rate
        },
        {
            codec_name: data.codec_name
        },
        {
            codec_long_name: data.codec_long_name
        },
        {
            width: data.width
        },
        {
            height: data.height
        }
    ]
    
    const convertationOptions = {
        file,
        streamNum: data.index,
        type: 'getVideo'
    }

    return (
        <Card>
            <Container direction='column'>
                <Container justify='flex-start'>
                    <Text size='13px' weight='900'>Video</Text>
                </Container>
                <PropertiesList properties={videoInfo} />
                <Container justify='flex-start' p='10px'>
                    <Text size='10px' weight='900'>Convert to .264</Text>
                </Container>
                <Container justify='space-around'>
                    <Button 
                        type='primary'  
                        text='ffmpeg' 
                        onClick={() => dispatch(startConvertation(convertationOptions))}
                    />
                    {/* <Button 
                        type='secondary' 
                        w='40%' 
                        text='h264' 
                    /> */}
                </Container>
                {
                    isVideo 
                    &&
                    <>
                    <Container justify='flex-start' p='10px'>
                        <Text size='10px' weight='900'>Convert to mp4</Text>
                    </Container>
                    <Container>
                        <Button 
                            type='secondary'
                            text='mp4box'
                        />
                    </Container>
                    </>
                }
            </Container>
        </Card>
    )
}