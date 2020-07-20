import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../shared/styled/Button'

import { FfmpegCard } from '../Ffmpeg/Ffmpeg.card'

import { startRepacking } from '../../redux/actions/converterActions'

export const GpacVideo = () => {

    const dispatch = useDispatch()
    const video = useSelector(state => state.file.availableFiles.video)

    const properties = {
        file: Object.values(video)
    }

    const button = () => 
        <Button
            h='35px'
            w='35%'
            type='secondary'
            text='to .mp4'
            onClick={() => dispatch(startRepacking(properties.file[0]))}   
        />
    
    return <FfmpegCard title='Video' properties={properties} button={button}  />
}