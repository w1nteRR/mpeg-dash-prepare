import { ipcRenderer } from 'electron'

import { PROGRESS_PERCENT, ADD_CONVERTING_FILE, CONVERTATION_KILL, ACTIVATE_PROCESS } from '../constants'
import { showAlert } from './appActions'

export const addConvertingFile = file => ({
    type: ADD_CONVERTING_FILE,
    payload: file
})

export const startConvertation = ({ file, streamNum, lang, type, subType }) => dispatch => {
  
    ipcRenderer.send(`file:${type}`, {
        file,
        streamNum,
        lang,
        subType
    })

    ipcRenderer.on('convertation:start', () => {
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
}

export const killConverting = () => dispatch => {
    ipcRenderer.send('convertation:stop')
    ipcRenderer.on('convertation:kill', () => dispatch({
        type: CONVERTATION_KILL
    }))
}
    
