import React from 'react'
import styled from 'styled-components'
import { ActiveText } from '../typography'

const buttonColors = color => {
    switch (color) {
        case 'primary':
            return '#58A5FF'
        case 'secondary':
            return '#171717'
        case 'danger':
            return '#FF553E'
        default:
            throw new Error()
    }
}

const ButtonStyled = styled.button`
    width: ${props => props.w || '100%'};
    height: ${props => props.h || '50px'};
    background-color: ${props => buttonColors(props.color)};
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

export const Button = ({ type, text, onClick, w, h }) => 
    <ButtonStyled 
        color={type}
        onClick={onClick}
        w={w}
        h={h}
    >
        <ActiveText style={{color: '#fff'}}>
            {text}
        </ActiveText>
    </ButtonStyled>