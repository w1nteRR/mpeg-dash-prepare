const { ipcMain, dialog } = require('electron')
const ffmpeg = require('fluent-ffmpeg')

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