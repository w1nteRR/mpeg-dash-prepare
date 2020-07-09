import React from 'react'

import { Container } from '../shared/layout'
import { ActiveText, Text } from '../shared/typography'

export const PropertiesList = ({ properties }) => 
    properties.map((item, index) => 
        <Container justify='space-between' m='10px' key={index}>
            <ActiveText>{Object.keys(item)}</ActiveText>
            <Text size='10px' weight='700'>{Object.values(item)}</Text>
        </Container>
    )
    
    