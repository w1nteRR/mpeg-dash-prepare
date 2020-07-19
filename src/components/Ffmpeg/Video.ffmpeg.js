import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from '../shared/styled/Button'

import { FfmpegCard } from './Ffmpeg.card'

import { startConvertation } from '../../redux/actions/converterActions'

export const VideoFfmpeg = ({ stream }) => {
    
    const dispatch = useDispatch()

    const [settings, setSettings] = useState({
        bitrate: 5000,
        preset: 'superfast',
        scale: '1080'
    })

    const convertationOptions = {
        streamNum: stream.index,
        type: 'getVideo'
    }

    const button = () => 
        <Button  
            h='35px'
            w='35%'
            type='primary'
            text='to .264'  
            onClick={() => dispatch(startConvertation(convertationOptions))}
        />

    return <FfmpegCard 
        title='Video' 
        properties={settings} 
        button={button} 
        stream={stream.index}
    />
}