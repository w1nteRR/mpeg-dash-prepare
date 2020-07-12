import React from 'react'
import styled from 'styled-components'
import Icon from '@mdi/react'

import { ActiveText } from '../typography'
import { Container } from '../layout'

const FileCardStyled = styled.div`
    background-color: #fff;
    border: .8px solid silver;
    border-radius: 10px;

    margin: 10px;
    padding: 8px;
`
export const FileCard = ({ name, onClick, icon, spin, iconColor }) => 
    <FileCardStyled>
        <Container justify='space-between'>
            <ActiveText>{name}</ActiveText>
            <Icon 
                path={icon} 
                size={0.6} 
                color={iconColor} 
                onClick={onClick} 
                spin={spin}
                style={{
                    cursor: 'pointer'
                }}
            />
        </Container>
    </FileCardStyled>