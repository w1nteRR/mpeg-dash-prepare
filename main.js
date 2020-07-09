const { app, BrowserWindow } = require('electron')

require('electron-reload')(__dirname)

require('./main_process/file_upload/file_dialog')
require('./main_process/converting/ffmpeg')

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
