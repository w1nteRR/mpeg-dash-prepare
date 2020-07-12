import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { mdiSkull } from '@mdi/js'
import Icon from '@mdi/react'

import { Card } from '../shared/styled/Card'
import { ActiveText, Text } from '../shared/typography'
import { error } from '../shared/colors'

import { Container } from '../shared/layout'

import { killConverting } from '../../redux/actions/converterActions'

export const Converting = () => {

    const dispatch = useDispatch()
    const convertingFile = useSelector(state => state.converter.convertingFile)
    const progress = useSelector(state => state.converter.progress.toFixed(2))

    const _propItem = (key, value) => 
        <Container key={key} justify='space-between' m='10px'>
            <ActiveText>{key}</ActiveText>
            <Text size='10px' weight='700'>{value}</Text>
        </Container>

    return (
        <Card
            title='Converting'
            w='150px'
        >
            <Container direction='column'>
                {
                   Object.entries(convertingFile).map(item => _propItem(item[0], item[1]))
                }
                {
                    _propItem('Progress', progress)
                }
                <Icon 
                    path={mdiSkull} 
                    color={error} 
                    size={0.7}
                    onClick={() => dispatch(killConverting())} 
                />
            </Container>
        </Card>
    )
}