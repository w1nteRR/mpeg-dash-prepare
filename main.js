const electron = require('electron')
const ffmpeg = require('fluent-ffmpeg')

require('electron-reload')(__dirname)

const { app, BrowserWindow, ipcMain, dialog } = electron

const createWindow = () => {
	const window = new BrowserWindow({ 
		width: 800, 
		height: 600, 
		webPreferences: {
			nodeIntegration: true
		} 
	})

	window.loadURL(`file://${__dirname}/src/index.html`)

	window.on("closed", () => {
		window = null
	})
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit()
	}
})

app.on("activate", () => {
	if (window === null) {
		createWindow()
	}
})

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