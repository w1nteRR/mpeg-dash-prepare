import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { mdiDelete } from '@mdi/js'

import { Card } from '../shared/styled/Card'
import { FileCard } from '../shared/styled/File.card'

import { Container } from '../shared/layout'
import { ActiveText } from '../shared/typography'
import { error } from '../shared/colors'

import { deleteFile } from '../../redux/actions/fileActions'

export const Files = ({ fileName }) => {

    const convertedFiles = useSelector(state => state.file.convertedFiles)
    const dispatch = useDispatch()

    return (
        <Card title='Files' w='150px'>
            {
                convertedFiles.map(file => 
                    <FileCard 
                        name={file}
                        icon={mdiDelete} 
                        key={file}
                        iconColor={error}
                        onClick={() => dispatch(deleteFile(file, fileName))} 
                    />
                )
            }
            {
                !convertedFiles.length
                &&
                <Container m='10px 0'>
                    <ActiveText color={error}>No files or directory</ActiveText>
                </Container>
            }
        </Card>
    )
}