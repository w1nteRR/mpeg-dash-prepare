import React from 'react'
import { useDispatch } from 'react-redux'

import { Card } from '../shared/styled/Card'
import { Container } from '../shared/layout'
import { Text } from '../shared/typography'
import { Button } from '../shared/styled/Button'

import { PropertiesList } from './Properties.list'

import { startConvertation } from '../../redux/actions/converterActions'

export const AudioInfo = ({ data, file }) => {
    
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

    const convertationOptions = {
        file,
        streamNum: data.index,
        lang: data.tags.language,
        type: 'getAudio'
    }

    return (
        <Card>
            <Container direction='column'>
                <Container justify='flex-start'>
                    <Text size='13px' weight='900'>Audio</Text>
                </Container>
               <PropertiesList properties={audioInfo} />
            </Container>
            <Container justify='flex-start' p='10px'>
                <Text size='10px' weight='900'>Cut audio</Text>
            </Container>
            <Button 
                type='primary' 
                text={`Get ${data.tags.title}`} 
                onClick={() => dispatch(startConvertation(convertationOptions))} 
            />
        </Card>
    )
}