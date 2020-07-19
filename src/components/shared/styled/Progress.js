import React from 'react'
import Icon from '@mdi/react'
import { mdiSkull } from '@mdi/js'

import { Text } from '../typography'
import { Container } from '../layout'
import { error } from '../colors'

import { Loader } from '../styled/Loader/Loader'

export const Progress = ({ progress, onClick }) =>
    <Container>
        <Container justify='space-around' m='15px 0'>
            <Loader w='20px' h='20px' />
            <Text size='13px'>{progress}</Text>
            <Icon 
                path={mdiSkull} 
                color={error} 
                size={0.7}
                onClick={onClick} 
            />
        </Container>
    </Container>