const { dialog } = require('electron')
const fs = require('fs')

async function uploadFile () {
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

async function deleteFile (path) {
    try {

        await fs.promises.unlink(path)

    } catch (err) {
        throw err
    }
}

module.exports = {
    uploadFile,
    deleteFile
}
