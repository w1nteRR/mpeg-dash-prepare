import { ipcRenderer } from 'electron'

import { PROGRESS_PERCENT } from '../constants'
import { showAlert } from './appActions'

export const startConvertation = ({ file, streamNum, lang, type, subType }) => dispatch => {
  
    ipcRenderer.send(`file:${type}`, {
        file,
        streamNum,
        lang,
        subType
    })

    ipcRenderer.on('convertation:start', () => dispatch(showAlert('Started', 'info')))
    
    ipcRenderer.on('convertation:error', (event, err) => dispatch(showAlert(err, 'error')))

    ipcRenderer.on('convertation:processing', (event, progress) => {
        dispatch({
            type: PROGRESS_PERCENT,
            payload: progress
        })
    })
}

    
