import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { openFileDialog } from '../../redux/actions/fileActions'

import { Container } from '../shared/layout'
import { Picker } from '../shared/styled/Picker'
import { ActiveText } from '../shared/typography'

export const FilePicker = () => {
  
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <Container height='300px' direction='column'>
            <Picker onClick={() => dispatch(openFileDialog(() => history.push('/info')))} /> 
                <ActiveText 
                    style={{ 
                        position: 'absolute', 
                        bottom: 20 
                    }}
                >
                    MKV is only available
                </ActiveText>
        </Container>
    )
}