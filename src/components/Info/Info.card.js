import React from 'react'

import { Card } from '../shared/styled/Card'
import { Container } from '../shared/layout'
import { Text } from '../shared/typography'

import { PropertiesList } from '../Info/Properties.list'

export const InfoCard = ({ title, properties }) =>     
    <Card>
        <Container direction='column'>
            <Container justify='flex-start'>
                <Text size='13px' weight='900'>{title}</Text>
            </Container>
            <PropertiesList properties={properties} />
        </Container>
    </Card>
 