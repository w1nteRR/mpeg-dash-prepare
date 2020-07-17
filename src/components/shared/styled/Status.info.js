import React from 'react'
import Icon from '@mdi/react'
import { mdiCloseCircle, mdiCheckCircle, mdiAlertCircle } from '@mdi/js'

import { Container } from '../layout'
import { ActiveText } from '../typography'

import { success, error, warning } from '../colors'

export const StatusInfo = ({ textSuccess, textError, status, type, iconSize }) => {
    
    const errorIcon = type === 'error' ? mdiCloseCircle : mdiAlertCircle
    const errorColor = type === 'error' ? error : warning 

    return (
        <Container justify='space-between'>
            <ActiveText
                color={status ? success : errorColor}
            >
                {status ? textSuccess : textError}
            </ActiveText>
            <Icon 
                path={status ? mdiCheckCircle : errorIcon}
                size={iconSize || 0.7}
                color={status ? success : errorColor}
            />
        </Container>
    )
}
   