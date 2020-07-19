import React from 'react'

import { InfoCard } from './Info.card'

export const VideoInfo = ({ data }) => {

    const videoInfo = {
        fps: data.avg_frame_rate,
        codec_name: data.codec_name,
        codec_long_name: data.codec_long_name,    
        width: data.width,
        height: data.height
    }
        
    return <InfoCard title='Video' properties={videoInfo} />
}