import { ipcRenderer } from 'electron'

import { GET_METADATA, SET_AVAILABLE_FILES } from '../constants'

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

export const runFileScanner = () => ( dispatch, getState ) => {
    const { file: { metadata: { format } } } = getState()
    
    ipcRenderer.send('scanner:start', { 
        file: format.filename
    })
    
    ipcRenderer.on('scanner:result', (event, availableFiles) => {
        dispatch({
            type: SET_AVAILABLE_FILES,
            payload: availableFiles
        })
    })
}

export const deleteFile = (file, filePath) => dispatch => {
    ipcRenderer.send('file:delete', {
        file, filePath
    })
    ipcRenderer.on('file:deleted', () => dispatch(runFileScanner()))
}

    
