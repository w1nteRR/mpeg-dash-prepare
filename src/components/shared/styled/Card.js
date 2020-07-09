import React from 'react'
import styled from 'styled-components'

import { Container } from '../layout'
import { Text } from '../typography'

const CardStyled = styled.div`
    padding: 10px;
    width: ${props => props.w || '35%'};
    box-shadow: 0px 0px 5px rgba(0,0,0,0.27);
    border-radius: 10px;
    margin: 10px;
    background-color: #fff;
`

export const Card = ({ title, children, w }) =>  
    <CardStyled w={w}>
        <Container justify='column'>
            <Container justify='flex-start'>
                <Text size='13px' weight='900'>{title}</Text>
            </Container>
        </Container>
        {children}
    </CardStyled>