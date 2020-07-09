import React from 'react'
import styled from 'styled-components'
import Icon from '@mdi/react'
import { mdiDelete } from '@mdi/js'

import { ActiveText } from '../typography'
import { Container } from '../layout'
import { error } from '../colors'

const FileCardStyled = styled.div`
    background-color: #fff;
    border: .8px solid silver;
    border-radius: 10px;

    margin: 10px;
    padding: 8px;
`
export const FileCard = ({ name, onClick }) => 
    <FileCardStyled>
        <Container justify='space-between'>
            <ActiveText>{name}</ActiveText>
            <Icon 
                path={mdiDelete} 
                size={0.6} 
                color={error} 
                onClick={onClick} 
                style={{
                    cursor: 'pointer'
                }}
            />
        </Container>
    </FileCardStyled>