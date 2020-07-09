import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Card } from '../shared/styled/Card'
import { FileCard } from '../shared/styled/File.card'

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
                        key={file}
                        onClick={() => dispatch(deleteFile(file, fileName))} 
                    />
                )
            }
        </Card>
    )
}