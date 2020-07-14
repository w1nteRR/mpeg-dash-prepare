const { ipcMain } = require('electron')

const ffmpegService = require('../services/ffmpeg.service')
const scannerService = require('../services/scanner.service')

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

    } catch (err) {
        console.log(err)
    }
})

ipcMain.on('convertation:kill', event => 
    ffmpegService.killFfmpeg(() => event.sender.send('convertation:killed')))