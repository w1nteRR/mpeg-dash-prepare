import React from 'react'
import styled from 'styled-components'
import { Text } from '../typography'

const PickerStyled = styled.div`
    border: 1px solid;
    padding: 10px 50px;
    
    border-radius: 10px;

    cursor: pointer;
`

export const Picker = ({ onClick }) => 
    <PickerStyled onClick={onClick}>
        <Text>File</Text>
    </PickerStyled>
    