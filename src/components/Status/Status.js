import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiSync } from '@mdi/js'

import { Card } from '../shared/styled/Card'
import { Container } from '../shared/layout'

import { StatusMain } from './Status.main'
import { StatusDash } from './Status.dash'
import { primary } from '../shared/colors'

export const Status = () => {

    const [activeStatus, setActiveStatus] = useState(true)
    const [rotateIcon, setRotate] = useState(0)

    const switchStatus = () => {
        setActiveStatus(prev => setActiveStatus(!prev)) 
        setRotate(1)
        
        setTimeout(() => setRotate(0), 500)
    }

    return (
        <Card title='Status' w='150px'>
            <Container justify='flex-end'>
                <Icon 
                    path={mdiSync}
                    color={primary}
                    size={0.7}
                    onClick={() => switchStatus()} 
                    spin={rotateIcon}
                    style={{
                        cursor: 'pointer'
                    }}
                />
            </Container>
            {
                activeStatus
                ? 
                <StatusMain />
                :
                <StatusDash />
            }
        </Card>
    )
}
