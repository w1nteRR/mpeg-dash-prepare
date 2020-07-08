import React from 'react'
import { useDispatch } from 'react-redux'

import { Card } from '../shared/styled/Card'
import { Container } from '../shared/layout'
import { ActiveText, Text } from '../shared/typography'
import { Button } from '../shared/styled/Button'

import { startConvertation } from '../../redux/actions/converterActions'

export const AudioInfo = ({ data, fileName }) => {
    
    const dispatch = useDispatch()

    const audioInfo = [
        {
            title: data.tags.title 
        },
        {
            bitrate: data.bit_rate
        },
        {
            channel: data.channel_layout
        },
        {
            codec_name: data.codec_name
        },
        {
            codec_full: data.codec_long_name
        },
        {
            sample_rate: data.sample_rate
        },
        {
            language: data.tags.language
        }
    ]


    return (
        <Card>
            <Container direction='column'>
                <Container justify='flex-start'>
                    <Text size='13px' weight='900'>Audio</Text>
                </Container>
                {
                    audioInfo.map((item, index) => 
                        <Container justify='space-between' m='10px' key={index}>
                            <ActiveText>{Object.keys(item)}</ActiveText>
                            <Text size='10px' weight='700'>{Object.values(item)}</Text>
                        </Container>
                    )
                }
            </Container>
            <Container justify='flex-start' p='10px'>
                <Text size='10px' weight='900'>Cut audio</Text>
            </Container>
            <Button 
                type='primary' 
                text={`Get ${data.tags.title}`} 
                onClick={() => dispatch(startConvertation(fileName, data.index, data.tags.language))} 
            />
        </Card>
    )
}