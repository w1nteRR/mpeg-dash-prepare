import React from 'react'

import { Card } from '../shared/styled/Card'
import { Text } from '../shared/typography'
import { Container } from '../shared/layout'

import { PropertiesList } from '../Info/Properties.list'

import { useProgress } from '../../hooks/useProgress'

export const FfmpegCard = ({ properties, title, button, stream }) => 
    <Card>
        <Container justify='flex-start'>
            <Text size='13px' weight='900'>{title}</Text>
        </Container>
        <Container direction='column'>
            <PropertiesList properties={properties} />
        </Container>
        <Container justify='flex-end'>
            {button()}
        </Container>
        {useProgress(stream)}
    </Card>
 