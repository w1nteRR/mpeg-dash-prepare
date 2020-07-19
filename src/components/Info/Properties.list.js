import React from 'react'

import { Container } from '../shared/layout'
import { ActiveText, Text } from '../shared/typography'

export const PropertiesList = ({ properties }) => {

    const items = []

    for(const [key, value] of Object.entries(properties)) {
        items.push( 
            <Container justify='space-between' m='10px' key={key}>
                <ActiveText>{key}</ActiveText>
                <Text size='10px' weight='700'>{value}</Text>
            </Container>
        )
    }

    return <>{items}</>
}
    
    