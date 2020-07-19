import React from 'react'
import { useDispatch } from 'react-redux'

import { FfmpegCard } from './Ffmpeg.card'

import { Button } from '../shared/styled/Button'

import { startConvertation } from '../../redux/actions/converterActions'

export const SubFfmpeg = ({ stream }) => {

    const dispatch = useDispatch()
    
    const info = {
        language: stream.tags.language,
        name: stream.tags.title
    }

    const convertationOptions = {
        streamNum: stream.index,
        lang: stream.tags.language,
        subType: stream.tags.title,
        type: 'getSubtitles'
    }
        
    const button = () => 
        <Button 
            h='35px'
            w='35%'
            type='primary'
            text='to .vtt'  
            onClick={() => dispatch(startConvertation(convertationOptions))}
        />
    
    return <FfmpegCard 
        title='Subtitles' 
        button={button} 
        properties={info}
        stream={stream.index} 
    />
}