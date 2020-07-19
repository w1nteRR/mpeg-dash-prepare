import React from 'react'

import { InfoCard } from './Info.card'

export const SubInfo = ({ data }) => {
    
    const subInfo = {
        title: data.tags.title,
        codec_name: data.codec_name,
        codec_full: data.codec_long_name,
        codec_type: data.codec_type,
        language: data.tags.language
    }
        
    return <InfoCard title='Subtitles' properties={subInfo} />
}