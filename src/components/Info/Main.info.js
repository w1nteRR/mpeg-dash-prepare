import React from 'react'

import { Card } from '../shared/styled/Card'
import { Text, ActiveText } from '../shared/typography'
import { Container } from '../shared/layout'

import { useConvertation } from '../../hooks/useConvertation'

export const MainInfo = ({ data }) => {

    const { bitrateToTh, sizeToGb, durationToHours } = useConvertation()

    const mainInfo = [
        {
            bitrate: bitrateToTh(data.bit_rate)
        },
        {
            size: sizeToGb(data.size)
        },
        {
            duration: durationToHours(data.duration)
        },
        {
            streams: data.nb_streams
        }
    ]

    return (
        <Card>
            <Container direction='column'>
                <Container justify='flex-start'>
                    <Text size='13px' weight='900'>Main</Text>
                </Container>
                {
                    mainInfo.map((item, index) => 
                        <Container key={index} justify='space-between' m='10px'>
                            <ActiveText>{Object.keys(item)}</ActiveText>
                            <Text size='10px' weight='700'>{Object.values(item)}</Text>
                        </Container>
                    )
                }
            </Container>
        </Card>
    )
}