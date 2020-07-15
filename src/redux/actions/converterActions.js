import { ipcRenderer } from 'electron'

import { PROGRESS_PERCENT, ADD_CONVERTING_FILE, CONVERTATION_KILL, ACTIVATE_PROCESS } from '../constants'

import { showAlert } from './appActions'
import { runFileScanner } from './fileActions'

export const addConvertingFile = file => ({
    type: ADD_CONVERTING_FILE,
    payload: file
})

export const startConvertation = ({ file, streamNum, lang, type, subType }) => dispatch => {
  
    ipcRenderer.send(`convertation:start`, {
        file,
        streamNum,
        lang,
        subType,
        type
    })

    ipcRenderer.on('convertation:started', () => {
        dispatch({
            type: ACTIVATE_PROCESS,
            payload: streamNum  
        })
        dispatch(addConvertingFile({ file, streamNum, type }))
        dispatch(showAlert('Started', 'info'))
    })
    
    ipcRenderer.on('convertation:error', (event, err) => dispatch(showAlert(err, 'error')))

    ipcRenderer.on('convertation:processing', (event, progress) => {
        dispatch({
            type: PROGRESS_PERCENT,
            payload: progress
        })
    })

    ipcRenderer.on('convertation:end', () => dispatch(runFileScanner()))
}

export const killConverting = () => dispatch => {
    ipcRenderer.send('convertation:kill')
    ipcRenderer.on('convertation:killed', () => dispatch({
        type: CONVERTATION_KILL
    }))
}
    
