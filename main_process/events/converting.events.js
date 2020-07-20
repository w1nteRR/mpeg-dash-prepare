const { ipcMain } = require('electron')

const ffmpegService = require('../services/ffmpeg.service')
const scannerService = require('../services/scanner.service')
const mp4boxService = require('../services/mp4box.service')
const fileService = require('../services/file.service')

const { converterFolderLocation } = require('../utils/constants')

ipcMain.on('convertation:start', async (event, fileData) => {
    
    const config = ffmpegService.initConvertingConfig(fileData)
    const output = `${config.outputPath}/${config.outputFile}`

    try {
        await scannerService.preConvertationCheck(fileData.file, config.outputFile)

        await ffmpegService.runFfmpeg(
            fileData.file, 
            config.options, 
            output,
            processing => event.sender.send('convertation:processing', processing),
            () => event.sender.send('convertation:started')
        )

        event.sender.send('convertation:end')


    } catch (err) {
        console.log(err)
    }
})

ipcMain.on('convertation:kill', event => ffmpegService.killFfmpeg(() => event.sender.send('convertation:killed')))

ipcMain.on('repack:start', async (event, fileData) => {
    const { file, filePath } = fileData

    const folder = fileService.getFolder(filePath)
    const fileLocation = `${converterFolderLocation}/${folder}/${file}`
    
    try {

        await mp4boxService.repack(
            fileLocation, 
            percent => event.sender.send('repack:processing', percent),            
            () => event.sender.send('repack:started')
        )

        event.sender.send('repack:end')
        
    } catch (err) {
        console.log(err)
        event.sender.send('repack:error')
    }

})