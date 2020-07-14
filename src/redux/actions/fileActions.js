import { ipcRenderer } from 'electron'

import { GET_METADATA, SET_SCANNER_STATUS, SET_AVAILABLE_FILES } from '../constants'

export const openFileDialog = callback => dispatch => {
    ipcRenderer.send('file:upload')
    ipcRenderer.on('file:metadata', (event, metadata) => {
        dispatch({
            type: GET_METADATA,
            payload: metadata
        })
        callback()
    })
}

export const runFileScanner = (file, streams) => dispatch => {
    ipcRenderer.send('scanner:start', {
        file,
        streams
    })
    
    ipcRenderer.on('scanner:result', (event, availableFiles) => {
        dispatch({
            type: SET_AVAILABLE_FILES,
            payload: availableFiles
        })
    })
}

export const deleteFile = (file, fileName) => dispatch => {
    ipcRenderer.send('file:delete', {
        file, fileName
    })
    ipcRenderer.on('file:delete-success', () => dispatch(runFileScanner(fileName)))
}

    
