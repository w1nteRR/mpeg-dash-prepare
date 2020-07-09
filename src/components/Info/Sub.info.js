import React from 'react'
import { useDispatch } from 'react-redux'

import { Card } from '../shared/styled/Card'
import { Container } from '../shared/layout'
import { Text } from '../shared/typography'
import { Button } from '../shared/styled/Button'
import { PropertiesList } from './Properties.list'

import { startConvertation } from '../../redux/actions/converterActions'

export const SubInfo = ({ data, file }) => {
    
    const dispatch = useDispatch()

    const subInfo = [
        {
            title: data.tags.title
        },
        {
            codec_name: data.codec_name
        },
        {
            codec_full: data.codec_long_name
        },
        {
            codec_type: data.codec_type
        },
        {
            language: data.tags.language
        }
    ]

    const convertationOptions = {
        file,
        streamNum: data.index,
        lang: data.tags.language,
        subType: data.tags.title.toLowerCase(),
        type: 'getSubtitles'
    }

    return (
        <Card>
            <Container direction='column'>
                <Container justify='flex-start'>
                    <Text size='13px' weight='900'>Subtitles</Text>
                </Container>
                <PropertiesList properties={subInfo} />
            </Container>
            <Container justify='flex-start' p='10px'>
                <Text size='10px' weight='900'>Cut sub</Text>
            </Container>
            <Button 
                type='primary' 
                text={`Get ${data.tags.title}`}
                onClick={() => dispatch(startConvertation(convertationOptions))} 
            />
        </Card>
    )
}