import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Progress } from '../components/shared/styled/Progress'

import { killConverting } from '../redux/actions/converterActions'

export const useProgress = stream => {
    
    const dispatch = useDispatch()

    const activeStream = useSelector(state => state.converter.activeProcess)
    const progress = useSelector(state => state.converter.progress)

    if(activeStream === stream) return <Progress 
        progress={progress.toFixed(2)} 
        onClick={() => dispatch(killConverting())} 
    />

    return null
}