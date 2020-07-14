const { ipcMain } = require('electron')

const scannerService = require('../services/scanner.service')

require('../utils/proto')

ipcMain.on('scanner:start', async (event, data) => {
    
    const { file, streams } = data
    
    try {

        const dir = await scannerService.scanExists(file)
        const availableFiles = scannerService.runScanner(file, streams, dir).getAvailableFiles()

        event.sender.send('scanner:result', availableFiles)

    } catch (err) {
        console.log(err)
    }
})