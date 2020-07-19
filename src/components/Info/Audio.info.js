import React from 'react'

import { InfoCard } from './Info.card'

export const AudioInfo = ({ data }) => {
    
    const audioInfo = {
            title: data.tags.title, 
            bitrate: data.bit_rate,
            channel: data.channel_layout,
            codec_name: data.codec_name,
            codec_full: data.codec_long_name,
            sample_rate: data.sample_rate,
            language: data.tags.language
    }
        
    return <InfoCard title='Video' properties={audioInfo} />
}