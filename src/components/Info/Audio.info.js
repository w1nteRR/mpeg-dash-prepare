import React from 'react'

import { Card } from '../shared/styled/Card'
import { Container } from '../shared/layout'
import { ActiveText, Text } from '../shared/typography'
import { Button } from '../shared/styled/Button'

export const AudioInfo = ({ data }) => {

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
                    audioInfo.map(item => 
                        <Container justify='space-between' m='10px' key={item.title}>
                            <ActiveText>{Object.keys(item)}</ActiveText>
                            <Text size='10px' weight='700'>{Object.values(item)}</Text>
                        </Container>
                    )
                }
            </Container>
            <Container justify='flex-start' p='10px'>
                <Text size='10px' weight='900'>Cut audio</Text>
            </Container>
            <Button type='primary' text={`Get ${data.tags.title}`} />
        </Card>
    )
}