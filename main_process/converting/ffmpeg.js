const { ipcMain } = require('electron')
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')
const path = require('path')

ipcMain.on('file:getAudio', async (event, audio) => {
	const { file, streamNum, lang } = audio

	const outputFile = file.replace(/^.*[\\\/]/, '').slice(0, -4)
	const converterFolder = path.join(__dirname, '../../')

	try {

		if(!fs.existsSync(`${converterFolder}converted/${outputFile}`)) {
			await fs.promises.mkdir(`/converted/${outputFile}`)
		}

		if(fs.existsSync(`${converterFolder}converted/${outputFile}/${outputFile}_${lang}.aac`)) {
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
			.output(`${converterFolder}converted/${outputFile}/${outputFile}_${lang}.aac`)

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