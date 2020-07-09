import React from 'react'
import Icon from '@mdi/react'
import { mdiCloseCircle, mdiAlertCircle, mdiCheckCircle } from '@mdi/js'

import { Card } from '../shared/styled/Card'
import { Container } from '../shared/layout'
import { ActiveText } from '../shared/typography'

import { error, warning, success } from '../shared/colors'

export const Status = () => {
    return (
        <Card title='Status' w='150px'>
            <Container 
                direction='column' 
                align='start' 
                justify='space-around' 
                m='10px' 
                height='200px'
            >
                <Container justify='space-between' width='90%'>
                    <ActiveText color={error}>Convert video</ActiveText>
                    <Icon color={error} size={0.7} path={mdiCloseCircle} />
                </Container>
                <Container justify='space-between' width='90%'> 
                    <ActiveText color={warning}>Get audio</ActiveText>
                    <Icon color={warning} size={0.7} path={mdiAlertCircle} />
                </Container>
                <Container justify='space-between' width='90%'>
                    <ActiveText color={warning}>Get subtitles</ActiveText>
                    <Icon color={warning} size={0.7} path={mdiAlertCircle} />
                </Container>
            </Container>
        </Card>
    )
}
