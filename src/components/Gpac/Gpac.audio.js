import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../shared/styled/Button'

import { FfmpegCard } from '../Ffmpeg/Ffmpeg.card'

import { startRepacking } from '../../redux/actions/converterActions'
import { Text } from '../shared/typography'

export const GpacAudio = () => {

    const dispatch = useDispatch()
    const audio = useSelector(state => state.file.availableFiles.audio)

    const button = file => 
        <Button
            h='35px'
            w='35%'
            type='secondary'
            text='to .mp4'
            onClick={() => dispatch(startRepacking(file))}   
        />
    
    return (
        <>
            {   
                Object.values(audio)
                ?   audio.map(file => <FfmpegCard title='Audio' button={button(file)} properties={{ file }} /> )
                :   <Text>No audio</Text>
            }
        </>
    )
}