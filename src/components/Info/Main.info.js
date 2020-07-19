import React from 'react'

import { useConvertation } from '../../hooks/useConvertation'
import { InfoCard } from './Info.card'

export const MainInfo = ({ data }) => {

    const { bitrateToTh, sizeToGb, durationToHours } = useConvertation()

    const mainInfo = {
        bitrate: bitrateToTh(data.bit_rate),
        size: sizeToGb(data.size),
        duration: durationToHours(data.duration),
        streams: data.nb_streams
    }
        
    return <InfoCard title='Main' properties={mainInfo} />
}