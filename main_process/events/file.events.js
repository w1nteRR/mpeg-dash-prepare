const { ipcMain } = require('electron')

const fileService = require('../services/file.service')
const ffmpegService = require('../services/ffmpeg.service')
const scannerService = require('../services/scanner.service')

const { converterFolderLocation } = require('../utils/constants')

require('../utils/proto')

ipcMain.on('file:upload', async event => {
    try {

        const file = await fileService.uploadFile()
        const metadata = await ffmpegService.getMetadata(file.filePaths[0])
        scannerService.initPatterns(metadata.format.filename, metadata.streams)
        
        event.sender.send('file:metadata', metadata)

    } catch (err) {
        console.log(err)
    }
})

ipcMain.on('file:delete', async (event, fileData) => {
    const { file, filePath } = fileData
    
    const dirName = filePath.fileNameFromPath()
    const path = `${converterFolderLocation}/${dirName}/${file}`

    try {

        await fileService.deleteFile(path)

        event.sender.send('file:deleted')

    } catch (err) {
        console.log(err)
    }
})