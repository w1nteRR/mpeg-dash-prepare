import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { openFileDialog } from '../../redux/actions/fileActions'

import { Container } from '../shared/layout'
import { Picker } from '../shared/styled/Picker'

export const FilePicker = () => {
  
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <Container height='300px'>
            <Picker onClick={() => dispatch(openFileDialog(() => history.push('/info')))} /> 
        </Container>
    )
}