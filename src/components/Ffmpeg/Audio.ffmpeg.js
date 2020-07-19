import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from '../shared/styled/Button'

import { FfmpegCard } from './Ffmpeg.card'
import { startConvertation } from '../../redux/actions/converterActions'

export const AudioFfmpeg = ({ stream }) => {

    const dispatch = useDispatch()
    
    const [settings, setSettings] = useState({
        bitrate: '192k'
    })

    const info = {
        language: stream.tags.language,
        name: stream.tags.title
    }

    const convertationOptions = {
        streamNum: stream.index,
        lang: stream.tags.language,
        type: 'getAudio'
    }
        
    const properties = Object.assign(settings, info)

    const button = () => 
        <Button  
            h='35px'
            w='35%'
            type='primary'
            text='to .aac'  
            onClick={() => dispatch(startConvertation(convertationOptions))}
        />

    return <FfmpegCard 
        title='Audio' 
        button={button} 
        properties={properties} 
        stream={stream.index} 
    />
}