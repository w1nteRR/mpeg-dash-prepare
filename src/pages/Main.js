import React from 'react'

import { Title } from '../components/shared/typography'
import { Container } from '../components/shared/layout'

import { FilePicker } from '../components/FilePicker/FilePicker'

export const Main = () => {
    return (
        <Container direction='column'>
            <Container justify='flex-start' m='20px'>
                <Title>Choose file</Title>
            </Container>
            <FilePicker />
        </Container>
    )
}