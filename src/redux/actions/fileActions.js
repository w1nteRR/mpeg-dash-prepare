import { ipcRenderer } from 'electron'

import { GET_METADATA } from '../constants'

export const openFileDialog = callback => dispatch => {
    ipcRenderer.send('file-dialog-open')
    ipcRenderer.on('file:metadata', (event, metadata) => {
        dispatch({
            type: GET_METADATA,
            payload: metadata
        })
        callback()
    })
}

    
