const { ipcMain, dialog } = require('electron')
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')
const path = require('path')

require('../utils/proto.js')

const converterFolderLocation = path.join(__dirname, '../../converted')

ipcMain.on('file-dialog-open', event => {
	dialog.showOpenDialog({
		properties: ['openFile'],
		filters: [{
			name: 'Movies',
			extensions: ['mp4', 'mkv', 'avi']
		}]
	}).then(file => {
		ffmpeg.ffprobe(file.filePaths[0], (err, metadata) => {
			if(err) return console.log(err)

			event.sender.send('file:metadata', metadata)
		})
	})
})

ipcMain.on('file:scanner-run', async (event, file) => {
	const dirName = file.fileNameFromPath()

	try {
		const dir = await fs.promises.readdir(`${converterFolderLocation}/${dirName}`)

		event.sender.send('file:scanner-result', dir)

	} catch (err) {
		console.log(err)
	}
	
})

ipcMain.on('file:delete', async (event, fileData) => {
	const { file, fileName } = fileData

	const dirName = fileName.fileNameFromPath()

	try {

		await fs.promises.unlink(`${converterFolderLocation}/${dirName}/${file}`)
		event.sender.send('file:delete-success')

	} catch (err) {
		console.log(err)
	}
})