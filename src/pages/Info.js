import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import { Title, Text } from '../components/shared/typography'
import { Container } from '../components/shared/layout'

import { MainInfo } from '../components/Info/Main.info'

export const Info = () => {

    const metadata = useSelector(state => state.file.metadata)

    if(!Object.keys(metadata).length) return <Redirect  to='/' />

    return (
        <Container direction='column'>
            <Container align='flex-start' m='20px' direction='column'>
                <Title>Information</Title>
                <Text size='12px'>{metadata.format.tags.title}</Text>
            </Container>
            <MainInfo 
                size={metadata.format.size} 
                duration={metadata.format.duration}
                bitrate={metadata.format.bit_rate} 
                streams={metadata.format.nb_streams}
            />
        </Container>
    )
}