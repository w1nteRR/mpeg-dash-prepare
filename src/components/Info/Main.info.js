import React from 'react'

import { Card } from '../shared/styled/Card'
import { Text, ActiveText } from '../shared/typography'
import { Container } from '../shared/layout'

import { useConvertation } from '../../hooks/useConvertation'

export const MainInfo = ({ size, duration, bitrate, streams }) => {

    const { bitrateToTh, sizeToGb, durationToHours } = useConvertation()

    return (
        <Card>
            <Container direction='column'>
                <Container justify='flex-start'>
                    <Text size='13px'>Main</Text>
                </Container>
                <Container justify='space-between' m='10px'>
                    <ActiveText>Bitrate</ActiveText>
                    <Text size='10px'>{bitrateToTh(bitrate)}</Text>
                </Container>
                <Container justify='space-between' m='10px'>
                    <ActiveText>Size</ActiveText>
                    <Text size='10px'>{sizeToGb(size)}</Text>
                </Container>
                <Container justify='space-between' m='10px'>
                    <ActiveText>Duration</ActiveText>
                    <Text size='10px'>{durationToHours(duration)}</Text>
                </Container>
                <Container justify='space-between' m='10px'>
                    <ActiveText>Streams</ActiveText>
                    <Text size='10px'>{streams}</Text>
                </Container>
            </Container>
        </Card>
    )
}