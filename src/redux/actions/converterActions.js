import { ipcRenderer } from 'electron'

import { ACTIVATE_PROCESS, PROGRESS_PERCENT } from '../constants'
import { showAlert } from './appActions'

export const startConvertation = (file, streamNum, lang) => dispatch => {
    ipcRenderer.send('file:getAudio', {
        file,
        streamNum,
        lang
    })

    ipcRenderer.on('convertation:start', () => dispatch(showAlert('Started')))
    
    ipcRenderer.on('convertation:error', (event, err) => dispatch(showAlert(err, 'error')))

    ipcRenderer.on('convertation:processing', (event, progress) => {
        dispatch({
            type: PROGRESS_PERCENT,
            payload: progress
        })
    })
}

    
