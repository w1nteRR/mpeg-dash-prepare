import { ipcRenderer } from 'electron'

import { PROGRESS_PERCENT, ADD_CONVERTING_FILE, CONVERTATION_KILL, ACTIVATE_PROCESS } from '../constants'

import { showAlert } from './appActions'
import { runFileScanner } from './fileActions'

export const addConvertingFile = file => ({
    type: ADD_CONVERTING_FILE,
    payload: file
})

export const activateProcess = stream => ({
    type: ACTIVATE_PROCESS,
    payload: stream
})

export const liveProcess = progress => ({
    type: PROGRESS_PERCENT,
    payload: progress
})

export const killConvertation = () => ({
    type: CONVERTATION_KILL
})

export const startConvertation = ({ streamNum, lang, type, subType }) => (dispatch, getState) => {

    const { file: { metadata: { format } } } = getState()

    ipcRenderer.send(`convertation:start`, {
        file: format.filename,
        streamNum,
        lang,
        subType,
        type
    })

    ipcRenderer.on('convertation:started', () => {
        console.log(streamNum)
        dispatch(activateProcess(streamNum))
        dispatch(addConvertingFile({ file: format.filename, streamNum, type }))
        dispatch(showAlert('Started', 'info'))
    })
    
    ipcRenderer.on('convertation:error', (event, err) => dispatch(showAlert(err, 'error')))
    ipcRenderer.on('convertation:processing', (event, progress) => dispatch(liveProcess(progress)))
    ipcRenderer.on('convertation:end', () => dispatch(runFileScanner()))
}

export const killConverting = () => dispatch => {
    ipcRenderer.send('convertation:kill')
    ipcRenderer.on('convertation:killed', () => dispatch(killConvertation()))
}

export const startRepacking = file => (dispatch, useState) => {
    const { file: { metadata: { format } } } = getState()

    ipcRenderer.send('repacking:start')
    ipcRenderer.on('repacking:processing', (event, progress) => dispatch(liveProcess(progress)))
    ipcRenderer.on('repacking:end', () => dispatch(runFileScanner()))
}
    
