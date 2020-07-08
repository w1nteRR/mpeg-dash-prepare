const electron = require('electron')
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')

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

ipcMain.on('file:getAudio', async (event, audio) => {
	const { file, streamNum, lang } = audio

	const outputFile = file.replace(/^.*[\\\/]/, '').slice(0, -4)

	try {

		if(!fs.existsSync(`${__dirname}/converted/${outputFile}`)) {
			await fs.promises.mkdir(`${__dirname}/converted/${outputFile}`)
		}

		if(fs.existsSync(`${__dirname}/converted/${outputFile}/${outputFile}_${lang}.aac`)) {
			return event.sender.send('convertation:error', 'File already exists')
		}

		ffmpeg()
			.input(file)
			.outputOptions([
				`-map 0:${streamNum}`, 
				'-ac 2', 
				'-ab 192k', 
				'-vn', 
				'-sn'
			])
			.output(`${__dirname}/converted/${outputFile}/${outputFile}_${lang}.aac`)

			.on('start', () => event.sender.send('convertation:start'))
			
			.on('error', err => {
				console.log(err.message)
				event.sender.send('convertation:error', err.message)
			})
			
			.on('progress', progress => {
				console.log(progress.percent)
				event.sender.send('convertation:processing', progress.percent)
			})  
			
			.on('end', () => console.log('Finished processing'))
			
			.run() 

	} catch (err) {
		console.log(err)
	}	
})