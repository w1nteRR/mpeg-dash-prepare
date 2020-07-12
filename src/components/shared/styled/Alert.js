import React from 'react'
import styled from 'styled-components'

import { ActiveText } from '../typography'
import { Container } from '../layout'

import { Loader } from './Loader/Loader'

import { primary, dark, error } from '../colors'

const alertColors = color => {
    switch (color) {
        case 'info':
            return primary
        case 'info-2':
            return dark
        case 'error':
            return error
        default:
            throw new Error()
    }
}

const AlertStyled = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;

    width: 200px;
    height: 75px;
    background-color: ${props => alertColors(props.color)};

    border-radius: 10px;
`

export const Alert = ({ type, text, loader }) => 
    <AlertStyled color={type}>
        <Container height='100%' justify='space-around'>
            {loader && <Loader w='20%' />}
            <ActiveText>
                {text}
            </ActiveText>
        </Container>
    </AlertStyled>