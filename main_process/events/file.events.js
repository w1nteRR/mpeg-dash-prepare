const { ipcMain } = require('electron')

const fileService = require('../services/file.service')
const ffmpegService = require('../services/ffmpeg.service')

const { converterFolderLocation } = require('../utils/constants')

require('../utils/proto')

ipcMain.on('file:upload', async event => {
    try {

        const file = await fileService.uploadFile()
        const metadata = await ffmpegService.getMetadata(file.filePaths[0])
        
        event.sender.send('file:metadata', metadata)

    } catch (err) {
        console.log(err)
    }
})

ipcMain.on('file:delete', async (event, fileData) => {
    const { file, fileName } = fileData
    
    const dirName = fileName.fileNameFromPath()
    const path = `${converterFolderLocation}/${dirName}/${file}`

    try {

        await fileService.deleteFile(path)

    } catch (err) {
        console.log(err)
    }
})