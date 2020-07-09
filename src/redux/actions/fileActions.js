import { ipcRenderer } from 'electron'

import { GET_METADATA, SET_SCANNER_STATUS } from '../constants'

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

export const runFileScanner = file => dispatch => {
    ipcRenderer.send('file:scanner-run', file)
    
    ipcRenderer.on('file:scanner-result', (event, dir) => {
        dispatch({
            type: SET_SCANNER_STATUS,
            payload: dir
        })
    })
}

export const deleteFile = (file, fileName) => dispatch => {
    ipcRenderer.send('file:delete', {
        file, fileName
    })
    ipcRenderer.on('file:delete-success', () => dispatch(runFileScanner(fileName)))
}

    
