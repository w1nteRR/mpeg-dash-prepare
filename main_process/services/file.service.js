const { dialog } = require('electron')
const fs = require('fs')
const { converterFolderLocation } = require('../utils/constants')
require('../utils/proto')

async function uploadFile() {
    try {
        const file = await dialog.showOpenDialog({
                properties: ['openFile'],
                filters: [{
                    name: 'Movies',
                    extensions: ['mp4', 'mkv', 'avi']
                }]
            })

        return file

    } catch (err) {
        throw err
    }
}

async function deleteFile(path) {
    try {

        await fs.promises.unlink(path)

    } catch (err) {
        throw err
    }
}

function getFolder(file) {
    return file.fileNameFromPath()
}

function getConvertationPath(file) {
    return `${converterFolderLocation}/${file.fileNameFromPath()}/${file}`
}

module.exports = {
    uploadFile,
    deleteFile,
    getFolder,
    getConvertationPath
}
