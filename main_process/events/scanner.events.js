const { ipcMain } = require('electron')

const scannerService = require('../services/scanner.service')

require('../utils/proto')


ipcMain.on('scanner:start', async (event, filePath ) => {
    const { file } = filePath
    
    try {

        const dir = await scannerService.scanExists(file)
        const availableFiles = scannerService.getAvailableFiles(dir)

        event.sender.send('scanner:result', availableFiles)

    } catch (err) {
        console.log(err)
    }
})