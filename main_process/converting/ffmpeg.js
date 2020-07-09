const { ipcMain } = require('electron')
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')
const path = require('path')

require('../utils/proto')

const converterFolderLocation = path.join(__dirname, '../../')

const folderCheck = async (folder, fileCheck, event) => {	

	const pathToFolder = `${converterFolderLocation}converted/${folder}`
	const pathToFile = `${converterFolderLocation}converted/${folder}/${fileCheck}`

	try {

		if(!fs.existsSync(pathToFolder)) await fs.promises.mkdir(pathToFolder)
	
		if(fs.existsSync(pathToFile)) throw new Error('File exists')
		
	} catch (err) {	
		event.sender.send('convertation:error', err.message)
		throw err
	}
}

ipcMain.on('file:getAudio', async (event, audio) => {
	const { file, streamNum, lang } = audio

	const fileName = file.fileNameFromPath()
	
	const outputFile = `${fileName}_${lang}.aac`

	try {

		await folderCheck(fileName, outputFile, event)

		ffmpeg()
			.input(file)
			.outputOptions([
				`-map 0:${streamNum}`, 
				'-ac 2', 
				'-ab 192k', 
				'-vn', 
				'-sn'
			])
			.output(`${converterFolderLocation}converted/${fileName}/${outputFile}`)

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

ipcMain.on('file:getSubtitles', async (event, subtitles) => {
	const { file, streamNum, lang, subType } = subtitles

	const fileName = file.fileNameFromPath()
	
	const outputFile = `${fileName}_${lang}_${subType}.vtt`

	try {

		await folderCheck(fileName, outputFile, event)

		ffmpeg()
			.input(file)
			.outputOptions([
				`-map 0:${streamNum}`,  
				'-vn', 
				'-an'
			])
			.output(`${converterFolderLocation}converted/${fileName}/${outputFile}`)

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
